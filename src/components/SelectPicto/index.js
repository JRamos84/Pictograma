import React, { useContext } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export default function SelectPicto () {
  const { selectPictogram, setSelectPictogram } = useContext(SelectContext)
  const removePicto = (img) => {
    const newPicto = selectPictogram.filter((select) => select.img !== img)
    setSelectPictogram(newPicto)
    console.log(selectPictogram.length)
  }
  return (
    <div className='carousel__container'>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={selectPictogram.length}
        visibleSlides={3}
        isIntrinsicHeight
      >
        <Slider>

          {selectPictogram.map(({ img }, idx) => (
            <Slide key={idx} index={idx}>
              <div className='relative'>
                <div className='absolute top-0 right-0 px-6 cursor-pointer text-lg font-bold text-red-500' onClick={() => removePicto(img)}>x</div>
                <img className='w-20 h-20' src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' />

              </div>
            </Slide>
          ))}

        </Slider>
        <div className='btn-carrusel'>
          <ButtonBack className='btn-arrow'>&lt;&lt;</ButtonBack>
          <ButtonNext className='btn-arrow'>&gt;&gt;</ButtonNext>
        </div>

      </CarouselProvider>

    </div>

  )
}
