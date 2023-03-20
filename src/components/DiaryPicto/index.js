import SelectContext from 'context/selectContext'
import React, { useContext } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import PictoModalConfig from 'components/PictoModalConfig'
import Button from 'react-bootstrap/Button'
import PictoModal from 'components/PictoModal'
import Col from 'react-bootstrap/Col'
import { Card } from 'react-bootstrap'
export default function DiaryPicto () {
  const { diaries, setFullscreen, setShow, setFullscreenConfig, setShowConfig } = useContext(SelectContext)
  function handleShow (breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }

  function handleShowConfig (breakpoint) {
    setFullscreenConfig(breakpoint)
    setShowConfig(true)
  }
  return (
    <>
      {
        diaries.map((diary, idx) => (
          <Col key={idx}>
            <Card className='bg-primary p-1 m-1 w-100'>
              <Card.Img variant='top' className='w-100 bg-info' src={`https://api.arasaac.org/api/pictograms/${diary.image[0].img}`} onClick={() => handleShow(true)} />
              <Card.Body className='d-flex justify-content-between w-100'>
                <Card.Title>
                  {diary.diary}
                </Card.Title>

                <Button variant='primary' onClick={() => handleShowConfig(true)}><BsPencilFill /></Button>{' '}
              </Card.Body>

            </Card>

            <PictoModal diary={diary} />
            <PictoModalConfig diary={diary} />

          </Col>

        ))
       }
    </>
  )
}
