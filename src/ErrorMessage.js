import React from 'react';

const ErrorMessage = (props) => {
  const { error } = props;
  return (
    <React.Fragment>
      <p className="error">{error}</p>
    </React.Fragment>
  );
}
  

export default ErrorMessage;