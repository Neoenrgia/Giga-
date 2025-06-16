import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/politica-privacidade" element={<Privacy />} />
            <Route path="/termos-uso" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;