import React from "react";
import SocialButton from "../SocialButton";
import {api} from "../../../../api";

const LoginWithGoogle = () => {

    const handleSocialLogin = async (user) => {
        console.log();
        
        await api.convertTokenGoogle({token: user._token.accessToken})
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    
    
        return (
                <SocialButton
                    provider="google"
                    appId="219229528082-j3o3pbp68on40413sddqflvud03sh21u.apps.googleusercontent.com"
                    onLoginSuccess={
                       handleSocialLogin
                    }
                    onLoginFailure={
                       handleSocialLoginFailure
                    }
                >
                    Login with Google
                </SocialButton>
        )
}

export default LoginWithGoogle