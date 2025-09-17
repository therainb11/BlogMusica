// pagina principal
import Header from '../components/navBar/header'
import Footer from '../components/footer'
import styles from '../styles/mainPage.module.css'
export default function MainPage() {
  return (
    <>
      <div className="grid-container">
        <Header />

        <div className={styles.slogan}>
          <p className={styles.textSlogan}> THE MUSIC IS FOR EVERYONE</p>
          <img
            className={styles.imagenSlogan}
            src="../src/assets/imagenSlogan.jpeg"
          />
        </div>
        <main>
          {/* Seccion de noticias */}
          {/* Primera noticia */}
          <div className={styles.noticia}>
            <img
              className={styles.imagenNoticia}
              src="../src/assets/Twenty one pilots New.jpg"
            />
            <div className={styles.parrafoNoticia}>
              <h1 className="title">
                Twenty One Pilots se retira? El fin de una narrativa de 10 años
              </h1>

              <p>
                Tyler Joseph y Josh Dun anunciaron que su próximo disco, Breach,
                saldrá el 12 de septiembre de 2025. Este álbum cierra la
                historia conceptual que comenzó con Blurryface en 2015 y
                continuó en Trench y Clancy. <br />
                Tyler lo describió como:
              </p>
              <p className={styles.citadoPersona}>
                “Breach me quitó todo lo que tenía… pero al mirar estos archivos
                WAV terminados, me doy cuenta de lo poco que significan hasta
                que llegan a ustedes”.
              </p>
              <p>
                Además del cierre narrativo que representa Breach, el álbum
                incluye 13 temas que profundizan en la evolución emocional y
                conceptual de Twenty One Pilots
              </p>
              <div className={styles.botonDerecha}>
                <button className={styles.botonVermas}>Leer mas </button>
              </div>
            </div>
          </div>
          {/* Segunda noticia */}
          <div className={styles.noticia}>
            <div className={styles.parrafoNoticia}>
              <h1 className="title">
                El retiro de “The Weeknd”: ¿fin de una era o inicio de otra?
              </h1>

              <p>
                Abel Tesfaye anunció que dejará de usar el nombre artístico The
                Weeknd tras el lanzamiento de su próximo álbum y película
                titulados Hurry Up Tomorrow. En una entrevista con Variety,
                explicó que el alias representa una mentalidad que ya no desea
                habitar: <br />
              </p>
              <p className={styles.citadoPersona}>
                “Es un estado mental en el que tengo que entrar y que
                simplemente ya no deseo. Siento que viene con tantas cosas…”
              </p>
              <p>
                Después de más de 15 años como The Weeknd, con más de 75
                millones de discos vendidos, 4 premios Grammy y múltiples giras
                mundiales, Tesfaye siente que ha dominado esa etapa y quiere
                cerrar el ciclo en su mejor momento.
              </p>
              <div className={styles.botonIzquierda}>
                <button className={styles.botonVermas}>Leer mas </button>
              </div>
            </div>
            <img
              className={styles.imagenNoticia}
              src="../src/assets/theweekend.jpg"
            />
          </div>
          {/* Tercera noticia */}
          <div className={styles.noticia}>
            <img
              className={styles.imagenNoticia}
              src="../src/assets/SabrinaconEarthWindFire.jpg"
            />
            <div className={styles.parrafoNoticia}>
              <h1 className="title">
                Sabrina Carpenter enciende el Llolapalooza con Earth, Wind and
                Fire
              </h1>

              <p>
                La presentación se dio el domingo 3 de agosto en Chicago,
                durante el cierre de Lollapalooza. Sabrina, en plena gira Short
                n’ Sweet, decidió invitar a Earth, Wind & Fire para interpretar
                juntos dos clásicos: <br />
                <ul>
                  <li>“Let’s Groove”</li>
                  <li>“September”</li>
                </ul>
              </p>
              <p>
                Lo impresionante es que todo se organizó en menos de un día. El
                agente de Sabrina contactó a la banda, que estaba en Detroit, y
                les mandaron un avión privado a las 7 a.m. para que llegaran a
                ensayar y tocar esa misma noche.
              </p>
              <div className={styles.botonDerecha}>
                <button className={styles.botonVermas}>Leer mas </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
