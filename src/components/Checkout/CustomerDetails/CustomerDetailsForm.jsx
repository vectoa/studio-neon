import React, { useState } from 'react';
import './CustomerDetailsForm.scss';

function CustomerDetailsForm({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="customer-details-form" onSubmit={handleSubmit}>
      <input name="firstName" placeholder="Prénom" required onChange={handleChange} />
      <input name="lastName" placeholder="Nom" required onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
      <input name="phone" type="tel" placeholder="Téléphone" required onChange={handleChange} />
      <input name="address" placeholder="Adresse" required onChange={handleChange} />
      <input name="city" placeholder="Ville" required onChange={handleChange} />
      <input name="postalCode" placeholder="Code Postal" required onChange={handleChange} />
      <input name="country" placeholder="Pays" required onChange={handleChange} />

      <button type="submit" className="next-step-btn">
        Continuer vers le paiement →
      </button>
    </form>
  );
}

export default CustomerDetailsForm;
