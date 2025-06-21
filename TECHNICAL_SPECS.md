# YouTube Analytics Platform - Technical Specifications

## 1. System Architecture

### 1.1 High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   External      │
│   (Next.js)     │◄──►│   (Supabase)    │◄──►│   Services      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
│                      │                      │
├─ React Components    ├─ PostgreSQL DB       ├─ YouTube API
├─ TypeScript          ├─ Edge Functions      ├─ MCP Servers
├─ Tailwind CSS       ├─ Real-time           ├─ Web Scraping
├─ State Management   ├─ Authentication      ├─ Analytics APIs
└─ Data Visualization └─ Storage             └─ AI Services
```

### 1.2 Data Flow Architecture
```
User Request → Next.js App → Supabase Edge Function → YouTube API
                ↓
            React Query → Supabase Database
                ↓
            Real-time Updates → UI Components
```

## 2. Frontend Technical Stack

### 2.1 Core Framework
- **Next.js 14** with App Router
- **React 18** with concurrent features
- **TypeScript 5.0+** for type safety
- **Tailwind CSS 3.0+** for styling

### 2.2 State Management
```typescript
// Zustand Store Configuration
interface AppState {
  // Authentication
  user: User | null;
  isAuthenticated: boolean;
  
  // Channel Analysis
  channels: Channel[];
  selectedChannel: Channel | null;
  channelLoading: boolean;
  
  // Video Analysis
  videos: Video[];
  selectedVideo: Video | null;
  videoLoading: boolean;
  
  // Benchmarking
  benchmarks: Benchmark[];
  activeBenchmark: Benchmark | null;
  
  // MCP Integrations
  mcpTools: MCPTool[];
  activeIntegrations: string[];
  
  // Actions
  setUser: (user: User | null) => void;
  setChannels: (channels: Channel[]) => void;
  setSelectedChannel: (channel: Channel | null) => void;
  // ... other actions
}
```

### 2.3 Data Fetching Strategy
```typescript
// React Query Configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

// Custom hooks for data fetching
export const useChannelAnalysis = (channelId: string) => {
  return useQuery({
    queryKey: ['channel', channelId],
    queryFn: () => fetchChannelAnalysis(channelId),
    enabled: !!channelId,
    refetchInterval: 300000, // 5 minutes
  });
};
```

### 2.4 Component Architecture
```typescript
// Component Hierarchy
App
├── Layout
│   ├── Header
│   ├── Sidebar
│   └── Main Content
├── Pages
│   ├── Dashboard
│   ├── Channel Analysis
│   ├── Video Analysis
│   ├── Benchmarking
│   └── Education
└── Shared Components
    ├── UI Components
    ├── Charts
    ├── Forms
    └── Modals
```

## 3. Backend Technical Stack

### 3.1 Supabase Configuration
```typescript
// Supabase Client Configuration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
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
});
```

### 3.2 Database Schema Design
```sql
-- Enhanced Database Schema with Performance Optimizations

-- Channels Table with Partitioning
CREATE TABLE channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id VARCHAR(255) UNIQUE NOT NULL,
  channel_name VARCHAR(255) NOT NULL,
  channel_url TEXT NOT NULL,
  description TEXT,
  subscriber_count INTEGER,
  video_count INTEGER,
  view_count BIGINT,
  join_date TIMESTAMP,
  country VARCHAR(100),
  language VARCHAR(50),
  category VARCHAR(100),
  custom_url VARCHAR(255),
  thumbnails JSONB,
  statistics JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
) PARTITION BY RANGE (created_at);

-- Create partitions for better performance
CREATE TABLE channels_2024_01 PARTITION OF channels
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

-- Videos Table with Indexing
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id VARCHAR(255) UNIQUE NOT NULL,
  channel_id VARCHAR(255) REFERENCES channels(channel_id) ON DELETE CASCADE,
  title VARCHAR(500) NOT NULL,
  description TEXT,
  published_at TIMESTAMP,
  duration VARCHAR(50),
  view_count INTEGER,
  like_count INTEGER,
  comment_count INTEGER,
  share_count INTEGER,
  category VARCHAR(100),
  tags TEXT[],
  thumbnails JSONB,
  statistics JSONB,
  content_analysis JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Analysis Sessions with User Tracking
CREATE TABLE analysis_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_name VARCHAR(255),
  target_channel_id VARCHAR(255),
  competitor_channel_ids TEXT[],
  analysis_type VARCHAR(100),
  results JSONB,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Performance Indexes
