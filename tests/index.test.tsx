import { screen, render } from "@testing-library/react";
import AppContainer from "../pages/index";

it("should render the component", () => {
  render(<AppContainer />);
  const text: HTMLElement = screen.getByText(/App Container/i);
  expect(text).toBeInTheDocument();
});
