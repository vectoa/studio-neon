import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getShopProducts } from '../../services/dataService';
import { addToCart } from '../../services/cartService';
import './ShopComponent.scss';
import { useNavigate } from 'react-router-dom';

function ShopComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getShopProducts());
  }, []);


  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="shop-page">
      <h2 className="shop-title">✨ Découvrez nos Néons Exclusifs ✨</h2>
      <div className="shop-grid">
        {products.map((product) => (
          <div className="shop-item" key={product.id}>
            <div className="product-img-container">
              <img src={product.image} alt={product.name} className="product-img" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.toFixed(2)} €</p>
            <div className="actions">
              <button className="neon-button" onClick={() => handleAddToCart(product)}>
                🛒 Ajouter
              </button>
              <Link to={`/product/${product.id}`} className="detail-link">
                🔍 Détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopComponent;
