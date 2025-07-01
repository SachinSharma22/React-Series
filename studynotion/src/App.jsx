import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Login from './pages/login';
import SignUp from './pages/SignUp';

const App = () => {

  return (
    <div className='w-[1000px] mx-auto my-0 border-[1px]'>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
       </Routes>
       <Footer />
       <ToastContainer />
    </div>
    
  )
}

export default App
