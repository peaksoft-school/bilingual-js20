import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Footer from '../layout/Footer'
import App from '../App'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
