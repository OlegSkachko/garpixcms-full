import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";


const FBLoginButton = ({children}) => {


    const handleSocialLogin = async (user) => {user._token.accessToken
        console.log(user);
        await api.convertTokenFacebook({token: user._token.accessToken})
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


