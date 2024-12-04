import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Gym Nation. Todos os direitos reservados.</p>
      <p><Link to="/contato">Contato</Link></p> 
    </footer>
  );
}

export default Footer;
