import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";

const GitLoginButton = ({children}) => {

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
                    provider="github"
                    appId={`${process.env.REACT_APP_APP_ID_G}`}
                    scope={`${process.env.REACT_APP_SCOPE_FACEBOOK}`}
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                   {children}
                </SocialButton>
            </div>
        )
};

export default GitLoginButton;


