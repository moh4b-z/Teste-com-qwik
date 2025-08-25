import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import type { Character } from '../../types/character';
import type { Episode } from '../../types/episode';
import { getEpisodeByUrl } from '../../services/episode.service';
import { useNavigate } from '@builder.io/qwik-city';
import './styles.css';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = component$<CharacterCardProps>(({ character }) => {
  const episodes = useSignal<Episode[]>([]);
  const nav = useNavigate();

  // Buscar episódios em que o personagem aparece
  useTask$(async () => {
    const data = await Promise.all(
      character.episode.slice(0, 10).map((url) => getEpisodeByUrl(url))
    );
    episodes.value = data;
  });

  return (
    <div class="card">
      {/* Imagem */}
      <img 
        src={character.image} 
        alt={character.name}
        width={300}
        height={300}
      />

      {/* Info do personagem */}
      <div class="card-info">
        <h2>{character.name}</h2>
        <p>{character.status} - {character.species}</p>
      </div>

      {/* Mini Scroll de Episódios */}
      <div class="card-episodes">
        <div class="card-episodes-list">
          {episodes.value.map((ep) => (
            <button key={ep.id} onClick$={() => nav(`/episodes/${ep.id}`)}>
              {ep.name}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
});
