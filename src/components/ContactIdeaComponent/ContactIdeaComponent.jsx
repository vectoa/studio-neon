// src/components/IdeaComponent/ContactIdeaComponent.jsx
import React, { useState } from 'react';
import './Idea.scss';

/**
 * Composant pour la soumission d'une idée/projet.
 * Ce composant collecte et valide les informations saisies par l'utilisateur
 * avant de les envoyer vers une API ou un stockage local (en mode test).
 */
function ContactIdeaComponent() {
  // États pour les champs du formulaire
  const [firstName, setFirstName] = useState('');  // Prénom de l'utilisateur
  const [name, setName] = useState('');            // Nom de l'utilisateur
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [idea, setIdea] = useState('');
  const [file, setFile] = useState(null);

  // États pour la gestion des retours utilisateur
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fonction de sanitisation simple (suppression des espaces superflus)
  const sanitizeInput = (input) => input.trim();

  /**
   * Validation du numéro de téléphone pour les formats français.
   * Autorise :
   * - "+33" (avec ou sans espace) suivi de 9 chiffres,
   * - ou "0" suivi de 9 chiffres.
   */
  const validatePhone = (phoneValue) => {
    const phoneRegex = /^(\+33\s?\d{9}|0\d{9})$/;
    return phoneRegex.test(phoneValue);
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Sanitisation des entrées utilisateur
    const sanitizedFirstName = sanitizeInput(firstName);
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedIdea = sanitizeInput(idea);

    // Validation du numéro de téléphone
    if (!validatePhone(sanitizedPhone)) {
      setError("Veuillez saisir un numéro de téléphone valide (ex: +33 63456789 ou 0634567890).");
      return;
    }

    // Exemple d'envoi vers une API sécurisée ou stockage local
    try {
      // Si on  a un backend, il faut le décommenter et l'adapter :
      /*
      const response = await fetch('http://localhost:3000/api/submitIdea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: sanitizedFirstName,
          name: sanitizedName,
          email: sanitizedEmail,
          phone: sanitizedPhone,
          idea: sanitizedIdea,
          file: file ? file.name : 'aucun'
        }),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du projet.');
      }
      */

      // En mode test : on affiche dans la console
      console.log("Données soumises :", {
        firstName: sanitizedFirstName,
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        idea: sanitizedIdea,
        file: file ? file.name : 'aucun'
      });

      // Message de succès
      setSuccess("Votre projet a été envoyé avec succès !");

      // Réinitialisation du formulaire
      setFirstName('');
      setName('');
      setEmail('');
      setPhone('');
      setIdea('');
      setFile(null);

    } catch (err) {
      setError("Une erreur s'est produite lors de l'envoi du projet. " + err.message);
    }
  };

  return (
    <div className="idea-page">
      <h2>Envoyez-nous votre idée/projet</h2>

      {/* Affichage des messages d'erreur et de succès */}
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form className="idea-form" onSubmit={handleSubmit}>
        <label>Prénom</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label>Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="email@gmail.com"
        />

        <label>Téléphone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Format demandé: +33 63456789"
        />

        <label>Description du projet</label>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={4}
          required
        />

        <label>Logo/Photo (optionnel)</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*"
        />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactIdeaComponent;
