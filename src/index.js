import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ErrorBoundary } from './ErrorPage/ErrorBoundary';
import { AuthProvider } from './Context/AuthProvider';
import {HelmetProvider} from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ErrorBoundary>
  <Router>
    <AuthProvider>
      <HelmetProvider>
    <Routes>
      <Route path='/*' element={<App/>}/>
      </Routes>
      </HelmetProvider>
    </AuthProvider>
  </Router>
  </ErrorBoundary>
  </React.StrictMode>
);

