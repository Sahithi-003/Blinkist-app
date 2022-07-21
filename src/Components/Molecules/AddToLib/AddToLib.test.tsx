import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import AddToLib from "./AddToLib";


afterEach(cleanup);
console.log("any msg");
it("renders Add to library molecule", () => {
  render(
    <ThemeProvider theme={Theme}>
      <AddToLib children="Add To Library" onFinishedClick={function (_arg: any): void {
              throw new Error("Function not implemented.");
          } } />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText("Add To Library");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});