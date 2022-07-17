import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import BookCard from "./BookCard";
import { getBooks } from "../../../DataBase/DataBase";

// jest.mock("@auth0/auth0-react", () => ({
//   Auth0Provider: () => {},
//   withAuthenticationRequired: (component:any) => component,

//   useAuth0: () => {
//     return {
//       isAuthenticated: true,
//       user: { sub: "foobar" },
//       mockFn: true,
//       logout: jest.fn(),
//     };
//   },
// }));


afterEach(cleanup);
const book = getBooks()[0];

it("renders Book Card author Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
        <BookCard
          book={book}
          bookObject={getBooks()}
          onFinishedClick={handleFinish}
        />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  var Librarybutton = screen.getByText(book.author);
    Librarybutton = screen.getByText("13-minute read");
  
  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

const handleFinish = (arg: any) => {};