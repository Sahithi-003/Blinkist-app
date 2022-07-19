import { ThemeProvider } from "@emotion/react";
import {  render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {Theme} from "../../../Themes/Theme";
import { getBooks } from "../../../DataBase/DataBase";
import CardStateTrending from "./CardStateTrending";
import TabsandCardState from "../../Molecules/TabsAndCards";
type Book = {
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

it("renders Book Card author Organism3", () => {
    render(
      <ThemeProvider theme={Theme}>
        <CardStateTrending type={"1"} onFinishedClick={function (_arg: Book): void {
                throw new Error("Function not implemented.");
            } } books={getBooks()} />
      </ThemeProvider>,
      {
        wrapper: MemoryRouter,
      }
    );
   
  });

  test("Testing cardState", () => {
    render(<CardStateTrending type={""} onFinishedClick={function (_arg: Book): void {
        throw new Error("Function not implemented.");
    } } books={[]} />);
    const element = screen.getByTestId("Filtered Books");
    expect(element).toBeTruthy();
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

  const handleFinish = (_arg: any) => {};