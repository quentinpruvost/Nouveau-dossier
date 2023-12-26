// Utilise NavLink pour contrôler l'affichage des pages
import { NavLink } from 'react-router-dom';
import cv from './cv.pdf'

// Composant navigation
function Nav(){

  return(
    <div>
      <nav className="navContainer">
        <p className="navContainer--name">Quentin Pruvost</p>
        <div className="linksContainer">
          <NavLink to="/" id='link' className={({isActive}) => isActive ? "active": ""}>Accueil</NavLink>
          <NavLink to="/projets" id='link' className={({isActive}) => isActive ? "active": ""}>Projets</NavLink>
          <NavLink to="/contact" id='link' className={({isActive}) => isActive ? "active": ""}>Contact</NavLink>
          <a href={cv} id='link' target="_blank" rel="noreferrer">Cv</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav