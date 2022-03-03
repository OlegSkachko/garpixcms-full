import React from "react";
import SocialButton from "./SocialButton";
import api from "../../../";


const FBLoginButton = () => {
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


