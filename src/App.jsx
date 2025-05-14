import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Context API with React and Yeh Sham</h1>
      <Login/>
      <br /> 
      <Profile/>
    </UserContextProvider>
  )
}

export default App
