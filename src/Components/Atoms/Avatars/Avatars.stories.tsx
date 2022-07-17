import React from "react";
import Avatars  from './Avatars'
import { ComponentStory } from "@storybook/react";

export default{
    title:'Atoms/Avatars',
    component:Avatars
}


const Template:ComponentStory<typeof Avatars> = args => (<Avatars {...args}/>);

export const avatar = Template.bind({});
avatar.args={
    chars : "A"
}