import React from 'react';
import { ComponentStory } from '@storybook/react';
import BookDetailOrganisms from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { getBooks } from '../../../../DataBase/DataBase';

export default {
  title: 'organisms / BookDetailOrganism',
  component: BookDetailOrganisms,
};
const template: ComponentStory<typeof BookDetailOrganisms> = (
    args,
  ) => (
    <Router>
      <BookDetailOrganisms book={getBooks()[0]} onFinishedClick={()=>getBooks() } />
    </Router>
);

  export const bookDetailOrganism = template.bind({});
  bookDetailOrganism.args = {
  }


