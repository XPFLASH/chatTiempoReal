import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import ProtectedRoute from './components/ProtectedRoute';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
