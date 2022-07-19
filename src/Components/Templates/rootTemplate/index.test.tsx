import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import RootTemplate from "./index" ;

afterEach(cleanup);
console.log("any msg");
const DummyView = () => <div>dummy view</div>;
it("renders Entrepeneuship Template", () => {
  render(
    <ThemeProvider theme={Theme}>
      <MemoryRouter>
        <RootTemplate
                header={<DummyView />} 
                body={<DummyView />} 
                footer={<DummyView />}        
                />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getAllByText("dummy view");

  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});