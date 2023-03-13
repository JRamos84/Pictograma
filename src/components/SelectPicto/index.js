import React, { useContext } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
export default function SelectPicto () {
  const { selectPictogram } = useContext(SelectContext)
  // const handleColor = ({ id, status }) => {
  //   const newList = [...selectPictogram]
  //   const artwork = newList.find(a => a.id === id)
  //   artwork.status = !status
  //   setSelectPictogram(newList)
  // }
  return (

    <div className='select-picto'>

      {selectPictogram.map(({ id, status }) => (

        <Col key={id}>

          <Card>
            <Card.Img variant='top' src={`https://api.arasaac.org/api/pictograms/${id}`} />
            <Card.Body>
              <Card.Text>Title</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>

  )
}
