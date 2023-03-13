import { useContext, useEffect, useState } from 'react'
import SelectContext from 'context/selectContext'
import getPictogram from 'service/getPictogram'

export function usePicto ({ keyword } = { keyword: null }) {
  const [loandig, setLoanding] = useState(false)
  const { pictos, setPictos } = useContext(SelectContext)
  const keywordToUse = keyword
  // console.log(keywordToUse)
  useEffect(
    function () {
      setLoanding(true)
      const getIds = async () => {
        try {
          const Ids = await getPictogram(keywordToUse)
          setPictos(Ids)
          setLoanding(false)
        } catch (e) {
          setPictos([])
        }
      }
      getIds()
    }, [keyword, setPictos, keywordToUse])
  return { loandig, pictos }
}
