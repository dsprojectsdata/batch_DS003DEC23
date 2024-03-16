import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { authLogout } from '../../redux/features/AuthSlice';

const Header = () => {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const userData = useSelector(state => state.auth.userData)

    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: 20
    }

    const handleLogout = () => {
        dispatch(authLogout());
    }

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="ms-auto" style={menuStyle}>
                        <NavLink to="/" style={{ textDecoration: "none" }} className='text-white'>Home</NavLink>
                        {!isLoggedIn && <>
                            <NavLink style={{ textDecoration: "none" }} to="/signup" className='text-white'>Signup</NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/login" className='text-white'>Login</NavLink>
                        </>}

                        {isLoggedIn && <>
                            <NavLink style={{ textDecoration: "none" }} to="/add-category" className='text-white'>Add Category</NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/add-blog" className='text-white'>Add Blog</NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/profile" className='text-white'>{userData.name}</NavLink>
                            <Button variant='danger' onClick={handleLogout}>Logout</Button>
                        </>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header