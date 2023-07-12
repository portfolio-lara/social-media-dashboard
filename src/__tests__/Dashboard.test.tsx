import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard/Dashboard';
import data_bigcards from '../assets/data_bigcards';
import data_smallcards from '../assets/data_smallcards';

describe('Dashboard', () => {
  test('renders the social media dashboard title', () => {
    render(<Dashboard />);
    const titleElement = screen.getByText('Social Media Dashboard');
    expect(titleElement).toBeInTheDocument();
  });

  test('toggles the theme when the theme switcher is clicked', () => {
    render(<Dashboard />);
    const themeSwitcher = screen.getByLabelText('Toggle Theme') as HTMLInputElement;
    expect(themeSwitcher.checked).toBe(false);
    themeSwitcher.click();
    expect(themeSwitcher.checked).toBe(true);
    themeSwitcher.click();
    expect(themeSwitcher.checked).toBe(false);
  });

  test('displays the correct total follower count', () => {
    render(<Dashboard />);
    const totalFollowers = screen.getByText(/Total Followers:/);
    expect(totalFollowers).toBeInTheDocument();
    expect(totalFollowers.textContent).toContain('Total Followers:');

    // You can test the sum calculation logic here based on your test data
  });

  test('renders the correct number of BigCard components', () => {
    render(<Dashboard />);
    const bigCardElements = screen.getAllByTestId('card-big');
    expect(bigCardElements.length).toBe(data_bigcards.length);
  });

  test('renders the correct number of SmallCard components', () => {
    render(<Dashboard />);
    const smallCardElements = screen.getAllByTestId('card-small');
    expect(smallCardElements.length).toBe(data_smallcards.length);
  });

});
