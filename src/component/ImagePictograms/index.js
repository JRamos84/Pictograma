
import { useEffect, useState } from 'react'
import getPictogram from 'service/getPictogram'
import './styles.css'
export default function ImagePictograms ({ keyword }) {
  const [pictos, setPictos] = useState([])
  const [selectPictogram, setSelectPictogram] = useState([])

  useEffect(function () {
    getPictogram({ keyword })
      .then(ids => {
        setPictos(ids)
      })
  }, [keyword])
  // Revisar por que la funcion en el boton se inicia vacia al precionar por primera vez
  const handlePictogram = (id) => {
    setSelectPictogram(selectPictogram.concat(id))
    console.log(selectPictogram)
  }

  return (
    <div>
      {pictos.map((id) => (
        <div key={id} onClick={() => handlePictogram(id)}>
          <img src={`https://api.arasaac.org/api/pictograms/${id}`} alt={id} />
        </div>
      ))}
      <h3>pictogramas selecionado</h3>
      {selectPictogram.map((id) => (
        <div key={id} onClick={() => handlePictogram(id)}>
          <img src={`https://api.arasaac.org/api/pictograms/${id}`} alt={id} />
        </div>
      ))}

    </div>
  )
}
