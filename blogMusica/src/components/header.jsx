import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <h1 className="site-title">Blog de Edgar</h1>
      <nav className="main-nav" aria-label="Navegación principal">
        <ul>
          <li><Link to="/inicio">Inicio</Link></li>
          <li><Link to="/portafolio">Portafolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;