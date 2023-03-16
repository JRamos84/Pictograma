const API_URL = 'https://api.arasaac.org/api/pictograms/'

const fromApiResponseToPictograms = apiResponse => {
  const datas = apiResponse
  const idPictograms = datas.map(data => {
    const id = data._id
    return id
  })
  return idPictograms
}

export default async function getPictogram (keyword) {
  const apiUrl = `${API_URL}es/search/${keyword}`
  const response = await fetch(apiUrl)
  const datas = await response.json()
  console.log('PETICION CORRECTA')
  return fromApiResponseToPictograms(datas)
}
