// Core Types for YouTube Analytics Platform

// Channel Types
export interface Channel {
  id: string;
  channelId: string;
  channelName: string;
  channelUrl: string;
  description: string;
  subscriberCount: number;
  videoCount: number;
  viewCount: number;
  joinDate: Date;
  country: string;
  language: string;
  category: string;
  customUrl?: string;
  thumbnails: {
    default: string;
    medium: string;
    high: string;
  };
  statistics: {
    totalViews: number;
    averageViews: number;
    engagementRate: number;
    uploadFrequency: number;
    bestPerformingVideo: string;
    worstPerformingVideo: string;
  };
  lastUpdated: Date;
}

// Video Types
export interface Video {
  id: string;
  videoId: string;
  channelId: string;
  title: string;
  description: string;
  publishedAt: Date;
  duration: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  category: string;
  tags: string[];
  thumbnails: {
    default: string;
    medium: string;
    high: string;
    standard: string;
    maxres: string;
  };
  statistics: {
    viewVelocity: number;
    engagementRate: number;
    likeToViewRatio: number;
    commentToViewRatio: number;
    shareToViewRatio: number;
    audienceRetention: number;
    clickThroughRate: number;
  };
  contentAnalysis: {
    titleOptimization: number;
    descriptionOptimization: number;
    tagRelevance: number;
    thumbnailEffectiveness: number;
    publishTimeOptimization: number;
  };
  lastUpdated: Date;
}

// Benchmarking Types
export interface Benchmark {
  id: string;
  targetChannelId: string;
  competitorChannelIds: string[];
  metrics: {
    subscriberGrowth: {
      target: number;
      competitors: number[];
      percentile: number;
    };
    viewVelocity: {
      target: number;
      competitors: number[];
      percentile: number;
    };
    engagementRate: {
      target: number;
      competitors: number[];
      percentile: number;
    };
    uploadFrequency: {
      target: number;
      competitors: number[];
      percentile: number;
    };
  };
  insights: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    recommendations: string[];
  };
  lastUpdated: Date;
}

// MCP Integration Types
export interface MCPTool {
  id: string;
  toolName: string;
  toolType: 'ai-analysis' | 'content-generation' | 'trend-prediction' | 'competitor-research';
  configuration: {
    apiKey: string;
    endpoints: string[];
    rateLimits: {
      requests: number;
      timeWindow: number;
    };
  };
  capabilities: {
    dataAnalysis: boolean;
    contentGeneration: boolean;
    trendPrediction: boolean;
    competitorResearch: boolean;
  };
  status: 'active' | 'inactive' | 'error';
  lastUsed: Date;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  defaultAnalysisType: string;
  preferredMetrics: string[];
  notificationSettings: {
    email: boolean;
    push: boolean;
    weekly: boolean;
  };
}

// Analysis Session Types
export interface AnalysisSession {
  id: string;
  userId: string;
  sessionName: string;
  targetChannelId: string;
  competitorChannelIds: string[];
  analysisType: 'channel' | 'video' | 'benchmark';
  results: any;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Chart Data Types
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
}

export interface TimeSeriesData {
  date: string;
  value: number;
  label?: string;
}

// Form Types
export interface ChannelAnalysisForm {
  channelUrl: string;
  analysisType: 'basic' | 'comprehensive' | 'competitive';
  includeVideos: boolean;
  videoLimit?: number;
}

export interface VideoAnalysisForm {
  videoUrl: string;
  analysisType: 'performance' | 'seo' | 'content';
  includeComments: boolean;
  includeTrends: boolean;
}

export interface BenchmarkForm {
  targetChannel: string;
  competitorChannels: string[];
  metrics: string[];
  timeRange: '7d' | '30d' | '90d' | '1y';
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  statusCode?: number;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  data: any | null;
}

// Filter Types
export interface ChannelFilters {
  category?: string;
  subscriberRange?: {
    min: number;
    max: number;
  };
  country?: string;
  language?: string;
  sortBy?: 'subscribers' | 'views' | 'videos' | 'engagement';
  sortOrder?: 'asc' | 'desc';
}

export interface VideoFilters {
  category?: string;
  publishedAfter?: Date;
  publishedBefore?: Date;
  viewRange?: {
    min: number;
    max: number;
  };
  sortBy?: 'views' | 'likes' | 'comments' | 'published';
  sortOrder?: 'asc' | 'desc';
}

// Notification Types
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    url: string;
  };
} 