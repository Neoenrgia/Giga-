import React from 'react';
import { FileText, Scale, Globe, Shield, CheckCircle, MessageCircle } from 'lucide-react';

const Terms = () => {
  const whatsappUrl = 'https://w.app/m3ykyl';

  const services = [
    { name: 'Internet Fibra Óptica', description: 'Conexão de alta velocidade via tecnologia FTTH' },
    { name: 'Telefonia Fixa', description: 'Serviços de telefonia com qualidade superior' },
    { name: 'TV por Assinatura', description: 'Entretenimento digital via fibra óptica' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Scale className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Termos de Uso
              <span className="block text-yellow-400">Giga Mais Fibra</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Condições gerais para utilização dos nossos serviços e plataformas digitais
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-blue-50 p-8 rounded-2xl mb-12">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">TERMOS DE USO</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    A <strong>Giga Mais</strong>, ou simplesmente <strong>GIGA MAIS</strong> é uma operadora 
                    que oferece serviços de Internet, Telefonia Fixa e TV por Assinatura por meio da 
                    Fibra Ótica, atualmente considerada a mais moderna tecnologia para transporte de dados.
                  </p>
                  <p>
                    Assim, apresentamos os nossos Termos de Uso e a nossa Política de Privacidade para 
                    que os nossos usuários e titulares de dados pessoais compreendam facilmente as 
                    condições para uso dos nossos Sites, Plataformas e Aplicativos, e a forma como 
                    coletamos e usamos suas informações em nossas atividades. Se tiver dúvidas, entre 
                    em contato conosco pelos nossos canais de atendimento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Framework */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conformidade Legal</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O presente <strong>TERMOS DE USO</strong> regula as condições gerais de utilização dos 
              sites, plataformas e aplicativos de Internet da <strong>GIGA MAIS</strong>, em conformidade 
              com a Lei 12.965/2014 (Marco Civil da Internet) e todas as informações pessoais relativas 
              a assinantes ou visitantes que usem o site serão tratadas em concordância com a 
              Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais).
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Lei 12.965/2014</strong> - Marco Civil da Internet
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Lei nº 13.709/2018</strong> - Lei Geral de Proteção de Dados Pessoais
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Regulamentação ANATEL</strong> - Certificação e conformidade
                </span>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Tecnologia de Ponta</h2>
              <p className="text-blue-100 text-lg">
                Utilizamos a mais moderna tecnologia para transporte de dados
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">Fibra Óptica FTTH</h3>
                </div>
                <p className="text-blue-100">
                  Fiber to the Home - Fibra óptica direto até sua casa, garantindo 
                  máxima velocidade e estabilidade.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">Cobertura Nacional</h3>
                </div>
                <p className="text-blue-100">
                  Presentes em mais de 280 cidades brasileiras, conectando 
                  milhões de pessoas com qualidade superior.
                </p>
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="bg-green-50 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Direitos do Usuário</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Qualidade do Serviço</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Velocidade conforme contratada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Estabilidade da conexão</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Suporte técnico especializado</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Atendimento</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Atendimento 24 horas por dia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Canais múltiplos de contato</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Resolução rápida de problemas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gray-50 p-8 rounded-2xl">
            <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dúvidas sobre os Termos de Uso?
            </h2>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre nossos termos e condições.
            </p>
            <a
              href={`${whatsappUrl}?text=Olá! Tenho dúvidas sobre os termos de uso da Giga Mais.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg inline-block"
            >
              Falar com Atendimento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;