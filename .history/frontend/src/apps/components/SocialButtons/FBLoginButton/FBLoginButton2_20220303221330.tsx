import React from 'react';

const FBLoginButton2 = () => {
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