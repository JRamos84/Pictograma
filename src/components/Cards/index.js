import classNames from 'classnames'
import { BsPencilFill } from 'react-icons/bs'
import styles from './Card.module.css'
import SelectContext from 'context/selectContext'
import { useContext } from 'react'
const SRC = 'https://api.arasaac.org/api/pictograms/'

const Cards = ({ title, likes, order, image }) => {
  const { setFullscreen, setShow, setFullscreenConfig, setShowConfig } = useContext(SelectContext)
  function handleShow (breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }

  function handleShowConfig (breakpoint) {
    setFullscreenConfig(breakpoint)
    setShowConfig(true)
  }
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
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
