import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen} from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import BookReadTime from "./index";

afterEach(cleanup);
console.log("any msg");
it("renders Book Read Time molecule", () => {
  render(
    <ThemeProvider theme={Theme}>
      <BookReadTime />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText("13-minute read");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});