import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routs/router';
import AuthProviders from './providers/AuthProviders';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
