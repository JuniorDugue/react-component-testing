import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
});

test("contains Lions and Tigers scoreboards", () => {
  const container = render(<App />);
  console.log(container);
  container.getByText("Lions");
});
