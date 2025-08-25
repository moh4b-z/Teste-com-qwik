import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { getEpisodeById } from '../../../services/episode.service';
import { getCharacterByUrl } from '../../../services/character.service';
import type { Character } from '../../../types/character';
import type { Episode } from '../../../types/episode';
import './episode.css';

export default component$(() => {
  const loc = useLocation();

  // Carregar o episódio
  const episodeResource = useResource$<Episode>(async () => {
    const id = loc.params.id;
    return getEpisodeById(id);
  });

  // Carregar personagens do episódio
  const charactersResource = useResource$<Character[]>(async ({ track }) => {
    const episode = track(() => episodeResource);
    if (!episode) return [];
    const data = await getEpisodeById(loc.params.id);

    // Buscar todos os personagens do episódio
    const characters = await Promise.all(
      data.characters.map((url: string) => getCharacterByUrl(url))
    );
    return characters;
  });

  return (
    <div class="episode-page">
      <Resource
        value={episodeResource}
        onPending={() => <p>Carregando episódio...</p>}
        onRejected={(error) => <p>Erro: {error.message}</p>}
        onResolved={(episode) => (
          <div>
            <h1 class="episode-title">
              {episode.name} ({episode.episode})
            </h1>
            <p class="episode-info">
              Data de lançamento: {episode.air_date}
            </p>

            <h2 class="episode-subtitle">Personagens</h2>
            <Resource
              value={charactersResource}
              onPending={() => <p>Carregando personagens...</p>}
              onRejected={(error) => <p>Erro: {error.message}</p>}
              onResolved={(characters) => (
                <div class="characters-grid">
                  {characters.map((char) => (
                    <div key={char.id} class="character-card">
                      <img 
                        src={char.image} 
                        alt={char.name}
                        width={300}
                        height={300}
                      />
                      <div class="character-card-info">
                        <h3>{char.name}</h3>
                        <p>{char.species}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        )}
      />
    </div>
  );
});
