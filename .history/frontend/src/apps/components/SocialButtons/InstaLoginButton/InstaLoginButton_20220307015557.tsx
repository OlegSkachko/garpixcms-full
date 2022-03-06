import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";

const InstaLoginButton = ({children}) => {

    const handleSocialLogin = async (user) => {
        console.log(user);
        await api.convertTokenInstagram({token: user._token.accessToken})
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

   
        return (
            <div>
                <SocialButton
                    provider="instagram"
                    appId={`${process.env.REACT_APP_APP_ID_INSTAGRAM}`}
                    scope={`${process.env.REACT_APP_SCOPE_INSTAGRAM}`}
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                   {children}
                </SocialButton>
            </div>
        )
};

export default InstaLoginButton;


