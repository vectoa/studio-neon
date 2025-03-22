// src/pages/CheckoutPage.jsx
import React from 'react';

function CheckoutPage() {
  function handlePay() {
    alert('Paiement Stripe en cours...');
    // TODO: appel backend -> stripe create checkout session -> redirect
  }

  return (
    <div>
      <h2>Paiement</h2>
      <p>Montant total: ... €</p>
      <button onClick={handlePay}>Payer avec Stripe</button>
    </div>
  );
}

export default CheckoutPage;
