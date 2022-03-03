import React, { useEffect } from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";
import dotenv from 'dotenv'


const FBLoginButton = ({children}) => {

    useEffect

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
                    provider="facebook"
                    appId="633797477783383"
                    scope=""
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                   {children}
                </SocialButton>
            </div>
        )
};

export default FBLoginButton;


