import { useContext } from 'react'
import SelectContext from 'context/selectContext'
import ListPictograms from 'components/ListPictograms'
import SearchPictoBar from 'components/SearchBarPicto'
import ModalAddDiary from 'components/ModalAddDiary'

export default function Search () {
  const { keyword } = useContext(SelectContext)

  return (
    <>
      <div className='flex flex-col justify-center content-center '>
        <SearchPictoBar />

        <ModalAddDiary />

        {keyword.length === 0
          ? <></>
          : <div className='h-full'><ListPictograms keyword={keyword} /></div>}
      </div>
    </>
  )
}
