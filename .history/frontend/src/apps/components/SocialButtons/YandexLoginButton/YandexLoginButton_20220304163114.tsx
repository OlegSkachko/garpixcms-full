import React, { useState } from 'react'
import { YandexLogin } from 'react-yandex-login';

const YandexLoginButton = ({children}) => {

      const [userData, setUserData] = useState(undefined);
      const clientID = '<<clientID of your Yandex application>>';
     
      const loginSuccess = (userData) => {
        console.log('User Data: ', userData);
        setUserData(userData)
      }
     
     
     
      return (
        <div>
       
            <YandexLogin clientID={clientID} onSuccess={loginSuccess}>
             Yandex Login
            </YandexLogin>
         
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
    }
};

export default YandexLoginButton;