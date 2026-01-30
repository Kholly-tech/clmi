export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
}

export interface YouTubeSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  liveBroadcastContent: "none" | "live" | "upcoming";
}

export interface LiveStreamingDetails {
  actualStartTime?: string;
  actualEndTime?: string;
  scheduledStartTime?: string;
  scheduledEndTime?: string;
  concurrentViewers?: string;
  activeLiveChatId?: string;
}

export interface YouTubeStatistics {
  viewCount: string;
  likeCount?: string;
  favoriteCount?: string;
  commentCount?: string;
}

export interface YouTubeVideo {
  id: string;
  snippet: YouTubeSnippet;
  liveStreamingDetails?: LiveStreamingDetails;
  statistics?: YouTubeStatistics;
}

export interface YouTubeSearchItem {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: YouTubeSnippet;
}

export interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface YouTubeVideosResponse {
  items: YouTubeVideo[];
}

export interface StreamInfo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  viewCount: string;
  liveStreamingDetails?: LiveStreamingDetails;
}

export interface StreamsState {
  live: StreamInfo[];
  past: StreamInfo[];
  upcoming: StreamInfo[];
  loading: boolean;
  error: string | null;
}
