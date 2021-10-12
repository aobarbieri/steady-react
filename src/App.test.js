import { render, screen } from '@testing-library/react';
import App from './App';

test('renders steady header', () => {
  render(<App />);
  const el = screen.getByText(/Steady/i);
  expect(el).toBeInTheDocument();
});
