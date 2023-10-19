import React from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
  Form
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/hoaxify.png";

export function NavBar() {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="shadow mb-2">
      <Container fluid className="justify-content-start d-flex">
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image src={logo} alt="hoaxify" width={80} />
            Hoaxify
          </Link>
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
        </Navbar.Collapse>
      </Container>
      <Container fluid className="justify-content-end d-flex">
        <Form inline className="d-flex">
          <Form.Control
            type="search"
            placeholder={t("search")}
            className="me-1"
            aria-label="Search"
          />
        </Form>

        <ButtonToolbar>
          <ButtonGroup className="d-flex">
            <Button variant="outline-success" className="text-center">
              {t("search")}
            </Button>
            <Button
              variant="outline-warning"
              className="text-center mx-2 d-inline-block text-truncate"
            >
              <Link className="nav-link" to="/login">
                {t("login")}
              </Link>
            </Button>
            <Button
              variant="outline-primary"
              className="text-center d-inline-block text-truncate"
            >
              <Link className="nav-link" to="/signup">
                {t("signUp")}
              </Link>
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Container>
    </Navbar>
  );
}
