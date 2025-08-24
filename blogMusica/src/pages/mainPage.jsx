// pagina principal
import Header from "../components/header";
export default function mainPage() {
    return (
        <div className="main-page">
        <Header />
        <main className="content">
            <h1 className = "title">Bienvenido al Blog de Edgar</h1>
            <p>Explora mis últimos artículos y proyectos.</p>
        </main>
        </div>
    );
    }

