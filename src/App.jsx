import Bloques from "./components/bloques";
import Footer from "./components/footer";
import Button from "./components/button";
import Layout from "./components/layout";
import NavBar from "./components/navbar";
import Carousel from "./components/carousel";
import Favoritos from "./pages/favoritos";
import Cuponera from "./pages/cuponera";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login";
import NavBar2 from "./components/navbar2";
import Cercano from "./pages/cercano";
import Contactanos from "./pages/contactanos";
import Viaje from "./pages/viaje";
import Comida from "./pages/comida";
import SpayRelax from "./pages/spayrelax";
import Actividades from "./pages/actividades";
import AutoyCasa from "./pages/autoycasa";
import LoginCuponero from "./pages/loginCuponero";
import LoginCuponManiaco from "./pages/loginCuponManiaco";
import RegistroCuponManiaco from "./pages/registroCuponManiaco";
import RegistroCuponero from "./pages/registroCuponero";
import InicioCuponero from "./pages/inicioCuponero";
import InicioCuponManiaco from "./pages/inicioCuponManiaco";
import Inicio from "./pages/inicio";
import Todos from "./pages/todos";
import CuponesFormPage from "./pages/cuponesFormPage";
import { Toaster } from 'react-hot-toast'
import Cupon from "./pages/cupon";

function App() {
  return (
    <>
      <div className="bg-cuponRed min-h-screen">
        <Routes>
          <Route path="/login" element={
            <div className="bg-white min-h-screen">
              <Login />
            </div>
          } />
          <Route path="/loginCuponero" element={<div className="bg-white min-h-screen"><LoginCuponero /></div>} />
          <Route path="/loginCuponmaniaco" element={<div className="bg-white min-h-screen"><LoginCuponManiaco /></div>} />
          <Route path="/registroCuponmaniaco" element={<div className="bg-white min-h-screen"><RegistroCuponManiaco /></div>} />
          <Route path="/registroCuponero" element={<div className="bg-white min-h-screen"><RegistroCuponero /></div>} />
          <Route path="/inicioCuponero" element={<div className="bg-white min-h-screen"><InicioCuponero /></div>} />
          <Route path="*" element={
            <>
              <NavBar />
              <NavBar2 />
              <Layout>
                <Routes>
                  <Route path="/inicio" element={<Inicio />} />
                  <Route path="/inicioCuponManiaco" element={<InicioCuponManiaco />} />
                  <Route path="/favoritos" element={<Favoritos />} />
                  <Route path="/cuponera" element={<Cuponera />} />
                  <Route path="/cercano" element={<Cercano />} />
                  <Route path="/contactanos" element={<Contactanos />} />
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path="/Viaje" element={<Viaje />} />
                  <Route path="/Comida" element={<Comida />} />
                  <Route path="/spa y Relax" element={<SpayRelax />} />
                  <Route path="/Actividades" element={<Actividades />} />
                  <Route path="/Auto y Casa" element={<AutoyCasa />} />
                  <Route path="/Todos" element={<Todos />} />
                </Routes>
              </Layout>
            </>
          }
          />
          <Route path="/cupon/:id" element={
            <div className="bg-cuponGrey min-h-screen">
              <NavBar />
              <NavBar2 />
              <Cupon />
            </div>
          } />
          <Route path="/cuponesFormPage" element={<CuponesFormPage />} />
          <Route path="/cupones" element={<InicioCuponero />} />
          <Route path="/cupon-create" element={<CuponesFormPage />} />
          <Route path="/cupones/:id" element={<CuponesFormPage />} />
        </Routes >
        <Toaster />
      </div >
      {/* Footer Para Agregar 
        <Footer>
        </Footer>
      */}
    </>
  );
}

export default App;
