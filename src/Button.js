import React from 'react';

const Button = ({ value, handleClick }) => (
  <button onClick={handleClick}>{value}</button>
);

export default Button;