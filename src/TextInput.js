import React from 'react';
import ErrorMessage from './ErrorMessage';

const TextInput = (props) => {
  const { value, handleChange, label, id, name, error } = props;
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        name={name}
        id={id}
      />
      <ErrorMessage error={error} />
    </React.Fragment>
  );
}
  

export default TextInput;