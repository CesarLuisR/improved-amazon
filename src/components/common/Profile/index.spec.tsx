import { render, screen } from "@testing-library/react";
import Profile from "./index";

it("should test if the component is rendering", () => {
  render(<Profile />);
  expect(screen.getByTestId("avatar")).toBeInTheDocument();
})