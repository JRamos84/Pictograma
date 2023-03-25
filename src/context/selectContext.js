import React, { useState } from 'react'

const Context = React.createContext()

export function SelectContextProvider ({ children }) {
  const [pictos, setPictos] = useState([])
  const [keyword, setKeyword] = useState('')
  const [selectPictogram, setSelectPictogram] = useState([])
  const [search, SetSearch] = useState('')
  const [diaries, setDiaries] = useState([])
  const [diariesConfig, setDiariesConfig] = useState([])
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)
  const [fullscreenConfig, setFullscreenConfig] = useState(true)
  const [showConfig, setShowConfig] = useState(false)
  const [showConfirmModal, setShowConfimModal] = useState(false)

  return (
    <Context.Provider value={{ showConfirmModal, setShowConfimModal, search, SetSearch, diariesConfig, setDiariesConfig, selectPictogram, setSelectPictogram, pictos, setPictos, keyword, setKeyword, show, setShow, fullscreen, setFullscreen, diaries, setDiaries, fullscreenConfig, setFullscreenConfig, showConfig, setShowConfig }}>
      {children}
    </Context.Provider>
  )
}
export default Context
