import React, { useState } from 'react';
import './ContactIdea.scss';

function ContactIdeaPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [file, setFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Projet envoyé : ${name}, ${email}, ${idea}, fichier : ${file?.name || 'Aucun'}`);
    // TODO: appel API réel pour stocker / mailer
  }

  return (
    <div className="contact-idea-page">
      <h2>✨ Envoyez-nous votre idée/projet ✨</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Nom</label>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
          placeholder="Votre nom"
        />

        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
          placeholder="votre.email@example.com"
        />

        <label>Description du projet</label>
        <textarea 
          value={idea} 
          onChange={e => setIdea(e.target.value)} 
          rows={4}
          required
          placeholder="Décrivez votre idée..."
        />

        <label>Logo/Photo (optionnel)</label>
        <input type="file" onChange={e => setFile(e.target.files[0])} />

        <button type="submit" className="neon-button">Envoyer 🚀</button>
      </form>
    </div>
  );
}

export default ContactIdeaPage;
