import React from "react"
import {ComponentStory} from "@storybook/react"
import SearchBar from "./Search";
import { ThemeProvider } from "@emotion/react"
import {Theme} from "../../../Themes/Theme";

export default{
    title:"Molecules/Search",
    component:SearchBar
}


const Template: ComponentStory<typeof SearchBar> = (args) => (
    <ThemeProvider theme={Theme}>
      <SearchBar/>
    </ThemeProvider>
  );

export const search = Template.bind({});
