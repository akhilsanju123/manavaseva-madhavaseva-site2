import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-warm text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/8b447f12-bf55-4365-97e0-9b2ecebc421d.png"
                alt="PSF Manavaseva Madhavaseva"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">PSF Manavaseva Madhavaseva</h3>
                <p className="text-sm opacity-90">Serving with Faith & Compassion</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              For over 35 years, we have been dedicated to serving humanity through devotional activities, 
              medical support, social welfare, cultural promotion, and skill development programs.
            </p>
            <div className="flex items-center space-x-2 text-trust-gold">
              <Heart size={16} />
              <span className="text-sm font-medium">35+ Years of Compassionate Service</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Legacy', href: '/legacy' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-trust-gold transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 text-trust-gold" />
                <div className="text-sm">
                  <p>+91 7799222556</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 text-trust-gold" />
                <div className="text-sm">
                  <p>info@psfmanavaseva.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-trust-gold" />
                <div className="text-sm">
                  <p>#55-14-2, Mani Dweepam 1st Floor</p>
                  <p>APSEB Colony, Seethammadhara</p>
                  <p>Visakhapatnam - 530 013 (A.P.)</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-90">
              © 2024 PSF Manavaseva Madhavaseva. All rights reserved.
            </p>
            <p className="text-sm opacity-90 mt-2 md:mt-0">
              Built with ❤️ for serving humanity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;