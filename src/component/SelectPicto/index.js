import React, { useContext } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'
export default function SelectPicto () {
  const { selectPictogram } = useContext(SelectContext)

  return (
    <div className='select-picto'>

      {selectPictogram.map(({ id, status }) => (
        <div className='picto' key={id}>
          <img src={`https://api.arasaac.org/api/pictograms/${id}`} alt={id} />
          <div onClick={() => !status} style={status ? { background: 'blue' } : { background: 'white' }}>color</div>
        </div>
      ))}
    </div>

  )
}
