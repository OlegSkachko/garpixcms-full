import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'

import FBLoginButton from './apps/components/SocialButtons/FBLoginButton/FBLoginButton'
import FBLoginButton2 from './apps/components/SocialButtons/FBLoginButton/FBLoginButton2'

const App = ({ context }: any): React.ReactElement => (
    <FBLoginButton2/>


)

export default App
