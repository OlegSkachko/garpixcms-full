import React from 'react';
import { api } from '@/api';
import VkLogin from 'react-vkontakte-login';


const VKLoginButton = ({children}props) => {

    const handleSocialLogin = async (response) => {
        try {
            console.log(response);
            await api.convertTokenVk({vkToken: response.access_token})
        } catch(err) {
            handleSocialLoginFailure(err)
        }
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    return (
    <VkLogin
        apiId="5376167"
        scope=""
        callback={handleSocialLogin}
        render={renderProps => (
            <button {...props} onClick={renderProps.onClick}>{children}</button>
        )}
    />
    );
};

export default VKLoginButton;


