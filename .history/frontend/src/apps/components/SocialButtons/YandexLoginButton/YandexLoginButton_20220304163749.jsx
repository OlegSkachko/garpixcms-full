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
        <div>
          {!userData && 
            <YandexLogin clientID={clientID} onSuccess={loginSuccess}>
              {children}
            </YandexLogin>
          }
          {userData &&
            <div>
              <YandexLogout onSuccess={logoutSuccess}>
                <button>Yandex Logout</button>
              </YandexLogout>
              <ul>
                <li>access_token: {userData.access_token}</li>
                <li>expires_in: {userData.expires_in}</li>
                <li>token_type: {userData.token_type}</li>
              </ul>
            </div>
          }
        </div>
      );
    
};

export default YandexLoginButton;