import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
import App from './App.jsx'
import './index.css'
import {Home,Login,Signup,MyPost} from './pages/Pindex.js'
import Post from './components/Post.jsx'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
          {
            path:'/',
            element: <Home />
          },
          {
            path:'/login',
            element:<Login />
          },
          {
            path:'/signup',
            element:<Signup/>
          },
          {
            path:'/mypost',
            element:<MyPost/>
          },
          {
            path:"/post/:postId", 
            element:<Post />
          }
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
