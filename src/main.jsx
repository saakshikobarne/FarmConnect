import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Components/Login.jsx'
import Home from './Components/Home.jsx'
import All from './Components/All.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='commerce' element={<All/>}></Route>
      {/* <Route path='Login' element={<Login/>}></Route>
      <Route path='Ecom' element={<Home/>}></Route> */}
    </Route>  
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
