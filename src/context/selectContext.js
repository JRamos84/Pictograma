import React, { useState } from 'react'

const Context = React.createContext()

export function SelectContextProvider ({ children }) {
  const [pictos, setPictos] = useState([])
  const [keyword, setKeyword] = useState('')
  const [selectPictogram, setSelectPictogram] = useState([])

  return (
    <Context.Provider value={{ selectPictogram, setSelectPictogram, pictos, setPictos, keyword, setKeyword }}>
      {children}
    </Context.Provider>
  )
}
export default Context
