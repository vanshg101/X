import React, { useState,useEffect  } from 'react'
import './App.css'
import initializeLogout from '../initializeLogout'
import {Sidebar,Extra} from './pages/Pindex'
import {Outlet} from "react-router-dom"

function App() {
//   useEffect(() => {
//     initializeLogout();
// }, []);

  return (
   <>
   
    <Sidebar/>
    <Outlet/>
    <Extra/>
   </>
  )
}

export default App
