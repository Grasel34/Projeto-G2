import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Footer from './assets/Components/Footer';
import Home from './paginas/Home';
import Serviços from './paginas/Serviços';
import Contato from './paginas/Contato';
import SobreNos from './paginas/SobreNos';
import { CartProvider } from './assets/Components/CartContext'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serviços" element={<Serviços />} />
          <Route path="/contato" element={<Contato />} /> 
          <Route path="/sobre-nos" element={<SobreNos />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
