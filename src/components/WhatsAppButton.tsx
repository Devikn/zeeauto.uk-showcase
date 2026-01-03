import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '447565009642'; // UK format for WhatsApp
  const message = encodeURIComponent("Hi, I'd like a quote for [service]. Please let me know about pricing and availability.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-card border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <p className="text-primary text-sm font-medium">Chat on WhatsApp</p>
        <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary/30" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
