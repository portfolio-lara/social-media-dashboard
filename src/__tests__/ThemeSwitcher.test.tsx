// ThemeSwitcher.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeSwitcher from '../Dashboard/ThemeSwitcher';

describe('ThemeSwitcher', () => {
  test('renders the toggle theme text', () => {
    render(<ThemeSwitcher theme="light-theme" onThemeChange={() => {}} />);
    const toggleThemeText = screen.getByText('Toggle Theme');
    expect(toggleThemeText).toBeInTheDocument();
  });

  test('checks the checkbox when the theme is "dark-theme"', () => {
    render(<ThemeSwitcher theme="dark-theme" onThemeChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

});
