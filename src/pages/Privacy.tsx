import React from 'react';
import { Shield, FileText, Lock, Eye, CheckCircle, Users } from 'lucide-react';

const Privacy = () => {
  const whatsappUrl = 'https://w.app/jni4eg';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de Privacidade e
              <span className="block text-yellow-400">Proteção de Dados</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Transparência total no tratamento dos seus dados pessoais
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Objective Section */}
          <div className="bg-blue-50 p-8 rounded-2xl mb-12">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">OBJETIVO</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A Política de Privacidade e Proteção de Dados tem como objetivo explicar como a 
                  <strong> Giga Mais Fibra</strong> trata e protege os seus Dados Pessoais e, ainda, 
                  quais são os seus direitos e como Você poderá exercê-los, incluindo quais as 
                  finalidades do Tratamento dos Dados Pessoais, os tipos de Dados que coletamos 
                  e as medidas de proteção adotadas para a coleta, uso, armazenamento, segurança 
                  e confidencialidade dos Dados Pessoais necessários.
                </p>
              </div>
            </div>
          </div>

          {/* Key Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança</h3>
              <p className="text-gray-600">
                Adotamos medidas rigorosas de proteção para garantir a segurança dos seus dados pessoais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparência</h3>
              <p className="text-gray-600">
                Explicamos claramente como coletamos, usamos e armazenamos suas informações pessoais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seus Direitos</h3>
              <p className="text-gray-600">
                Você tem total controle sobre seus dados e pode exercer seus direitos a qualquer momento.
              </p>
            </div>
          </div>

          {/* Legal Framework */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conformidade Legal</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Lei nº 13.709/2018</strong> - Lei Geral de Proteção de Dados Pessoais (LGPD)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Marco Civil da Internet</strong> - Lei 12.965/2014
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Regulamentação ANATEL</strong> - Agência Nacional de Telecomunicações
                </span>
              </div>
            </div>
          </div>

          {/* Data Protection Commitment */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6">Nosso Compromisso com Você</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Proteção de Dados</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Coleta responsável de informações</li>
                  <li>• Armazenamento seguro e criptografado</li>
                  <li>• Uso exclusivo para finalidades declaradas</li>
                  <li>• Compartilhamento apenas quando necessário</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Seus Direitos</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Acesso aos seus dados pessoais</li>
                  <li>• Correção de informações incorretas</li>
                  <li>• Exclusão de dados quando solicitado</li>
                  <li>• Portabilidade das suas informações</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dúvidas sobre Privacidade?
            </h2>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco para esclarecer qualquer questão sobre o tratamento dos seus dados pessoais.
            </p>
            <a
              href={`${whatsappUrl}?text=Olá! Tenho dúvidas sobre a política de privacidade da Giga Mais.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg inline-block"
            >
              Tirar Dúvidas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
