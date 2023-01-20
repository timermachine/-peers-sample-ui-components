import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle, Props } from '../src/Toggle';

const meta: Meta = {
  title: 'Toggle switch button',
  component: Toggle,
  //   argTypes: {
  //     children: {
  //       control: {
  //         type: 'text',
  //       },
  //     },
  //   },
  //   parameters: {
  //     controls: { expanded: true },
  //   },
};

export default meta;

//const Template: Story<Props> = (args) => <Toggle {...args} />;
const Template: Story<Props> = (args) => (
  <Toggle variant="primary">click me</Toggle>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
