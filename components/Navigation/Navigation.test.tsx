import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('renders logo, navigation links, and controls', () => {
    render(<Navigation />);

    // Check if logo text exists
    expect(screen.getByText('Hotcoin')).toBeInTheDocument();

    // Check if navigation links exist
    expect(screen.getByText('买币')).toBeInTheDocument();
    expect(screen.getByText('行情')).toBeInTheDocument();
    expect(screen.getByText('交易')).toBeInTheDocument();
    expect(screen.getByText('合约')).toBeInTheDocument();
    expect(screen.getByText('理财')).toBeInTheDocument();
    expect(screen.getByText('更多')).toBeInTheDocument();
    expect(screen.getByText('Zest')).toBeInTheDocument();

    // Check if controls exist
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.getByText('登录')).toBeInTheDocument();
    expect(screen.getByText('注册')).toBeInTheDocument();
    expect(screen.getByLabelText('Download')).toBeInTheDocument();
    expect(screen.getByLabelText('Toggle color scheme')).toBeInTheDocument();
    expect(screen.getByLabelText('Change language')).toBeInTheDocument();
  });
});
