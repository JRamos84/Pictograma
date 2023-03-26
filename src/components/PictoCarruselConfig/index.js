import { useContext } from 'react'
import SelectContext from 'context/selectContext'
import { CarouselProvider, Slider, Slide, DotGroup, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './styles.css'

export default function PictoCarruselConfig ({ diary }) {
  const { diariesConfig, setDiariesConfig } = useContext(SelectContext)
  const sortPicto = ({ img, diaryPicto, statusConfig }) => {
    const newdiaries = [...diariesConfig]
    const ListPicto = newdiaries.find(a => a.diary === diaryPicto)
      .image.map(atWork => {
        if (atWork.statusConfig !== statusConfig) {
          return { ...atWork, img }
        } return atWork
      })
    const newImage = [{ ...newdiaries, diary: diaryPicto, image: ListPicto }]
    setDiariesConfig(newImage)
    localStorage.setItem('diariesConfig', JSON.stringify(diariesConfig))
  }
  return (
    <div className='carousel__container'>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={diary.image.length}
        visibleSlides={1}
        isIntrinsicHeight
      >
        <Slider>

          {diary.image.map(({ img, statusConfig }, idx) => (
            <Slide key={idx} index={idx}>
              <div className='flex justify-center bg-blue-600'>
                <img src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' onClick={() => sortPicto({ img, diaryPicto: diary.diary, statusConfig })} />

              </div>
            </Slide>
          ))}

        </Slider>
        <div className='btn-controls'>
          <ButtonBack className='btn-arrow text-2xl'>&lt;&lt;</ButtonBack>
          <DotGroup className='dot-group' />
          <ButtonNext className='btn-arrow text-2xl'>&gt;&gt;</ButtonNext>
        </div>

      </CarouselProvider>

    </div>

  )
}
