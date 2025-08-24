import { ApiListResponse } from "./api";

export type LocationListResponse = ApiListResponse<Location>;


export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[]; // lista de URLs de personagens
  url: string;
  created: string;
}
