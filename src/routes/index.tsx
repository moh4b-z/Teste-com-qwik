import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { getAllCharacters } from '../services/character.service';
import type { Character, CharacterListResponse } from '../types/character';
import { CharacterCard } from '../components/character/CharacterCard';
import './styles.css'; // importando o CSS

export default component$(() => {
  const characters = useSignal<Character[]>([]);
  const page = useSignal(1);
  const totalPages = useSignal(1);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);

  useTask$(async ({ track }) => {
    track(() => page.value);

    loading.value = true;
    error.value = null;

    try {
      const data: CharacterListResponse = await getAllCharacters(page.value);
      characters.value = data.results;
      totalPages.value = data.info.pages;
    } catch (err) {
      error.value = 'Não foi possível carregar os personagens. Tente novamente.';
    } finally {
      loading.value = false;
    }
  });

  return (
    <div class="container">
      <h1 class="title">Rick and Morty - Personagens</h1>

      {/* Loading */}
      {loading.value && (
        <div class="loading-wrapper">
          <div class="spinner"></div>
        </div>
      )}

      {/* Erro */}
      {error.value && <div class="error">{error.value}</div>}

      {/* Lista de personagens */}
      {!loading.value && !error.value && (
        <div class="grid-characters">
          {characters.value.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}

      {/* Controles de paginação */}
      <div class="pagination">
        <button disabled={page.value === 1} onClick$={() => page.value--} class="btn">
          ← Anterior
        </button>

        <span>
          Página {page.value} de {totalPages.value}
        </span>

        <button disabled={page.value === totalPages.value} onClick$={() => page.value++} class="btn">
          Próxima →
        </button>
      </div>
    </div>
  );
});
