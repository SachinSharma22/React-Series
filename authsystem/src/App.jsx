import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <h1 className='flex item-center justify-center text-2xl font-bold'>Auth System</h1>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
