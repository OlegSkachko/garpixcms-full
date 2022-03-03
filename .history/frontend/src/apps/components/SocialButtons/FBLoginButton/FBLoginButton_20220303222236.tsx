import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";

const FBLoginButton = () => {

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
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                    Login with Facebook
                </SocialButton>
            </div>
        )
};

export default FBLoginButton;


