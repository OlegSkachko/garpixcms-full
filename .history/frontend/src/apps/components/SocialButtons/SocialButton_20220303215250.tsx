import React from "react";
import SocialLogin from "react-social-login";

const SocialButton = (props:any) => {
 
    const { children, triggerLogin, ...props } = props;
    return (
      <button onClick={triggerLogin} {...props}>
        {children}
      </button>
    );
  
}

export default SocialLogin(SocialButton);
