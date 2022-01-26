import React from "react";

import Input from "../components/Input/Input";

export default {
	title: 'Example/Input',
	component: Input
};

const Template = (args) => <Input {...args} />;

export const TitleInput = Template.bind({});
TitleInput.args = {
	id: 'title',
	label: 'Event title',
	inputType: 'text'
};

export const AddressInput = Template.bind({});
AddressInput.args = {
	id: 'address',
	label: 'Event address',
	inputType: 'text'
};
