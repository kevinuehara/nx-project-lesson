import { render, screen } from '@testing-library/react';
import { Header } from './';

describe('<Header />', () => {
  it('should display Header', () => {
    const title = 'NX Example';
    render(<Header title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  it('should display Header with children', () => {
    const children = 'NX Example';
    render(
      <Header>
        <label>{children}</label>
      </Header>
    );
    expect(screen.getByText(children)).toBeTruthy();
  });
});
