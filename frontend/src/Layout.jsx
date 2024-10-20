import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ToggleBar from './components/ToggleBar'

function Layout() {
  return (
    <>
        <ToggleBar/>
         <Header />
        <Outlet/>
        <Footer /> 
        
      
    </>
  )
}

export default Layout
