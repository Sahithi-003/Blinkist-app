import React from 'react';
import { ComponentStory } from '@storybook/react';
import Header from './Header'
export default {
  title: 'Organisms / Header',
  component: Header,
};
const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const header = Template.bind({});
header.args = {};