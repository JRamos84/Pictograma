import React, { useState, useContext } from 'react'
import SelectContext from 'context/selectContext'
import SelectPicto from 'components/SelectPicto'
import ConfirmModal from 'components/ConfirmModal'
const ModalAddDiary = () => {
  const [showModal, setShowModal] = useState(false)
  const { selectPictogram, setSelectPictogram, SetSearch, setShowConfimModal } = useContext(SelectContext)
  const [name, setName] = useState('')
  const handleChangeDiary = (eve) => {
    setName(eve.target.value)
  }
  const handleSubmitDiary = (eve) => {
    eve.preventDefault()
    console.log('aqui')
    if (selectPictogram.length !== 0) {
      let exiting = JSON.parse(localStorage.getItem('diaries'))
      exiting = exiting || []
      exiting.push({ diary: name, image: selectPictogram })
      localStorage.setItem('diaries', JSON.stringify(exiting))
      setSelectPictogram([])
      SetSearch('')
      setName('')
      setShowModal(false)
      setShowConfimModal(true)
    } else { alert('Agenda Vacia') }
  }

  return (
    <>
      <button
        className='fixed z-50 bottom-12 right-0 bg-blue-600 text-white active:bg-blue-500
      font-bold text-3xl px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
        type='button'
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      {showModal
        ? (
          <>
            <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-80 my-6 mx-auto max-w-3xl'>
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  <div className='relative flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t '>
                    <h3 className='text-2xl font=semibold'>Agenda</h3>
                    <button
                      className='absolute top-0 right-0 bg-transparent border-0 text-black float-right'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='text-black opacity-7 h-7 w-7  block bg-gray-300 border-1 py-auto rounded-full'>
                        x
                      </span>
                    </button>
                  </div>
                  <div className=' p-6 flex-auto'>
                    <form onSubmit={handleSubmitDiary} className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full'>
                      <label className='block text-black text-sm font-bold mb-1'>
                        Nombre de su agenda
                      </label>
                      <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' value={name} placeholder=' agenda' onChange={handleChangeDiary} />
                      <button
                        className=' absolute right-2 bottom-0 text-white bg-blue-500 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                        onClick={handleSubmitDiary}
                      >
                        Agregar
                      </button>
                    </form>
                  </div>
                  <SelectPicto />
                  <div className='flex mx-3 p-2 border-t border-solid border-blueGray-200 rounded-b'>
                    <button
                      className='text-red-600 background-transparent font-bold uppercase  py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                      onClick={() => setShowModal(false)}
                    >
                      cerrar
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </>
          )
        : null}
      <ConfirmModal />
    </>
  )
}

export default ModalAddDiary
