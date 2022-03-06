import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";


const AmazonLoginButton = ({children}) => {

    const handleSocialLogin = async (user) => {
        console.log(user.token.accessToken);
        await api.convertTokenA({token: user._token.accessToken})
    };
 
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
    
    return (
        <SocialButton
            provider="amazon"
            appId={`${process.env.REACT_APP_APP_ID_AMAZON}`}
            scope={`${process.env.REACT_APP_SCOPE_AMAZON}`}
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
        >
            {children}
        </SocialButton>
    )
}

export default AmazonLoginButton