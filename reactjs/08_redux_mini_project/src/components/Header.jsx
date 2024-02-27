import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

const Header = () => {

    const toDoData = useSelector((state) => state.toDo.toDoData)

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Total ToDo Count : {toDoData.length}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header