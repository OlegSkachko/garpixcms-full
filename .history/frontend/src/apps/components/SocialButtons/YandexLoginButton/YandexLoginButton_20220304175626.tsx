import { api } from '@/api';
import React from 'react'
import { YandexLogin } from 'react-yandex-login';

const YandexLoginButton = (props) => {
  
  const {children} = props

  const handleSocialLogin = (userData) => {
    try {
      console.log('User Data: ', userData);
      api.convertTokenYandex({token: userData.access_token})
    } catch(err) {
      handleSocialLoginFailure(err)
    }
  }

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };
     
     
  return (
    <YandexLogin 
      clientID='' 
      onSuccess={handleSocialLogin}
    >
      <button {...props}>{children}</button>
    </YandexLogin>
  );  
};

export default YandexLoginButton;