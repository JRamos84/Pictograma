/* eslint-disable react/jsx-closing-tag-location */
import { useContext, useEffect, useState } from 'react'
import SelectContext from 'context/selectContext'
import './styles.css'
export default function PictoSelectConfig ({ diary }) {
  const { diariesConfig, setDiariesConfig, diaries } = useContext(SelectContext)
  const [imagePicto, setImagePicto] = useState(diaries.find(b => b.diary === diary))
  const [loandingConfig, setLoandingConfig] = useState(false)
  useEffect(function () {
    setLoandingConfig(false)
    setImagePicto(diariesConfig.find(b => b.diary === diary))
  }, [diariesConfig])

  const handleCheckConfig = (status, img) => {
    const newdiaries = diariesConfig.map(atwork => {
      return { ...atwork, image: [...atwork.image.map((a, idx) => ({ ...a, statusConfig: false }))] }
    })
    const atDiary = newdiaries.find(a => a.diary === diary)
    const atImg = atDiary.image.find(b => b.img === img)
    atImg.statusConfig = !status
    setDiariesConfig(newdiaries)
  }

  return (
    <>
      {loandingConfig
        ? <h1>loanding...</h1>

        : <div className='select-picto-config-sort'>
          {imagePicto.image.map(({ img, statusConfig }, idx) => (
            <div key={idx}>
              <img src={`https://api.arasaac.org/api/pictograms/${img}`} alt='picto-select' />
              <label>
                <input type='checkbox' onChange={() => handleCheckConfig(statusConfig, img)} />
                <span
                  className={`checkbox ${statusConfig ? 'checkbox--active' : ''}`}
                  aria-hidden='true'
                />

              </label>
            </div>
          ))}
        </div>}
    </>
  )
}
