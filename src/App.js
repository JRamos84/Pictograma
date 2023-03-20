
import './App.css'
import NavBarMenu from 'layouts/NavbarMenu'
import Home from 'Page/Home'
import About from './Page/About'
import { SelectContextProvider } from 'context/selectContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from 'Page/Search'
import FooterMenu from 'layouts/FooterMenu'
import Profile from 'Page/Profile'

function App () {
  return (

    <div className='App'>
      <BrowserRouter>
        <SelectContextProvider>
          <Routes>
            <Route path='/' element={<NavBarMenu />}>
              <Route index element={<Home />} />
              <Route path='search' element={<Search />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<contact />} />
            </Route>
          </Routes>
          <Routes>
            <Route path='/' element={<FooterMenu />}>
              <Route index element={<Home />} />
              <Route path='search' element={<Search />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>

        </SelectContextProvider>

      </BrowserRouter>

    </div>
  )
}

export default App
