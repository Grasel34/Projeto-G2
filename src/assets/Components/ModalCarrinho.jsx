import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import '../Styles/ModalCarrinho.css';

const ModalCarrinho = ({ closeModal }) => {
  const { cartItems, totalPrice, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleGoToContact = () => {
    navigate('/contato', { state: { cartItems, totalPrice } }); // Envia dados para a aba de contato
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={closeModal}>
          X
        </button>

        <h2>Carrinho</h2>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="item-carrinho">
                  <img src={item.imagem} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>Preço: R$ {item.preco.toFixed(2)}</p>
                    <button onClick={() => handleRemoveItem(index)}>
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total">
              <p>Total: R$ {totalPrice.toFixed(2)}</p>
            </div>
            <button onClick={handleGoToContact} className="contact-btn">
              Ir para Contato
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ModalCarrinho;
