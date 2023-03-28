
import SelectContext from 'context/selectContext'
import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import DiaryPicto from 'components/DiaryPicto'
import { Link } from 'react-router-dom'
import { MdOutlineNoteAdd } from 'react-icons/md'

export default function Home () {
  const [loanding, setLoanding] = useState(true)
  const { setDiaries, setDiariesConfig } = useContext(SelectContext)

  useEffect(function () {
    const newDiaries = (JSON.parse(localStorage.getItem('diaries'))) || []
    setDiaries(newDiaries)
    setDiariesConfig(newDiaries)

    if (newDiaries.length !== 0) setLoanding(false)
  }, [])

  return (

    <>
      <div className='btn__diary'>
        <Link as={Link} to='/search'><button><MdOutlineNoteAdd size={70} className='text-red-500' /></button></Link>
      </div>

      {loanding
        ? <><h1 className='text-white'>Agenda</h1><p className='text-white'>Agrega tu agenda diaria</p></>
        : <DiaryPicto />}
    </>
  )
}
