import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App', () => {
  test('renders the Dashboard component', () => {
    render(<App />);
    const dashboardElement = screen.getByRole('main');
    expect(dashboardElement).toBeInTheDocument();
  });
});
