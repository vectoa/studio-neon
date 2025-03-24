import React, { useState } from 'react';
import CustomerDetailsForm from '../../components/Checkout/CustomerDetails';
import StripeCheckoutForm from '../../components/Checkout/StripeCheckoutForm';
import './CheckoutPage.scss';

function CheckoutPage() {
  const [customerData, setCustomerData] = useState(null);

  const handleCustomerDetailsSubmit = (data) => {
    setCustomerData(data);
  };

  return (
    <div className="checkout-page">
      <h2>🛒 Finalisez votre commande</h2>

      {!customerData ? (
        <CustomerDetailsForm onSubmit={handleCustomerDetailsSubmit} />
      ) : (
        <StripeCheckoutForm customerData={customerData} />
      )}
    </div>
  );
}

export default CheckoutPage;