CREATE INDEX CONCURRENTLY idx_channels_channel_id ON channels(channel_id);
CREATE INDEX CONCURRENTLY idx_channels_category ON channels(category);
CREATE INDEX CONCURRENTLY idx_channels_created_at ON channels(created_at);
CREATE INDEX CONCURRENTLY idx_videos_video_id ON videos(video_id);
CREATE INDEX CONCURRENTLY idx_videos_channel_id ON videos(channel_id);
CREATE INDEX CONCURRENTLY idx_videos_published_at ON videos(published_at);
CREATE INDEX CONCURRENTLY idx_videos_category ON videos(category);
CREATE INDEX CONCURRENTLY idx_analysis_sessions_user_id ON analysis_sessions(user_id);
CREATE INDEX CONCURRENTLY idx_analysis_sessions_status ON analysis_sessions(status);

-- Full-text search indexes
CREATE INDEX CONCURRENTLY idx_channels_search ON channels USING gin(to_tsvector('english', channel_name || ' ' || COALESCE(description, '')));
CREATE INDEX CONCURRENTLY idx_videos_search ON videos USING gin(to_tsvector('english', title || ' ' || COALESCE(description, '')));
```

### 3.3 Edge Functions Architecture
```typescript
// Edge Function Structure
// supabase/functions/analyze-channel/index.ts

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { YouTubeAPI } from '../_shared/youtube-api.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { channelId } = await req.json();
    
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Fetch channel data from YouTube API
    const youtubeAPI = new YouTubeAPI(Deno.env.get('YOUTUBE_API_KEY') ?? '');
    const channelData = await youtubeAPI.getChannelInfo(channelId);
    
    // Store in database
    const { data, error } = await supabaseClient
      .from('channels')
      .upsert(channelData, { onConflict: 'channel_id' })
      .select()
      .single();

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
```

## 4. YouTube API Integration

### 4.1 API Client Implementation
```typescript
// lib/youtube/api.ts
export class YouTubeAPI {
  private apiKey: string;
  private baseUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getChannelInfo(channelId: string): Promise<ChannelData> {
    const response = await fetch(
      `${this.baseUrl}/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${this.apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`);
    }

    const data = await response.json();
    return this.transformChannelData(data.items[0]);
  }

  async getChannelVideos(channelId: string, maxResults = 50): Promise<VideoData[]> {
    // First get upload playlist ID
    const channelResponse = await fetch(
      `${this.baseUrl}/channels?part=contentDetails&id=${channelId}&key=${this.apiKey}`
    );
    
    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Get videos from uploads playlist
    const videosResponse = await fetch(
      `${this.baseUrl}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${this.apiKey}`
    );

    const videosData = await videosResponse.json();
    return videosData.items.map(this.transformVideoData);
  }

  async getVideoDetails(videoIds: string[]): Promise<VideoData[]> {
    const response = await fetch(
      `${this.baseUrl}/videos?part=snippet,statistics,contentDetails&id=${videoIds.join(',')}&key=${this.apiKey}`
    );

    const data = await response.json();
    return data.items.map(this.transformVideoData);
  }

  private transformChannelData(item: any): ChannelData {
    return {
      channelId: item.id,
      channelName: item.snippet.title,
      description: item.snippet.description,
      subscriberCount: parseInt(item.statistics.subscriberCount),
      videoCount: parseInt(item.statistics.videoCount),
      viewCount: parseInt(item.statistics.viewCount),
      joinDate: new Date(item.snippet.publishedAt),
      country: item.snippet.country,
      language: item.snippet.defaultLanguage,
      category: item.snippet.categoryId,
      thumbnails: item.snippet.thumbnails,
      statistics: {
        totalViews: parseInt(item.statistics.viewCount),
        averageViews: 0, // Calculated separately
        engagementRate: 0, // Calculated separately
        uploadFrequency: 0, // Calculated separately
      }
    };
  }

  private transformVideoData(item: any): VideoData {
    return {
      videoId: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: new Date(item.snippet.publishedAt),
      duration: item.contentDetails?.duration,
      viewCount: parseInt(item.statistics?.viewCount || '0'),
      likeCount: parseInt(item.statistics?.likeCount || '0'),
      commentCount: parseInt(item.statistics?.commentCount || '0'),
      category: item.snippet.categoryId,
      tags: item.snippet.tags || [],
      thumbnails: item.snippet.thumbnails,
    };
  }
}
```

### 4.2 Rate Limiting and Caching
```typescript
// lib/youtube/rate-limiter.ts
export class YouTubeRateLimiter {
  private requests: number[] = [];
  private maxRequests = 10000; // YouTube API daily quota
  private windowMs = 24 * 60 * 60 * 1000; // 24 hours

  async checkRateLimit(): Promise<boolean> {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.windowMs);
    
    if (this.requests.length >= this.maxRequests) {
      throw new Error('YouTube API daily quota exceeded');
    }
    
