// Control de rutas de la pagina
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "../pages/mainPage";
/* import Blog from './pages/Blog'; */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/sobre nosotros" element={<SobreNosotros />} />  */}
      </Routes>
    </BrowserRouter>
  );

}

