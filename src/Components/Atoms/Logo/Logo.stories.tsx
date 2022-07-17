import React from 'react';


import Logo from './Logo';
import { ComponentStory } from '@storybook/react';


export default {
    title:"Atoms/Logo",
    component:Logo,
};

export const Template_Logo : ComponentStory<typeof Logo> = (args)=> <Logo></Logo>;

