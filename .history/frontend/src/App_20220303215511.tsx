import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'
import LoginWithGoogle from './apps/components/SocialButtons/LoginButtonWithGoogle/GoogleLoginButton'
import FBLoginButton from './apps/components/SocialButtons/FBLoginButton/FBLoginButton'

const App = ({ context }: any): React.ReactElement => (
    <FBLoginButton/>


)

export default App