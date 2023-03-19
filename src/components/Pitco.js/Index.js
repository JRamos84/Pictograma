import { useContext } from 'react'
import SelectContext from 'context/selectContext'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './styles.css'

export default function Picto () {
  const { selectPictogram, setSelectPictogram, pictos } = useContext(SelectContext)
  const handlePictogram = (img) => {
    const founder = selectPictogram.findIndex(e => e.id === img)
    if (selectPictogram.length === 0 || founder === -1)setSelectPictogram(selectPictogram.concat({ img, status: false, statusConfig: false }))
  }

  return (

    <>

      {pictos.map((img) => (

        <Col key={img}>

          <Card>
            <Card.Img variant='top' src={`https://api.arasaac.org/api/pictograms/${img}`} />
            <Card.Body>
              <Card.Text>Title</Card.Text>
            </Card.Body>
            <button className='btn-picto' onClick={() => handlePictogram(img)}>+</button>

          </Card>
        </Col>

      ))}

    </>

  )
}
