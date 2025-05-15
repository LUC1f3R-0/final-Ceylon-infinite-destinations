import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../view/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default AppRoutes
