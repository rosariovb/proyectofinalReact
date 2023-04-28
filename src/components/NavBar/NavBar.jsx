import "./NavBar.css";
import Shop from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Barra">
      <ul className="List-ul">
        <Link className="Link" to="/">
          Inicio
        </Link>
        <Link className="Link" to="/Productos">
         Productos
        </Link>
        <Link className="Link" to="/Glitters">
         Glitters
        </Link>
        <Link className="Link" to="/Contacto">
         Contacto
        </Link>
        <li>
          <Shop/>
        </li>

      </ul>

    </nav>
  ) 
}


export default NavBar;