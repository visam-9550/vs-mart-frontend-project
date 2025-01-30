// import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie"; // Using cookies to store the token

// const AuthorizedProtectedRoute = ({ children }) => {
//   const token = Cookies.get("authToken"); // Get token from cookies

//   return token ? <Navigate to="/" /> : children; 
// };

// export default AuthorizedProtectedRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'; // Optional: Use localStorage or any auth state

const AuthorizedProtectedRoute = () => {
  const isAuthenticated = Cookies.get('userData'); // Check authentication (Modify as needed)

  return isAuthenticated ? <Navigate to="/" />: <Outlet /> ;
};
export default AuthorizedProtectedRoute;
;