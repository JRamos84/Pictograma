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
  const [showConfig, setShowConfig] = useState(false)
  const [showConfirmModal, setShowConfimModal] = useState(false)
  const [diaryConfig, setDiaryConfig] = useState(null)

  return (
    <Context.Provider value={{ diaryConfig, setDiaryConfig, showConfirmModal, setShowConfimModal, search, SetSearch, diariesConfig, setDiariesConfig, selectPictogram, setSelectPictogram, pictos, setPictos, keyword, setKeyword, show, setShow, fullscreen, setFullscreen, diaries, setDiaries, showConfig, setShowConfig }}>
      {children}
    </Context.Provider>
  )
}
export default Context
