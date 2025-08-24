import { Character, CharacterListResponse } from "../types/character";

const API_URL = "https://rickandmortyapi.com/api/character";

// Lista paginada de personagens
export async function getAllCharacters(page: number = 1): Promise<CharacterListResponse> {
  const res = await fetch(`${API_URL}?page=${page}`);
  if (!res.ok) throw new Error("Erro ao buscar personagens");
  return res.json();
}

// Buscar personagem por ID
export async function getCharacterById(id: number): Promise<Character> {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar personagem");
  return res.json();
}

// Buscar múltiplos personagens por ID
export async function getCharactersByIds(ids: number[]): Promise<Character[]> {
  const res = await fetch(`${API_URL}/${ids.join(",")}`);
  if (!res.ok) throw new Error("Erro ao buscar personagens");
  return res.json();
}

// Buscar personagem por nome
export async function searchCharactersByName(name: string, page: number = 1): Promise<CharacterListResponse> {
  const res = await fetch(`${API_URL}/?name=${encodeURIComponent(name)}&page=${page}`);
  if (!res.ok) throw new Error("Erro ao buscar personagens pelo nome");
  return res.json();
}

export async function getCharacterByUrl(url: string): Promise<Character> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Erro ao buscar personagem pela URL');
  }
  return res.json();
}