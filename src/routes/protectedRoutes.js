import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Example of a simple authentication check function
const isAuthenticated = () => {
  // Implement your authentication logic here, e.g., checking if the user is logged in
  return true; // Placeholder for demonstration
};

const ProtectedRoute = ({ element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? element : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
