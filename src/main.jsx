import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import router from './routes/CompleteRoutes';

import { CartContextProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext'; // ✅ import AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ Wrap your app in AuthProvider */}
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </AuthProvider>
  </React.StrictMode>
);


