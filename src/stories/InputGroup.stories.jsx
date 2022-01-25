import React from "react";

import InputGroup from "../components/InputGroup/InputGroup";

export default {
	title: 'Example/InputGroup',
	component: InputGroup
};

const Template = (args) => <InputGroup {...args} />;

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
