import React, { useEffect } from 'react'

export default function Diary () {
  useEffect(function () {
    console.log(localStorage)
  }, [])
  return (
    <>
      <h1>Agenda</h1>

    </>
  )
}
