import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PerformancePage from './PerformancePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/performance" element={<PerformancePage />} />
      </Routes>
    </BrowserRouter>
  );
}
