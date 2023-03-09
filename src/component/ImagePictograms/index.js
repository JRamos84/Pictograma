
import { useEffect, useState } from 'react'
import getPictogram from 'service/getPictogram'
import './styles.css'
export default function ImagePictograms ({ keyword }) {
  const [pictos, setPictos] = useState([])

  useEffect(function () {
    getPictogram({ keyword })
      .then(ids => {
        setPictos(ids)
      })
  }, [keyword])

  return (
    <div>
      {pictos.map((id) => (
        <img key={id} src={`https://api.arasaac.org/api/pictograms/${id}`} alt={id} />
      ))}
    </div>
  )
}
