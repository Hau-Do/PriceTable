import { render, screen } from '@testing-library/react';
import App from './App';

test('App should render Price Table', () => {
  render(<App />);
  const linkElement = screen.getByText(/Price Table/i);
  expect(linkElement).toBeInTheDocument();
});
