import React, { useContext } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'

export default function SelectPicto () {
  const { selectPictogram } = useContext(SelectContext)
  // console.log(selectPictogram)
  // const handleColor = ({ id, status }) => {
  //   const newList = [...selectPictogram]
  //   const artwork = newList.find(a => a.id === id)
  //   artwork.status = !status
  //   setSelectPictogram(newList)
  // }

  return (

    <div className='select-picto'>
      {selectPictogram.map(({ id }) => (

        <img key={id} src={`https://api.arasaac.org/api/pictograms/${id}`} alt='picto-select' />

      ))}
    </div>

  )
}
