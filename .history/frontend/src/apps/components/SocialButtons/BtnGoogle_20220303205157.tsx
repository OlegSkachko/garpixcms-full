import React from 'react';
import OAuth2Login from 'react-simple-oauth2-login';

const BtnGoogle = () => {

    
const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

    return (
        <OAuth2Login
    authorizationUrl="https://accounts.spotify.com/authorize"
    responseType="token"
    clientId="9822046hvr4lnhi7g07grihpefahy5jb"
    redirectUri="http://localhost:3000/oauth-callback"
    onSuccess={onSuccess}
    onFailure={onFailure}/>
    );
};

export default BtnGoogle;
