import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import { getBooks } from "../../../DataBase/DataBase";
import EnterpeneushipPage from ".";

afterEach(cleanup);

console.log("any msg");

it("renders Entrepeneuship page", () => {
  render(
    <ThemeProvider theme={Theme}>
      <MemoryRouter
        initialEntries={[{ pathname: "/explore", state: getBooks() }]}
      >
        <EnterpeneushipPage />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getAllByText("My Library");

  expect(tabState).toBeTruthy();
  // expect(tabState).toBeInTheDocument();
  expect(tabState).toBeDefined();
});