import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme }from "../../../Themes/Theme";
import { getBooks } from "../../../DataBase/DataBase";
import TabsandCardState from "./index";

afterEach(cleanup);

const handleFinish = (_arg: any) => {};

it("renders Reading Card State Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <TabsandCardState
        books={getBooks()}
        onFinishedClick={handleFinish}
        type="reading"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const tabState = screen.getAllByText("");



  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});



it("renders finished Card State Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <TabsandCardState
        books={getBooks()}
        onFinishedClick={handleFinish}
        type="finished"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const tabState = screen.getAllByText("");

  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});



it("renders Library Card State Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <TabsandCardState
        books={getBooks()}
        onFinishedClick={handleFinish}
        type="myLibrary"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const tabState = screen.getAllByText("");

  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});

it("renders Explore Card State Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <TabsandCardState
        books={getBooks()}
        onFinishedClick={handleFinish}
        type="explore"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  )
  const tabState = screen.getAllByText("");

  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});