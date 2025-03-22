# 💡 Studio Neon

✨ Personnalisez votre propre néon LED et commandez-le directement en ligne !  
Projet e-commerce moderne développé avec **React**, **Stripe**, et hébergé sur **Vercel / AWS**.

---

## 🚀 Fonctionnalités

- 🎨 Personnalisation complète du néon (texte, taille, couleur, police, panneau)
- 💰 Calcul automatique du prix en fonction des options
- 🛒 Panier intégré avec redirection sécurisée vers la page de paiement
- 💳 Paiement en ligne via **Stripe**
- 📦 Préparation future pour dashboard admin, sauvegarde commandes, email notification
- 📱 Interface responsive et moderne (SCSS)

---

## 🧰 Stack utilisée

- **Frontend** : React 19, React Router DOM, Sass
- **Paiement** : Stripe.js + @stripe/react-stripe-js
- **Déploiement** : Vercel (Frontend) + AWS (Backend futur)
- **API** : Stripe API (client-side), AWS Lambda (backend à venir)
- **Sécurité** : Variables sensibles via `.env`

---

## 📁 Structure

```bash
studio-neon/
├── public/                  # Fichiers publics
├── src/
│   ├── components/          # Composants réutilisables
│   ├── pages/               # Pages (Home, Checkout, etc.)
│   ├── data/                # JSON de configuration (couleurs, polices, tailles)
│   ├── services/            # Fonctions JS (panier, Stripe, etc.)
│   └── scss/                # Fichiers SCSS globaux
├── .env                    # Clé publique Stripe
├── .gitignore
├── package.json
└── README.md

