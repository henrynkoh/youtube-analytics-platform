// YouTube API Client for fetching channel and video data

export interface YouTubeChannelData {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
    country?: string;
    defaultLanguage?: string;
    customUrl?: string;
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    };
  };
}

export interface YouTubeVideoData {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
      standard: { url: string; width: number; height: number };
      maxres: { url: string; width: number; height: number };
    };
    tags?: string[];
    categoryId: string;
    defaultLanguage?: string;
    defaultAudioLanguage?: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
  contentDetails: {
    duration: string;
    dimension: {
      width: string;
      height: string;
    };
    definition: string;
    caption: string;
    licensedContent: boolean;
    projection: string;
  };
}

export class YouTubeAPI {
  private apiKey: string;
  private baseUrl = 'https://www.googleapis.com/youtube/v3';
  private rateLimiter: Map<string, number[]> = new Map();

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async checkRateLimit(endpoint: string): Promise<void> {
    const now = Date.now();
    const windowMs = 24 * 60 * 60 * 1000; // 24 hours
    const maxRequests = 10000; // YouTube API daily quota

    if (!this.rateLimiter.has(endpoint)) {
      this.rateLimiter.set(endpoint, []);
    }

    const requests = this.rateLimiter.get(endpoint)!;
    const recentRequests = requests.filter(time => now - time < windowMs);
    
    if (recentRequests.length >= maxRequests) {
      throw new Error(`YouTube API daily quota exceeded for ${endpoint}`);
    }

    recentRequests.push(now);
    this.rateLimiter.set(endpoint, recentRequests);
  }

  private async makeRequest<T>(endpoint: string, params: Record<string, string>): Promise<T> {
    await this.checkRateLimit(endpoint);
    
    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.append('key', this.apiKey);
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(`YouTube API error: ${response.status} - ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  }

  async getChannelInfo(channelId: string): Promise<YouTubeChannelData> {
    const data = await this.makeRequest<{ items: YouTubeChannelData[] }>('/channels', {
      part: 'snippet,statistics,contentDetails',
      id: channelId,
    });

    if (!data.items || data.items.length === 0) {
      throw new Error(`Channel not found: ${channelId}`);
    }

    return data.items[0];
  }

  async getChannelVideos(channelId: string, maxResults = 50): Promise<YouTubeVideoData[]> {
    // First get the uploads playlist ID
    const channelData = await this.getChannelInfo(channelId);
    const uploadsPlaylistId = channelData.contentDetails.relatedPlaylists.uploads;

    // Get videos from the uploads playlist
    const playlistData = await this.makeRequest<{ items: any[] }>('/playlistItems', {
      part: 'snippet',
      playlistId: uploadsPlaylistId,
      maxResults: maxResults.toString(),
    });

    if (!playlistData.items || playlistData.items.length === 0) {
      return [];
    }

    // Get detailed video information
    const videoIds = playlistData.items.map(item => item.snippet.resourceId.videoId);
    const videosData = await this.getVideosInfo(videoIds);

    return videosData;
  }

  async getVideosInfo(videoIds: string[]): Promise<YouTubeVideoData[]> {
    if (videoIds.length === 0) return [];

    // YouTube API allows max 50 video IDs per request
    const chunks = this.chunkArray(videoIds, 50);
    const allVideos: YouTubeVideoData[] = [];

    for (const chunk of chunks) {
      const data = await this.makeRequest<{ items: YouTubeVideoData[] }>('/videos', {
        part: 'snippet,statistics,contentDetails',
        id: chunk.join(','),
      });

      if (data.items) {
        allVideos.push(...data.items);
      }
    }

    return allVideos;
  }

  async searchChannels(query: string, maxResults = 10): Promise<YouTubeChannelData[]> {
    const searchData = await this.makeRequest<{ items: any[] }>('/search', {
      part: 'snippet',
      q: query,
      type: 'channel',
      maxResults: maxResults.toString(),
    });

    if (!searchData.items || searchData.items.length === 0) {
      return [];
    }

    // Get detailed channel information
    const channelIds = searchData.items.map(item => item.snippet.channelId);
    const channelsData = await this.getChannelsInfo(channelIds);

    return channelsData;
  }

  async getChannelsInfo(channelIds: string[]): Promise<YouTubeChannelData[]> {
    if (channelIds.length === 0) return [];

    const chunks = this.chunkArray(channelIds, 50);
    const allChannels: YouTubeChannelData[] = [];

    for (const chunk of chunks) {
      const data = await this.makeRequest<{ items: YouTubeChannelData[] }>('/channels', {
        part: 'snippet,statistics,contentDetails',
        id: chunk.join(','),
      });

      if (data.items) {
        allChannels.push(...data.items);
      }
    }

    return allChannels;
  }

  async getVideoComments(videoId: string, maxResults = 100): Promise<any[]> {
    const data = await this.makeRequest<{ items: any[] }>('/commentThreads', {
      part: 'snippet',
      videoId: videoId,
      maxResults: maxResults.toString(),
      order: 'relevance',
    });

    return data.items || [];
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  // Utility function to extract channel ID from various URL formats
  static extractChannelId(url: string): string | null {
    const patterns = [
      /youtube\.com\/channel\/([a-zA-Z0-9_-]+)/,
      /youtube\.com\/c\/([a-zA-Z0-9_-]+)/,
      /youtube\.com\/@([a-zA-Z0-9_-]+)/,
      /youtube\.com\/user\/([a-zA-Z0-9_-]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return null;
  }

  // Utility function to extract video ID from URL
  static extractVideoId(url: string): string | null {
    const patterns = [
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
      /youtu\.be\/([a-zA-Z0-9_-]+)/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return null;
  }
}

// Create a singleton instance
let youtubeAPI: YouTubeAPI | null = null;

export const getYouTubeAPI = (): YouTubeAPI => {
  if (!youtubeAPI) {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      throw new Error('YouTube API key not found in environment variables');
    }
    youtubeAPI = new YouTubeAPI(apiKey);
  }
  return youtubeAPI;
}; 