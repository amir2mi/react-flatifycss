import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion } from '../src';

const meta: Meta = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const items = [
  {
    disableAddButton: true,
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto quae tenetur voluptatum ipsa, esse doloremque numquam accusantium pariatur facere sunt earum aut iure deserunt id illum ipsam repudiandae non? ',
  },
  {
    title: 'Far far away',
    content:
      ' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do',
  },
  {
    title: 'The Sorrows of Young Werther',
    content: (
      <>
        <h3 className="size-lg">Book 2</h3>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents.
        </p>
      </>
    ),
  },
];
const itemsCustomized = [
  {
    size: 'xs',
    style: 'red',
    disableAddButton: true,
    roundness: 'sharp',
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto quae tenetur voluptatum ipsa, esse doloremque numquam accusantium pariatur facere sunt earum aut iure deserunt id illum ipsam repudiandae non? ',
  },
  {
    size: 'md',
    style: 'orange',
    disableAddButton: true,
    title: 'Far far away',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do',
  },
  {
    size: 'lg',
    style: 'yellow',
    disableAddButton: true,
    roundness: 'sharp',
    title: 'The Sorrows of Young Werther',
    content: (
      <>
        <h3 className="size-lg">Book 2</h3>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents.
        </p>
      </>
    ),
  },
];
const Template: Story = (args) => <Accordion items={items} {...args} />;

export const Default = Template.bind({});
export const Expendable = Template.bind({});
export const Bordered = Template.bind({});
export const Customized = Template.bind({});

Default.args = {
  bordered: false,
  expendable: false,
};

Expendable.args = {
  bordered: false,
  expendable: true,
};

Bordered.args = {
  bordered: true,
  expendable: false,
};

Customized.args = {
  items: itemsCustomized,
  bordered: true,
};
