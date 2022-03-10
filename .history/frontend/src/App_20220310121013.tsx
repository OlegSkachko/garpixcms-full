import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'
import { AppleLoginButton, OKLoginButton } from './apps/components/SocialButtons'

const App = ({ context }: any): React.ReactElement => (
//   <Routes>
//     <Route
//       path={PATHS.ALL.path}
//       element={<Combine staticContext={context} {...PATHS.ALL} />}
//     />
//   </Routes>

<AppleLoginButton>jhg</AppleLoginButton>
)

export default App
