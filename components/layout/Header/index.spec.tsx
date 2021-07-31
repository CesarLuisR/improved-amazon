import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

describe("Here are the header tests", () => {
  it("should render the component", () => {
    const categories = ["a", "b", "c"];
    render(<Header categories={categories} />);
  });
});
