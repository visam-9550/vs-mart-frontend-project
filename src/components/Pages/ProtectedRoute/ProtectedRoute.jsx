import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'; // Optional: Use localStorage or any auth state

const ProtectedRoute = () => {
  const isAuthenticated = Cookies.get('userData'); // Check authentication (Modify as needed)

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
