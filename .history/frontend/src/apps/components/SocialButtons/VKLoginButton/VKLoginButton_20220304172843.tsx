import React from 'react';
import VkLogin from 'react-vkontakte-login';


const VKLoginButton = () => {

    const responseVk = response => {
        console.log(response);
    };

    return (
    <VkLogin
        apiId="5376167"
        callback={responseVk}
        render={renderProps => (
        <button onClick={renderProps.onClick}>VK button</button>
        )}
    />
    );
};

export default Vk;


