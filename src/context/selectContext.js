import React, { useState } from 'react'

const Context = React.createContext()

export function SelectContextProvider ({ children }) {
  const [pictos, setPictos] = useState([])
  const [keyword, setKeyword] = useState('')

  return (
    <Context.Provider value={{ pictos, setPictos, keyword, setKeyword }}>
      {children}
    </Context.Provider>
  )
}
export default Context
