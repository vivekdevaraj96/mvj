import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import Carousels from "./Components/Carousels";
import Selection from "./Components/Selection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        key="md"
        expand="md"
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#">MVJ Automobile Spares</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-"md"`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              MVJ Automobile Spares
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown
                  title="Brands"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >                  
                  <NavDropdown.Item href="#action4">Bajaj</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Hero</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Honda</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Suzuki</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">TVS</NavDropdown.Item>
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

      <Carousels />

      <Selection />      

       <hr/>

      <Footer/>
    </div>
  );
}

export default App;
