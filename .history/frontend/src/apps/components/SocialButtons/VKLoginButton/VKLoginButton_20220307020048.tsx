import React from 'react';
import { api } from '@/api';
import VkLogin from 'react-vkontakte-login';


const VKLoginButton = (props) => {

    const {children} = props

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
            apiId={`${process.env.REACT_APP_APP_ID_VK}`}
            scope={`${process.env.REACT_APP_SCOPE_VK}`}
            callback={handleSocialLogin}
            render={renderProps => (
                <button {...props} onClick={renderProps.onClick}>{children}</button>
            )}
        />
    );
};

export default VKLoginButton;


