import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'
import {AmazonLoginButton, AppleLoginButton, FBLoginButton, GitLoginButton, GoogleLoginButton, InstaLoginButton, VKLoginButton, YandexLoginButton} from './apps/components/SocialButtons'

const App = ({ context }: any): React.ReactElement => (
//   <Routes>
//     <Route
//       path={PATHS.ALL.path}
//       element={<Combine staticContext={context} {...PATHS.ALL} />}
//     />
//   </Routes>

<YandexLoginButton>jkgjf</YandexLoginButton>
)

export default App
