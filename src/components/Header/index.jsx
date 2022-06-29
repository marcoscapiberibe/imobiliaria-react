import '../Header/Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';



  function Header() {
    return (
      <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="fixed-top">
            <Container fluid>
              <Navbar.Brand href="#">Imobiliária Django</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas 
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton  className='bg-dark text-light'>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-dark'>
                  <Nav className="justify-content-end flex-grow-1 pe-3 text-light">
                    <Nav.Link href="#action1" className='text-light'>Home</Nav.Link>
                    <Nav.Link href="#action2" className='text-light'>Link</Nav.Link>
                    <Nav.Link href="#action2" className='text-light'>Link</Nav.Link>
                    <Nav.Link href="#action2" className='text-light'>Contato</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Pesquise o seu imóvel"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-secondary">Pesquisar</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
  
  export default Header;