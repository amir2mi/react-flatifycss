import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Figure } from '../src';

const meta: Meta = {
  title: 'Content/Figure',
  component: Figure,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
  <Figure {...args} src="https://picsum.photos/500/300" alt="a random image" />
);

export const Default = Template.bind({});
export const Caption = Template.bind({});
export const OverlayCaption = Template.bind({});
export const CreditName = Template.bind({});
export const CreditLink = Template.bind({});
export const CreditTheme = Template.bind({});
export const Centered = Template.bind({});
export const Fill = Template.bind({});

Caption.args = {
  caption: 'A random image - high quality images',
};

OverlayCaption.args = {
  caption: 'A random image - high quality images',
  overlayCaption: true,
};

CreditName.args = {
  creditName: 'Picsum',
};

CreditLink.args = {
  creditName: 'Picsum',
  creditLink: 'https://picsum.photos/',
};

CreditTheme.args = {
  creditTheme: 'orange-light',
  creditName: 'Picsum',
  creditLink: 'https://picsum.photos/',
};

Centered.args = {
  centered: true,
  overlayCaption: true,
  creditName: 'Picsum',
  creditLink: 'https://picsum.photos/',
};

Fill.args = {
  fill: true,
  overlayCaption: true,
  creditName: 'Picsum',
  creditLink: 'https://picsum.photos/',
};
