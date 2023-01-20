import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: { defaultValue: 'primary' },
    children: { defaultValue: 'Default children' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'primary', children: 'Default' };

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
  onClick: action('2ndry click'),
};

export const Tertiary = Template.bind({});
Tertiary.args = { variant: 'primary', children: 'tertiary' };

Default.args = {};
