import React from 'react';
import { ComponentStory } from '@storybook/react';
import BookDetailPage from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'pages/bookDetailPage',
  component: BookDetailPage,
};
const Template: ComponentStory<typeof BookDetailPage> = () => (
  <Router>
    <BookDetailPage />
  </Router>
);

export const bookDetailPage = Template.bind({});
bookDetailPage.args = {};