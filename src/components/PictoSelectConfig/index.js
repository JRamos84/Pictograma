/* eslint-disable react/jsx-closing-tag-location */
import { useContext, useEffect, useState } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'
import cx from 'classnames'
export default function PictoSelectConfig ({ diary }) {
  const { diariesConfig, setDiariesConfig } = useContext(SelectContext)
  const [imagePicto, setImagePicto] = useState(diariesConfig.find(b => b.diary === diary))
  const [loandingConfig, setLoandingConfig] = useState(false)
  useEffect(function () {
    setLoandingConfig(true)
    setImagePicto(diariesConfig.find(b => b.diary === diary))
    setLoandingConfig(false)
  }, [diariesConfig])

  const handleCheckConfig = (statusConfig, img, counter) => {
    const newdiaries = [...diariesConfig]
    const atDiary = newdiaries.find(a => a.diary === diary)
    const atImg = atDiary.image.find(b => b.counter === counter)
    atImg.statusConfig = !statusConfig
    setDiariesConfig(newdiaries)
  }

  return (
    <>
      {loandingConfig
        ? <h1>loanding...</h1>

        : <div className='grid grid-cols-1 w-full '>
          {imagePicto.image.map(({ img, statusConfig, counter }, idx) => (
            <div onClick={() => handleCheckConfig(statusConfig, img, counter)} className={cx('pictoSelect__image', statusConfig && 'ckeckList')} key={idx}>
              <img src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' />
            </div>
          ))}
        </div>}
    </>
  )
}
