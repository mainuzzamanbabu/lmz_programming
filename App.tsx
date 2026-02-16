
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgrammingPage from './pages/ProgrammingPage';
import BackendPage from './pages/BackendPage';
import DjangoPage from './pages/DjangoPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/backend" element={<BackendPage />} />
        <Route path="/django" element={<DjangoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
