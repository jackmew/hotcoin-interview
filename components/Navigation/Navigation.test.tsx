import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('renders logo and theme toggle', () => {
    render(<Navigation />);

    // Check if logo text exists
    expect(screen.getByText('Hotcoin')).toBeInTheDocument();

    // Check if theme toggle button exists
    expect(screen.getByLabelText('Toggle color scheme')).toBeInTheDocument();
  });
});
