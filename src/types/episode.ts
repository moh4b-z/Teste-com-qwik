import { ApiListResponse } from "./api";

export type EpisodeListResponse = ApiListResponse<Episode>;

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string; // ex: "S01E01"
  characters: string[]; // lista de URLs de personagens
  url: string;
  created: string;
}
