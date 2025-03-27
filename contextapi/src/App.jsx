import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/profile'

function App() {

  return (
   <>
   <UserContextProvider>
    <h1>react with chai</h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
   </>
  )
}

export default App
