import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the App component without crashing', () => {
  render(<App />);
});
