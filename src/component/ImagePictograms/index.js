
import './styles.css'
import ListPictograms from 'component/ListPictograms'
import SelectPicto from 'component/SelectPicto'

export default function ImagePictograms ({ keyword }) {
  return (
    <>
      <h1>Buscar Pictograma</h1>
      <ListPictograms keyword={keyword} />
      <SelectPicto />

    </>
  )
}
