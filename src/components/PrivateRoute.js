import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = document.cookie.includes('loggedIn=true');
  
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;


