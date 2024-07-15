import { useState } from 'react'
import './App.css'
import {Sidebar,Extra} from './pages/Pindex'
import {Outlet} from "react-router-dom"

function App() {
  

  return (
   <>
    <Sidebar/>
    <Outlet/>
    <Extra/>
   </>
  )
}

export default App
