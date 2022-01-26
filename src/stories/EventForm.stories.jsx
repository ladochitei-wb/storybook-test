import React from "react";
import { within, userEvent } from '@storybook/testing-library';
import EventForm from "../components/EventForm/EventForm";
import * as InputStories from "./Input.stories";
import * as TextareaStories from "./Textarea.stories";

export default {
	title: 'EventForm',
	component: EventForm
};

const Template = (args) => <EventForm {...args} />;

export const Default = Template.bind({});
Default.args = {
	submitEvent: (data) => {
		console.log('submit');
		console.log(data);
	},
	...InputStories.TitleInput,
	...InputStories.AddressInput,
	...TextareaStories.Description,
};

// using the play function
export const FilledForm = Template.bind({});
FilledForm.args = {
	submitEvent(data) {
		console.log('Submit: ', data);
	}
};
FilledForm.play = async ({canvasElement}) => {
	const canvas = within(canvasElement);

	await userEvent.type(canvas.getByTestId('title'), 'Test event Title', { delay: 100 });
	await userEvent.type(canvas.getByTestId('address'), 'Test event address', { delay: 100 });
	await userEvent.type(canvas.getByTestId('description'), 'Test event description', { delay: 100 });
	await userEvent.click(canvas.getByRole('button'));
};
