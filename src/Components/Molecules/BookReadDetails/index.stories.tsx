import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import {Theme} from "../../../Themes/Theme";
import BookReadTime from ".";
const BookReadTimeStory = {
  title: "Molecules/BookReadTimeStory",
  component: BookReadTime,
} as ComponentMeta<typeof BookReadTime>;

const Template: ComponentStory<typeof BookReadTime> = () => (
  <ThemeProvider theme={Theme}>
    <BookReadTime  />
  </ThemeProvider>
);

export const bookRead = Template.bind({});
bookRead.args = {
  children: "Add to library",
};

export default BookReadTimeStory;