    this.requests.push(now);
    return true;
  }

  async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Caching implementation
export class YouTubeCache {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private ttl = 5 * 60 * 1000; // 5 minutes

  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }

  set(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }
}
```

## 5. MCP Integration Architecture

### 5.1 MCP Client Implementation
```typescript
// lib/mcp/client.ts
export class MCPClient {
  private serverUrl: string;
  private tools: Map<string, MCPTool> = new Map();

  constructor(serverUrl: string) {
    this.serverUrl = serverUrl;
  }

  async connect(): Promise<void> {
    const response = await fetch(`${this.serverUrl}/initialize`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        protocolVersion: '2024-11-05',
        capabilities: {
          tools: {}
        },
        clientInfo: {
          name: 'youtube-analytics-platform',
          version: '1.0.0'
        }
      })
    });

    const data = await response.json();
    this.tools = new Map(data.tools.map((tool: MCPTool) => [tool.name, tool]));
  }

  async callTool(toolName: string, arguments: any): Promise<any> {
    const tool = this.tools.get(toolName);
    if (!tool) {
      throw new Error(`Tool ${toolName} not found`);
    }

    const response = await fetch(`${this.serverUrl}/tools/call`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: toolName,
        arguments
      })
    });

    return response.json();
  }

  async analyzeContent(content: string, analysisType: 'sentiment' | 'topics' | 'trends'): Promise<any> {
    const toolName = `content_${analysisType}_analyzer`;
    return this.callTool(toolName, { content });
  }

  async generateInsights(data: any): Promise<string[]> {
    return this.callTool('insight_generator', { data });
  }

  async predictTrends(historicalData: any[]): Promise<any[]> {
    return this.callTool('trend_predictor', { historicalData });
  }
}
```

### 5.2 MCP Tool Registry
```typescript
// lib/mcp/tools.ts
export interface MCPTool {
  name: string;
  description: string;
  inputSchema: any;
  outputSchema: any;
  capabilities: string[];
}

export const MCP_TOOLS: MCPTool[] = [
  {
    name: 'content_sentiment_analyzer',
    description: 'Analyzes sentiment of video titles and descriptions',
    inputSchema: {
      type: 'object',
      properties: {
        content: { type: 'string' }
      },
      required: ['content']
    },
    outputSchema: {
      type: 'object',
      properties: {
        sentiment: { type: 'string', enum: ['positive', 'negative', 'neutral'] },
        confidence: { type: 'number' },
        keywords: { type: 'array', items: { type: 'string' } }
      }
    },
    capabilities: ['sentiment-analysis', 'keyword-extraction']
  },
  {
    name: 'trend_predictor',
    description: 'Predicts future trends based on historical data',
    inputSchema: {
      type: 'object',
      properties: {
        historicalData: { type: 'array' },
        predictionPeriod: { type: 'number' }
      },
      required: ['historicalData']
    },
    outputSchema: {
      type: 'object',
      properties: {
        predictions: { type: 'array' },
        confidence: { type: 'number' },
        factors: { type: 'array', items: { type: 'string' } }
      }
    },
    capabilities: ['trend-prediction', 'data-analysis']
  }
];
```

## 6. Performance Optimization

### 6.1 Frontend Optimization
```typescript
// Next.js Configuration
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },
  images: {
    domains: ['i.ytimg.com', 'yt3.ggpht.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
```

### 6.2 Database Optimization
```sql
-- Database optimization queries
-- Analyze table statistics
ANALYZE channels;
ANALYZE videos;
ANALYZE analysis_sessions;

-- Create materialized views for complex queries
CREATE MATERIALIZED VIEW channel_performance_summary AS
SELECT 
  c.channel_id,
  c.channel_name,
  c.subscriber_count,
  c.video_count,
  c.view_count,
  AVG(v.view_count) as avg_video_views,
  AVG(v.like_count::float / NULLIF(v.view_count, 0)) as avg_engagement_rate,
  COUNT(v.id) as analyzed_videos,
  MAX(v.published_at) as latest_video_date
FROM channels c
LEFT JOIN videos v ON c.channel_id = v.channel_id
GROUP BY c.id, c.channel_id, c.channel_name, c.subscriber_count, c.video_count, c.view_count;

-- Create indexes for common query patterns
CREATE INDEX CONCURRENTLY idx_videos_engagement ON videos ((like_count::float / NULLIF(view_count, 0)));
CREATE INDEX CONCURRENTLY idx_videos_published_recent ON videos (published_at) WHERE published_at > NOW() - INTERVAL '30 days';
CREATE INDEX CONCURRENTLY idx_channels_subscriber_range ON channels (subscriber_count) WHERE subscriber_count > 10000;
```

### 6.3 Caching Strategy
```typescript
// lib/cache/redis.ts
import Redis from 'ioredis';

export class CacheManager {
  private redis: Redis;
  private defaultTTL = 300; // 5 minutes

  constructor() {
    this.redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
  }

  async get<T>(key: string): Promise<T | null> {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  async set(key: string, value: any, ttl = this.defaultTTL): Promise<void> {
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }

  async invalidate(pattern: string): Promise<void> {
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
  }

  async getOrSet<T>(key: string, fn: () => Promise<T>, ttl = this.defaultTTL): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached) return cached;

    const fresh = await fn();
    await this.set(key, fresh, ttl);
    return fresh;
  }
}

// Usage in API routes
const cache = new CacheManager();

export async function getChannelAnalysis(channelId: string) {
  return cache.getOrSet(
    `channel:${channelId}:analysis`,
    () => youtubeAPI.getChannelInfo(channelId),
    600 // 10 minutes for channel data
  );
}
```

## 7. Security Implementation

### 7.1 Authentication & Authorization
```typescript
// lib/auth/middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protect API routes
  if (req.nextUrl.pathname.startsWith('/api/') && !req.nextUrl.pathname.startsWith('/api/auth/')) {
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  // Protect dashboard routes
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};
```

### 7.2 Rate Limiting
```typescript
// lib/rate-limit.ts
import { LRUCache } from 'lru-cache';

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export default function rateLimit(options: Options) {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60000,
  });

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        tokenCache.set(token, tokenCount);

        if (isRateLimited) {
          reject(new Error('Rate limit exceeded'));
        } else {
          resolve();
        }
      }),
  };
}

