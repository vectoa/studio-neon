///home/ubuntu/site1/src/context/CarteContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import {
  loadCart,
  saveCart,
  addToCart,
  increment,
  decrement,
  removeItem,
  calculateTotal,
} from '../services/cartService';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(loadCart()); // Charge les données stockées au démarrage
  }, []);

  useEffect(() => {
    saveCart(items); // Sauvegarde automatique à chaque mise à jour
  }, [items]);

  const handleAddToCart = (product) => setItems((prev) => addToCart(prev, product));
  const handleIncrement = (id) => setItems((prev) => increment(prev, id));
  const handleDecrement = (id) => setItems((prev) => decrement(prev, id));
  const handleRemoveItem = (id) => setItems((prev) => removeItem(prev, id));
  const totalPrice = calculateTotal(items);

  return (
    <CartContext.Provider
      value={{ items, handleAddToCart, handleIncrement, handleDecrement, handleRemoveItem, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
