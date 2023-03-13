import { useContext } from 'react'
import SelectContext from '../../context/selectContext'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
export default function Picto () {
  const { selectPictogram, setSelectPictogram, pictos } = useContext(SelectContext)
  const handlePictogram = (ID) => {
    setSelectPictogram(selectPictogram.concat({ id: ID, status: false }))
  }

  return (

    <>

      {pictos.map((id) => (

        <Col key={id}>

          <Card onClick={() => handlePictogram(id)}>
            <Card.Img variant='top' src={`https://api.arasaac.org/api/pictograms/${id}`} />
            <Card.Body>
              <Card.Text>Title</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      ))}

    </>

  )
}
