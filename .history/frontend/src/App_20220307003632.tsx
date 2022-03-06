import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'
import YandexLoginButton from './apps/components/SocialButtons/YandexLoginButton/YandexLoginButton'
import VKLoginButton from './apps/components/SocialButtons/VKLoginButton/VKLoginButton'
import AppleLoginButton from './apps/components/SocialButtons/AppleLoginButton/AppleLoginButton'
import OKLoginButton from './apps/components/SocialButtons/OKLoginButton/OKLoginButton'

const App = ({ context }: any): React.ReactElement => (
//   <Routes>
//     <Route
//       path={PATHS.ALL.path}
//       element={<Combine staticContext={context} {...PATHS.ALL} />}
//     />
//   </Routes>

<OKLoginButton></OKLoginButton>
)

export default App
