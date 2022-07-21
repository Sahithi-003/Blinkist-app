import { ThemeProvider } from "@emotion/react";
import { fireEvent,cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Tabs from "./BlinkistTabs";
import { getBooks } from "../../../DataBase/DataBase";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme"
// afterEach(cleanup);

const handleFinished = () => {console.log("any msg")}

// test("Testing login button", () => {
//   render(<Tabs value={""} onFinishedClick={handleFinished } bookObject={[]} />);
//   // eslint-disable-next-line testing-library/await-async-query
//   const element = screen.findByText("books")
//   expect(element).toBeInTheDocument()
//   }
//   )


// it("renders Finished Tab Organism", () => {
//   render(
//     <ThemeProvider theme={Theme}>
//       <Tabs
//         bookObject={getBooks()}
//         onFinishedClick={handleFinished}
//         value="2"
//       />
//     </ThemeProvider>,
//     {
//       wrapper: MemoryRouter,
//     }
//   );
//   const tab = screen.getByText("Finished");

//   expect(tab).toBeTruthy();
//   expect(tab).toHaveClass("MuiTab-textColorPrimary");
//   expect(tab).toBeInTheDocument();
//   expect(tab).toBeDefined();
// });
test("Tabs Test",async () => {
  render(<Tabs value={"1"} onFinishedClick={handleFinished} bookObject={[]}/>);
  const tabsElement = screen.getByLabelText(/Currently Reading/i);
  expect(tabsElement).toBeInTheDocument();
  const tab = screen.getByText("Currently Reading");

  expect(tab).toBeTruthy();
  // expect(tab).toHaveClass("MuiTab-textColorPrimary");
  expect(tab).toBeInTheDocument();
  expect(tab).toBeDefined();
})

it("Checking click in Tabs Test",async () => {
  render(<Tabs value={""} onFinishedClick={handleFinished } bookObject={[]} />);
  const buttonClickElement = screen.getByTestId("finished-tab");
  
  fireEvent.click(buttonClickElement, {target : {value : "2"}});

  // eslint-disable-next-line testing-library/no-node-access
  const changeElement = screen.getByTestId("tab-panel2")?.firstChild?.firstChild?.firstChild;
  

  // eslint-disable-next-line testing-library/no-node-access
  // const tryElement = screen.getByText(/No Books to Show/i).firstChild;

  // expect(changeElement).toBe(tryElement);
})

it("renders Finished Tab Organism", () => {
  render(
    <ThemeProvider theme={Theme} >
      <Tabs
        bookObject={getBooks()}
        onFinishedClick={handleFinished}
        value="2"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const tab = screen.getByText("Finished");

  expect(tab).toBeTruthy();
  // expect(tab).toHaveClass("MuiTab-textColorPrimary");
  expect(tab).toBeInTheDocument();
  expect(tab).toBeDefined();
});