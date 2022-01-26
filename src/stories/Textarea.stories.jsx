import React from "react";
import Textarea from "../components/Textarea/Textarea";

export default {
	title: 'Example/Textarea',
	component: Textarea
};

const Template = (args) => <Textarea {...args} />;

export const Description = Template.bind({});
Description.args = {
	id: 'description',
	label: 'Event description'
};