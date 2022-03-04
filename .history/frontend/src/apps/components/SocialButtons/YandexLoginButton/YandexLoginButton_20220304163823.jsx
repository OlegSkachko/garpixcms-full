import React, { useState } from 'react'
import { YandexLogin, YandexLogout } from 'react-yandex-login';

const YandexLoginButton = ({children}) => {
    const clientID = '<<clientID of your Yandex application>>';
    const [userData, setUserData] = useState(undefined);
     
      const loginSuccess = (userData) => {
        console.log('User Data: ', userData);
        api.convertTokenFacebook({token: userData.access_token})
      }
     
    
     
      return (
        <YandexLogin clientID={clientID} onSuccess={loginSuccess}>
          {children}
        </YandexLogin>
      );
    
};

export default YandexLoginButton;