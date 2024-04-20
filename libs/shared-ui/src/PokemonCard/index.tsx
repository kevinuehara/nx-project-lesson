import { IPokemon } from './types';
import * as S from './styles';

interface PokemonCardProps {
  pokemon: IPokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <S.Card data-testId="pokemon-card">
      <label>{pokemon.name}</label>
      <label>{`#${pokemon.order}`}</label>
      <S.PokemonImage
        src={pokemon.sprite}
        alt="Pokemon Image"
        aria-label="Pokemon Image"
      />
    </S.Card>
  );
};
