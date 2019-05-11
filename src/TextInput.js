import React from 'react';

const TextInput = (props) => {
  const { value, handleChange, label, id, name } = props;
  return (
    <React.Fragment>
      <label for={id}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        name={name}
        id={id}
      />
    </React.Fragment>
  );
}
  

export default TextInput;