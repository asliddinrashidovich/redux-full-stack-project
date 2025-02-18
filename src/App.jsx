import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainComponent from './components/mainComponent'
import Register from './components/register'
import Login from './components/login'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App