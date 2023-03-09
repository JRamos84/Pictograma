
import './App.css'
import { Route, Link } from 'wouter'
import Home from 'Page/Home'
import searchResults from 'Page/SeachResults'

function App () {
  return (

    <div className='App'>
      <Link to='/'>
        <h1>Inicio</h1>
      </Link>
      <Link to='/search/'>
        <h1>Buscar pictogramas</h1>
      </Link>

      <Route component={Home} path='/' />

      <Route
        component={searchResults}
        path='/search/'
      />

    </div>
  )
}

export default App
