import { useContext } from 'react'
import SelectContext from 'context/selectContext'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './styles.css'

export default function Picto () {
  const { selectPictogram, setSelectPictogram, pictos } = useContext(SelectContext)
  const handlePictogram = (ID) => {
    // console.log(selectPictogram)
    const founder = selectPictogram.findIndex(e => e.id === ID)
    if (selectPictogram.length === 0 || founder === -1)setSelectPictogram(selectPictogram.concat({ id: ID, status: false }))
    // console.log('aqui', founder)
  }

  return (

    <>

      {pictos.map((id) => (

        <Col key={id}>

          <Card>
            <Card.Img variant='top' src={`https://api.arasaac.org/api/pictograms/${id}`} />
            <Card.Body>
              <Card.Text>Title</Card.Text>
            </Card.Body>
            <button className='btn-picto' onClick={() => handlePictogram(id)}>+</button>

          </Card>
        </Col>

      ))}

    </>

  )
}
