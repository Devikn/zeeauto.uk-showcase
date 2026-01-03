import { Instagram, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCar from '@/assets/hero-car.jpg';

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
          backgroundImage: `url(${heroCar})`,
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
        {/* Logo Shield */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-1 animate-float">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="font-heading text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                Z
              </span>
            </div>
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

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
