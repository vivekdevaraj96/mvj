import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Baseapp({ children }) {
    var navigate=useNavigate()

  return (
    <div className="baseapp">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        key="md"
        expand="md"
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#" onClick={()=>navigate('/')}>MVJ Automobile Spares</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-"md"`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} onClick={()=>navigate('/')}>
                MVJ Automobile Spares
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" onClick={()=>navigate('/')}>Home</Nav.Link>
                <NavDropdown
                  title="Brands"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action4"  onClick={()=>navigate('/bajaj')}>Bajaj</NavDropdown.Item>
                  <NavDropdown.Item href="#action5"  onClick={()=>navigate('/hero')}>Hero</NavDropdown.Item>
                  <NavDropdown.Item href="#action5"  onClick={()=>navigate('/honda')}>Honda</NavDropdown.Item>
                  <NavDropdown.Item href="#action5"  onClick={()=>navigate('/suzuki')}>Suzuki</NavDropdown.Item>
                  <NavDropdown.Item href="#action3"  onClick={()=>navigate('/tvs')}>TVS</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {children}

      <hr />

      <div className="footer-section">
      <div  className="footerleft">
        <p>About</p>
        <p>Contact us</p>
        <p>Shipping & return</p>
      </div>
      <div className="footerright">
        <p>Privacy & Terms</p>
        <p>©2023, MVJ Automobile Spares</p>
        <p>All trademarks and logos are properties of their respective owners only.</p>
      </div>
    </div>
    </div>
  );
}

export default Baseapp;
