import React from "react";

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p>Dirección: 123 Calle Principal, Ciudad, País</p>
        <p>Teléfono: +1234567890</p>
        <p>Correo electrónico: info@littlelemon.com</p>
      </div>
      <div className="social-links">
        <h3>Síguenos</h3>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
