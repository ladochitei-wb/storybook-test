import React from 'react';

import { Homepage } from "../pages/Homepage/Homepage";
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Homepage,
};

const Template = (args) => <Homepage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
