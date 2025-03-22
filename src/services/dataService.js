// src/services/dataService.js

import policesJSON from '../data/polices.json';
import colorsJSON from '../data/colors.json';
import pricingJSON from '../data/pricingRules.json';
import shopJSON from '../data/shopProducts.json';

const SHOP_KEY = 'studio-neon-shopProducts';
const POLICES_KEY = 'studio-neon-polices';
const COLORS_KEY = 'studio-neon-colors';
const PRICING_KEY = 'studio-neon-pricingRules';

// ----- FONCTIONS DE LECTURE ----- //
export function getShopProducts() {
  const stored = localStorage.getItem(SHOP_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // Sinon, retourne la valeur initiale et la sauvegarde dans localStorage
  localStorage.setItem(SHOP_KEY, JSON.stringify(shopJSON));
  return shopJSON;
}

export function getPolices() {
  const stored = localStorage.getItem(POLICES_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(POLICES_KEY, JSON.stringify(policesJSON));
  return policesJSON;
}

export function getColors() {
  const stored = localStorage.getItem(COLORS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(COLORS_KEY, JSON.stringify(colorsJSON));
  return colorsJSON;
}

export function getPricingRules() {
  const stored = localStorage.getItem(PRICING_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(PRICING_KEY, JSON.stringify(pricingJSON));
  return pricingJSON;
}

// ----- FONCTIONS D'ÉCRITURE ----- //
export function saveShopProducts(updatedShop) {
  localStorage.setItem(SHOP_KEY, JSON.stringify(updatedShop));
}

export function savePolices(updatedPolices) {
  localStorage.setItem(POLICES_KEY, JSON.stringify(updatedPolices));
}

export function saveColors(updatedColors) {
  localStorage.setItem(COLORS_KEY, JSON.stringify(updatedColors));
}

export function savePricing(updatedPricing) {
  localStorage.setItem(PRICING_KEY, JSON.stringify(updatedPricing));
}
