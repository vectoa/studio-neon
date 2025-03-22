// src/components/Header/Header.jsx
import React, { useState } from 'react'; // <-- Ajout de useState
import { Link } from 'react-router-dom';
import './_header.scss';

function Header() {
  // AJOUT : état pour gérer la sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Icones inline (burger / close)
  const burgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <header className="header">
      {/* Logo à gauche (inchangé) */}
      <div className="logo">
        <Link to="/">
          STUDIO NEON
        </Link>
      </div>

      {/* Barre de navigation (inchangée) */}
      <nav className="nav-links">
        <Link to="/shop" className="nav-item">
          {/* Icône inline pour "Shop" */}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
          </svg>
          <span>Shop</span>
        </Link>

        <Link to="/customize" className="nav-item">
          {/* Icône inline pour "Personnaliser" */}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
            <line x1="3" y1="22" x2="21" y2="22" />
          </svg>
          <span>Personnaliser</span>
        </Link>

        <Link to="/contact-idea" className="nav-item">
          {/* Icône inline pour "Projet" */}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          <span>Projet</span>
        </Link>

        <Link to="/cart" className="nav-item">
          {/* Icône inline pour "Panier" */}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10" cy="20.5" r="1"/>
            <circle cx="18" cy="20.5" r="1"/>
            <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/>
          </svg>
          <span>Panier</span>
        </Link>

        {/* AJOUT : bouton burger, visible en toute taille, 
            mais surtout utile en mobile */}
        <button 
          className="burger-btn"
          onClick={() => setSidebarOpen(true)}
        >
          {burgerIcon}
        </button>
      </nav>

      {/* AJOUT : la sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          {closeIcon}
        </button>

        {/* Liens dans la sidebar */}
        <Link to="/shop" onClick={() => setSidebarOpen(false)}>Shop</Link>
        <Link to="/customize" onClick={() => setSidebarOpen(false)}>Personnaliser</Link>
        <Link to="/contact-idea" onClick={() => setSidebarOpen(false)}>Projet</Link>
        <Link to="/cart" onClick={() => setSidebarOpen(false)}>Panier</Link>
      </div>
    </header>
  );
}

export default Header;
