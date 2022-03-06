import { api } from '@/api';
import React, { useCallback, useEffect } from 'react';
import AppleSigninButton from 'react-apple-signin-auth/dist/AppleSigninButton/AppleSigninButton';


const AppleLoginButton = (props) => {
    const {children} = props

    const handleSocialLogin = async (user) => {
        console.log(user.token.accessToken);
        await api.convertTokenApple({token: user.id_token})
    };
 
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
   
    return (
        <AppleSigninButton
        authOptions={{
          clientId: 'com.example.web',
          scope: 'email name',
          redirectURI: 'https://example.com',
          state: 'state',
          nonce: 'nonce',
          usePopup:true
        }} 
        onSuccess={handleSocialLogin} // default = undefined
        onError={handleSocialLoginFailure} // default = undefined
      
        render={(props) => <button {...props}>{children}</button>}
      />
    );
};

export default AppleLoginButton;