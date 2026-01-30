// hooks/useYouTubeStreams.ts
import { useState, useEffect, useCallback } from "react";
import axios, { type AxiosError } from "axios";
import type {
  StreamsState,
  YouTubeSearchResponse,
  YouTubeVideosResponse,
  StreamInfo,
  YouTubeVideo,
  YouTubeSearchItem,
} from "../types/youtube";

const useYouTubeStreams = (channelId: string | null = null) => {
  const [streams, setStreams] = useState<StreamsState>({
    live: [],
    past: [],
    upcoming: [],
    loading: false,
    error: null,
  });

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const categorizeStreams = (
    videos: YouTubeVideo[]
  ): Pick<StreamsState, "live" | "past" | "upcoming"> => {
    const categorized = {
      live: [] as StreamInfo[],
      past: [] as StreamInfo[],
      upcoming: [] as StreamInfo[],
    };

    videos.forEach((video: YouTubeVideo) => {
      const streamInfo: StreamInfo = {
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url,
        channelTitle: video.snippet.channelTitle,
        publishedAt: video.snippet.publishedAt,
        viewCount: video.statistics?.viewCount || "0",
        liveStreamingDetails: video.liveStreamingDetails,
      };

      switch (video.snippet.liveBroadcastContent) {
        case "live":
          categorized.live.push(streamInfo);
          break;
        case "upcoming":
          categorized.upcoming.push(streamInfo);
          break;
        case "none":
          categorized.past.push(streamInfo);
          break;
        default:
          // Handle unexpected values
          break;
      }
    });

    return categorized;
  };

  const fetchStreams = useCallback(async (): Promise<void> => {
    if (!API_KEY) {
      setStreams((prev) => ({ ...prev, error: "YouTube API key not found" }));
      return;
    }

    setStreams((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Search for live, completed, and upcoming streams
      const searchParams = new URLSearchParams({
        part: "snippet",
        type: "video",
        eventType: "live",
        maxResults: "20",
        key: API_KEY,
        order: "date",
      });

      if (channelId) {
        searchParams.append("channelId", channelId);
      }

      const searchResponse = await axios.get<YouTubeSearchResponse>(
        `https://www.googleapis.com/youtube/v3/search?${searchParams}`
      );

      const videos: YouTubeSearchItem[] = searchResponse.data.items;

      if (videos.length === 0) {
        setStreams((prev) => ({ ...prev, loading: false }));
        return;
      }

      // Get detailed information for each video
      const videoIds = videos.map((video) => video.id.videoId).join(",");

      const detailsResponse = await axios.get<YouTubeVideosResponse>(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,statistics&id=${videoIds}&key=${API_KEY}`
      );

      const videosWithDetails: YouTubeVideo[] = detailsResponse.data.items;

      // Categorize streams
      const categorized = categorizeStreams(videosWithDetails);

      setStreams({
        ...categorized,
        loading: false,
        error: null,
      });
    } catch (error) {
      const axiosError = error as AxiosError<{ error: { message: string } }>;
      setStreams((prev) => ({
        ...prev,
        loading: false,
        error:
          axiosError.response?.data?.error?.message ||
          "Failed to fetch streams",
      }));
    }
  }, [API_KEY, channelId]);

  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  return { ...streams, refetch: fetchStreams };
};

export default useYouTubeStreams;
