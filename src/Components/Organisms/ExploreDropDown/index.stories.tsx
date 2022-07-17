import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import {Theme} from "../../../Themes/Theme";
import { getBooks } from "../../../../DataBase/DataBase";
import { MemoryRouter } from "react-router-dom";
import ExploreDropDown from ".";

const ExploreDropDownStory = {
  title: "Organisms/ExploreDropDownStory",
  component: ExploreDropDown,
} as ComponentMeta<typeof ExploreDropDown>;

const Template: ComponentStory<typeof ExploreDropDown> = (args) => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
      <ExploreDropDown  />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});
ReadCard.args = {
  bookObject: getBooks(),
};

export default ExploreDropDownStory;