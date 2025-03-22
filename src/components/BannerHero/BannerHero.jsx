import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerHero.scss';

function BannerHero() {
  const navigate = useNavigate();

  return (
    <section className="banner-hero">
      <div className="banner-content">
        <h2>Spécialiste du Néon</h2>
        <p>Découvrez une collection unique et personnalisez votre néon en quelques clics</p>
        <div className="banner-buttons">
          <button onClick={() => navigate('/shop')}>
            Découvrir la boutique
          </button>
          <button onClick={() => navigate('/customize')}>
            Créer mon néon
          </button>
        </div>
      </div>
    </section>
  );
}

export default BannerHero;
