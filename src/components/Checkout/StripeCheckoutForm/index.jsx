import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export default function StripeCheckoutForm({ customerData }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm customerData={customerData} />
    </Elements>
  );
}
