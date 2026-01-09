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
  return (
    <section id="services" className="py-16 relative overflow-hidden bg-background">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4 tracking-wide">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rotate-45 border border-primary/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium automotive customization crafted with precision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative h-full"
            >
              {/* Card */}
              <div className="relative h-full bg-[#0a0a0a] rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                {/* Top gold line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/15">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg text-foreground mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
