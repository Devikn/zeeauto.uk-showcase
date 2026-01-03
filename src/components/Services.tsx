import { useEffect, useRef, useState } from 'react';
import {
  Lightbulb,
  Sparkles,
  Gauge,
  Volume2,
  CircleDot,
  Headphones,
  Smartphone,
  Car,
  Droplets,
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Ambient Lighting',
    description: 'OEM & custom ambient lighting installations that transform your vehicle interior into a stunning visual experience.',
  },
  {
    icon: Sparkles,
    title: 'Starlights',
    description: 'Premium fiber optic starlight headliner installations creating a mesmerizing galaxy effect in your vehicle roof.',
  },
  {
    icon: Gauge,
    title: 'Remapping & Coding',
    description: 'Professional ECU remapping and vehicle coding to unlock hidden features and optimize performance.',
  },
  {
    icon: Volume2,
    title: 'Audio Upgrades',
    description: 'High-end audio system installations including speakers, subwoofers, amplifiers, and sound deadening.',
  },
  {
    icon: CircleDot,
    title: 'Steering Wheel Customisation',
    description: 'Bespoke steering wheel modifications including Alcantara wraps, LED displays, and carbon fiber accents.',
  },
  {
    icon: Headphones,
    title: 'Headlight Conversions',
    description: 'LED and laser headlight upgrades, custom projector installations, and DRL modifications.',
  },
  {
    icon: Smartphone,
    title: 'Apple CarPlay & Screen Upgrades',
    description: 'Retrofit Apple CarPlay, Android Auto, and larger touchscreen displays for seamless connectivity.',
  },
  {
    icon: Car,
    title: 'Bodykits & Caliper Resprays',
    description: 'Custom bodykit installations and professional caliper resprays in any color to match your style.',
  },
  {
    icon: Droplets,
    title: 'Ceramic Coatings',
    description: 'Premium ceramic coating applications for long-lasting paint protection and stunning gloss finish.',
  },
];

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4 tracking-wide">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Premium automotive customization services tailored to transform your vehicle into a masterpiece
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`group relative bg-card rounded-xl p-8 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative font-heading text-xl text-primary mb-3 tracking-wide group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
