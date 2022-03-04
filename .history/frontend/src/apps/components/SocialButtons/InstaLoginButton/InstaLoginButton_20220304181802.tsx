import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";

const InstaLoginButton = ({children}) => {

    const handleSocialLogin = async (user) => {
        console.log(user);
        await api.convertTokenFacebook({token: user._token.accessToken})
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

   
        return (
            <div>
                <SocialButton
                    provider="instagram"
                    appId="219229528082-j3o3pbp68on40413sddqflvud03sh21u.apps.googleusercontent.com"
                    scope=""
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                   {children}
                </SocialButton>
            </div>
        )
};

export default InstaLoginButton;


