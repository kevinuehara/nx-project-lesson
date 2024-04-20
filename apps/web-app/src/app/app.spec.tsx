import { screen, render } from '@testing-library/react';

import App from './app';

const originalFetch = global.fetch;
const mockedFetch = jest.fn();

describe('<App />', () => {
  afterAll(() => {
    window.fetch = originalFetch;
  });

  beforeEach(() => {
    jest.resetAllMocks();
    window.fetch = mockedFetch;

    mockedFetch.mockResolvedValue({ json: () => [] });
  });

  it('should have a greeting as the title', async () => {
    render(<App />);
    expect(await screen.findByText('Pokémon NX')).toBeTruthy();
  });
});
