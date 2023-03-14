import React, { useContext } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'

export default function SelectPicto () {
  const { selectPictogram, setSelectPictogram } = useContext(SelectContext)
  // console.log(selectPictogram)
  // const handleColor = ({ id, status }) => {
  //   const newList = [...selectPictogram]
  //   const artwork = newList.find(a => a.id === id)
  //   artwork.status = !status
  //   setSelectPictogram(newList)
  // }
  const removePicto = (id) => {
    const newPicto = selectPictogram.filter((select) => select.id !== id)
    setSelectPictogram(newPicto)
  }
  return (

    <div className='select-picto'>
      {selectPictogram.map(({ id }) => (
        <div key={id} onClick={() => removePicto(id)}>
          <img src={`https://api.arasaac.org/api/pictograms/${id}`} alt='picto-select' />
        </div>
      ))}
    </div>

  )
}
