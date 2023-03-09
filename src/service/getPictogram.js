
const fromApiResponseToPictograms = apiResponse => {
  const datas = apiResponse
  const idPictograms = datas.map(data => {
    const id = data._id
    return id
  })
  // console.log(idPictograms)
  return idPictograms
}

export default function getPictogram ({ keyword }) {
  if (keyword === '') keyword = 'dog'
  const apiUrl = `https://api.arasaac.org/api/pictograms/en/bestsearch/${keyword}`
  //  console.log(apiUrl)
  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToPictograms)
}
