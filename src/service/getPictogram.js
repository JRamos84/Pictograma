
const fromApiResponseToPictograms = apiResponse => {
  const datas = apiResponse
  const idPictograms = datas.map(data => {
    const id = data._id
    return id
  })
  console.log(idPictograms)
  return idPictograms
}

export default function getPictogram (keyword = 'wolf') {
  const apiUrl = `https://api.arasaac.org/api/pictograms/en/bestsearch/${keyword}`
  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToPictograms)
}
