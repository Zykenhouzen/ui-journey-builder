import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Base from './journey-builder/start-page/base-page'
import FormPage from './journey-builder/form-page/form-page'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="about" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
