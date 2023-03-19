import { useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import SelectContext from 'context/selectContext'

export default function PictoCarruselConfig ({ diary }) {
  const { diariesConfig, setDiariesConfig } = useContext(SelectContext)

  const sortPicto = ({ img, diaryPicto, statusConfig }) => {
    const newdiaries = [...diariesConfig]
    console.log(newdiaries)
    const ListPicto = newdiaries.find(a => a.diary === diaryPicto)
      .image.map(atWork => {
        if (atWork.statusConfig !== statusConfig) {
          console.log(atWork)
          return { ...atWork, img }
        } return atWork
      })
    console.log(ListPicto)
    const newImage = [{ ...newdiaries, diary: diaryPicto, image: ListPicto }]
    setDiariesConfig(newImage)
    localStorage.setItem('diariesConfig', JSON.stringify(diariesConfig))
  }
  return (
    <Carousel>
      {diary.image.map(({ img, statusConfig }, idx) => (

        <Carousel.Item key={idx}>
          <img
            className='d-block w-200'
            src='holder.js/800x400?text=First slide&bg=373940'
            alt='First slide'
          />

          <Carousel.Caption>
            <div className='select-picto-carrusel-img' onClick={() => sortPicto({ img, diaryPicto: diary.diary, statusConfig })}>    <img src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' /></div>

          </Carousel.Caption>
        </Carousel.Item>

      ))}
    </Carousel>
  )
}
