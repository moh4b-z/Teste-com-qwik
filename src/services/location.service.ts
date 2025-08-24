import { Location, LocationListResponse } from "../types/location";

const API_URL = "https://rickandmortyapi.com/api/location";

// Lista paginada de localizações
export async function getAllLocations(page: number = 1): Promise<LocationListResponse> {
  const res = await fetch(`${API_URL}?page=${page}`);
  if (!res.ok) throw new Error("Erro ao buscar localizações");
  return res.json();
}

// Buscar localização por ID
export async function getLocationById(id: number): Promise<Location> {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar localização");
  return res.json();
}

// Buscar múltiplas localizações por ID
export async function getLocationsByIds(ids: number[]): Promise<Location[]> {
  const res = await fetch(`${API_URL}/${ids.join(",")}`);
  if (!res.ok) throw new Error("Erro ao buscar localizações");
  return res.json();
}

// Buscar localização por nome
export async function searchLocationsByName(name: string, page: number = 1): Promise<LocationListResponse> {
  const res = await fetch(`${API_URL}/?name=${encodeURIComponent(name)}&page=${page}`);
  if (!res.ok) throw new Error("Erro ao buscar localizações pelo nome");
  return res.json();
}
