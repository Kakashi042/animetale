
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Info from './components/Info'
import Search from './components/Search'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mal_id' element={<Details />} />
        <Route path='/info' element={<Info />} />
        <Route path='/search/:search' element={<Search />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
