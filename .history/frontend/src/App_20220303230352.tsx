import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'
import FBLoginButton2 from './apps/components/SocialButtons/FBLoginButton/FBLoginButton2'
import FBLoginButton from './apps/components/SocialButtons/FBLoginButton/FBLoginButton'
import AmazonLoginButton from './apps/components/SocialButtons/AmazonLoginButton/AmazonLoginButton'
import LoginWithGoogle from './apps/components/SocialButtons/GoogleLoginButton/GoogleLoginButton'

const App = ({ context }: any): React.ReactElement => (
    <>
    <FBLoginButton>fb</FBLoginButton>
    <AmazonLoginButton>Amaz</AmazonLoginButton>
    <GoogleLoginButton
    
    </>
    



)

export default App
