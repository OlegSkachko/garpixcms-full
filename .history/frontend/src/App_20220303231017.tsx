import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'
import FBLoginButton from './apps/components/SocialButtons/FBLoginButton/FBLoginButton'
import AmazonLoginButton from './apps/components/SocialButtons/AmazonLoginButton/AmazonLoginButton'
import GoogleLoginButton from './apps/components/SocialButtons/GoogleLoginButton/GoogleLoginButton'

const App = ({ context }: any): React.ReactElement => (
    <>
    <FBLoginButton>fb</FBLoginButton>
    <AmazonLoginButton>Amaz</AmazonLoginButton>
    <GoogleLoginButton>goog</GoogleLoginButton>
    <
    
    </>
    



)

export default App
