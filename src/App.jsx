import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Projets from './pages/Projets'


function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
