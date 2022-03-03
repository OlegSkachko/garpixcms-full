import React, { useState } from 'react'



const clientId = '219229528082-j3o3pbp68on40413sddqflvud03sh21u.apps.googleusercontent.com'

const success = response => {
  console.log(response) // eslint-disable-line
}

const error = response => {
  console.error(response) // eslint-disable-line
}

const loading = () => {
  console.log('loading') // eslint-disable-line
}

const logout = () => {
  console.log('logout') // eslint-disable-line
}


export default function Btn() {


return(
 
  
  
    <button
      clientId={clientId}
      scope="email"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      
      responseType="code"
  
    >dcssfsdfsdsda
    </button>
  
)}
