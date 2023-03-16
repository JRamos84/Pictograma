
import PictoModal from 'components/PictoModal'
import SelectContext from 'context/selectContext'
import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { FcSettings } from 'react-icons/fc'
import PictoModalConfig from 'components/PictoModalConfig'
export default function Diary () {
  const [loanding, setLoanding] = useState(true)
  const { diaries, setDiaries, setFullscreen, setShow, setFullscreenConfig, setShowConfig } = useContext(SelectContext)

  function handleShow (breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }

  function handleShowConfig (breakpoint) {
    setFullscreenConfig(breakpoint)
    setShowConfig(true)
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
              <img src={`https://api.arasaac.org/api/pictograms/${diary.image[0].img}`} className='me-2 mb-2' alt='tile' />
              <h1>{diary.diary}</h1>
              <Button variant='success' onClick={() => handleShow(true)}><AiOutlinePlayCircle /></Button>{' '}
              <Button variant='light' onClick={() => handleShowConfig(true)}><FcSettings /></Button>{' '}
            </div>

            <PictoModal diary={diary} />
            <PictoModalConfig diary={diary} />
          </div>

        ))
       }</>}
    </>
  )
}
