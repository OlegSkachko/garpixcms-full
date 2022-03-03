import React, { useState } from 'react'
import  GoogleLogin from './google-login'


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

const MountTest = () => {
  const [showButton, toggleShow] = useState(true)

  if (showButton) {
    return (
      <GoogleLogin
        onSuccess={res => {
          toggleShow(false)
          success(res)
        }}
        onFailure={error}
        clientId={clientId}
      >
        Auth then Hide button
      </GoogleLogin>
    )
  }

  return <button onClick={() => toggleShow(true)}>show button</button>
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
    </GoogleLogin>
  
)}
