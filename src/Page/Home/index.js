
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

    <><Link as={Link} to='/search' className='btn__diary'><button><MdOutlineNoteAdd size={100} /></button></Link>

      {loanding
        ? <h1>no hay agenda</h1>
        : <DiaryPicto />}
    </>
  )
}
