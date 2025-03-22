// src/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import { ADMIN_PASSWORD } from './secret';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  function login(password) {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      return true;
    }
    return false;
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