// Usage in API routes
const rateLimiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per interval
});

export async function POST(req: Request) {
  try {
    await rateLimiter.check(10, req.headers.get('x-forwarded-for') || 'anonymous');
    // Process request
  } catch {
    return new Response('Rate limit exceeded', { status: 429 });
  }
}
```

## 8. Error Handling & Monitoring

### 8.1 Error Handling Strategy
```typescript
// lib/error-handler.ts
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleError(error: any): AppError {
  if (error instanceof AppError) {
    return error;
  }

  // YouTube API errors
  if (error.message?.includes('YouTube API')) {
    return new AppError('YouTube API service unavailable', 503, 'YOUTUBE_API_ERROR');
  }

  // Database errors
  if (error.code?.startsWith('PGSQL')) {
    return new AppError('Database operation failed', 500, 'DATABASE_ERROR');
  }

  // Network errors
  if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
    return new AppError('Service temporarily unavailable', 503, 'NETWORK_ERROR');
  }

  // Default error
  return new AppError('An unexpected error occurred', 500, 'INTERNAL_ERROR');
}

// Global error handler
export function setupErrorHandling() {
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  });

  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
  });
}
```

### 8.2 Monitoring & Logging
```typescript
// lib/monitoring/logger.ts
export class Logger {
  private logLevel: 'debug' | 'info' | 'warn' | 'error';

  constructor(logLevel: 'debug' | 'info' | 'warn' | 'error' = 'info') {
    this.logLevel = logLevel;
  }

  private shouldLog(level: string): boolean {
    const levels = { debug: 0, info: 1, warn: 2, error: 3 };
    return levels[level] >= levels[this.logLevel];
  }

  debug(message: string, data?: any) {
    if (this.shouldLog('debug')) {
      console.debug(`[DEBUG] ${message}`, data);
    }
  }

  info(message: string, data?: any) {
    if (this.shouldLog('info')) {
      console.info(`[INFO] ${message}`, data);
    }
  }

  warn(message: string, data?: any) {
    if (this.shouldLog('warn')) {
      console.warn(`[WARN] ${message}`, data);
    }
  }

  error(message: string, error?: any) {
    if (this.shouldLog('error')) {
      console.error(`[ERROR] ${message}`, error);
    }
  }
}

// Performance monitoring
export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();

  startTimer(operation: string): () => void {
    const start = performance.now();
    return () => {
      const duration = performance.now() - start;
      if (!this.metrics.has(operation)) {
        this.metrics.set(operation, []);
      }
      this.metrics.get(operation)!.push(duration);
    };
  }

  getAverageTime(operation: string): number {
    const times = this.metrics.get(operation) || [];
    return times.length > 0 ? times.reduce((a, b) => a + b, 0) / times.length : 0;
  }

  getMetrics(): Record<string, number> {
    const result: Record<string, number> = {};
    for (const [operation] of this.metrics) {
      result[operation] = this.getAverageTime(operation);
    }
    return result;
  }
}
```

This technical specification provides a comprehensive foundation for building a robust, scalable, and maintainable YouTube analytics platform with modern best practices and technologies. 