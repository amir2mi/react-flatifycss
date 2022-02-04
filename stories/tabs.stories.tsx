import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs } from '../src';

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const items = [
  {
    title: 'Kafka',
    content:
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What is happened to me?" he thought. It was not a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.',
  },
  {
    title: 'Werther',
    content:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.',
  },
  {
    title: (
      <>
        Cicero <span className="badge">256</span>
      </>
    ),
    content:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
  },
];

const itemsExtended = [
  {
    title: 'Kafka',
    content:
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What is happened to me?" he thought. It was not a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.',
  },
  {
    title: 'Werther',
    content:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.',
  },
  {
    title: 'Cicero',
    content:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
  },
  {
    title: 'Lorem 1',
    content: 'Lorem 1',
  },
  {
    title: 'Lorem 2',
    content: 'Lorem 2',
  },
  {
    title: 'Lorem 3',
    content: 'Lorem 3',
  },
  {
    title: 'Lorem 4',
    content: 'Lorem 4',
  },
  {
    title: 'Lorem 5',
    content: 'Lorem 5',
  },
  {
    title: 'Lorem 6',
    content: 'Lorem 6',
  },
  {
    title: 'Lorem 7',
    content: 'Lorem 7',
  },
  {
    title: 'Longer Lorem 8',
    content: 'Lorem 8',
  },
  {
    title: 'Lorem 9',
    content: 'Lorem 9',
  },
  {
    title: 'Lorem 10',
    content: 'Lorem 10',
  },
];

const Template: Story = (args) => <Tabs items={items} {...args} />;

export const Default = Template.bind({});
export const TopLine = Template.bind({});
export const Centered = Template.bind({});
export const Bordered = Template.bind({});
export const SlideAnimation = Template.bind({});
export const Scrollable = Template.bind({});

TopLine.args = {
  linePosition: 'top',
};

Centered.args = {
  centered: true,
};

Bordered.args = {
  bordered: true,
};

SlideAnimation.args = {
  animation: 'slide',
};

Scrollable.args = {
  items: itemsExtended,
  scrollable: true,
  bordered: true,
};
