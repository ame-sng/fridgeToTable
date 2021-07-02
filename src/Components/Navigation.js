import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
    return (
      <Navbar bg="light" variant="light">
      <Navbar.Brand>Fridge to Table</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Recipes</Nav.Link>
      </Nav>
    </Navbar>
    )
}

export default Navigation
