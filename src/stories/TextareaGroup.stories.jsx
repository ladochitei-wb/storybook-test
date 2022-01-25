import React from "react";
import TextareaGroup from "../components/TextareaGroup/TextareaGroup";

export default {
	title: 'Example/TextareaGroup',
	component: TextareaGroup
};

const Template = (args) => <TextareaGroup {...args} />;

export const Description = Template.bind({});
Description.args = {
	id: 'description',
	label: 'Event description'
};