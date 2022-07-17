import React from 'react';
import { ComponentStory } from '@storybook/react';
import BookDetailPage from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { getBooks } from '../../../../DataBase/DataBase';

export default {
  title: 'pages/bookDetailPage',
  component: BookDetailPage,
};
const Template: ComponentStory<typeof BookDetailPage> = (args) => (
  <Router>
    <BookDetailPage />
  </Router>
);

export const bookDetailPage = Template.bind({});
bookDetailPage.args = {};