import React, { useEffect, useState } from 'react';

const BtnGoogle = () => {

    const [auth, setAuth] = useState({})

    useEffect(()=>{
        setAuth(fetch('https://apis.google.com/js/api.js'))
        
    },[])
    return (
        <button onClick={()=> console.log(auth)}>okdfsf</button>
    );
};

export default BtnGoogle;