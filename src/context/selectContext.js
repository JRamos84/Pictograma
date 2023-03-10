import React, { useState } from 'react'

const Context = React.createContext()

export function SelectContextProvider ({ children }) {
  const [selectPictogram, setSelectPictogram] = useState([{ id: 0, status: false }])

  return (
    <Context.Provider value={{ selectPictogram, setSelectPictogram }}>
      {children}
    </Context.Provider>
  )
}
export default Context
