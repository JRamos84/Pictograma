import { useContext } from 'react'
import SelectContext from 'context/selectContext'
export default function SearchPictoBar () {
  const { setKeyword, search, SetSearch } = useContext(SelectContext)

  const handleSubmit = (eve) => {
    eve.preventDefault()
    setKeyword(search)
  }
  const handleChange = (eve) => {
    SetSearch(eve.target.value)
  }
  return (
    <div className='w-full m-auto'>
      <form className='mx-4' onSubmit={handleSubmit}>
        <div className=' my-3'>
          <div className='text-white text-start font-bold text-lg'>Buscar Pictogramas</div>
        </div>
        <div className='flex border-2 rounded w-full justify-between'>
          <input type='text' className='py-2 w-full' placeholder='  Buscar...' onChange={handleChange} value={search} />
          <button className='flex items-center justify-center w-20 border-l bg-white'>
            <svg
              className='w-6 h-6 text-gray-600' fill='currentColor' xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path
                d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
              />
            </svg>
          </button>
        </div>
      </form>

    </div>
  )
}
