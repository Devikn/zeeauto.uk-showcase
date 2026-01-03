import { useState, useEffect, useRef } from 'react';
import { Instagram, Phone, MapPin, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create mailto link as fallback
    const subject = encodeURIComponent(`Quote Request - ${formData.service || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@zeeauto.uk?subject=${subject}&body=${body}`;

    toast({
      title: "Message Prepared!",
      description: "Your email client should open with your message ready to send.",
    });

    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const services = [
    'Ambient Lighting (OEM & Custom)',
    'Starlights',
    'Remapping & Coding',
    'Audio Upgrades',
    'Steering Wheel Customisation',
    'Headlight Conversions',
    'Apple CarPlay & Screen Upgrades',
    'Bodykits & Caliper Resprays',
    'Ceramic Coatings',
    'Other',
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4 tracking-wide">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your car? Contact us for a free quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h3 className="font-heading text-2xl text-primary mb-8">Contact Details</h3>
            
            <div className="space-y-6">
              <a
                href="https://instagram.com/zeeauto.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Instagram</p>
                  <p className="text-primary font-medium">@zeeauto.uk</p>
                </div>
              </a>

              <a
                href="tel:07565009642"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <p className="text-primary font-medium">07565 009642</p>
                </div>
              </a>

              <a
                href="mailto:info@zeeauto.uk"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="text-primary font-medium">info@zeeauto.uk</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-primary font-medium">West London, UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-muted-foreground mb-2 text-sm">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border-2 border-primary/20 rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground mb-2 text-sm">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border-2 border-primary/20 rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-muted-foreground mb-2 text-sm">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-card border-2 border-primary/20 rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground mb-2 text-sm">Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-card border-2 border-primary/20 rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-muted-foreground mb-2 text-sm">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card border-2 border-primary/20 rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={20} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
