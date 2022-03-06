import { api } from '@/api';
import React from 'react'
import { YandexLogin } from 'react-yandex-login';

const YandexLoginButton = (props) => {
  
  const {children} = props

  const handleSocialLogin = async (userData) => {
    try {
      console.log('User Data: ', userData);
      await api.convertTokenYandex({token: userData.access_token})
    } catch(err) {
      handleSocialLoginFailure(err)
    }
  }

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };
     
     
  return (
    <YandexLogin 
      clientID={`${process. REACT_APP_CLIENT_ID_YANDEX}`} 
      onSuccess={handleSocialLogin}
    >
      <button {...props}>{children}</button>
    </YandexLogin>
  );  
};

export default YandexLoginButton;