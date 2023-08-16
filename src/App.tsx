import React from 'react';
import './App.css';


import Header from './components/Header';
import Footer from './components/footer';
import Home from './Pages/Home';
import SaibaMais from './Pages/SaibaMais';
import Parcerias from './Pages/Parcerias';

function App() {
  return (
   <>
    <Header />
      <Home />
      <SaibaMais />
      <Parcerias />
      <Footer />
   </>
  );
}

export default App;
