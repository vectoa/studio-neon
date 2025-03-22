// src/ProtectedRoute.jsx
import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { authenticated } = useAuth();
  if (!authenticated) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}

export default ProtectedRoute;
