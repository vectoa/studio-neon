// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';

import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

import HomePage from './pages/Home/HomePage';
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin';



import ShopPage from './pages/Shop/ShopPage';
import CustomizeNeonPage from './pages/Customize/CustomizeNeonPage';
import ContactIdeaPage from './pages/ContactIdea/ContactIdeaPage';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import ProductPage from './pages/Product/ProductPage';


import './scss/App.scss';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/customize" element={<CustomizeNeonPage />} />
            <Route path="/contact-idea" element={<ContactIdeaPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            

            {/* Page de login admin */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Page admin protégée */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
