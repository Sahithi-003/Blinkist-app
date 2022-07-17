import React from "react";
import { ComponentStory } from "@storybook/react"
import { ThemeProvider } from "@emotion/react"
import {Theme} from "../../../Themes/Theme";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/FooterStory",
  component: Footer,
} 

const Template: ComponentStory<typeof Footer> = (args) => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
        <Footer/>
    </MemoryRouter>

  </ThemeProvider>
);

export const footer = Template.bind({});


