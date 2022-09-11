import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ContatcList</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={'/'} style={{color:"white"}}>Users</Link>
         <Link to='/add-user' style={{color:"white"}}>Add user</Link> 
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
