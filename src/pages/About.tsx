import React from 'react';
import { Wifi, MapPin, Users, Award, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '1,5M+', label: 'Clientes Conectados' },
    { icon: MapPin, value: '280+', label: 'Cidades Atendidas' },
    { icon: TrendingUp, value: '149 mil km', label: 'Rede Fibra Óptica' },
    { icon: Shield, value: '100%', label: 'Fibra FTTH' }
  ];

  const states = ['CE', 'DF', 'ES', 'MA', 'MG', 'MS', 'PA', 'PE', 'PR', 'RJ', 'SE', 'SP'];

  const awards = [
    { title: 'Melhor Internet Gamer 2024', subtitle: 'RJ, ES, SP e DF', category: 'Melhor Prêmio Melhor Plano 2024' },
    { title: 'Melhor Internet', subtitle: 'Prêmio Nacional', category: 'Prêmio Melhor Escolha 2024' },
    { title: 'Melhor Upload', subtitle: 'Velocidade Superior', category: 'Prêmio Melhor Escolha 2024' },
    { title: 'Melhor Ping', subtitle: 'Menor Latência', category: 'Prêmio Melhor Escolha 2024' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Giga Mais: uma marca em evolução com a 
              <span className="block text-yellow-400">credibilidade do Grupo Alloha Fibra</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A maior empresa independente de fibra óptica FTTH (Fiber to the Home) do Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="bg-blue-50 p-2 rounded-full w-16 h-16 flex items-center justify-center">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Nossa Evolução e Crescimento
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A <strong>GIGA Mais</strong> é uma marca do Grupo Alloha Fibra, a maior empresa independente 
                  de fibra óptica FTTH (Fiber to the Home) do Brasil, e vem passando por importantes 
                  transformações nos últimos meses para conectar brasileiros cada vez mais com uma 
                  Internet com mais estabilidade, velocidade e possibilidades.
                </p>
                <p>
                  Recentemente, as operadoras de Telecomunicações VIP, Click, Ligue, Niu, Mob, Univox 
                  e Sumicity, também integrantes da Alloha Fibra, uniram-se à GIGA+ Fibra para fortalecer 
                  ainda mais o propósito do grupo de levar qualidade de conexão por fibra óptica para todo país.
                </p>
                <p>
                  Com esta união, nossa Internet ultrarrápida estará nas casas de milhares de brasileiros 
                  em mais de 280 cidades do Brasil – tudo isso com a qualidade da Melhor Velocidade e 
                  Melhor Internet Gamer, segundo o Melhor Prêmio Melhor Plano 2024.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Reconhecimento Nacional</h3>
                <p className="text-gray-700">
                  Premiados como a Melhor Internet, Melhor Upload e Melhor Ping, 
                  de acordo com o Prêmio Melhor Escolha 2024.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Prêmios e Reconhecimentos</h2>
              <p className="text-blue-100 text-xl">Qualidade reconhecida nacionalmente</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                  <div className="bg-yellow-400 text-blue-900 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{award.title}</h3>
                  <p className="text-blue-100 text-sm mb-2">{award.subtitle}</p>
                  <p className="text-xs text-blue-200">{award.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage Area */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Cobertura Nacional
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Presentes em mais de 280 cidades nos seguintes estados:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {states.map((state, index) => (
                <div key={index} className="bg-blue-600 text-white p-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition-colors">
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;