
import Picto from 'components/Pitco.js/Index'
import SpinnerLoader from 'components/Spinner'
import { usePicto } from 'Hooks/usePicto'

export default function ListPictograms ({ keyword }) {
  const { loandig } = usePicto({ keyword })
  return (
    <>
      {loandig
        ? <SpinnerLoader />
        : <Picto />}
    </>
  )
}
