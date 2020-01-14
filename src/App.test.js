import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("It should render the submit button", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
