import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";

const AmazonLoginButton = ({children}) => {

    let clientId = <process className="env REACT_APP_GOOGLE_CLIENT_ID"></process>

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
                    appId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    scope=""
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                    {children}
                </SocialButton>
        )
}

export default AmazonLoginButton