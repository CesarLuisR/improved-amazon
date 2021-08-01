import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./index";

describe("SearchBar tests", () => {
  it("should test if search inputs are working", () => {
    render(<SearchBar categories={["a", "b", "c"]} />);

    const searchInput = screen.getByPlaceholderText(/search/ig);
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput);

    // PASS
  });
});
