import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertCloseButton, AlertIcon } from '../src';
import AlertPage from './alert.mdx';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: AlertPage,
    },
  },
};

export default meta;

const Template: Story = ({ animation, floating, sx, theme }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert animation={animation} sx={sx} show={show} theme={theme}>
        <AlertCloseButton
          label="Close the alert"
          floating={floating}
          onClick={() => setShow(false)}
        />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
        laboriosam velit praesentium maxime mollitia ab, voluptate nesciunt
        eligendi, ad cum incidunt veritatis autem voluptatem molestias, rem
        neque voluptas. Suscipit, assumenda.
      </Alert>

      {!show && (
        <button className="button" onClick={() => setShow(true)}>
          Show Again!
        </button>
      )}
    </>
  );
};

const IconTemplate: Story = args => {
  return (
    <Alert {...args}>
      <AlertIcon>
        <svg aria-hidden="true" viewBox="0 0 45 100">
          <path d="M0 22.815h10.937v11.408H0zM0 66.719h10.937v11.407H0zM21.612 100c5.547-10.815 9.123-18.699 10.727-23.653 2.442-7.5 3.664-16.291 3.664-26.373s-1.413-19.309-4.24-27.682C30.019 17.129 26.583 9.699 21.455 0h6.331c5.374 8.583 8.626 13.876 9.76 15.882 1.134 2.006 2.363 4.771 3.689 8.293 1.674 4.361 2.87 8.669 3.585 12.925s1.072 8.355 1.072 12.297c0 10.327-1.639 19.536-4.919 27.629-2.059 5.198-6.332 12.855-12.82 22.973h-6.541z"></path>
        </svg>
      </AlertIcon>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque laboriosam
      velit praesentium maxime mollitia ab, voluptate nesciunt eligendi, ad cum
      incidunt veritatis autem voluptatem molestias, rem neque voluptas.
      Suscipit, assumenda.
    </Alert>
  );
};
export const Default = Template.bind({});
export const Icon = IconTemplate.bind({});
export const FloatingCloseButton = Template.bind({});
export const CustomAnimation = Template.bind({});

FloatingCloseButton.args = {
  floating: true,
};

Icon.args = {
  theme: 'blue-light',
};

CustomAnimation.args = {
  floating: true,
  theme: 'accent-light',
  animation: 'my-custom-animation 0.4s ease;',
  sx: `
  @keyframes my-custom-animation {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.5) rotate(0.5turn);
    }
  }
  `,
};
