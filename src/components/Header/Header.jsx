import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1> <Link to="/">EL TIEMPO EN ESPAÑA</Link></h1>
      <h2 className="opciones">
        <Link to="/Ciudades">Buscar por ciudad</Link>
        <Link to="/Provincias">Buscar por provincia</Link>
      </h2>
    </header>
  );
};

export default Header;
