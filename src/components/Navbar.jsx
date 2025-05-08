import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/interest">Centre d'intérêt</Link></li>
      </ul>
    </nav>
  )
}
export default NavBar
