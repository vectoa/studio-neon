import React, { useEffect, useState } from 'react';
import './_cart.scss';
import { Link } from 'react-router-dom';
import { loadCart, incrementQuantity, decrementQuantity, removeItem, calculateTotal } from '../../services/cartService';

function CartPageComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const refreshCart = () => setItems(loadCart());

  const handleIncrement = (id) => {
    incrementQuantity(id);
    refreshCart();
  };

  const handleDecrement = (id) => {
    decrementQuantity(id);
    refreshCart();
  };

  const handleRemove = (id) => {
    removeItem(id);
    refreshCart();
  };

  const totalPrice = calculateTotal();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>🛒 Votre panier</h2>
        <Link to="/shop">← Continuer les achats</Link>
      </div>

      {items.length === 0 ? (
        <p className="empty-cart">Votre panier est vide.</p>
      ) : (
        <>
          <div className="cart-table">
            <div className="cart-row cart-header-row">
              <span>Produit</span>
              <span>Quantité</span>
              <span>Total</span>
            </div>

            {items.map(item => (
              <div key={item.id} className="cart-row">
                <div className="product-info">
                  <p className="product-name">{item.name}</p>
                  <p className="product-details">
                    {item.text && <>Texte : {item.text} <br/></>}
                    {item.size && <>Taille : {item.size} <br/></>}
                    {item.font && <>Police : {item.font} <br/></>}
                    {item.color && <>Couleur : {item.color} <br/></>}
                    {item.panel && <>Panneau : {item.panel} <br/></>}
                  </p>
                  <p className="product-price">{item.price.toFixed(2)} €</p>
                </div>

                <div className="quantity-control">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button className="remove-item" onClick={() => handleRemove(item.id)}>🗑️</button>
                </div>

                <div className="product-total">
                  {(item.price * item.quantity).toFixed(2)} €
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total estimé : <span>{totalPrice.toFixed(2)} €</span></p>
            <p className="small-note">Taxes incluses. Rabais et frais de port calculés lors du paiement.</p>
            <button className="checkout-btn">Valider la commande</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPageComponent;