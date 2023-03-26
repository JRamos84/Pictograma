import SelectContext from 'context/selectContext'
import { useContext } from 'react'
import './styles.css'
import PictoSelectConfig from 'components/PictoSelectConfig'
import PictoCarruselConfig from 'components/PictoCarruselConfig'
import Button from 'react-bootstrap/Button'
import { AiOutlinePlayCircle } from 'react-icons/ai'
export default function PictoModalConfig () {
  const {
    diaries, diaryConfig, showConfig,
    setShowConfig,
    setDiaries,
    diariesConfig
  } = useContext(SelectContext)
  const diary = diaries.find(a => a.diary === diaryConfig) || []

  const handleShow = () => {
    setDiaries(diariesConfig)
  }
  function handleShowConfig () {
    setShowConfig(false)
  }
  return (
    <>
      {showConfig && diary.length !== 0
        ? (
          <>
            <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full'>
              <div className='relative w-full h-full my-6 mx-auto max-w-3xl'>
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  <div className='relative flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t '>
                    <h3 className='text-2xl font=semibold'>{diary.diary}</h3> <Button onClick={handleShowConfig}>X</Button>
                  </div>
                  <div className='flex flex-col h-screen gap-2 bg-blue-600'>
                    <PictoCarruselConfig diary={diary} />
                    <PictoSelectConfig diary={diary.diary} />

                  </div>

                  <Button onClick={() => handleShow(true)}>
                    <AiOutlinePlayCircle />
                  </Button>
                </div>
              </div>
            </div>
          </>
          )
        : null}

    </>
  )
}
