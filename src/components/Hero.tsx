import { Instagram, Phone, MapPin, ChevronDown } from 'lucide-react';
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
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${posterBackground})`,
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      {/* Animated Stars */}
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative mx-auto animate-float">
            <img 
              src={zeeautoLogo} 
              alt="ZeeAuto Logo" 
              className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-2xl"
              style={{
                filter: 'drop-shadow(0 0 30px hsl(30 100% 50% / 0.6))',
              }}
            />
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Brand Name */}
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary mb-4 tracking-wider animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          ZeeAuto.uk
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light tracking-wide animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          Transforming Cars into Masterpieces
        </p>

        {/* Contact Info */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mb-10 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="https://instagram.com/zeeauto.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={20} />
            <span>@zeeauto.uk</span>
          </a>
          <a
            href="tel:07565009642"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={20} />
            <span>07565 009642</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={20} />
            <span>West London</span>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: '1s' }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToContact}
          >
            Get a Quote
          </Button>
        </div>

        {/* Scroll Indicator - Chevron Arrow */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="flex flex-col items-center gap-1 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
            <ChevronDown className="w-8 h-8 text-primary/60 -mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
