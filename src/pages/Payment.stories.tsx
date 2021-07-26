import React from 'react';
import { Story, Meta } from '@storybook/react';
import {PaymentProps, Payment} from "./Payment";
import * as HeaderStories from "../stories/Header.stories";

export default {
  title: 'Example/Payment',
  component: Payment,
} as Meta;

const Template: Story<PaymentProps> = (args) => <Payment {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
