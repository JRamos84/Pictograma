import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Outlet, Link } from 'react-router-dom'

function NavBarMenu () {
  return (
    <>
      <Navbar className='navBg' variant='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link}>App-Pictogramas</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to='/search'>
                Buscador
              </Nav.Link>
              <Nav.Link as={Link} to='/diary'>
                Agenda
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                Acerca de...
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default NavBarMenu
