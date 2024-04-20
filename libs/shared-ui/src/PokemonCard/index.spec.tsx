import { render, screen } from '@testing-library/react';
import { PokemonCard } from './';

const mockPokemon = {
  id: 2,
  order: 2,
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  name: 'Charmander',
};

describe('<PokemonCard />', () => {
  it('should display Pokemon Card', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByText(mockPokemon.name)).toBeTruthy();
    expect(screen.getByText(`#${mockPokemon.id}`)).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Pokemon Image' })).toBeTruthy();
  });
});
