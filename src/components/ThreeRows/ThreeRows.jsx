// src/components/ThreeRows/ThreeRows.jsx
import React from 'react';
import './ThreeRows.scss';

const ThreeRows = () => {
  return (
    <section className="three-rows">
      <div className="neon-card neon-gold">
        <h3>Fabrication Artisanale</h3>
        <p>Chaque néon est unique, conçu avec précision.</p>
      </div>
      <div className="neon-card neon-pink">
        <h3>Livraison Rapide</h3>
        <p>Recevez rapidement votre néon où que vous soyez.</p>
      </div>
      <div className="neon-card neon-purple">
        <h3>Service Client Réactif</h3>
        <p>Nous sommes disponibles 7j/7 pour vous accompagner.</p>
      </div>
    </section>
  );
};

export default ThreeRows;
