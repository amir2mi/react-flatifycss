import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '../src';

const meta: Meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionButton hasIcon={args.hasIcon}>
        Lorem ipsum dolor sit amet
      </AccordionButton>
      <AccordionPanel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          architecto quae tenetur voluptatum ipsa, esse doloremque numquam
          accusantium pariatur facere sunt earum aut iure deserunt id illum
          ipsam repudiandae non?
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton hasIcon={args.hasIcon}>Far far away</AccordionButton>
      <AccordionPanel>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do.
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton hasIcon={args.hasIcon}>
        The Sorrows of Young Werther
      </AccordionButton>
      <AccordionPanel>
        <h3 className="size-lg">Book 2 - Chapter 3</h3>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents.
        </p>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

const TemplateCustom: Story = args => (
  <Accordion {...args}>
    <AccordionItem theme="purple-light">
      <AccordionButton hasIcon={args.hasIcon} theme="purple-light">
        Lorem ipsum dolor sit amet
      </AccordionButton>
      <AccordionPanel theme="purple">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          architecto quae tenetur voluptatum ipsa, esse doloremque numquam
          accusantium pariatur facere sunt earum aut iure deserunt id illum
          ipsam repudiandae non?
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem theme="pink-light">
      <AccordionButton theme="pink-light" hasIcon={args.hasIcon}>
        Far far away
      </AccordionButton>
      <AccordionPanel theme="pink">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do.
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem theme="green-light">
      <AccordionButton hasIcon={args.hasIcon}>
        The Sorrows of Young Werther
      </AccordionButton>
      <AccordionPanel>
        <h3 className="size-lg">Book 2 - Chapter 3</h3>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents.
        </p>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
export const Bordered = Template.bind({});
export const Multiple = Template.bind({});
export const FadeAnimation = Template.bind({});
export const Customized = TemplateCustom.bind({});

Default.args = {
  hasIcon: true,
  multiple: false,
  collapsible: false,
  bordered: false,
};

Bordered.args = {
  hasIcon: true,
  multiple: false,
  collapsible: false,
  bordered: true,
};

Multiple.args = {
  hasIcon: true,
  multiple: true,
  collapsible: true,
  bordered: true,
};

FadeAnimation.args = {
  hasIcon: true,
  multiple: true,
  collapsible: true,
  bordered: true,
  animation: 'fade',
};

Customized.args = {
  animation: '0.5s ease-in-out flatify-slide-down-in',
  hasIcon: true,
  multiple: true,
  collapsible: true,
  bordered: true,
};
