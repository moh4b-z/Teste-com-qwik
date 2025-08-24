import { Episode, EpisodeListResponse } from "../types/episode";

const API_URL = "https://rickandmortyapi.com/api/episode";

// Lista paginada de episódios
export async function getAllEpisodes(page: number = 1): Promise<EpisodeListResponse> {
  const res = await fetch(`${API_URL}?page=${page}`);
  if (!res.ok) throw new Error("Erro ao buscar episódios");
  return res.json();
}

// Buscar episódio por ID
// export async function getEpisodeById(id: number): Promise<Episode> {
//   const res = await fetch(`${API_URL}/${id}`);
//   if (!res.ok) throw new Error("Erro ao buscar episódio");
//   return res.json();
// }

// Buscar múltiplos episódios por ID
export async function getEpisodesByIds(ids: number[]): Promise<Episode[]> {
  const res = await fetch(`${API_URL}/${ids.join(",")}`);
  if (!res.ok) throw new Error("Erro ao buscar episódios");
  return res.json();
}

// Buscar episódio por nome
export async function searchEpisodesByName(name: string, page: number = 1): Promise<EpisodeListResponse> {
  const res = await fetch(`${API_URL}/?name=${encodeURIComponent(name)}&page=${page}`);
  if (!res.ok) throw new Error("Erro ao buscar episódios pelo nome");
  return res.json();
}

export async function getEpisodeByUrl(url: string): Promise<Episode> {
  console.log("Buscando episódio em:", url);
  const res = await fetch(url);
  if (!res.ok) throw new Error('Erro ao buscar episódio');
  return res.json() as Promise<Episode>;
}


export async function getEpisodeById(id: string | number) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Erro ao buscar episódio');
  return res.json();
}

export async function getEpisodes(page: number = 1): Promise<EpisodeListResponse> {
  const res = await fetch(`${API_URL}/episode?page=${page}`);
  if (!res.ok) {
    throw new Error('Erro ao buscar episódios');
  }
  return res.json();
}