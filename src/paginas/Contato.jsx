import React, { useState } from 'react';
import { useCart } from '../assets/Components/CartContext';
import './Styles/Contato.css';

const Contato = () => {
  const { cartItems, totalPrice } = useCart(); // Usando o contexto para obter os itens e o total
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      cartItems: cartItems,
      totalPrice: totalPrice
    };

    try {
      const response = await fetch('http://localhost:5000/salvar-contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        console.log('Informações enviadas:', cartItems);
        console.log('Dados do formulário:', formData);
      } else {
        alert('Erro ao enviar o formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao enviar o formulário');
    }
  };

  return (
    <div className="contato-container">
      <h2>Informações de Contato</h2>
      <form onSubmit={handleSubmit} className="contato-form">
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enviar Pedido</button>
      </form>

      <h3>Itens no Carrinho</h3>
      <ul className="cart-items-list">
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              {item.nome} - R$ {item.preco.toFixed(2)}
            </li>
          ))
        )}
      </ul>
      <p className="total-price">Total: R$ {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Contato;
