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
  Camera,
  Shield,
  Code,
} from 'lucide-react';

// Import service images
import serviceAmbientLighting from '@/assets/service-ambient-lighting.jpg';
import serviceStarlights from '@/assets/service-starlights.jpg';
import serviceRemapping from '@/assets/service-remapping.jpg';
import serviceAudio from '@/assets/service-audio.jpg';
import serviceSteering from '@/assets/service-steering.jpg';
import serviceHeadlightConversion from '@/assets/service-headlight-conversion.jpg';
import serviceBodykit from '@/assets/service-bodykit.jpg';
import serviceCeramic from '@/assets/service-ceramic.jpg';
import serviceCarplay from '@/assets/service-carplay.jpg';
import serviceDashcam from '@/assets/service-dashcam.jpg';
import serviceTracker from '@/assets/service-tracker.jpg';

const services = [
  {
    icon: Lightbulb,
    title: 'Ambient Lighting',
    description: 'OEM & custom ambient lighting installations that transform your vehicle interior into a stunning visual experience.',
    price: 'Prices from £200',
    projectId: 'ambient-lighting',
    projectImage: serviceAmbientLighting,
  },
  {
    icon: Sparkles,
    title: 'Starlights',
    description: 'Premium fiber optic starlight headliner installations creating a mesmerizing galaxy effect in your vehicle roof.',
    price: 'Prices from £300',
    projectId: 'starlights',
    projectImage: serviceStarlights,
  },
  {
    icon: Gauge,
    title: 'Starlight Remapping',
    description: 'Advanced starlight pattern remapping and customisation for unique ceiling configurations.',
    price: 'Prices from £250',
    projectId: 'starlight-remapping',
    projectImage: serviceRemapping,
  },
  {
    icon: Code,
    title: 'Vehicle Coding',
    description: 'Professional vehicle coding to unlock hidden features, enable options, and personalise your vehicle settings.',
    price: 'Prices from £80',
    projectId: 'vehicle-coding',
    projectImage: serviceRemapping,
  },
  {
    icon: Volume2,
    title: 'Audio Upgrades',
    description: 'High-end audio system installations including speakers, subwoofers, amplifiers, and sound deadening.',
    price: 'Prices from £200',
    projectId: 'audio',
    projectImage: serviceAudio,
  },
  {
    icon: CircleDot,
    title: 'Steering Wheel Customisation',
    description: 'Bespoke steering wheel modifications including Alcantara wraps, LED displays, and carbon fiber accents.',
    price: 'Prices from £150',
    projectId: 'steering',
    projectImage: serviceSteering,
  },
  {
    icon: Headphones,
    title: 'Headlight Conversion',
    description: 'LED and laser headlight upgrades, custom projector installations, and DRL modifications.',
    price: 'Prices from £300',
    projectId: 'headlights',
    projectImage: serviceHeadlightConversion,
  },
  {
    icon: Smartphone,
    title: 'Apple CarPlay Integration',
    description: 'Retrofit Apple CarPlay, Android Auto, and larger touchscreen displays for seamless connectivity.',
    price: 'Prices from £160',
    projectId: 'carplay',
    projectImage: serviceCarplay,
  },
  {
    icon: Car,
    title: 'Body Kits',
    description: 'Custom bodykit installations and professional caliper resprays in any color to match your style.',
    price: 'Prices from £150',
    projectId: 'bodykit',
    projectImage: serviceBodykit,
  },
  {
    icon: Droplets,
    title: 'Ceramic Coatings',
    description: 'Premium ceramic coating applications for long-lasting paint protection and stunning gloss finish.',
    price: 'Prices from £200',
    projectId: 'ceramic',
    projectImage: serviceCeramic,
  },
  {
    icon: Camera,
    title: 'Dash Cameras',
    description: 'Premium front and rear dash camera installations with discreet wiring and seamless vehicle integration.',
    price: 'Prices from £200',
    projectId: 'dashcam',
    projectImage: serviceDashcam,
  },
  {
    icon: Shield,
    title: 'Trackers & Immobilisers',
    description: 'Advanced vehicle security solutions including GPS tracking and immobilisation systems for maximum protection.',
    price: 'Prices from £400',
    projectId: 'tracker',
    projectImage: serviceTracker,
  },
];

const handleScrollToProject = (projectId: string) => {
  const element = document.getElementById(`project-${projectId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const Services = () => {
  return (
    <>
      <section id="services" className="py-12 relative overflow-hidden bg-[#050505]">
        {/* Top gold divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative h-full"
              >
                {/* Card */}
                <div className="relative h-full flex flex-col bg-[#0a0a0a] rounded-xl p-6 border border-primary/10 hover:border-primary/25 transition-colors duration-300">
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
                  <p className="text-muted-foreground/70 text-sm leading-relaxed flex-grow mb-4">
                    {service.description}
                  </p>

                  {/* Price and Button Row */}
                  <div className="flex items-end justify-between mt-auto">
                    {/* Price - bottom left */}
                    <span className="text-primary/80 text-sm font-medium">
                      {service.price}
                    </span>
                    
                    {/* View Past Projects Button - bottom right */}
                    <button
                      onClick={() => handleScrollToProject(service.projectId)}
                      className="text-xs font-medium text-primary border border-primary/30 bg-background px-3 py-1.5 rounded hover:border-primary/60 hover:text-primary transition-colors duration-200"
                    >
                      View Past Projects
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground/60 text-xs max-w-2xl mx-auto">
              All prices shown are indicative starting prices. Final pricing may vary depending on vehicle make, model, year, and specific installation requirements.
            </p>
          </div>
        </div>

        {/* Bottom gold divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* Past Projects Section */}
      <section id="past-projects" className="py-12 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4 tracking-wide">
              Past Projects
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rotate-45 border border-primary/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing our craftsmanship across every service
            </p>
          </div>

          {/* Project Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.projectId}
                id={`project-${service.projectId}`}
                className="relative rounded-xl overflow-hidden border border-primary/10"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={service.projectImage}
                    alt={`${service.title} past project`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Service title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 py-3">
                  <h4 className="font-heading text-sm text-primary tracking-wide">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;