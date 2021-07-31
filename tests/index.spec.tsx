import { screen, render, fireEvent } from "@testing-library/react";
import AppContainer from "../pages/index";

describe("Here are the tests of the index component", () => {
  it("should test if the logo is working", () => {
    render(<AppContainer />);
    const logo: HTMLElement = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });

  it("should test if the form is working", () => {
    render(<AppContainer />);

    const form: HTMLElement = screen.getByTestId("form");
    expect(form).toBeInTheDocument();

    fireEvent.submit(form);
    expect(localStorage.getItem("auth")).toBeTruthy();
  });
});
