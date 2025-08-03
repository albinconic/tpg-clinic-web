export type SiteConfig = {
    baseUrl: string;
}

export type OpenGraphType =
  | "website"
  | "article"
  | "book"
  | "profile"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other";

export type MetaDataHelper = {
  title: string;
  description: string;
  separator: string;
  type: OpenGraphType;
};