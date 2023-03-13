
import './App.css'
import NavBarMenu from 'layouts/NavbarMenu'
import Home from 'Page/Home'
import About from './Page/About'
import Diary from 'Page/Diary'
import { SelectContextProvider } from 'context/selectContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from 'Page/Search'

function App () {
  return (

    <div className='App'>
      <BrowserRouter>
        <SelectContextProvider>
          <Routes>
            <Route path='/' element={<NavBarMenu />}>
              <Route index element={<Home />} />
              <Route path='search' element={<Search />} />
              <Route path='diary' element={<Diary />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<contact />} />
            </Route>
          </Routes>

        </SelectContextProvider>

      </BrowserRouter>

    </div>
  )
}

export default App
