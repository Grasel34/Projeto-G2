import React, { createContext, useState, useContext } from 'react';

// Cria o contexto do carrinho
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // Estado para o preço total

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      const updatedPrice = updatedItems.reduce((total, currentItem) => total + currentItem.preco, 0);
      setTotalPrice(updatedPrice); // Atualiza o preço total
      return updatedItems;
    });
  };

  const removeFromCart = (index) => {
    const removedItem = cartItems[index];
    setCartItems(cartItems.filter((_, i) => i !== index));
    setTotalPrice((prevTotal) => prevTotal - removedItem.preco); // Atualiza o total
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);
