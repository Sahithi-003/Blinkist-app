import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import {Theme} from "../../../Themes/Theme";
import ReadAndFinished from "./ReadAndFinished";

const ReadandFinishedButton = {
  title: "Atoms/ReadandFinishedButton",
  component: ReadAndFinished,
} as ComponentMeta<typeof ReadAndFinished>;

const Template: ComponentStory<typeof ReadAndFinished> = (args) => (
  <ThemeProvider theme={Theme}>
    <ReadAndFinished {...args} />
  </ThemeProvider>
);

export const Reading = Template.bind({});
Reading.args = {
  children: "Reading",
};

export const Finished = Template.bind({});
Finished.args = {
  children: "Finished",
};

export default ReadandFinishedButton;
