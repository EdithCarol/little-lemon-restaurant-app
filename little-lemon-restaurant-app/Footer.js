import React from "react";

const ContactInfo = ({ title, children }) => (
  <div className="contact-info">
    <h3>{title}</h3>
    {children}
  </div>
);

const SocialLink = ({ name }) => (
  <li>
    <a href="#">{name}</a>
  </li>
);

function Footer() {
  return (
    <footer>
      <ContactInfo title="Información de Contacto">
        <p>Dirección: 123 Calle Principal, Ciudad, País</p>
        <p>Teléfono: +1234567890</p>
        <p>Correo electrónico: info@littlelemon.com</p>
      </ContactInfo>
      <div className="social-links">
        <h3>Síguenos</h3>
        <ul>
          <SocialLink name="Facebook" />
          <SocialLink name="Twitter" />
          <SocialLink name="Instagram" />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
