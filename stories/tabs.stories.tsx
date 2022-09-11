import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, Tabs, TabList, Tab, TabPanel, TabPanels } from '../src';

const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
  <Tabs {...args}>
    <TabList>
      <Tab>Kafka</Tab>
      <Tab onClick={() => alert('clicked on Werther')}>Werther</Tab>
      <Tab>
        Cicero
        <Badge>256</Badge>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What is
          happened to me?" he thought. It was not a dream. His room, a proper
          human room although a little too small, lay peacefully between its
          four familiar walls.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

const TemplateTopLine: Story = args => (
  <Tabs {...args}>
    <TabList linePosition="top">
      <Tab>Kafka</Tab>
      <Tab>Werther</Tab>
      <Tab>
        Cicero
        <Badge>256</Badge>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What is
          happened to me?" he thought. It was not a dream. His room, a proper
          human room although a little too small, lay peacefully between its
          four familiar walls.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

const TemplateCentered: Story = args => (
  <Tabs {...args} defaultIndex={1}>
    <TabList centered>
      <Tab>Kafka</Tab>
      <Tab>Werther</Tab>
      <Tab>
        Cicero
        <Badge>256</Badge>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What is
          happened to me?" he thought. It was not a dream. His room, a proper
          human room although a little too small, lay peacefully between its
          four familiar walls.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

const TemplateBordered: Story = args => (
  <Tabs {...args}>
    <TabList>
      <Tab>Kafka</Tab>
      <Tab>Werther</Tab>
      <Tab>
        Cicero
        <Badge>256</Badge>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What is
          happened to me?" he thought. It was not a dream. His room, a proper
          human room although a little too small, lay peacefully between its
          four familiar walls.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

const TemplateScrollable: Story = args => (
  <Tabs {...args}>
    <TabList scrollable>
      <Tab>Kafka</Tab>
      <Tab>Werther</Tab>
      <Tab>
        Cicero
        <Badge>256</Badge>
      </Tab>
      <Tab>
        Long Long Cicero
        <Badge>256</Badge>
      </Tab>
      <Tab>Kafka the longer</Tab>
      <Tab>Werther the longer than longer</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What is
          happened to me?" he thought. It was not a dream. His room, a proper
          human room although a little too small, lay peacefully between its
          four familiar walls.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

const TemplateFadeAnimation: Story = args => (
  <Tabs {...args}>
    <TabList>
      <Tab>Kafka</Tab>
      <Tab>Werther</Tab>
      <Tab>
        Cicero
        <Badge>256</Badge>
      </Tab>
    </TabList>
    <TabPanels animation="fade">
      <TabPanel>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What is
          happened to me?" he thought. It was not a dream. His room, a proper
          human room although a little too small, lay peacefully between its
          four familiar walls.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

const TemplateNoAnimation: Story = args => (
  <Tabs {...args}>
    <TabList>
      <Tab>Kafka</Tab>
      <Tab>Werther</Tab>
      <Tab>
        Cicero
        <Badge>256</Badge>
      </Tab>
    </TabList>
    <TabPanels animation={false}>
      <TabPanel>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What is
          happened to me?" he thought. It was not a dream. His room, a proper
          human room although a little too small, lay peacefully between its
          four familiar walls.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

const TemplateCustomized: Story = args => (
  <Tabs {...args} size="sm" defaultIndex={2}>
    <TabList theme="yellow">
      <Tab>Kafka</Tab>
      <Tab>Werther</Tab>
      <Tab>
        Cicero
        <Badge theme="orange-light">256</Badge>
      </Tab>
    </TabList>
    <TabPanels theme="yellow-light" animation="fade">
      <TabPanel size="xs">
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What is
          happened to me?" he thought. It was not a dream. His room, a proper
          human room although a little too small, lay peacefully between its
          four familiar walls.
        </p>
      </TabPanel>
      <TabPanel size="md" theme="red-light">
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
      </TabPanel>
      <TabPanel size="lg" theme="dark" color="blue-light">
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const Default = Template.bind({});
export const TopLine = TemplateTopLine.bind({});
export const Centered = TemplateCentered.bind({});
export const Bordered = TemplateBordered.bind({});
export const Scrollable = TemplateScrollable.bind({});
export const FadeAnimation = TemplateFadeAnimation.bind({});
export const NoAnimation = TemplateNoAnimation.bind({});
export const Customized = TemplateCustomized.bind({});
