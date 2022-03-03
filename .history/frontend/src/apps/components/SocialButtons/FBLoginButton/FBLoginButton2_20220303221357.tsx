import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const FBLoginButton2 = () => {

    const responseFacebook = (response) => {
        console.log(response);
      }
      
    return (
        <FacebookLogin
  appId="1088597931155576"
  autoLoad
  callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>This is my custom FB button</button>
  )}
/>
    );
};

export default FBLoginButton2;