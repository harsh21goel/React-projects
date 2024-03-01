import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Register from './Component/Register'
import Show from './Component/Show'
import Update from './Component/Update'
import Delete from './Component/Delete'

const router =createBrowserRouter(createRoutesFromElements(
  <Route path="/"  element={<Layout/>} >
    <Route path="/" element={<Register/>} />
    <Route path="/find" element={<Show/>} />
    <Route path="/update" element={<Update/>} />
    <Route path="/delete" element={<Delete/>} />
  </Route>
))





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
