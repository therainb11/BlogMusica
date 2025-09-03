// pagina principal
import Header from "../components/header";
import Footer  from "../components/footer";
import styles from "../styles/mainPage.module.css"
export default function MainPage() {
    return (
        <div className={styles.pageWrapper}>
            <div>
            <Header/>
            </div>
            <div className= {styles.slogan}>
            <img src="assets/dj-slogan-jpeg" />

            </div>
            <main className={styles.mainContent} >
           
            </main>
            <Footer/>
        </div>
    );
    }

