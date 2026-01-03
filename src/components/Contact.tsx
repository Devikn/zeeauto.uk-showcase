import { useState, useEffect, useRef } from 'react';
import { Instagram, Phone, MapPin, Send, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ambientInterior from '@/assets/ambient-interior.jpg';

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
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

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

  const contactCards = [
    {
      icon: Instagram,
      label: 'Follow Us',
      value: '@zeeauto.uk',
      href: 'https://instagram.com/zeeauto.uk',
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '07565 009642',
      href: 'tel:07565009642',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@zeeauto.uk',
      href: 'mailto:info@zeeauto.uk',
      gradient: 'from-secondary to-primary',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'West London, UK',
      href: null,
      gradient: 'from-primary via-secondary to-primary',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${ambientInterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-60 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary tracking-widest uppercase">Get Started</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-6">
            Let's Create Magic
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Ready to transform your vehicle? Reach out and let's discuss your vision
          </p>
        </div>

        {/* Contact Cards - Horizontal Strip */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {contactCards.map((card, index) => (
            <a
              key={card.label}
              href={card.href || undefined}
              target={card.href?.startsWith('http') ? '_blank' : undefined}
              rel={card.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:scale-105 ${
                card.href ? 'cursor-pointer' : 'cursor-default'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="absolute inset-[1px] rounded-2xl bg-charcoal/90" />
              
              {/* Animated border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} style={{ padding: '1px' }}>
                <div className="w-full h-full rounded-2xl bg-charcoal" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${card.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-charcoal flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{card.label}</p>
                <p className="text-primary font-medium group-hover:text-secondary transition-colors">{card.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Main Contact Form - Asymmetric Design */}
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative frame */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/50 rounded-br-3xl" />
          
          {/* Glowing orbs */}
          <div className="absolute -top-10 left-1/2 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-primary/20">
            {/* Form Header */}
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl md:text-3xl text-primary mb-2">Request a Quote</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full px-6 py-4 bg-background/50 border-2 border-primary/20 rounded-xl text-foreground focus:border-primary focus:outline-none transition-all duration-300 placeholder-transparent"
                    placeholder="Your Name"
                    id="name"
                  />
                  <label 
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none bg-charcoal px-2 ${
                      formData.name || focusedField === 'name'
                        ? '-top-3 text-xs text-primary'
                        : 'top-4 text-muted-foreground'
                    }`}
                  >
                    Your Name *
                  </label>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-focus-within:w-full group-focus-within:left-0 transition-all duration-500" />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full px-6 py-4 bg-background/50 border-2 border-primary/20 rounded-xl text-foreground focus:border-primary focus:outline-none transition-all duration-300 placeholder-transparent"
                    placeholder="Email"
                    id="email"
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none bg-charcoal px-2 ${
                      formData.email || focusedField === 'email'
                        ? '-top-3 text-xs text-primary'
                        : 'top-4 text-muted-foreground'
                    }`}
                  >
                    Email Address *
                  </label>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-focus-within:w-full group-focus-within:left-0 transition-all duration-500" />
                </div>
              </div>

              {/* Phone & Service Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full px-6 py-4 bg-background/50 border-2 border-primary/20 rounded-xl text-foreground focus:border-primary focus:outline-none transition-all duration-300 placeholder-transparent"
                    placeholder="Phone"
                    id="phone"
                  />
                  <label 
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none bg-charcoal px-2 ${
                      formData.phone || focusedField === 'phone'
                        ? '-top-3 text-xs text-primary'
                        : 'top-4 text-muted-foreground'
                    }`}
                  >
                    Phone Number
                  </label>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-focus-within:w-full group-focus-within:left-0 transition-all duration-500" />
                </div>

                <div className="relative group">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-background/50 border-2 border-primary/20 rounded-xl text-foreground focus:border-primary focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    id="service"
                  >
                    <option value="" className="bg-charcoal">Select a Service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-charcoal">
                        {service}
                      </option>
                    ))}
                  </select>
                  <label 
                    htmlFor="service"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none bg-charcoal px-2 ${
                      formData.service || focusedField === 'service'
                        ? '-top-3 text-xs text-primary'
                        : 'top-4 text-muted-foreground opacity-0'
                    }`}
                  >
                    Service
                  </label>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary/50" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full px-6 py-4 bg-background/50 border-2 border-primary/20 rounded-xl text-foreground focus:border-primary focus:outline-none transition-all duration-300 resize-none placeholder-transparent"
                  placeholder="Message"
                  id="message"
                />
                <label 
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none bg-charcoal px-2 ${
                    formData.message || focusedField === 'message'
                      ? '-top-3 text-xs text-primary'
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  Tell us about your project *
                </label>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-focus-within:w-full group-focus-within:left-0 transition-all duration-500" />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group overflow-hidden px-12 py-6 text-lg font-heading tracking-wider uppercase bg-transparent border-2 border-primary rounded-xl hover:border-secondary transition-colors duration-300"
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3 text-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>

            {/* Bottom decoration */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <Sparkles className="w-4 h-4 text-primary/50" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
