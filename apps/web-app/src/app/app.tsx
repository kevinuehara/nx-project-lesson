import { Header, PokemonCard } from '@lesson/shared-ui';
import { useEffect, useState } from 'react';
import { IPokemon } from './types';
import * as S from './styles';

export function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const getPokemons = async () => {
    const response = await fetch('http://localhost:8080/pokemon');
    const jsonResponse = await response.json();
    const pokemons: IPokemon[] = jsonResponse.body;
    setPokemons(pokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <Header title="Pokémon NX" />
      <S.Container>
        {pokemons &&
          pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} />)}
      </S.Container>
    </>
  );
}

export default App;
