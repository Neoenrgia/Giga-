import React from 'react';
import { Zap, Shield, Award, Star, CheckCircle, Wifi, TrendingUp } from 'lucide-react';

const Home = () => {
  const whatsappUrl = 'https://w.app/m3ykyl';

  const plans = [
    {
      name: 'Giga Start',
      speed: '400 Mega',
      price: '79,99',
      features: ['Até 400 Mbps de Download', 'Até 200 Mbps de Upload', 'Taxa de instalação Grátis', 'Internet 100% Fibra Óptica']
    },
    {
      name: 'Giga Plus',
      speed: '600 Mega',
      price: '99,99',
      features: ['Até 600 Mbps de Download', 'Até 300 Mbps de Upload', 'Taxa de instalação Grátis', 'Internet 100% Fibra Óptica'],
      popular: true
    },
    {
      name: 'Giga Ultra',
      speed: '800 Mega',
      price: '119,99',
      features: ['Até 800 Mbps de Download', 'Até 400 Mbps de Upload', 'Taxa de instalação Grátis', 'Internet 100% Fibra Óptica']
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo - SP',
      text: 'Desde que contratei a Giga Mais, minha internet nunca mais oscilou. A velocidade é exatamente como prometido e o atendimento é excelente.',
      rating: 5
    },
    {
      name: 'João Santos',
      location: 'Rio de Janeiro - RJ',
      text: 'Trabalho home office e preciso de uma conexão estável. A Giga Mais superou minhas expectativas. Recomendo para todos!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      location: 'Belo Horizonte - MG',
      text: 'A instalação foi super rápida e os técnicos muito profissionais. A internet é realmente de alta qualidade, vale cada centavo.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Internet
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Ultra Rápida
                  </span>
                  na Fibra Óptica
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Conecte-se com a velocidade que você merece. Planos de fibra óptica 
                  com velocidade simétrica e estabilidade garantida.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`${whatsappUrl}?text=Olá! Quero contratar a Giga Mais Fibra. Qual o melhor plano para mim?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Atendimento Online
                </a>
                <a
                  href="#planos"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all text-center"
                >
                  Ver Planos
                </a>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Instalação Profissional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Suporte 24h</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 absolute -top-4 -left-4"></div>
                <div className="w-72 h-72 bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative">
                  <div className="text-center space-y-6">
                    <Wifi className="h-16 w-16 mx-auto text-yellow-400" />
                    <div>
                      <div className="text-4xl font-bold">1.5M+</div>
                      <div className="text-blue-200">Clientes Conectados</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">280+</div>
                      <div className="text-blue-200">Cidades Atendidas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Giga Mais?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos parte do Grupo Alloha Fibra, a maior empresa independente de fibra óptica do Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Velocidade Simétrica</h3>
              <p className="text-gray-600">
                Upload e download na mesma velocidade. Ideal para trabalho remoto, 
                streaming e jogos online.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conexão Estável</h3>
              <p className="text-gray-600">
                Fibra óptica FTTH garante estabilidade e qualidade superior, 
                sem oscilações ou quedas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certificada Anatel</h3>
              <p className="text-gray-600">
                Empresa regulamentada e certificada pela Agência Nacional 
                de Telecomunicações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu Plano
            </h2>
            <p className="text-xl text-gray-600">
              Planos de fibra óptica a partir de R$ 89,90 por mês
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 transform hover:-translate-y-2 transition-all ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.speed}</div>
                  <div className="text-3xl font-bold text-gray-900">
                    R$ {plan.price}
                    <span className="text-lg font-normal text-gray-600">/mês</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${whatsappUrl}?text=Olá! Tenho interesse no plano ${plan.name} de ${plan.speed}. Podem me ajudar?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Contratar Plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de quem já usa a Giga Mais Fibra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para ter a melhor internet?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato agora e descubra qual plano é ideal para você
          </p>
          <a
            href={`${whatsappUrl}?text=Olá! Quero contratar a Giga Mais Fibra. Podem me passar mais informações?`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Falar com Especialista
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
