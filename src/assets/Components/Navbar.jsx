import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Components/CartContext';
import ModalCarrinho from './ModalCarrinho'; // Importando o modal
import '../Styles/Navbar.css';

const Navbar = () => {
  const { totalPrice, cartItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <Link to="/">Gym Nation</Link>
        </div>
        <nav className="nav-links">
          <Link to="/serviços">Serviços</Link>
          <Link to="/sobre-nos">Sobre Nós</Link>
          <Link to="/contato">Contato</Link>
          <button className="cart-button" onClick={openModal}>
            <FaShoppingCart />
            Carrinho
            {cartItems.length > 0 && (
              <span className="cart-info"> ({cartItems.length} itens | R${totalPrice.toFixed(2)})</span>
            )}
          </button>
        </nav>
      </header>
      {/* Exibir o modal se isModalOpen for true */}
      {isModalOpen && <ModalCarrinho closeModal={closeModal} />}
    </>
  );
};

export default Navbar;
