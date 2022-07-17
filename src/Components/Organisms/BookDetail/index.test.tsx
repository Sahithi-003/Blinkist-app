import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import { getBooks } from "../../../DataBase/DataBase";
import BookDetailComponent from ".";

afterEach(cleanup);

const book = getBooks()[0];
it("renders Book Card author Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <BookDetailComponent
         book={getBooks()[0]} onFinishedClick={getBooks}    
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const Librarybutton = screen.getByText(book.author);

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-subtitle2");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});