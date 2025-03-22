import React, { useState } from 'react';
import './_newsletter.scss';

/**
 * Fonction simple de validation d'email.
 * - Ici, un regex basique pour illustrer.
 * - En production, privilégier un service (p. ex. validator.js)
 */
function validateEmail(email) {
  // Regex très basique, à adapter si besoin
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  /**
   * Vérifie l'email avant de procéder à l'inscription.
   */
  const handleSubscribe = () => {
    const trimmedEmail = email.trim();

    // Vérification : l'email ne doit pas être vide et doit être au bon format
    if (!trimmedEmail) {
      setError("L'email ne peut pas être vide.");
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setError("L'email saisi n'est pas valide.");
      return;
    }

    // À ce stade, l'email est considéré valide
    setError(null);

    // Simule l'appel à un service ou API pour l'inscription
    // En production : fetch ou axios vers votre backend
    alert(`Inscription réussie avec l'email : ${trimmedEmail}`);

    // Réinitialise le champ
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <h2>Restez connecté !</h2>
      <p>Soyez les premiers informés de nos nouveautés et offres exclusives.</p>

      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null); // Reset de l'erreur au changement
          }}
          aria-label="Saisissez votre adresse email pour vous inscrire"
        />
        <button onClick={handleSubscribe}>
          S'inscrire →
        </button>
      </div>

      {/* Affichage d'un éventuel message d'erreur */}
      {error && <div className="newsletter-error">{error}</div>}
    </section>
  );
}

export default Newsletter;
