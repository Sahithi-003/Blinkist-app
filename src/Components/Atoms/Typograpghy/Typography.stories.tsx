import React from "react"
import { ComponentStory } from "@storybook/react"
import TypographyComponent from "./Typography";
import { ThemeProvider } from "@emotion/react"
import {Theme} from "../../../Themes/Theme";


const TypographyStory ={
    title:"Atoms/TypographyComponent",
    component:TypographyComponent
}


const Template: ComponentStory<typeof TypographyComponent> = (args) => (
    <ThemeProvider theme={Theme}>
      <TypographyComponent {...args} />
    </ThemeProvider>
  );



export const Header = Template.bind({});
Header.args={
    children:"Header",
    variant:"header"
};

export const Title = Template.bind({});
Title.args={
    children:"Title",
    variant:"title"
};

export const SubTitle = Template.bind({});
SubTitle.args={
    children:"SubTitle",
    variant:"subtitle"
};

export const Body = Template.bind({});
Body.args = {
  children:
    "Lorem ipsum dolor sit amet,  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  variant: "body1",
};
export const Caption = Template.bind({});
Caption.args = {
  children:
    "Lorem.",
  variant: "caption",
};

export default TypographyStory;