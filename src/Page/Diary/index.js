
import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './styles.css'

export default function Diary () {
  const [diaries, setDiaries] = useState([])
  const [loanding, setLoanding] = useState(true)
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)
  function handleShow (breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }
  const handleCheck = (status, img, diary) => {
    const newdiaries = [...diaries]
    const atDiary = newdiaries.find(a => a.diary === diary)
    const atImg = atDiary.image.find(b => b.img === img)
    atImg.status = !status
    setDiaries(newdiaries)
  }
  useEffect(function () {
    const newDiaries = (JSON.parse(localStorage.getItem('diaries'))) || []
    setDiaries(newDiaries)
    // console.log(newDiaries)
    if (newDiaries.length !== 0) setLoanding(false)
  }, [])

  return (
    <>{loanding
      ? <h1>no hay agenda</h1>
      : <>
        {
        diaries.map((diary, idx) => (
          <div key={idx}>
            <div>
              <img src={`https://api.arasaac.org/api/pictograms/${diary.image[0].img}`} className='me-2 mb-2' onClick={() => handleShow(true)} alt='tile' />
              <h1>{diary.diary}</h1>
            </div>

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
          </div>

        ))
       }</>}
    </>
  )
}
