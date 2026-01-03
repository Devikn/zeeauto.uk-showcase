import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="font-heading text-primary-foreground text-lg font-bold">Z</span>
            </div>
            <span className="font-heading text-primary text-lg tracking-wider">
              ZeeAuto.uk
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="https://instagram.com/zeeauto.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={16} />
              <span>@zeeauto.uk</span>
            </a>
            <a
              href="tel:07565009642"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span>07565 009642</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>West London</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} ZeeAuto.uk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
