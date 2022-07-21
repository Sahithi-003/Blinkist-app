import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import { getBooks } from "../../../DataBase/DataBase";
import MyLibPage from ".";
import Tabs from '../../Molecules/Tabs/BlinkistTabs'
type data = {
  id:number,
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
  category:string;
};

afterEach(cleanup);

console.log("any msg");

it("renders Entrepeneuship page", () => {
  render(
    <ThemeProvider theme={Theme}>
      <MemoryRouter
        initialEntries={[{ pathname: "/", state: getBooks() }]}
      >
        <MyLibPage />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getAllByText("My Library");

  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
  
});

test("Testing login button", () => {
  render(
    <ThemeProvider theme={Theme}>
      <MemoryRouter
        initialEntries={[{ pathname: "/", state: getBooks() }]}
      >
        <MyLibPage />
      </MemoryRouter>
    </ThemeProvider>
    );
  // eslint-disable-next-line testing-library/await-async-query
  const element = screen.findByLabelText("Finished");
  expect(element).toBeTruthy();
});
