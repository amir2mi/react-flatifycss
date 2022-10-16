import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Quote } from '../src';

const meta: Meta = {
  title: 'Content/Quote',
  component: Quote,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
  <Quote {...args} cite="kafka">
    One morning, when Gregor Samsa woke from troubled dreams, he found himself
    transformed in his bed into a horrible vermin. He lay on his armour-like
    back, and if he lifted his head a little he could see his brown belly,
    slightly domed and divided by arches into stiff sections. The bedding was
    hardly able to cover it and seemed ready to slide off any moment.
  </Quote>
);

export const Default = Template.bind({});
export const Large = Template.bind({});
export const Icon = Template.bind({});
export const CustomIcon = Template.bind({});
export const Theme = Template.bind({});

Icon.args = {
  hasIcon: true,
};

Large.args = {
  large: true,
};

Theme.args = {
  hasIcon: true,
  theme: 'green',
};

CustomIcon.args = {
  icon:
    '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="M12,4c-4.326,0-8.227,3.005-9.938,7.654c-0.082,0.224-0.082,0.468,0,0.691C3.773,16.995,7.674,20,12,20  s8.227-3.005,9.938-7.654c0.082-0.224,0.082-0.468,0-0.691C20.227,7.005,16.326,4,12,4z M12,18c-3.374,0-6.451-2.343-7.928-6  C5.549,8.343,8.626,6,12,6s6.451,2.343,7.928,6C18.451,15.657,15.374,18,12,18z"/><path d="M12,8c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S14.206,8,12,8z M12,14c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2  S13.103,14,12,14z"/></svg>',
};
