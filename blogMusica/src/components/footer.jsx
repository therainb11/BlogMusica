import { Link } from 'react-router-dom'
import styles from "../styles/footer.module.css"
export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.segundoFooter}>
            <p className={styles.textoCopy}> © 2025 Edgar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
