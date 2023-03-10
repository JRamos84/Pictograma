
import Picto from 'component/Pitco.js/Index'
import { useEffect, useState } from 'react'
import getPictogram from 'service/getPictogram'
export default function ListPictograms ({ keyword }) {
  const [pictos, setPictos] = useState([])

  useEffect(
    function () {
      getPictogram({ keyword }).then((ids) => {
        setPictos(ids)
      })
    },
    [keyword]
  )
  // Revisar por que la funcion en el boton se inicia vacia al precionar por primera vez

  return (
    <ul>
      <Picto pictos={pictos} />
    </ul>

  )
}
