import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Users, Stethoscope, Palette, Wrench, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Heart },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Stethoscope },
    { name: 'Legacy', href: '/legacy', icon: Palette },
    { name: 'Gallery', href: '/gallery', icon: Wrench },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/8b447f12-bf55-4365-97e0-9b2ecebc421d.png"
              alt="PSF Manavaseva Madhavaseva"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-trust-maroon">PSF</h1>
              <p className="text-sm text-trust-maroon/70">Manavaseva Madhavaseva</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-trust-pink text-trust-maroon'
                      : 'text-gray-600 hover:bg-trust-pink/30 hover:text-trust-maroon'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-warm hover:shadow-warm transition-all duration-300">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-trust-maroon"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-trust-pink/30 py-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-trust-pink text-trust-maroon'
                        : 'text-gray-600 hover:bg-trust-pink/30 hover:text-trust-maroon'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button className="w-full bg-gradient-warm hover:shadow-warm transition-all duration-300">
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;