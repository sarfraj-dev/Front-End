// import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <>
    <UserContextProvider>
 <h1>context Api</h1>
 <Login />
 <Profile />
 </ UserContextProvider>
    </>
  )
}

export default App
