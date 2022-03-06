import React from 'react';
import { api } from '@/api';
import AppleSigninButton from 'react-apple-signin-auth';


const AppleLoginButton = (props) => {
    const {children} = props
    const authOptions ={
        clientId: 'com.example.web',
        scope: process.env.REACT_APP_SCOPE_AMAZON,
        redirectURI: 'https://example.com',
        state: 'state',
        nonce: 'nonce',
        usePopup:true
      }

    const handleSocialLogin = async (user) => {
        console.log(user.token.accessToken);
        await api.convertTokenApple({token: user.id_token})
    };
 
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
   
    return (
        <AppleSigninButton
            authOptions={authOptions }
            onSuccess={handleSocialLogin}
            onError={handleSocialLoginFailure}
            render={(props) => <button {...props}>{children}</button>}
        />
    );
};

export default AppleLoginButton;