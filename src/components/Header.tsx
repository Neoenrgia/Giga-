import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Menu, X, Phone, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = 'https://w.app/jni4eg';

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
              <Wifi className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Giga Mais
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Início
            </Link>
            <Link to="/quem-somos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Quem Somos
            </Link>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <a
                href={`${whatsappUrl}?text=Olá! Gostaria de consultar minha fatura.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
              >
                <FileText className="h-4 w-4" />
                <span>Fatura</span>
              </a>
              <a
                href={`${whatsappUrl}?text=Olá! Preciso negociar meu plano.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                <span>Negociações</span>
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/quem-somos"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href={`${whatsappUrl}?text=Olá! Gostaria de consultar minha fatura.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
                >
                  <FileText className="h-4 w-4" />
                  <span>Fatura</span>
                </a>
                <a
                  href={`${whatsappUrl}?text=Olá! Preciso negociar meu plano.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  <span>Negociações</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
