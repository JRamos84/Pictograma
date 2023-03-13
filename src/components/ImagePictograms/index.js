
import './styles.css'
import ListPictograms from 'components/ListPictograms'

export default function ImagePictograms ({ keyword }) {
  return (
    <>
      <h1>Pictogramas</h1>
      <ListPictograms keyword={keyword} />

    </>
  )
}
