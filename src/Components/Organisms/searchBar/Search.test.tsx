import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import Search from "./SearchBar";


afterEach(cleanup);
console.log("any msg");
it("renders Text Field Search molecule", () => {
  render(
    <ThemeProvider theme={Theme}>
      <Search />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const SearchText = screen.getByPlaceholderText(
    "Search by title or author"
  );

  expect(SearchText).toBeTruthy();
  expect(SearchText).toHaveClass("MuiInputBase-inputAdornedStart");
  expect(SearchText).toBeInTheDocument();
  expect(SearchText).toBeDefined();
});

test("Testing fetching", () => {
  render(<Search />);
  const element = screen.getByTestId("fetch");
  expect(element).toBeTruthy();
});