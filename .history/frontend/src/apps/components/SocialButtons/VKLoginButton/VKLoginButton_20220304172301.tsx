import React from 'react';


const VKLoginButton = () => {
    const responseVk = response => {
        console.log(response);
    };

    return (
    <VKLoginButton
        apiId="5376167"
        callback={responseVk}
        render={renderProps => (
        <button onClick={renderProps.onClick}>VK button</button>
        )}
    />
    );
};

export default VKLoginButton;


