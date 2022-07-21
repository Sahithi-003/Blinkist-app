import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen ,fireEvent } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import Search from "./SearchBar";
import axios from "axios"
import '@testing-library/jest-dom/extend-expect'

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
  fireEvent.change(SearchText, {
    target: { value: "new content" }
  });
  const input = screen.getByPlaceholderText(
    "Search by title or author").nodeValue;
 expect(input).toBe(null)
  expect(SearchText).toBeTruthy();
  expect(SearchText).toHaveClass("MuiInputBase-inputAdornedStart");
  expect(SearchText).toBeInTheDocument();
  expect(SearchText).toBeDefined();
});

test("Testing fetching", () => {
  render(<Search />);
  const element = screen.getByTestId("fetch");
  expect(element).toBeTruthy();
const setSearch = jest.fn((value) => {})
});


// const mockedAxios = axios as jest.Mocked<typeof axios>;
// jest.mock("axios");
// console.log(typeof mockedAxios)
// describe("book delete",()=>{
//   it("renders books",async()=>{




    // console.log(typeof mockedAxios)
      // mockedAxios.get.mockResolvedValue([
      //     {
      //         "id": 3,
      //         "author": "Trey Gowdy",
      //         "country": "Achaemenid Empire",
      //         "imageLink": "3.svg",
      //         "language": "Hebrew",
      //         "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      //         "pages": 176,
      //         "title": "Doesn’t Hurt to Ask",
      //         "year": -600,
      //         "readTime": "13",
      //         "readersCount": "1.9k",
      //         "status": "finished",
      //         "category": "featured"
      //       },
      // ]);
      // let id=3

//   })
// })

