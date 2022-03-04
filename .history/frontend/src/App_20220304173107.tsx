import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Combine from './pages/Combine'
import { PATHS } from './const'
import './App.css'
import YandexLoginButton from './apps/components/SocialButtons/YandexLoginButton/YandexLoginButton'
import VKLoginButton from './apps/components/SocialButtons/VKLoginButton/VKLoginButton'

const App = ({ context }: any): React.ReactElement => (
//   <Routes>
//     <Route
//       path={PATHS.ALL.path}
//       element={<Combine staticContext={context} {...PATHS.ALL} />}
//     />
//   </Routes>

<VKLoginButton>vk кнопочка</VKLoginButton>
)

export default App
