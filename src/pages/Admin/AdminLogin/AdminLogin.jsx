// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useAuth } from '../../../AuthContext';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      alert("Mot de passe incorrect");
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default AdminLogin;
