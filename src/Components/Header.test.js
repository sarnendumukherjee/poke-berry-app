import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should contain a Header element with correct text", () => {
    const { getByText } = render(<Header />);
    const headerText = getByText("Poke Berries");
    expect(headerText).toBeInTheDocument();
  });
});
