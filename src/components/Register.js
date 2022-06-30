import React from 'react';
import NotLoggedForm from './NotLoggedForm';

function Register(props) {
  return (

    <NotLoggedForm 
      type="register" 
      title="Sign up" 
      buttonText="Sign up" 
      redirectTo="/login"
      redirectText="Already a member? Log in here!"
      handleSubmit={props.handleRegister}
    ></NotLoggedForm>
    
  );
  }
  
  export default Register;