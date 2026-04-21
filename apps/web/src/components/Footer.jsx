
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span className="text-2xl font-bold text-primary">Print Pack</span>
            <p className="mt-4 leading-relaxed text-sm">
              Your trusted partner for reliable corrugated packaging solutions. Quality manufacturing with timely delivery.
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Quick Links</span>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-primary transition-all duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-primary transition-all duration-200"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-all duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Contact Info</span>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Shed 66, Wazirpur Industrial Area, Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 8375002511</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@printpackdelhi.in</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Follow Us</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/919667537637?text=Hi%20Print%20Pack%2C%20I%27m%20interested%20in%20corrugated%20packaging%20solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 Print Pack. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="hover:text-primary transition-all duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-all duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
