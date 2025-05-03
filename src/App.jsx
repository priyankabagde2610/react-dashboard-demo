import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Templates/Header'
import Home from './Templates/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Templates/About'
import Contact from './Templates/Contact'
import Login from './Templates/Login'
import Dashboard from './Dashboard/Dashboard'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>React Dashboard</h1> */}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard/*" element={<Dashboard/>}></Route>

      </Routes>
      </BrowserRouter>

   
    </>
  )
}

export default App
