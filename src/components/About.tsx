import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-secondary rounded-br-3xl" />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6 tracking-wide">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-8" />
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Based in <span className="text-primary font-semibold">West London</span>, 
                ZeeAuto.uk is your premier destination for luxury automotive customization. 
                We specialize in transforming ordinary vehicles into extraordinary masterpieces 
                that reflect your unique style and personality.
              </p>
              <p>
                Our team of skilled technicians brings years of experience and a passion 
                for perfection to every project. From subtle ambient lighting upgrades to 
                complete interior transformations, we deliver results that exceed expectations.
              </p>
              <p>
                We pride ourselves on using only the highest quality materials and the latest 
                techniques to ensure every installation is flawless. Your satisfaction is our 
                top priority, and we work closely with you to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;