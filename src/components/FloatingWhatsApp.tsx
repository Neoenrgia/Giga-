import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const whatsappUrl = 'https://w.app/jni4eg';

  return (
    <a
      href={`${whatsappUrl}?text=Olá! Gostaria de conhecer os planos da Giga Mais Fibra.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
