import React from 'react';
import { useParams } from 'react-router-dom';
import { getShopProducts } from '../../services/dataService';
import { addToCart } from '../../services/cartService';
import './ProductPage.scss';

function ProductPage() {
  const { id } = useParams();
  const products = getShopProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="product-page">Produit introuvable</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} ajouté au panier !`);
  };

  return (
    <div className="product-page">
      <div className="product-card">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">{product.price} €</p>
          <button className="neon-button" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
