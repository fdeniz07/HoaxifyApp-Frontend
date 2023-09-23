import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Outlet } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import logo from "./assets/hoaxify.png";
//import './App.css'

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="shadow">
        <Container fluid>
          <Navbar.Brand href="#">
            <a>
              <img src={logo} alt="hoaxify" width={60} />
            </a>
            Hoaxify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
              <ButtonToolbar  >
                <ButtonGroup className="d-flex">
                  <Button variant="outline-success" className="text-center">Search</Button>
                  <Button variant="outline-primary" className="text-center mx-2  d-inline-block text-truncate">
                    Sign Up
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
