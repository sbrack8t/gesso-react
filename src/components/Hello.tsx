import { jsx } from '@emotion/core';
import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button type="button">{text}</button>
);

export default Button;
