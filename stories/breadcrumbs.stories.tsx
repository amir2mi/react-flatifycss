import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Breadcrumbs } from '../src';
import BreadcrumbsPage from './breadcrumbs.mdx';

const meta: Meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: BreadcrumbsPage,
    },
  },
};

export default meta;

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Videos', href: '/tutorials/videos' },
  {
    children: (
      <a href="/tutorials/videos/custom" className="color-red">
        Custom children
      </a>
    ),
  },
  { label: 'Here!' },
];

const crumbsLonger = [
  { label: 'Nowhere feels like home', href: '/' },
  { label: 'Funky tutorials', href: '/tutorials' },
  { label: 'Videos that you would watch', href: '/tutorials/videos' },
  { label: 'Trends', href: '/tutorials/videos/trends' },
  { label: 'Best of Michael Scott - The Office US' },
];

const Template: Story = args => (
  <Breadcrumbs {...args} label="Main breadcrumbs" crumbs={crumbs} />
);

const TemplateLonger: Story = args => (
  <Breadcrumbs
    {...args}
    label="Much longer breadcrumbs"
    crumbs={crumbsLonger}
  />
);

export const Default = Template.bind({});
export const FitContent = Template.bind({});
export const Scrollable = TemplateLonger.bind({});
export const ScrollToEnd = TemplateLonger.bind({});

FitContent.args = {
  fitContent: true,
};

ScrollToEnd.args = {
  scrollTo: 'right',
};
