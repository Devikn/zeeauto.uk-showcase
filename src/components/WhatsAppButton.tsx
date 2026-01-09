import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '447565009642';
  const message = encodeURIComponent("Hi, I'd like a quote for [service]. Please let me know about pricing and availability.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Contact us on WhatsApp"
    >
      {/* Button - Black background, Gold icon, No animations */}
      <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center border border-primary/30 shadow-lg hover:border-primary/60 transition-colors duration-300">
        <MessageCircle className="w-6 h-6 text-primary fill-primary" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
