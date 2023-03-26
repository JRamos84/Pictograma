import classNames from 'classnames'
import { BsPencilFill } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import styles from './Card.module.css'
import SelectContext from 'context/selectContext'
import { useContext } from 'react'
const SRC = 'https://api.arasaac.org/api/pictograms/'

const Cards = ({ title, likes, order, image }) => {
  const { setShow, setShowConfig, setDiaryConfig, diaries, diariesConfig, setDiaries, setDiariesConfig } = useContext(SelectContext)
  function handleShow (breakpoint) {
    setShow(true)
    setDiaryConfig(title)
  }

  function handleShowConfig (breakpoint) {
    setShowConfig(true)
    setDiaryConfig(title)
  }
  function handleRemoveDiary (title) {
    const newDiaries = diaries.filter(diary => diary.diary !== title)
    const newDiariesConfig = diariesConfig.filter(diary => diary.diary !== title)
    setDiaries(newDiaries)
    setDiariesConfig(newDiariesConfig)
    localStorage.setItem('diariesConfig', JSON.stringify([]))
    localStorage.setItem('diaries', JSON.stringify(newDiaries))
  }
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div
        className='absolute top-2 right-3'
        onClick={() => handleRemoveDiary(title)}
      >
        <GrClose />

      </div>
      <div className={styles.header}>
        <div onClick={() => handleShow(true)} className={styles.imageWrapper}>
          <img src={`${SRC}` + image} className={styles.image} alt='' />
        </div>

      </div>
      <div className={styles.textWrapper}>
        <p className={styles.text}>{`${order}. ${title}`}</p>
      </div>

      <div className={styles.headerWrapper}>

        <div
          className={classNames([
            styles.primaryBadge,
            styles.badgeAnime,
            'group'
          ])}
          onClick={() => handleShowConfig(true)}
        >
          <BsPencilFill />

        </div>

      </div>

    </div>
  )
}

export default Cards
