import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { Heart, Users, Stethoscope, Palette, Wrench, Calendar, ArrowRight, Award, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Heart size={24} />,
      title: "Devotional Activities",
      description: "Spiritual programs and temple services fostering community faith and devotion.",
      href: "/services"
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Medical Support",
      description: "Healthcare services and medical camps for underserved communities.",
      href: "/services"
    },
    {
      icon: <Users size={24} />,
      title: "Social Welfare",
      description: "Community development programs supporting education and livelihood.",
      href: "/services"
    },
    {
      icon: <Palette size={24} />,
      title: "Cultural Promotion",
      description: "Preserving and promoting traditional arts, music, and cultural heritage.",
      href: "/services"
    },
    {
      icon: <Wrench size={24} />,
      title: "Industrial & Skill Development",
      description: "Vocational training and skill development for economic empowerment.",
      href: "/services"
    },
    {
      icon: <Calendar size={24} />,
      title: "Community Events",
      description: "Regular community gatherings and celebration of festivals.",
      href: "/services"
    }
  ];

  const stats = [
    { number: "35+", label: "Years of Service", icon: <Award size={20} /> },
    { number: "100,000+", label: "People Served", icon: <Users size={20} /> },
    { number: "500+", label: "Events Organized", icon: <Calendar size={20} /> },
    { number: "50+", label: "Active Volunteers", icon: <Handshake size={20} /> }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src="/lovable-uploads/8b447f12-bf55-4365-97e0-9b2ecebc421d.png"
                alt="PSF Manavaseva Madhavaseva"
                className="h-20 w-auto mx-auto mb-6"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Serving with Faith & Compassion 
              <span className="block text-trust-gold">for 35+ Years</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              PSF Manavaseva Madhavaseva - Dedicated to humanity through devotional service, 
              healthcare, education, and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-trust-maroon hover:bg-trust-cream shadow-warm transition-all duration-300"
              >
                <Heart size={20} className="mr-2" />
                Join Our Mission
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-trust-maroon transition-all duration-300"
              >
                <Users size={20} className="mr-2" />
                Volunteer Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-trust-pink rounded-full flex items-center justify-center text-trust-maroon">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-trust-maroon mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-trust-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive programs designed to serve and uplift our community through various meaningful initiatives."
            centered
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-warm transition-all duration-300 border-0 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-trust-pink rounded-lg flex items-center justify-center text-trust-maroon mb-4 group-hover:bg-trust-gold group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-trust-maroon mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-trust-maroon font-medium hover:text-trust-gold transition-colors duration-300"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Our Mission of Service
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Together, we can make a meaningful difference in the lives of those who need it most. 
            Your support helps us continue our 35+ year legacy of compassionate service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-trust-gold text-trust-maroon hover:bg-yellow-400 shadow-warm transition-all duration-300"
            >
              <Heart size={20} className="mr-2" />
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-trust-maroon transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                <Users size={20} className="mr-2" />
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;