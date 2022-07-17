// import React from 'react';
// import Icon from './Icon';
// import { ComponentStory } from '@storybook/react';
// import Add from "./../../../stories/assets/Icons/add.svg";




// export default {
//     title:"Atoms/Icons",
//     component:Icon,
// };

// const Template:ComponentStory<typeof Icon> = args => (<Icon {...args}/>);

// export const add = Template.bind({});
// add.args={
//     src:Add
// }

import { ComponentStory } from "@storybook/react";
import Icon from "./Icon";

import Search from "./../../../stories/assets/Icons/search.svg";
import DownArrow from "./../../../stories/assets/Icons/down arrow.svg";
import UpArrow from "./../../../stories/assets/Icons/up arrow.svg";
import Add from "./../../../stories/assets/Icons/add.svg";
import Time from "./../../../stories/assets/Icons/time.svg";
import Entrepreneurship from "./../../../stories/assets/Icons/entrepreneurship.svg";
import Economics from "./../../../stories/assets/Icons/economics.svg";
import CorporateCulture from "./../../../stories/assets/Icons/corporate culture.svg";
import Relationship from "./../../../stories/assets/Icons/relationship.svg";
import Politcs from "./../../../stories/assets/Icons/politics.svg";
import Communication from "./../../../stories/assets/Icons/communication skills.svg";
import Motivation from "./../../../stories/assets/Icons/motivation and inspiration.svg";
import Career from "./../../../stories/assets/Icons/career and success.svg";
import Nature from "./../../../stories/assets/Icons/nature.svg";
import Remove from "./../../../stories/assets/Icons/remove 2.svg";
import ReadAgain from "./../../../stories/assets/Icons/read again.svg";
import Uncheked from "./../../../stories/assets/Icons/unchecked.svg";
import Check from "./../../../stories/assets/Icons/check.svg";
import Upload from "./../../../stories/assets/Icons/upload.svg";
import Edit from "./../../../stories/assets/Icons/edit.svg";



export default{
    title: "Atoms/Icon",
    component: Icon
}


const Template:ComponentStory<typeof Icon> = args => (<Icon {...args}/>);

export const search = Template.bind({});
search.args={
    src: Search
}

export const downArrow = Template.bind({});
downArrow.args={
    src: DownArrow
}

export const upArrow = Template.bind({});
upArrow.args={
    src: UpArrow
}

export const add = Template.bind({});
add.args={
    src: Add
}

export const time = Template.bind({});
time.args={
    src: Time
}

export const entrepreneurship = Template.bind({});
entrepreneurship.args={
    src: Entrepreneurship
}

export const economics = Template.bind({});
economics.args={
    src: Economics
}

export const corporateCulture = Template.bind({});
corporateCulture.args={
    src: CorporateCulture
}

export const relationship = Template.bind({});
relationship.args={
    src: Relationship
}

export const politics = Template.bind({});
politics.args={
    src: Politcs
}

export const communication = Template.bind({});
communication.args={
    src: Communication
}

export const motivation = Template.bind({});
motivation.args={
    src: Motivation
}

export const career = Template.bind({});
career.args={
    src: Career
}

export const nature = Template.bind({});
nature.args={
    src: Nature
}

export const remove = Template.bind({});
remove.args={
    src: Remove
}

export const readAgain = Template.bind({});
readAgain.args={
    src: ReadAgain
}

export const uncheked = Template.bind({});
uncheked.args={
    src: Uncheked
}

export const check = Template.bind({});
check.args={
    src: Check
}

export const upload = Template.bind({});
upload.args={
    src: Upload
}

export const edit = Template.bind({});
edit.args={
    src: Edit
}