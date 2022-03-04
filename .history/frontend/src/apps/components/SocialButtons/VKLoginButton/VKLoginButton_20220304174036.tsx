import { api } from '@/api';
import React from 'react';
import VkLogin from 'react-vkontakte-login';


const VKLoginButton = ({children}) => {

    const handleSocialLogin = async (response) => {
        try {
            console.log(response);
            await api.convertTokenVk({vkToken: response.code})
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
            <button onClick={renderProps.onClick}>{children}</button>
        )}
    />
    );
};

export default VKLoginButton;


