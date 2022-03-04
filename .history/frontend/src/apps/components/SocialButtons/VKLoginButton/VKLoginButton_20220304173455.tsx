import React from 'react';
import VkLogin from 'react-vkontakte-login';


const VKLoginButton = ({children}) => {

    const responseVk = response => {
        console.log(response);
        await api .convertTokenVk({vkToken: response.code})
    };

    return (
    <VkLogin
        apiId="5376167"
        scope=""
        callback={responseVk}
        render={renderProps => (
            <button onClick={renderProps.onClick}>{children}</button>
        )}
    />
    );
};

export default VKLoginButton;


