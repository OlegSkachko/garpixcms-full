import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";


const AmazonLoginButton = ({children}) => {

    const handleSocialLogin = (user) => {
        console.log(user.token.accessToken);
        api.convertTokenGoogle({token: user._token.accessToken})
    };
 
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
    
        return (
                <SocialButton
                    provider="amazon"
                    appId={clientId}
                    scope=""
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                    {children}
                </SocialButton>
        )
}

export default AmazonLoginButton