// src/pages/Admin/AdminDashboard/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import {
  getShopProducts,
  saveShopProducts,
  getPolices,
  savePolices,
  getColors,
  saveColors,
} from '../../../services/dataService';
import './_admin-dashboard.scss';

// Composant dédié au formulaire d'ajout de produit
const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) {
      alert('Tous les champs sont obligatoires.');
      return;
    }
    onAddProduct({ name, price: parseFloat(price), image });
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix (ex: 129)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de l'image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

// Composant d'édition d'un produit existant
const EditableProduct = ({ product, onDelete, onUpdate }) => {
  const { id, name, price, image } = product;
  return (
    <li className="editable-product">
      <input
        type="text"
        value={name}
        onChange={(e) => onUpdate(id, 'name', e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => onUpdate(id, 'price', e.target.value)}
      />
      <input
        type="text"
        value={image}
        onChange={(e) => onUpdate(id, 'image', e.target.value)}
      />
      <img src={image} alt={name} />
      <button onClick={() => onDelete(id)}>Supprimer</button>
    </li>
  );
};

// Formulaire pour ajouter une police
const FontForm = ({ onAddFont }) => {
  const [fontName, setFontName] = useState('');
  const [fontExtra, setFontExtra] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fontName) {
      alert('Veuillez entrer le nom de la police.');
      return;
    }
    onAddFont({ name: fontName, extraCost: parseFloat(fontExtra) || 0 });
    setFontName('');
    setFontExtra('');
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la police"
        value={fontName}
        onChange={(e) => setFontName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Surcoût (ex: 0.1)"
        step="0.1"
        value={fontExtra}
        onChange={(e) => setFontExtra(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

// Formulaire pour ajouter une couleur
const ColorForm = ({ onAddColor }) => {
  const [colorName, setColorName] = useState('');
  const [colorHex, setColorHex] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!colorName || !colorHex) {
      alert('Veuillez remplir tous les champs pour la couleur.');
      return;
    }
    onAddColor({ name: colorName, hex: colorHex });
    setColorName('');
    setColorHex('');
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la couleur"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Hex (ex: #FF0000)"
        value={colorHex}
        onChange={(e) => setColorHex(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

function AdminDashboard() {
  const [shopItems, setShopItems] = useState([]);
  const [polices, setPolicesState] = useState([]);
  const [colors, setColorsState] = useState([]);

  useEffect(() => {
    setShopItems(getShopProducts());
    setPolicesState(getPolices());
    setColorsState(getColors());
  }, []);

  const addProduct = (productData) => {
    const newId = shopItems.length > 0 ? shopItems[shopItems.length - 1].id + 1 : 1;
    const newProduct = { id: newId, ...productData };
    const updatedProducts = [...shopItems, newProduct];
    setShopItems(updatedProducts);
    saveShopProducts(updatedProducts);
  };

  const updateProduct = (id, field, value) => {
    const updatedProducts = shopItems.map((prod) =>
      prod.id === id
        ? { ...prod, [field]: field === 'price' ? parseFloat(value) : value }
        : prod
    );
    setShopItems(updatedProducts);
    saveShopProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = shopItems.filter((prod) => prod.id !== id);
    setShopItems(updatedProducts);
    saveShopProducts(updatedProducts);
  };

  const addFont = (fontData) => {
    const updatedFonts = [...polices, fontData];
    setPolicesState(updatedFonts);
    savePolices(updatedFonts);
  };

  const deleteFont = (fontName) => {
    const updatedFonts = polices.filter((f) => f.name !== fontName);
    setPolicesState(updatedFonts);
    savePolices(updatedFonts);
  };

  const addColor = (colorData) => {
    const updatedColors = [...colors, colorData];
    setColorsState(updatedColors);
    saveColors(updatedColors);
  };

  const deleteColor = (colorName) => {
    const updatedColors = colors.filter((c) => c.name !== colorName);
    setColorsState(updatedColors);
    saveColors(updatedColors);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <section className="admin-section">
        <h3>Produits du Shop</h3>
        <ProductForm onAddProduct={addProduct} />
        <ul className="product-list">
          {shopItems.map((prod) => (
            <EditableProduct
              key={prod.id}
              product={prod}
              onDelete={deleteProduct}
              onUpdate={updateProduct}
            />
          ))}
        </ul>
      </section>

      <section className="admin-section">
        <h3>Polices</h3>
        <FontForm onAddFont={addFont} />
        <ul className="font-list">
          {polices.map((f, index) => (
            <li key={index}>
              {f.name} (surcoût: {f.extraCost})
              <button onClick={() => deleteFont(f.name)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="admin-section">
        <h3>Couleurs</h3>
        <ColorForm onAddColor={addColor} />
        <ul className="color-list">
          {colors.map((c, index) => (
            <li key={index}>
              {c.name} - {c.hex}
              <button onClick={() => deleteColor(c.name)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;
