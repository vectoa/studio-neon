// 📂 src/services/cartService.js

const CART_KEY = 'studio-neon-cart';

// ✅ Charge le panier depuis localStorage
export function loadCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

// ✅ Sauvegarde le panier dans localStorage
export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ✅ Ajoute un produit au panier
export function addToCart(product) {
  const cart = loadCart();
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
}

// ✅ Augmente la quantité d'un produit
export function incrementQuantity(id) {
  const cart = loadCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += 1;
    saveCart(cart);
  }
}

// ✅ Diminue la quantité d'un produit
export function decrementQuantity(id) {
  const cart = loadCart();
  const item = cart.find(i => i.id === id);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    saveCart(cart);
  }
}

// ✅ Supprime un produit du panier
export function removeItem(id) {
  let cart = loadCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
}

// ✅ Calcule le total du panier
export function calculateTotal() {
  const cart = loadCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
