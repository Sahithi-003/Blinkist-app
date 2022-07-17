import React from "react"
import {ComponentStory} from "@storybook/react"
import Readnow from "./Readnow";
import { ThemeProvider } from "@emotion/react"
import {Theme} from "../../../Themes/Theme";

export default{
    title:"Molecules/Buttons/Readnow",
    component:Readnow
}


const Template: ComponentStory<typeof Readnow> = (args) => (
    <ThemeProvider theme={Theme}>
      <Readnow {...args} />
    </ThemeProvider>
  );

export const ReadNow = Template.bind({});
ReadNow.args={
    children:"Read now",
};
