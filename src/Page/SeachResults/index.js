
import ImagePictograms from 'component/ImagePictograms'
import React, { useState } from 'react'

export default function SearchResults () {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (eve) => {
    eve.preventDefault()
  }

  const handleChange = (eve) => {
    setKeyword(eve.target.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={keyword} placeholder='Buscar Pictograma' /><input type='submit' value='submit' />
      </form>

      <ImagePictograms keyword={keyword} />
    </>
  )
}
