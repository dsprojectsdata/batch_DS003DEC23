import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                            {/* <a href="/about">About</a> */}
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "my-site-url" : "not-active")}
                                style={({ isActive, isPending }) => (isActive ? { color: "red" } : {})}
                            >Home</NavLink>
                            &nbsp;&nbsp;&nbsp;
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? "my-site-url" : "not-active")}
                                style={({ isActive, isPending }) => (isActive ? { color: "red" } : {})}
                            >About</NavLink>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/contact-us">Contact Us</Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/products">Products</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;

// Link
// a => Link, href => to

// &nbsp; -> HTML entities

// Link -> NavLink