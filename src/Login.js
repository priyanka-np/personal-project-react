import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

const Login = (props) => {
  const { handleInputChange, handleLogin, username, error } = props;
  return (
    <div className="login">
      <img
        src="https://github.githubassets.com/pinned-octocat.svg"
        alt="github logo"
      />
      <h2>Please enter your github username to login</h2>
      <TextInput
        name="username"
        handleChange={handleInputChange}
        id="github-username"
        label="Username"
        value={username}
        error={error}
      />
      <Button 
        value="Login" 
        handleClick={handleLogin} 
      />
    </div>
  );
}

export default Login;