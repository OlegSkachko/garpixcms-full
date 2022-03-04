import React, { useState } from 'react'
import { YandexLogin, YandexLogout } from 'react-yandex-login';

const YandexLoginButton = ({children},props) => {
    const clientID = '<<clientID of your Yandex application>>';

      const loginSuccess = (userData) => {
        console.log('User Data: ', userData);
        api.convertTokenFacebook({token: userData.access_token})
      }
     
    
     
  return (
    <YandexLogin clientID={clientID} onSuccess={loginSuccess}>
      <button {...props}>{children}</button>
    </YandexLogin>
  );
    
};

export default YandexLoginButton;