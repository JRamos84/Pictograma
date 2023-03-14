import React, { useEffect, useState } from 'react'

export default function Diary () {
  const [titles, setTitles] = useState([])
  useEffect(function () {
    const title = []
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i))
      title.push(localStorage.key(i))
    }
    setTitles(title)
    console.log(title)
  }, [])
  return (
    <>
      <h1>Agenda</h1>
      {titles.map((nombre) => (
        <div key={nombre}><h2>{nombre}</h2></div>
      ))}

    </>
  )
}
