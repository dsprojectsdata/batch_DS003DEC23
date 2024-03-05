import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

const AuthLayout = ({ authentication }) => {

    const loggedInStatus = useSelector(state => state.auth.isLoggedIn)

    if(authentication && loggedInStatus !== authentication){
    // if(true && false !== true)
        return <Navigate to="/signup" />
    } else if(!authentication && loggedInStatus !== authentication){
        // if(false && true !== false)
        return <Navigate to="/profile" />
    }

    return (
        <Outlet />
    )
}

export default AuthLayout