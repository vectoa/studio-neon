// site1/src/components/Collapsible/CollapsibleRows.jsx
import React from 'react';
import CollapsibleRow from './CollapsibleRow';
import './_collapsible.scss';

function CollapsibleRows() {
  return (
    <section className="studio-collapsible-section">
      <h2>Questions Fréquentes</h2>
      <CollapsibleRow title="Pourquoi choisir nos néons ?">
        <ul>
          <li>Fabrication de haute qualité avec matériaux durables.</li>
          <li>Garantie 1 an incluse.</li>
          <li>Service client réactif et attentif.</li>
        </ul>
      </CollapsibleRow>
      <CollapsibleRow title="Quelles tailles et couleurs disponibles ?">
        <ul>
          <li>Tailles : de 50 cm à 300 cm.</li>
          <li>Couleurs : 14 options vibrantes adaptées à tous les styles.</li>
        </ul>
      </CollapsibleRow>
      <CollapsibleRow title="Quels sont les délais de livraison ?">
        <ul>
          <li>Production rapide : 4 à 6 jours ouvrés.</li>
          <li>Livraison en France sous 7 à 13 jours.</li>
        </ul>
      </CollapsibleRow>
      <CollapsibleRow title="Que faire en cas de problème ?">
        <ul>
          <li>Garantie d’un an contre tout défaut.</li>
          <li>Remplacement ou remboursement en cas de dommages à la livraison.</li>
        </ul>
      </CollapsibleRow>
    </section>
  );
}

export default CollapsibleRows;
