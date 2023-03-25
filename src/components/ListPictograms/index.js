
import Picto from 'components/Pitco.js/Index'
import { usePicto } from 'Hooks/usePicto'

export default function ListPictograms ({ keyword }) {
  const { loandig } = usePicto({ keyword })
  return (
    <>
      {loandig
        ? <h1>loanding...</h1>
        : <Picto />}
    </>
  )
}
