import type { Meta, StoryObj } from '@storybook/react';

import { PokemonCard } from '.';

const meta: Meta<typeof PokemonCard> = {
  component: PokemonCard,
};

export default meta;
type Story = StoryObj<typeof PokemonCard>;

export const PokemonCardDefault: Story = {
  name: 'Pokemon Card',
  args: {
    pokemon: {
      id: 2,
      order: 2,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      name: 'Charmander',
    },
  },
};
