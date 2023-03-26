import { useContext, useState } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'

export default function Picto () {
  const { selectPictogram, setSelectPictogram, pictos } = useContext(SelectContext)
  const [counter, setCounter] = useState(0)

  const removePicto = (img) => {
    const newPicto = selectPictogram.filter((select) => select.img !== img)
    checkBoxSelect(img)
    setSelectPictogram(newPicto)
  }
  const handlePictogram = (img) => {
    const founder = selectPictogram.findIndex(e => e.img === img)
    if (selectPictogram.length === 0 || founder === -1) {
      setSelectPictogram(selectPictogram.concat({ img, statusConfig: false, counter, status: false }))
      setCounter(counter => counter + 1)
    }

    if (founder !== -1) removePicto(img)
  }
  const checkBoxSelect = (img) => {
    const checkB = selectPictogram.findIndex((image) => image.img === img)

    return checkB
  }

  return (

    <div className=' grid grid-cols-2 justify-between align-baseline gap-3 pt-4 mx-3 h-full'>

      {pictos.map((img, idx) => (

        <div key={idx} className='relative  bg-white h-32 rounded-3xl flex flex-col items-center justify-center  '>
          <div className='absolute top-2 right-2 cursor-pointer ' onClick={() => handlePictogram(img)}>
            {checkBoxSelect(img) !== -1 ? <GrCheckboxSelected size={30} /> : <GrCheckbox size={30} />}
          </div>

          <div className='relative mt-2 mx-2'>
            <div className='h-20 w-20 rounded-2xl overflow-hidden'>
              <img className='object-cover w-full h-full' src={`https://api.arasaac.org/api/pictograms/${img}`} />
            </div>
            <div className='pt-2 pb-3 w-full px-4'>
              <h1 className='font-medium leading-none text-base tracking-wider text-gray-400;
}'
              >title
              </h1>
            </div>

          </div>

        </div>

      ))}

    </div>

  )
}
