import { useContext } from 'react'
import SelectContext from '../../context/selectContext'
export default function Picto ({ pictos }) {
  const { selectPictogram, setSelectPictogram } = useContext(SelectContext)
  const handlePictogram = (ID) => {
    setSelectPictogram(selectPictogram.concat({ id: ID, status: false }))
  }
  console.log(selectPictogram)

  return (

    <>

      {pictos.map((id) => (
        <div key={id} onClick={() => handlePictogram(id)}>
          <img src={`https://api.arasaac.org/api/pictograms/${id}`} alt={id} />
        </div>
      ))}

    </>

  )
}
