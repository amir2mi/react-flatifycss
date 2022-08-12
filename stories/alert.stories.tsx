import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertCloseButton } from '../src';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({ floating }) => {
  const [show, setShow] = useState(true);

  if (!show)
    return <p className="size-lg text-center">The alert was closed.</p>;

  return (
    <Alert>
      <AlertCloseButton
        label="Close the alert"
        floating={floating}
        onClick={() => setShow(false)}
      />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque laboriosam
      velit praesentium maxime mollitia ab, voluptate nesciunt eligendi, ad cum
      incidunt veritatis autem voluptatem molestias, rem neque voluptas.
      Suscipit, assumenda.
    </Alert>
  );
};

export const Default = Template.bind({});
export const FloatingCloseButton = Template.bind({});

FloatingCloseButton.args = {
  floating: true,
};
