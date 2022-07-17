// import { ThemeProvider } from "@emotion/react";
// import { cleanup,render,screen,within } from "@testing-library/react";
// import React from "react";
// import { Theme } from "../../../Themes/Theme";
// import AddToLib from "./AddToLib";
// import { MemoryRouter } from "react-router-dom";

// afterEach(cleanup);
// it('renders AddToLib molecue',() =>{
//     render(
//         <ThemeProvider theme={Theme}>
//             <AddToLib children="Add to library"/>
//         </ThemeProvider>,
//     {

//       wrapper: MemoryRouter,
//     }
//     );

//     const LibraryButton = screen.getByText("Add to library");
//     expect(LibraryButton).toBeTruthy();
//     expect(LibraryButton).toHaveClass("MuiTypography-body1")
//     expect(LibraryButton).toBeInTheDocument();
//     expect(LibraryButton).toBeDefined()
// })
import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Theme } from "../../../Themes/Theme";
import AddToLib from "./AddToLib";

afterEach(cleanup);
console.log("any msg");
it("renders Add to library molecule", () => {
  render(
    <ThemeProvider theme={Theme}>
      <AddToLib children="Add To Library" />
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