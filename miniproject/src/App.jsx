import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React with Chai aur Code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
