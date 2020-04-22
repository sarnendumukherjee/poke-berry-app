import React from "react";
import Footer from "./Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("should contain a footer element with Sarnendu Mukherjee in it", () => {
    const { queryByTestId, getByText } = render(<Footer />);
    const footer = queryByTestId("footer");
    const githubLink = getByText("Sarnendu Mukherjee");
    expect(footer).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });
});
