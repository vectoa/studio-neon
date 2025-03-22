import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getShopProducts } from '../../services/dataService';
import { addToCart } from '../../services/cartService';
import './ShopPage.scss';

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getShopProducts());
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} ajouté au panier !`);
  };

  return (
    <div className="shop-page">
      <h2 className="shop-title">Nos Néons Prêts à l’Emploi</h2>
      <div className="shop-grid">
        {products.map(product => (
          <div className="shop-item" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price} €</p>
            <button className="neon-button" onClick={() => handleAddToCart(product)}>
              Ajouter au panier
            </button>
            <Link to={`/product/${product.id}`} className="detail-link">Voir le produit</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
