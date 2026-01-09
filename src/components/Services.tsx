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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            hsl(var(--primary)) 40px,
            hsl(var(--primary)) 41px
          )`
        }} />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">
              Excellence in Every Detail
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-[hsl(35,100%,55%)] to-secondary mb-6 tracking-wide">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
            <div className="w-3 h-3 rotate-45 border border-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Premium automotive customization services crafted with precision and passion.
            <br />
            <span className="text-primary/80">Transform your vehicle into a masterpiece.</span>
          </p>
        </div>

        {/* Luxury Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative transition-all duration-700 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Card with gradient border */}
              <div className="relative h-full">
                {/* Animated gradient border */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/50 via-transparent to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main card */}
                <div className="relative h-full bg-gradient-to-br from-[#0a0a0a] to-[#111] rounded-2xl p-8 border border-primary/10 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                  {/* Shine effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: hoveredIndex === index 
                        ? 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.1), transparent 40%)'
                        : 'none'
                    }}
                  />
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="relative inline-flex">
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                      
                      {/* Icon box */}
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
                        <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-500" />
                      </div>
                    </div>
                    
                    {/* Service number */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-background">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground/80 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-6 h-6">
                    <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-6 h-6">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">
              All services include <span className="text-primary font-medium">free consultation</span> and <span className="text-primary font-medium">warranty</span>
            </span>
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;