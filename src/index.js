import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Calculator from './components/Calculator';
import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import NotFound from './pages/NotFound';

// import './components/Calculator.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
