import { useContext, useState } from 'react'
import SelectContext from 'context/selectContext'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import './styles.css'
import ListPictograms from 'components/ListPictograms'
import SelectPicto from 'components/SelectPicto'

export default function Search () {
  const { keyword, setKeyword } = useContext(SelectContext)
  const [search, SetSearch] = useState('')
  const handleSubmit = (eve) => {
    eve.preventDefault()
    setKeyword(search)
  }

  const handleChange = (eve) => {
    SetSearch(eve.target.value)
  }
  return (
    <>

      <Navbar bg='light' expand='lg'>
        <Container fluid className='justify-content-center'>

          <Form className='d-flex ' onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              onChange={handleChange}
              value={search}
            />
            <Button variant='outline-success' onClick={handleSubmit}>Search</Button>
          </Form>

        </Container>
      </Navbar>
      <div className='pictocontent'>
        {keyword.length === 0
          ? <></>
          : <><ListPictograms keyword={keyword} /><SelectPicto /></>}
      </div>

    </>
  )
}
