
import './App.css'
import { Route, Link } from 'wouter'
import Home from 'Page/Home'
import searchResults from 'Page/SeachResults'
import Shedule from 'Page/Shedule'
import { SelectContextProvider } from 'context/selectContext'

function App () {
  return (

    <div className='App'>
      <Link to='/'>
        <h1>Inicio</h1>
      </Link>
      <Link to='/search/'>
        <h1>Buscar pictogramas</h1>
      </Link>
      <Link to='/shedule'>
        <h1>Agenda</h1>
      </Link>
      <SelectContextProvider>
        <Route component={Home} path='/' />

        <Route
          component={searchResults}
          path='/search/'
        />

        <Route
          component={Shedule}
          path='/shedule/'
        />
      </SelectContextProvider>

    </div>
  )
}

export default App
