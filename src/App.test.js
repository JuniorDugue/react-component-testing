import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
});

// AAA - Arrange, Act, Assert
test("contains Lions and Tigers scoreboards", () => {
  // ARRANGE
  const container = render(<App />);
  console.log(container);
  // ACT - GETTING THE NODE BY TEXT
  container.getByText(/lions/i);
  container.getByText(/tigers/i);
  // 
});

