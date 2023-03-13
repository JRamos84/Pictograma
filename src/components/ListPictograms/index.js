
import Picto from 'components/Pitco.js/Index'
import { usePicto } from 'Hooks/usePicto'
import Row from 'react-bootstrap/Row'

export default function ListPictograms ({ keyword }) {
  const { loandig } = usePicto({ keyword })
  return (
    <>
      {loandig
        ? <h1>loanding...</h1>
        : <Row xs={3} sm={4} md={10} xl={12} xxl={14} className='g-4'><Picto /></Row>}
    </>
  )
}
