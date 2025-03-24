import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getShopProducts } from '../../services/dataService';
import { addToCart } from '../../services/cartService';
import './ProductTemplateComponent.scss';

function ProductTemplateComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getShopProducts().find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!product) {
    return <div className="product-page">😔 Produit introuvable</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Retour
      </button>
      <div className="product-card">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">
            {product.description || "✨ Un magnifique néon pour sublimer votre espace."}
          </p>

          <div className="product-meta">
            <span className="label">Couleur :</span>
            <span className="value">{product.color || 'Multicolore'}</span>
          </div>

          <div className="product-meta">
            <span className="label">Dimensions :</span>
            <span className="value">{product.dimensions || '60cm x 30cm'}</span>
          </div>


          <div className="product-meta">
            <span className="label">Livraison :</span>
            <span className="value">{product.delivery || '📦 3 à 5 jours ouvrés'}</span>
          </div>

          <div className="product-price-action">
            <span className="product-price">{product.price.toFixed(2)} €</span>
            <button className="neon-button" onClick={handleAddToCart}>
              🛒 Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTemplateComponent;
