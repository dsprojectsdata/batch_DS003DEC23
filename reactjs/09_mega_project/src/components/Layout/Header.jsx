import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogout } from '../../redux/features/AuthSlice';

const Header = () => {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const userData = useSelector(state => state.auth.userData)

    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: 16
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
                        <Link to="/" className='text-white'>Home</Link>
                        {!isLoggedIn && <>
                            <Link to="/signup" className='text-white'>Signup</Link>
                            <Link to="/signup" className='text-white'>Login</Link>
                        </>}

                        {isLoggedIn && <>
                            <Link to="/profile" className='text-white'>{userData.name}</Link>
                            <Button variant='danger' onClick={handleLogout}>Logout</Button>
                        </>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header