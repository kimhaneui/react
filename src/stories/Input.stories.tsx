import React from 'react';
import { Story, Meta } from '@storybook/react';

import {Input, InputProps } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
};
