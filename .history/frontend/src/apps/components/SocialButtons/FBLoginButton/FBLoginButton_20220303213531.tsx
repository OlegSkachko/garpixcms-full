import React from "react";
import SocialButton from "../SocialButton";
import api from "../../api";


const FBLoginButton = () => {
    handleSocialLogin = async (user) => {
        console.log(user);
        await api.convertTokenFacebook({token: user._token.accessToken})
    };

    handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    render() {
        return (
            <div>
                <SocialButton
                    provider="facebook"
                    appId="633797477783383"
                    onLoginSuccess={
                        this.handleSocialLogin
                    }
                    onLoginFailure={
                        this.handleSocialLoginFailure
                    }
                >
                    Login with Facebook
                </SocialButton>
            </div>
        )
    }
};

export default FBLoginButton;

