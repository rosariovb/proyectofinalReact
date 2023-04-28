import "./App.css";
// react -router- dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//componentes

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

// pages
import Inicio from "./pages/Inicio/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Productos from "./pages/Productos/Productos";
import Detalle from "./pages/Detalle/Detalle";
import Glitters from "./pages/Glitters/Glitters";

//context
/*import CartProvider from "./Context/CartContext";*/



const App = () => {
  return (
    <Router>

      <div className="app">
        <Header />


        
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/glittes" element={<Glitters />} />
            <Route path="/categoria/:color" element={<Glitters />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/detail/:id" element={<Detalle />} />
          </Routes>
        
      </div>

    </Router>
  );

};


export default App;
