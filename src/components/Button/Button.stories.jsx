import React from 'react';
import { Button } from "./Button";
import {userEvent, screen, fireEvent} from "@storybook/testing-library";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#e89b9b' },
        { name: 'green', value: '#98d598' },
        { name: 'blue', value: '#8282ee' },
      ]
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  onClick: () => { console.log('Primary button - clicked!'); }
};
Primary.decorators = [
	(Story) => (
		<div style={{ padding: '20px' }}>
			<Story />
		</div>
	)
]

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium Button',
  onClick() {
    console.log('Medium Button - clicked!');
  }
};

export const Click = Template.bind({});
Click.args = {
	...Primary.args
};
Click.play = async () => {
	await userEvent.click(screen.getByRole('button'));
}

export const FireEvent = Template.bind({});
FireEvent.args = {
	...Primary.args
};
FireEvent.play = async () => {
	await fireEvent.click(screen.getByRole('button'));
}