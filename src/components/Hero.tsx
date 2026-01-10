import { Instagram, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import posterBackground from '@/assets/poster-background.jpg';
import zeeautoLogo from '@/assets/zeeauto-logo.jpeg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image - Rotated 180deg, reduced overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${posterBackground})`,
          transform: 'rotate(180deg)',
        }}
      />
      
      {/* Light overlay - 40% opacity only */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Yellow ambient glow around logo and button area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Animated Stars - kept as requested */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center">
        {/* Logo - Static, Centered, No animations */}
        <div className="mb-6">
          <img 
            src={zeeautoLogo} 
            alt="ZeeAuto Logo" 
            className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-2xl border border-primary/20"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary mb-3 tracking-wider">
          ZeeAuto.uk
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 font-light tracking-wide">
          Transforming Cars into Masterpieces
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
          <a
            href="https://instagram.com/zeeauto.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
            <span className="text-sm md:text-base">@zeeauto.uk</span>
          </a>
          <a
            href="tel:07565009642"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm md:text-base">07565 009642</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} />
            <span className="text-sm md:text-base">West London</span>
          </div>
        </div>

        {/* CTA Button - closer spacing */}
        <div className="mt-4">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToContact}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
