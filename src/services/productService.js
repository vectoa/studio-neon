// src/services/productService.js

// Mocks : on stocke en localStorage (ou dans un fichier .json si c'était Node)
const PRODUCT_KEY = 'neons-data';

export function loadProducts() {
  const raw = localStorage.getItem(PRODUCT_KEY);
  if (raw) {
    return JSON.parse(raw);
  }
  // Valeurs par défaut s'il n'y a rien
  return [
    { id: 1, name: "Néon Rouge", price: "129€", image: "https://picsum.photos/200/300?red" },
    { id: 2, name: "Néon Bleu", price: "149€", image: "https://picsum.photos/200/300?blue" },
  ];
}

export function saveProducts(products) {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
}
