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
                    appId="219229528082-j3o3pbp68on40413sddqflvud03sh21u.apps.googleusercontent.com"
                    scope=""
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                    {children}
                </SocialButton>
        )
}

export default GoogleLoginButton