/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react'
import SelectContext from 'context/selectContext'

export default function ConfirmModal () {
  const { showConfirmModal, setShowConfimModal } = useContext(SelectContext)
  const handleConfim = () => {
    setShowConfimModal(false)
  }
  return (
    <>
      {showConfirmModal
        ? <div
            className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'
          >
          <div className='mt-3 text-center'>

            <h3 className='text-lg leading-6 font-medium text-gray-900'>Listo!</h3>
            <div className='mt-2 px-7 py-3'>
              <p className='text-sm text-gray-500'>
                Su Agenda fue creada con exito!!
              </p>
            </div>
            <div className='items-center px-4 py-3'>
              <button
                onClick={handleConfim}
                className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300'
              >
                OK
              </button>
            </div>
          </div>
          </div>
        : null}

    </>

  )
}
