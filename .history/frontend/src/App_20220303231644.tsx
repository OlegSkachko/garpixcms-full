import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'
import FBLoginButton from './apps/components/SocialButtons/FBLoginButton/FBLoginButton'
import AmazonLoginButton from './apps/components/SocialButtons/AmazonLoginButton/AmazonLoginButton'
import GoogleLoginButton from './apps/components/SocialButtons/GoogleLoginButton/GoogleLoginButton'
import InstaLoginButton from './apps/components/SocialButtons/InstaLoginButton/InstaLoginButton'

const App = ({ context }: any): React.ReactElement => (
    <>
    <FBLoginButton>fb</FBLoginButton>
    <AmazonLoginButton>Amaz</AmazonLoginButton>
    <GoogleLoginButton>goog</GoogleLoginButton>
    <InstaLoginButton>insta</InstaLoginButton>
    <GitLoginButton>git</GitLoginButton>
    </>
    



)

export default App
