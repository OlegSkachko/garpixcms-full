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
            }).then((res:any)=> {
                let count = 0
                let checkAuth = setInterval(()=>{
                try {
                        count++
                        if(count>2000) {
                            clearInterval(checkAuth)
                            wind.close()
                        }
                        let hash = res?.location.hash
                        if(hash !=='' && hash !== undefined ) {
                            let access_token = hash.replace('#access_token=','').split('&')[0]
                            console.log(access_token);
                            clearInterval(checkAuth)
                            wind.close()
                        } 
                    } catch(e) {
                        count++
                        throw new DOMException(e)
                    }
                },1000)  
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