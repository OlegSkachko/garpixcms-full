import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";

const GitLoginButton = ({children}) => {

    const handleSocialLogin = (user) => {
        console.log(user);
        api.convertTokenFacebook({token: user._token.accessToken})
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

   
        return (
            <div>
                <SocialButton
                    provider="github"
                    appId="633797477783383"
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                   {children}
                </SocialButton>
            </div>
        )
};

export default InstaLoginButton;


