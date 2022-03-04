import React, { useState } from 'react'
import { YandexLogin, YandexLogout } from 'react-yandex-login';

const YandexLoginButton = ({children}) => {
    const clientID = '<<clientID of your Yandex application>>';
    const [userData, setUserData] = useState(undefined);
     
      const loginSuccess = (userData) => {
        console.log('User Data: ', userData);
        setUserData(userData)
      }
     
     
     
      return (
        <div>
          {!userData && 
            <YandexLogin clientID={clientID} onSuccess={loginSuccess}>
              <button>YandexfdfsLogin</button>
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