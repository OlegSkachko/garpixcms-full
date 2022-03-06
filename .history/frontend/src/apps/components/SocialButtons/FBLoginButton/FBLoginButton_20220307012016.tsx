import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import {api} from "../../../../api";


const FBLoginButton = ({children}) => {


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
                    appId={`${process.env.REACT_APP_APP_ID_FACEBOOK}`}
                    scope={`${process.env.REACT_APP__FACEBOOK}`}
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                   {children}
                </SocialButton>
            </div>
        )
};

export default FBLoginButton;


