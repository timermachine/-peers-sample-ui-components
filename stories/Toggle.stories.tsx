import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Toggle, Props } from '../src/Toggle';

const meta: Meta = {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    variant: { defaultValue: 'primary' },
    id: { defaultValue: 'ident1' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Toggle {...args} />;

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
