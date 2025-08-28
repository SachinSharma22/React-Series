import React, { useContext } from 'react'
import themeContext from '../context/themeContext'

const Home = () => {
    const {theme, toggleTheme} = useContext(themeContext);
     const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease"
  };
  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button className='border bg-teal-400 text-white font-bold p-4 hover:bg-teal-500 hover:cursor-pointer rounded-2xl' onClick={() => toggleTheme()}>Switch to {theme === 'light' ? 'dark' : 'light'}</button>
    </div>
  )
}

export default Home
