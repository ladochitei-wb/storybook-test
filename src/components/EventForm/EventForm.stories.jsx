import React from "react";
import { within, userEvent } from '@storybook/testing-library';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs'
import EventForm from "./EventForm";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import * as InputStories from "../Input/Input.stories";
import * as TextareaStories from "../Textarea/Textarea.stories";

export default {
	title: 'EventForm',
	component: EventForm,
	decorators: [
		(Story) => (
			<section style={{ padding: '10px', backgroundColor: '#fcf3f6' }}>
				<Story />
			</section>
		)
	],
	subcomponents: { Input, Textarea },
	parameters: {
		docs: {
			page: () => (
				<>
					<Title>Event form component</Title>
					<Subtitle>These are stories for EventForm component</Subtitle>
					<Description>This component is used for creating new events.</Description>
					<Primary/>
					<ArgsTable story={PRIMARY_STORY}/>
					<Stories/>
				</>
			)
		}
	}
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
