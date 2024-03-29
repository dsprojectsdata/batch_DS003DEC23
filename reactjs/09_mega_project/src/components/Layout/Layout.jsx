import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <ToastContainer />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout