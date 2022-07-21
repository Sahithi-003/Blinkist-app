import React from "react";
import { ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import {Theme} from "../../../Themes/Theme";
import { getBooks } from "../../../../DataBase/DataBase";
import { MemoryRouter } from "react-router-dom";
import TabsandCardState from "."

const CardState = {
  title: "Molecules/CardState",
  component: TabsandCardState,
} 

const Template: ComponentStory<typeof TabsandCardState> = (args) => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
      <TabsandCardState {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadingCards = Template.bind({});
ReadingCards.args = {
  books: getBooks(),
  type: "reading",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const FinishedCards = Template.bind({});
FinishedCards.args = {
  books: getBooks(),
  type: "finished",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const TrendingCards = Template.bind({});
TrendingCards.args = {
  books: getBooks(),
  type: "myLibrary",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const JustAddCards = Template.bind({});
JustAddCards.args = {
  books: getBooks(),
  type: "myLibrary",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const FeaturedCards = Template.bind({});
FeaturedCards.args = {
  books: getBooks(),
  type: "myLibrary",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const LibraryCards = Template.bind({});
LibraryCards.args = {
  books: getBooks(),
  type: "myLibrary",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export default CardState;

const handleClick = (_arg: any) => {};