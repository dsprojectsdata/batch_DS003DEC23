import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import PrintName from "./PrintName"
import AddNum from './AddNum';
import ToDoList from "./ToDoList"

import { FiAirplay } from "react-icons/fi";
import { MdArrowRightAlt } from "react-icons/md";
import Cards from './cards/Cards';
import UseEffectHook1 from './UseEffectHook/UseEffectHook1';
import UseEffectHook2 from './UseEffectHook/UseEffectHook2';
import UseStateHook1 from './UseStateHook/UseStateHook1';
import UseRefHook from './UseRefHook/UseRefHook';


function App() {
  return (
    <div className="App">

{/* <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <FiAirplay />
              <MdArrowRightAlt />
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              <Button variant="danger">Go somewhere</Button>
              <button></button>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    {/* <Container>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Container> */}

      {/* <PrintName /> */}
      {/* <AddNum /> */}
      {/* <ToDoList /> */}

      <Cards />
      {/* <UseEffectHook1 /> */}
      {/* <UseStateHook1 /> */}
      {/* <UseRefHook /> */}
    </div>
  );
}

export default App;
