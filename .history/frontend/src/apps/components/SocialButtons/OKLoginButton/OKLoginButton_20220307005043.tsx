import { api } from '@/api';
import React from 'react'; 

const OKLoginButton = (props) => {
    const {children} = props
    let clientId = process.env.REACT_APP_CLIENT_'512001382783'
    let scope = 'LONG_ACCESS_TOKEN,VALUABLE_ACCESS'
    let response_type = 'token'
    let redirectUri = 'http://localhost:3000/'
    let url = `https://connect.ok.ru/oauth/authorize?client_id=${clientId}&scope=${scope}&response_type=${response_type}&redirect_uri=${redirectUri}`

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