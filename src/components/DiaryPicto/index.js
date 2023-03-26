import SelectContext from 'context/selectContext'
import React, { useContext } from 'react'
import PictoModalConfig from 'components/PictoModalConfig'
import PictoModal from 'components/PictoModal'
import Cards from 'components/Cards'
import styles from 'components/DiaryPicto/DiaryPicto.module.css'
export default function DiaryPicto () {
  const { diaries } = useContext(SelectContext)

  return (
    <>
      <main className={styles.section}>
        <section className={styles.contain}>
          <div className={styles.layout}>
            {diaries.map((diary, index) => (
              <div key={index}>
                <Cards
                  title={diary.diary}
                  likes={10}
                  order={index + 1}
                  image={diary.image[0].img}
                />

              </div>

            ))}
          </div>
        </section>

      </main>

      <PictoModalConfig />
      <PictoModal />

    </>
  )
}
