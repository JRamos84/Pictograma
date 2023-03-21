
import SelectContext from 'context/selectContext'
import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import DiaryPicto from 'components/DiaryPicto'

export default function Home () {
  const [loanding, setLoanding] = useState(true)
  const { setDiaries, setDiariesConfig } = useContext(SelectContext)

  useEffect(function () {
    const newDiaries = (JSON.parse(localStorage.getItem('diaries'))) || []
    const newdiary = newDiaries.map(atwork => {
      return { ...atwork, image: [...atwork.image.map((a, idx) => ({ ...a, sort: idx }))] }
    })
    setDiaries(newdiary)
    setDiariesConfig(newDiaries)

    if (newDiaries.length !== 0) setLoanding(false)
  }, [])

  return (
    <>{loanding
      ? <h1>no hay agenda</h1>
      : <DiaryPicto />}
    </>
  )
}
