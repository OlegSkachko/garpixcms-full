import React from 'react'
import { YandexLogin } from 'react-yandex-login';

const YandexLoginButton = (props) => {
  
  const {children} = props

  const handleSocialLogin = (userData) => {
    console.log('User Data: ', userData);
    api.convertTokenFacebook({token: userData.access_token})
  }

  const handleSocialLoginFailure = (err) => {
    console.error(err);
};
     
     
  return (
    <YandexLogin 
      clientID='' 
      onSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      <button {...props}>{children}</button>
    </YandexLogin>
  );  
};

export default YandexLoginButton;