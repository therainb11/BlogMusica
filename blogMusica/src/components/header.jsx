import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';
function Header() {
  return (
    <header className={styles.header}>
      <img src = "../src/assets/Logo.jpeg" alt = "LOGO" className={styles.logo}/>
      <nav className={styles.ctext} aria-label="Navegación principal">
          <Link to="/inicio" className={styles.linkText}>Inicio</Link>
          {/* span, elemento en linea, no rompe el parrafo */}
          <span className={styles.separador}>   </span>
          <Link to="/portafolio" className={styles.linkText}>Sobre nosotros</Link>
          <span className={styles.separador}>   </span>
          <Link to="/contactanos" className={styles.linkText}>Contactanos</Link>

      </nav>

    </header>
  );
}

export default Header;