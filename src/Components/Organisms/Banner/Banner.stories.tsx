import React from 'react';
import { ComponentStory } from '@storybook/react';
import Banner from './Banner';
export default {
  title: 'Organisms / Banner',
  component: Banner,
};
const Template: ComponentStory<typeof Banner> = (args) => <Banner />;

export const banner = Template.bind({});
banner.args = {};