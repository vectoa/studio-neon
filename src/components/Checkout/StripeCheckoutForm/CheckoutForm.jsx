import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { calculateTotal, loadCart } from '../../../services/cartService';

function CheckoutForm({ customerData }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setProcessing(true);

    const cardElement = elements.getElement(CardElement);
    const totalPrice = calculateTotal();
    const cartItems = loadCart();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: `${customerData.firstName} ${customerData.lastName}`,
        email: customerData.email,
        phone: customerData.phone,
        address: {
          line1: customerData.address,
          city: customerData.city,
          postal_code: customerData.postalCode,
          country: customerData.country,
        },
      },
    });

    if (error) {
      alert(`Erreur: ${error.message}`);
      setProcessing(false);
      return;
    }

    // 👉 Appel AWS Lambda ici bientôt
    console.log('✅ PaymentMethod:', paymentMethod);
    console.log('👤 Infos client:', customerData);
    console.log('🛒 Panier:', cartItems, '💰 Total:', totalPrice);

    alert('✅ Paiement réussi ! Merci pour votre commande 🎉');

    setProcessing(false);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <CardElement className="card-element" />

      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Traitement...' : `Payer ${calculateTotal().toFixed(2)}€`}
      </button>
    </form>
  );
}

export default CheckoutForm;
