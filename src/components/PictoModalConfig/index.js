
import SelectContext from 'context/selectContext'
import { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import './styles.css'
export default function PictoModalConfig ({ diary }) {
  const { fullscreenConfig, showConfig, setShowConfig } = useContext(SelectContext)
  //   const handleCheck = (status, img, diary) => {
  //     const newdiaries = [...diaries]
  //     const atDiary = newdiaries.find(a => a.diary === diary)
  //     const atImg = atDiary.image.find(b => b.img === img)
  //     atImg.status = !status
  //     setDiaries(newdiaries)
  //   }

  return (
    <>
      <Modal show={showConfig} fullscreen={fullscreenConfig} onHide={() => setShowConfig(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{diary.diary}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='select-picto'>
            <Carousel>
              {diary.image.map(({ img, status }, idx) => (

                <Carousel.Item key={idx}>
                  <img
                    className='d-block w-100'
                    src='holder.js/800x400?text=First slide&bg=373940'
                    alt='First slide'
                  />

                  <Carousel.Caption>

                    <img src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' />

                  </Carousel.Caption>
                </Carousel.Item>

              ))}
            </Carousel>

            <div className='picto-sort'>
              {diary.image.map(({ img, status }, idx) => (
                <div key={idx}>
                  <img src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' />

                </div>
              ))}
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>

  )
}
