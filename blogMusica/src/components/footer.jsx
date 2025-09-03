import { Link } from 'react-router-dom'
import styles from '../styles/footer.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.textoCopy}>
        {' '}
        © 2025 Edgar. Todos los derechos reservados.
      </p>
      <img src="../src/assets/Logo.jpeg" alt="LOGO" className={styles.logo} />
      <div className={styles.segundoFooter}>
        <div className={styles.contenedorBotones}>
          <button className={styles.botonLegal}>
            Términos y condiciones
          </button>

          <button className={styles.botonLegal}>
            Politicas de privacidad
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
