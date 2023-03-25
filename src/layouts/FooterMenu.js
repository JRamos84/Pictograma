// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar'
import { AiOutlineHome, AiOutlinePlusCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
// import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

export default function FooterMenu () {
  return (
    <>
      <nav className='fixed  bottom-0 left-0 right-0 bg-white w-full h-10'>
        <div className='flex flex-row justify-content-around h-full'>
          <Link as={Link} to='/'><AiOutlineHome className='h-full w-auto' /></Link>
          <Link as={Link} to='/search'><AiOutlinePlusCircle className='h-full w-auto' /></Link>
          <Link as={Link} to='/profile'><CgProfile className='h-full w-auto' /></Link>

        </div>
      </nav>

    </>
  )
}
