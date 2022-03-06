import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";

const GoogleLoginButton = ({children}) => {

    const handleSocialLogin = async (user) => {
        console.log(user);
        await api.convertTokenGoogle({token: user._token.accessToken})
    };
 
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
    
        return (
                <SocialButton
                    provider="google"
                    appId={`${process.env.REACT_APP_APP_ID_GOOGLE}`}
                    scope={`${process.env.REACT_APP_SCOPE_GOOGLE}`}
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                    {children}
                </SocialButton>
        )
}

export default GoogleLoginButton