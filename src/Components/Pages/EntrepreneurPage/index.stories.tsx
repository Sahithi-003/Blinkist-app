import React from 'react';
import { ComponentStory } from '@storybook/react';
import EntrepreneurshipPage from '.';
import { BrowserRouter as Router } from 'react-router-dom';
export default {
  title: 'pages / enterpreuner',
  component: EntrepreneurshipPage,
};
const Template: ComponentStory<typeof EntrepreneurshipPage> = () => (
  <Router>
    <EntrepreneurshipPage />
  </Router>
);

export const entrepreneurship = Template.bind({});
entrepreneurship.args = {};