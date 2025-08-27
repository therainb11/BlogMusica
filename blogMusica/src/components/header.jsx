import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'
import LineIcon from './Icon/Icon'
import {Spotify, X} from '../assets/Iconos/iconosSVG'
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerIzquierda}>
        <img src="../src/assets/Logo.jpeg" alt="LOGO" className={styles.logo} />
        <nav className={styles.ctext} aria-label="Navegación principal">
          <Link to="/inicio" className={styles.linkText}>
            Inicio
          </Link>
          {/* span, elemento en linea, no rompe el parrafo */}
          <span className={styles.separador}> </span>
          <Link to="/portafolio" className={styles.linkText}>
            Sobre nosotros
          </Link>
          <span className={styles.separador}> </span>
          <Link to="/contactanos" className={styles.linkText}>
            Contactanos
          </Link>
        </nav>
      </div>

      <div className={styles.headerDerecha}>
        <button className={styles.botonSpotify}>
          <Spotify size={29} marginR={5} /> {' '} PLAYLIST {' '}
        </button>
        <div className={styles.contenedorRedes}>
          <a href='https://www.tiktok.com/@rainba11'> <LineIcon name= "tiktok" size={28} color = "#343C54" /> </a>
        
          <a href=''> <X size = {28}  margin = {10}/></a>
        <a href=''> <LineIcon size= {28} name = "instagram" color = "#343c54"/></a>
        </div>
      </div>
    </header>
  )
}

export default Header
