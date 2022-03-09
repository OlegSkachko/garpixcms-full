import React from 'react'; 

const OKLoginButton = (props) => {
    const {children} = props
    let clientId = '512001382783'
    let scope = 'LONG_ACCESS_TOKEN,VALUABLE_ACCESS'
    let response_type = 'token'
    let redirectUri = 'http://localhost:3000/'
    let url = `https://connect.ok.ru/oauth/authorize?client_id=${clientId}&scope=${scope}&response_type=${response_type}&redirect_uri=${redirectUri}`

    async function onLoginSuccess() {
        let wind
        try {
            let newWindow = new Promise((res)=>{
               wind= window.open(url, "ok", 'width=600,height=600')
               res(wind)
            }).then((result)=> {
                if(res) {

                }
               
            })   
        } catch (err) {
            onLoginFailure(err)
        }
        
    }

    function onLoginFailure(err) {
        console.log(err)
    }

    return (
       <button onClick={onLoginSuccess} {...props}>{children}</button>
    );
};

export default OKLoginButton;