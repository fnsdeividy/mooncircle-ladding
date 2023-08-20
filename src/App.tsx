import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import NavBar from './components/NavBar';
import Footer from './components/footer';

import HomePages from './Pages/HomePages';

function App() {
  return (
    <div>

      <NavBar />
      <HomePages />
      <Footer />

    </div>
  );
}

export default App;
