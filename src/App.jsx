import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Projets from './pages/Projets'


function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App
