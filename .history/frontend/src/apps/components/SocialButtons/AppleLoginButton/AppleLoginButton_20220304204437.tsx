import React, { useCallback, useEffect } from 'react';
import { appleAuthHelpers } from 'react-apple-signin-auth';
import AppleSigninButton from 'react-apple-signin-auth/dist/AppleSigninButton/AppleSigninButton';
import SocialButton from '../SocialButton';

const AppleLogin = () => {
   
   
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
        
        buttonExtraChildren="Continue with Apple"
        onSuccess={(response) => console.log(response)} // default = undefined
        onError={(error) => console.error(error)} // default = undefined
      
        render={(props) => <button {...props}>apple кр</button>}
      />
    );
};

export default Apple;