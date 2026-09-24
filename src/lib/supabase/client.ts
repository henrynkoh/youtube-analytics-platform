import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient<Database> | null = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    })
  : null;

function requireClient(): SupabaseClient<Database> {
  if (!supabase) {
    throw new Error('Missing Supabase environment variables');
  }
  return supabase;
}

export const getSession = async () => {
  const { data: { session }, error } = await requireClient().auth.getSession();
  if (error) {
    console.error('Error getting session:', error);
    return null;
  }
  return session;
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await requireClient().auth.getUser();
  if (error) {
    console.error('Error getting user:', error);
    return null;
  }
  return user;
};

export const signOut = async () => {
  const { error } = await requireClient().auth.signOut();
  if (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const onAuthStateChange = (callback: (event: string, session: unknown) => void) => {
  return requireClient().auth.onAuthStateChange(callback);
};

export const subscribeToChannel = (channel: string, callback: (payload: unknown) => void) => {
  return requireClient()
    .channel(channel)
    .on('postgres_changes', { event: '*', schema: 'public', table: '*' }, callback)
    .subscribe();
};
