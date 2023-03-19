
import SelectContext from 'context/selectContext'
import { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import './styles.css'
import PictoSelectConfig from 'components/PictoSelectConfig'
import PictoCarruselConfig from 'components/PictoCarruselConfig'
import Button from 'react-bootstrap/Button'
import { AiOutlinePlayCircle } from 'react-icons/ai'
export default function PictoModalConfig ({ diary }) {
  const { fullscreenConfig, showConfig, setShowConfig, setDiaries, diariesConfig } = useContext(SelectContext)
  const handleShow = () => {
    setDiaries(diariesConfig)
    console.log(diariesConfig)
  }
  return (
    <>
      <Modal show={showConfig} fullscreen={fullscreenConfig} onHide={() => setShowConfig(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{diary.diary}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='select-picto-config'>
            <PictoCarruselConfig diary={diary} />
            <PictoSelectConfig diary={diary.diary} />
            <Button variant='success' onClick={() => handleShow(true)}><AiOutlinePlayCircle /></Button>{' '}

          </div>
        </Modal.Body>
      </Modal>
    </>

  )
}
