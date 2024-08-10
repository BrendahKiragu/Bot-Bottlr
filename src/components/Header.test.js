import { render } from "@testing-library/react";
import Header from "./Header";

it('renders the header component with nested elements', () => {
  const { getByText } = render(<Header />);
  
  const headerElement = getByText(/Bot Battler/i);
  const paragraphElement = getByText(/Welcome to the Battle of the Bots/i);

  expect(headerElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
