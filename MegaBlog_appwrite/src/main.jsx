import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import { Authlayout, Login, Signup } from './components/index.js'
import AllPost from './components/pages/AllPost.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/pages/Post.jsx'
import AddPost from './components/pages/AddPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <Authlayout authentication={false}>
            <Login/>
          </Authlayout>
        ),
      },
      {
        path: '/signup',
        element: (
          <Authlayout authentication={false}>
            <Signup/>
          </Authlayout>
        ),
      },
      {
        path: '/add-posts',
        element: (
          <Authlayout authentication={true}>
            <AddPost/>
          </Authlayout>
        ),
      },
      {
        path: '/all-posts',
        element: (
          <Authlayout authentication={true}>
            {""}
            <AllPost/>
          </Authlayout>
        ),
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Authlayout authentication={true}>
            <EditPost/>
          </Authlayout>
        ),
      },
      {
        path:"/post/:slug",
        element:<Post/>
      },
      
    ]
      
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
