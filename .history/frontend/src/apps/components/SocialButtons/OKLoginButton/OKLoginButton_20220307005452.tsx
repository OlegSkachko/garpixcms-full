import { api } from '@/api';
import React from 'react'; 

const OKLoginButton = (props) => {
    const {children} = props
    const clientId = process.env.REACT_APP_CLIENT_ID_OK
    const scope = 'LONG_ACCESS_TOKEN,VALUABLE_ACCESS'
    const response_type = 'token'
    const redirectUri = process.env.REACT_APP_REDIRECT_URI'http://localhost:3000/'
    const url = `https://connect.ok.ru/oauth/authorize?client_id=${clientId}&scope=${scope}&response_type=${response_type}&redirect_uri=${redirectUri}`

    async function onLoginSuccess(){

        try {
            let newWindow = window.open(url, "ok", 'width=600,height=600');
            if(newWindow) {
                newWindow.onload = async function() {
                    let hash = newWindow?.location.hash
                    let access_token = hash?.replace('#access_token=','').split('&')[0]
                    newWindow?.close()
                    await api.convertTokenOdnoklassniki({token: access_token})
                }
            }  
        } catch (err) {
            onLoginFailure(err)
        }
        
    }

    function onLoginFailure(err) {
        console.log(err)
    }

    return (
       <button onClick={onLoginSuccess} {...props}>{children}</button>
    );
};

export default OKLoginButton;