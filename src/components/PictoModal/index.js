
import CardSelectCardModal from 'components/CardSelectModal'
import SelectContext from 'context/selectContext'
import { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from './styles.css'
export default function PictoModal ({ diary }) {
  const { fullscreen, show, setShow } = useContext(SelectContext)

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{diary.diary}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='select-picto'>

            <main className={styles.section}>
              <section className={styles.contain}>
                <div className={styles.layout}>
                  {diary.image.map(({ status, img }, index) => (
                    <div key={index}>
                      <CardSelectCardModal
                        order={index + 1}
                        image={img}
                        status={status}
                        diary={diary.diary}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </main>

          </div>
        </Modal.Body>
      </Modal>
    </>

  )
}
