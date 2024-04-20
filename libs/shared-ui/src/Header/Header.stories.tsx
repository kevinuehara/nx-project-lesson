import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderDefaultWithTitle: Story = {
  name: 'Header With Title',
  args: {
    title: 'Welcome',
  },
};

export const HeaderDefaultWithChildren: Story = {
  name: 'Header With Title',
  args: {
    title: 'Welcome',
    children: <label style={{ marginLeft: '5px' }}>Children</label>,
  },
};
