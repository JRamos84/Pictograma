import React, { useContext } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'
export default function SelectPicto () {
  const { selectPictogram, setSelectPictogram } = useContext(SelectContext)
  const handleColor = ({ id, status }) => {
    const newList = [...selectPictogram]
    const artwork = newList.find(a => a.id === id)
    artwork.status = !status
    setSelectPictogram(newList)
  }
  return (
    <div className='select-picto'>

      {selectPictogram.map(({ id, status }) => (
        <div className='picto' key={id}>
          <img src={`https://api.arasaac.org/api/pictograms/${id}`} alt={id} />
          <div onClick={() => handleColor({ id, status })} style={status ? { background: 'blue' } : { background: 'white' }}>color</div>
        </div>
      ))}
    </div>

  )
}
