import React, { useState } from 'react'

const Context = React.createContext()

export function SelectContextProvider ({ children }) {
  const [pictos, setPictos] = useState([])
  const [keyword, setKeyword] = useState('')
  const [selectPictogram, setSelectPictogram] = useState([])

  const [diaries, setDiaries] = useState([])
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)
  const [fullscreenConfig, setFullscreenConfig] = useState(true)
  const [showConfig, setShowConfig] = useState(false)

  return (
    <Context.Provider value={{ selectPictogram, setSelectPictogram, pictos, setPictos, keyword, setKeyword, show, setShow, fullscreen, setFullscreen, diaries, setDiaries, fullscreenConfig, setFullscreenConfig, showConfig, setShowConfig }}>
      {children}
    </Context.Provider>
  )
}
export default Context
