import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { AiOutlineHome, AiOutlinePlusCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

export default function FooterMenu () {
  return (
    <>
      <Navbar bg='light' fixed='bottom'>
        <Container>

          <Nav.Link as={Link} to='/'>
            <AiOutlineHome />
          </Nav.Link>

          <Nav.Link as={Link} to='/search'>
            <AiOutlinePlusCircle />
          </Nav.Link>
          <Nav.Link as={Link} to='/profile'>
            <CgProfile />
          </Nav.Link>

        </Container>
      </Navbar>

    </>
  )
}
