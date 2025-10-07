import React from 'react'
import Login from './Pages/Login'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './routes/MyRoutes'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <RouterProvider router={myRoutes}/>
      <ToastContainer/>
    </div>

  )
}

export default App