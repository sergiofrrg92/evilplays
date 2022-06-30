import React from 'react';
import NotLoggedForm from './NotLoggedForm';

function Login(props) {

  return (
      <NotLoggedForm 
        type="login" 
        title="Log in" 
        buttonText="Log in" 
        redirectTo="/register"
        redirectText="Not a member yet? Sign up here!"
        handleSubmit={props.handleLogin}
      ></NotLoggedForm>
  );
}

export default Login;