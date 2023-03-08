
import { useEffect, useState } from 'react'
import getPictogram from 'service/getPictogram'
import './styles.css'
export default function ImagePictograms () {
  const [pictos, setPictos] = useState([])
  useEffect(function () {
    getPictogram()
      .then(ids => {
        setPictos(ids)
      })
  }, [])

  return (
    <div>
      {pictos.map((id) => (
        <img key={id} src={`https://api.arasaac.org/api/pictograms/${id}`} />
      ))}
    </div>
  )
}
