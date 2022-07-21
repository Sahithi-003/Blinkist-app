import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen,fireEvent } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme }from "../../../Themes/Theme";
import { getBooks } from "../../../DataBase/DataBase";
import Toggles from "./index";

afterEach(cleanup);

const handleFinish = (_arg: any) => {};

it("renders Reading Card State Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <Toggles
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
});
test("Testing Banner Title", () => {
    render(<Toggles />);
    // eslint-disable-next-line testing-library/await-async-query
    const element = screen.findAllByLabelText("Synopsis");
    expect(element).toBeTruthy();
    // eslint-disable-next-line testing-library/await-async-query
    const tab = screen.findAllByLabelText("Who is it for");
    expect(tab).toBeTruthy();
  });

// test("Testing onClick", () => {
//     render(<Toggles />);
//     // eslint-disable-next-line testing-library/prefer-screen-queries
//     const contentInput = getByTestId("content-input");
//     fireEvent.change(contentInput, {
//     target: { value: "new content" }
//     });
// })