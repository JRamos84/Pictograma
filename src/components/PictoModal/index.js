
import SelectContext from 'context/selectContext'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import CardSelectModal from 'components/CardSelectModal'
export default function PictoModal () {
  const { show, setShow, diaryConfig, diariesConfig } = useContext(SelectContext)
  const diary = diariesConfig.find(a => a.diary === diaryConfig) || []
  function handleShowConfig () {
    setShow(false)
  }

  return (
    <>{show && diary.length !== 0
      ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full'>
            <div className='relative w-full h-full my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='relative flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t '>
                  <h3 className='text-2xl font=semibold'>{diary.diary}</h3>
                  <Button onClick={handleShowConfig}>X</Button>
                </div>
                <div>
                  {diary.image.map(({ status, img, counter }, index) => (
                    <div key={index}>
                      <CardSelectModal
                        order={index + 1}
                        image={img}
                        status={status}
                        diary={diary.diary}
                        counter={counter}
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </>

        )
      : null}
    </>

  )
}
