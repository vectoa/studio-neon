import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_image-text.scss';

function ImageWithText() {
  const navigate = useNavigate();

  return (
    <section className="image-with-text">
      <img src="/images/tshirt.png" alt="Produit personnalisé" className="image-with-text__img" />
      <div className="content">
        <h3>Vous avez une idée en tête ?</h3>
        <button className="neon-button" onClick={() => navigate('/contact-idea')}>
          Envoyez-nous votre projet
        </button>
      </div>
    </section>
  );
}

export default ImageWithText;
