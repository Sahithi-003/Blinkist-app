import React from 'react';
import { ComponentStory } from '@storybook/react';
import MyLibPage from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'pages/MyLibPage',
  component: MyLibPage,
};
const Template: ComponentStory<typeof MyLibPage> = () => (
  <Router>
    <MyLibPage />
  </Router>
);

export const myLibPage = Template.bind({});
myLibPage.args = {};