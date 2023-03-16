import React, { useContext } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'

export default function SelectPicto () {
  const { selectPictogram, setSelectPictogram } = useContext(SelectContext)
  const removePicto = (img) => {
    const newPicto = selectPictogram.filter((select) => select.img !== img)
    setSelectPictogram(newPicto)
  }
  return (

    <div className='select-picto'>
      {selectPictogram.map(({ img }) => (
        <div key={img} onClick={() => removePicto(img)}>
          <img src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' />
        </div>
      ))}
    </div>

  )
}
