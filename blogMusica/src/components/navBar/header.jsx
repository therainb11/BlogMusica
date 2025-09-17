import { Link } from 'react-router-dom'
import styles from '../navBar/header.module.css'
import LineIcon from '../../utils/Icon'
import { Spotify, X, MenuHamburger1 } from '../../assets/Iconos/iconosSVG'
import { useState } from 'react'
function Header() {
  //useState cambia ele stado para mostrar o no mostrar el nab-menu
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () =>{
      setMenuVisible( estado => !estado)
  }
  return (
    <header className={styles.header}>
      <img src="../src/assets/Logo.jpeg" alt="LOGO" className={styles.logo} />  
     {/*  El header de la izquierda cuenta con un operador ternario y se encarga de mostrar o no 
      dicha seccion */}
      <div className={`${styles.headerIzquierda} ${menuVisible ? styles.show : styles.hide}`}>
        
        <nav className={styles.ctext} aria-label="Navegación principal">
          <Link to="/inicio" className={styles.linkTextInicio}>
            Inicio
          </Link>
          {/* span, elemento en linea, no rompe el parrafo */}
          <span className={styles.separador}> </span>
          <Link to="/portafolio" className={styles.linkTextSnosotros}>
            Sobre nosotros
          </Link>
          <span className={styles.separador}> </span>
          <Link to="/contactanos" className={styles.linkTextContactanos}>
            Contactanos
          </Link>
        </nav>
      </div>

      <div  className={`${styles.headerDerecha} ${menuVisible ? styles.show : styles.hide}`} >
        <button className={styles.botonSpotify}>
          <Spotify size={29} marginR={5} /> PLAYLIST{' '}
        </button>
        <div className={styles.contenedorRedes}>
          <a className= {styles.iconoTiktok} href="https://www.tiktok.com/@rainba11" target="_blank">
            {' '}
            <LineIcon name="tiktok" size={28} color="#343C54" />{' '} 
          </a>

          <a  className= {styles.iconoX} href="" target="_blank">
            {' '}
            <X size={27}  /> 
          </a>
          <a className= {styles.iconoInsta} href="" target="_blank">
            {' '}
             <LineIcon size={28} name="instagram"  color="#343c54" />  
                
          </a>
        </div>
      </div>
     {/*  SVG para mostrar o no mostrar el sub menu responsivo, para usar el onClick en el svg hay que delcararlo tambien dentro del componente */}
      <MenuHamburger1  onClick={toggleMenu} size={28} marginR={5} className ={styles.MenuHamburger1}  />
    </header>
  )
}

export default Header
