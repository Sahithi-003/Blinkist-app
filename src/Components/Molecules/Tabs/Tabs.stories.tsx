import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import {Theme} from "../../../Themes/Theme";
import { getBooks } from "../../../../DataBase/DataBase";
import { MemoryRouter } from "react-router-dom";
import BlinkistTabs from "./BlinkistTabs";

const Tabs = {
  title: "Organisms/Tabs",
  component: BlinkistTabs,
} as ComponentMeta<typeof BlinkistTabs>;

const Template: ComponentStory<typeof BlinkistTabs> = (args) => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
      <BlinkistTabs {...args} />
    </MemoryRouter>
  </ThemeProvider>
);


export const CurrentlyReadingTab = Template.bind({});
CurrentlyReadingTab.args = {
 
  bookObject: getBooks(),
  value:"1",
  onFinishedClick: () => handleClick(getBooks()[0]),
};




export default Tabs;

const handleClick = (_arg: any) => {};
