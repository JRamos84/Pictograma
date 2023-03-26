import classNames from 'classnames'
import styles from './Card.module.css'
import SelectContext from 'context/selectContext'
import { useContext } from 'react'
const SRC = 'https://api.arasaac.org/api/pictograms/'

const CardSelectModal = ({ status, order, image, diary, counter }) => {
  const { diariesConfig, setDiariesConfig } = useContext(SelectContext)
  const handleCheck = (status, img, diary) => {
    const newdiaries = [...diariesConfig]
    const atDiary = newdiaries.find(a => a.diary === diary)
    const atImg = atDiary.image.find(b => b.counter === counter)
    atImg.status = !status
    setDiariesConfig(newdiaries)
  }

  return (
    <div className={styles.checkCard}>
      <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <img src={`${SRC}` + image} className={styles.image} alt='' />
          </div>

        </div>

      </div>

      <div
        className={classNames(styles.wrapperAnimeList, styles.wrapperCheck, `checkbox ${status ? styles.wrapperCheckList : ''}`)}
        onClick={() => handleCheck(status, image, diary, counter)}
      >

        <div className={styles.imageWrapperCheck}>
          {status ? <img src={require('./images4.png')} className={styles.imagecheck} alt='' /> : ''}
        </div>

      </div>

    </div>

  )
}

export default CardSelectModal
