import React from 'react';

/**
const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button style={{ backgroundColor: 'blueviolet', color: 'white' }}>
      {text}
    </button>
  );
};
*/
interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
}

export function Button({ text, children }: ButtonProps) {
  return <button className="button">{text! + children!}</button>;
}
