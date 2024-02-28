import React from "react";
import { Link } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <NavItem to="/">Inicio</NavItem>
        <NavItem to="/menu">Menú</NavItem>
        <NavItem to="/reservas">Reservas</NavItem>
        <NavItem to="/contacto">Contacto</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
