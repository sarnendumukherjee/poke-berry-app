import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  const { getByTestId } = render(<App />);
  const appContainter = getByTestId("App");
  expect(appContainter).toBeInTheDocument();
});
