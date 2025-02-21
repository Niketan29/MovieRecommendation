import './css/App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import Favorite from './Pages/Fav'
import Navbar from './Component/navbar'

function App() {

  return (
    <MovieProvider>
    <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Fav' element={<Favorite/>}></Route>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
