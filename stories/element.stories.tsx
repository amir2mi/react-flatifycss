import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Element } from '../src';
import ElementPage from './element.mdx';

const meta: Meta = {
  title: 'Components/Element',
  component: Element,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: ElementPage,
    },
  },
};

export default meta;

const Template: Story = args => (
  <Element {...args}>
    <Element
      as="h3"
      sx={`
        text-transform: uppercase;
        letter-spacing: 10px;
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 0.25em;
    `}
    >
      Kafka
    </Element>
    <Element as="p" sx="font-family: monospace;">
      One morning, when Gregor Samsa woke from troubled dreams, he found himself
      transformed in his bed into a horrible vermin.
    </Element>
  </Element>
);

export const Default = Template.bind({});

Default.args = {
  theme: 'purple-light',
  roundness: 'round-lg',
  sx: `
    width: 320px;
    padding: 2.5em;
    margin: 0 auto;
    transition: transform ease 0.2s;
    transform-origin: top left;
    &:hover{transform: rotate(5deg)}
  `,
};
