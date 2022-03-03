import React, { FC } from "react";
import SocialLogin from "react-social-login";

const SocialButton:FC<any> = (props) => {
   
    return (
      <button onClick={props.triggerLogin} {...props}>
        {props.children}
      </button>
    );
  }


export default SocialLogin(SocialButton);
