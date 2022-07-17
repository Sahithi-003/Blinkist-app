import React from "react"
import {ComponentStory} from "@storybook/react"
import AddToLib from "./AddToLib"
import { ThemeProvider } from "@emotion/react"
import {Theme} from "../../../Themes/Theme";

export default{
    title:"Molecules/Buttons/AddToLib",
    component:AddToLib
}


const Template: ComponentStory<typeof AddToLib> = (args) => (
    <ThemeProvider theme={Theme}>
      <AddToLib {...args} />
    </ThemeProvider>
  );

export const AddToLibStory = Template.bind({});
AddToLibStory.args={
    children:"Add to library",
};

