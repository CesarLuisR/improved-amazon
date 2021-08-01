import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Here are the header tests", () => {
  it("should render the component", () => {
    const categories = ["a", "b", "c"];
    render(<Header categories={categories} />);

    const logo: HTMLElement = screen.getByRole("img");
    expect(logo).toBeInTheDocument();

    const searchBar: HTMLElement = screen.getByText(/search/ig);
    expect(searchBar).toBeInTheDocument();

    // PASS
  });
});