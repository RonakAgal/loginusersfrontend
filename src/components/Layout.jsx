import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './Navbar'


const Layout = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout