import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Giga Mais</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Internet fibra óptica de alta velocidade para conectar você ao que importa. 
              Parte do Grupo Alloha Fibra, a maior empresa independente de FTTH do Brasil.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Início
              </Link>
              <Link to="/quem-somos" className="text-gray-300 hover:text-white transition-colors">
                Quem Somos
              </Link>
              <Link to="/politica-privacidade" className="text-gray-300 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="text-gray-300 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">WhatsApp Atendimento</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="h-4 w-4" />
                <span className="text-sm">24h por dia, 7 dias por semana</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Mais de 280 cidades atendidas</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Certificações</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg w-fit">
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-sm">ANATEL</div>
                  <div className="text-gray-600 text-xs">CERTIFICADO</div>
                </div>
              </div>
              <p className="text-gray-300 text-xs">
                Empresa regulamentada pela Agência Nacional de Telecomunicações
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Giga Mais Fibra. Todos os direitos reservados. 
            Uma marca do Grupo Alloha Fibra.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;