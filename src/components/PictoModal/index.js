
import SelectContext from 'context/selectContext'
import { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
export default function PictoModal ({ diary }) {
  const { diaries, setDiaries, fullscreen, show, setShow } = useContext(SelectContext)

  const handleCheck = (status, img, diary) => {
    const newdiaries = [...diaries]
    const atDiary = newdiaries.find(a => a.diary === diary)
    const atImg = atDiary.image.find(b => b.img === img)
    atImg.status = !status
    setDiaries(newdiaries)
  }

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{diary.diary}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='select-picto'>

            {diary.image.map(({ img, status }, idx) => (
              <div key={idx}>
                <img src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' />
                <label>
                  <input type='checkbox' onChange={() => handleCheck(status, img, diary.diary)} />
                  <span
                    className={`checkbox ${status ? 'checkbox--active' : ''}`}
                    aria-hidden='true'
                  />

                </label>
              </div>
            ))}

          </div>
        </Modal.Body>
      </Modal>
    </>

  )
}
