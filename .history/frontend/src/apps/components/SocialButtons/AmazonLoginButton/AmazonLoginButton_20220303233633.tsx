import React, { useEffect } from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";
import dotenv from 'dotenv'

const env
const AmazonLoginButton = ({children}) => {
    useEffect(()=>{
        const env = dotenv.config()
    },[])

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