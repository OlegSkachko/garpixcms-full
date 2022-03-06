import React, { useCallback, useEffect } from 'react';
import AppleSigninButton from 'react-apple-signin-auth/dist/AppleSigninButton/AppleSigninButton';


const AppleLoginButton = () => {
   
   
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
      
        render={(props) => <button {...props}>{chil}</button>}
      />
    );
};

export default AppleLoginButton;