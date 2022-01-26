import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { AddButton } from '../src';

const meta: Meta = {
  title: 'Add button',
  component: AddButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <AddButton label="Add button" {...args} />;

export const Default = Template.bind({ active: false, label: 'Add button' });
