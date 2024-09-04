

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './pages/menu'
import NossoCafe from './pages/nossocafe'

import CappucinoLeite from './pages/cappucinoleite'
import CappucinoChocolate from './pages/cappucinochocolate'
import Cappucino from './pages/cappucino'
import CappucinoCaramelo from './pages/cappucinocaramelo'
import CappucinoSemAcucar from './pages/cappucinosemacucar'
import Novidades from './pages/novidades'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path="/nossocafe" element={<NossoCafe/>}/>
      <Route path="/novidades" element={<Novidades/>}/>
      <Route path="/cappucinoleite" element={<CappucinoLeite/>}/>
      <Route path="/cappucinochocolate" element={<CappucinoChocolate/>}/>
      <Route path="/cappucino" element={<Cappucino/>}/>
      <Route path="/cappucinocaramelo" element={<CappucinoCaramelo/>}/>
      <Route path="/cappucinosemacucar" element={<CappucinoSemAcucar/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
