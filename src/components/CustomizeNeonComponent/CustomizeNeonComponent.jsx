import React, { useState, useEffect } from 'react';
import { addToCart } from '../../services/cartService';
import pricingRules from '../../data/pricingRules.json';
import polices from '../../data/polices.json';
import colors from '../../data/colors.json';
import panelRules from '../../data/panelRules.json';
import './_customize-neon.scss';

function CustomizeNeonComponent() {
  const [size, setSize] = useState('50cm'); // Par défaut, 50cm
  const [text, setText] = useState('');
  const [font, setFont] = useState(polices[0].name); // Par défaut, première police
  const [color, setColor] = useState(colors[0].hex); // Par défaut, première couleur
  const [panel, setPanel] = useState(Object.keys(panelRules.panels)[0]); // Par défaut, premier panneau
  const pricePerChar = 1;

  // ✅ Vérification si la police sélectionnée est "CoffeCake"
  const isCoffeCake = font === 'CoffeCake';

  // ✅ Fonction qui ajoute ou enlève `‰` dynamiquement
  useEffect(() => {
    if (isCoffeCake) {
      // Ajoute `‰` si la police est "CoffeCake" et qu'il n'est pas déjà présent
      if (text.length > 3 && !text.includes('‰')) {
        setText(text.slice(0, 3) + '‰' + text.slice(3));
      }
    } else {
      // Supprime `‰` immédiatement si on change de police
      setText(text.replace('‰', ''));
    }
  }, [font]);

  // ✅ Obtenir le prix de la taille sélectionnée
  const getSizePrice = (size) => pricingRules.sizes[size] || 0;

  // ✅ Obtenir le coût supplémentaire de la police sélectionnée
  const getFontExtraCost = (fontName) => {
    const selected = polices.find(p => p.name === fontName);
    return selected ? selected.extraCost : 0;
  };

  // ✅ Obtenir le coût supplémentaire du panneau sélectionné
  const getPanelExtraCost = (panelType) => {
    return panelRules.panels[panelType] ? panelRules.panels[panelType].extraCost : 0;
  };

  // ✅ Calculer le prix total
  const computePrice = () => {
    const basePrice = getSizePrice(size) + text.replace('‰', '').length * pricePerChar + getFontExtraCost(font);
    return (basePrice * (1 + getPanelExtraCost(panel))).toFixed(2);
  };

  const handleAddToCart = () => {
    if (!text) {
      alert('Veuillez entrer un texte pour votre néon.');
      return;
    }

    const customNeon = {
      id: `custom-${Date.now()}`,
      name: `Néon personnalisé - "${text}"`,
      price: parseFloat(computePrice()),
      image: `/images/neon-${color.replace('#', '')}.png`,
      size,
      font,
      color,
      panel,
      quantity: 1
    };

    addToCart(customNeon);
    alert(`Néon "${text}" ajouté au panier !`);
  };

  return (
    <div className="customize-neon">
      <h2>✨ Personnalisez Votre Néon ✨</h2>

      {/* ✅ Aperçu du néon */}
      <div className="customize-preview">
        <div
          className="preview-box"
          style={{
            background: panelRules.panels[panel].background,
            border: panelRules.panels[panel].border,
          }}
        >
          <span
            className="preview-text"
            style={{
              color: color,
              fontFamily: font,
              textShadow: `0 0 8px ${color}, 0 0 15px ${color}, 0 0 20px ${color}`,
            }}
          >
            {text || 'Votre néon ici'}
          </span>
        </div>
      </div>

      {/* ✅ Formulaire de personnalisation */}
      <div className="customize-form">
        <label>Taille</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          {Object.keys(pricingRules.sizes).map(sizeOption => (
            <option key={sizeOption} value={sizeOption}>
              {sizeOption}
            </option>
          ))}
        </select>

        <label>Texte (max 30 caractères)</label>
        <input
          type="text"
          maxLength={30}
          value={text}
          onChange={(e) => setText(e.target.value)} // ✅ Ajout dynamique de ‰ si "CoffeCake"
        />

        <label>Police</label>
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          {polices.map((p) => (
            <option key={p.name} value={p.name} style={{ fontFamily: p.name }}>
              {p.displayName ? p.displayName : p.name}
            </option>
          ))}
        </select>

        <label>Couleur</label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          {colors.map(c => (
            <option key={c.hex} value={c.hex}>
              {c.name}
            </option>
          ))}
        </select>

        <label>Type de Panneau</label>
        <select value={panel} onChange={(e) => setPanel(e.target.value)}>
          {Object.keys(panelRules.panels).map(panelType => (
            <option key={panelType} value={panelType}>
              {panelRules.panels[panelType].displayName} (+{panelRules.panels[panelType].extraCost * 100}%)
            </option>
          ))}
        </select>

        <div className="price">
          Prix: {computePrice()} €
        </div>
        <button onClick={handleAddToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
}

export default CustomizeNeonComponent;
