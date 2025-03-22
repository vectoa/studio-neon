// src/components/ShoppingBag/ShoppingBag.jsx

import React from "react";
import "./ShoppingBag.scss";

/**
 * Composant ShoppingBag
 * @param {object} props - Les propriétés du composant.
 * @param {number} [props.size=40] - La taille (largeur et hauteur) de l'icône.
 * @param {string} [props.color="#000000"] - La couleur de l'icône.
 * @returns {JSX.Element} Un SVG représentant un panier.
 */
const ShoppingBag = ({ size = 40, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shopping-bag-icon"
  >
    <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" />
    <path d="M3.8 6h16.4" />
    <path d="M16 10a4 4 0 1 1-8 0" />
  </svg>
);

export default ShoppingBag;
