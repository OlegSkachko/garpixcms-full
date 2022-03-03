import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";

const AmazonLoginButton = ({}) => {

    const handleSocialLogin = async (user) => {
        console.log(user.token.accessToken);
        await api.convertTokenGoogle({token: user._token.accessToken})
    };
 
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
    
        return (
                <SocialButton
                    provider="amazon"
                    appId="219229528082-j3o3pbp68on40413sddqflvud03sh21u.apps.googleusercontent.com"
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                    Login with Amazon
                </SocialButton>
        )
}

export default AmazonLoginButton