import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { Award, Users, Calendar, Heart, Stethoscope, GraduationCap, HandHeart, Trophy, Palette } from 'lucide-react';

const Legacy = () => {
  const stats = [
    {
      number: "100,000+",
      label: "People Served",
      description: "Lives touched through our various programs",
      icon: <Users size={32} />
    },
    {
      number: "500+",
      label: "Events Organized",
      description: "Community gatherings, camps, and celebrations",
      icon: <Calendar size={32} />
    },
    {
      number: "35+",
      label: "Years of Service",
      description: "Continuous dedication to community welfare",
      icon: <Award size={32} />
    },
    {
      number: "50+",
      label: "Active Volunteers",
      description: "Dedicated individuals serving the community",
      icon: <HandHeart size={32} />
    },
    {
      number: "200+",
      label: "Medical Camps",
      description: "Healthcare services in rural areas",
      icon: <Stethoscope size={32} />
    },
    {
      number: "1,000+",
      label: "Students Supported",
      description: "Educational scholarships and support",
      icon: <GraduationCap size={32} />
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Community Excellence Award",
      description: "Recognized for outstanding contribution to rural healthcare",
      icon: <Trophy size={24} />
    },
    {
      year: "2021",
      title: "Cultural Heritage Recognition",
      description: "Acknowledged for preserving traditional arts and culture",
      icon: <Palette size={24} />
    },
    {
      year: "2019",
      title: "Social Service Honor",
      description: "Awarded for exceptional social welfare programs",
      icon: <Heart size={24} />
    },
    {
      year: "2017",
      title: "Educational Impact Award",
      description: "Recognized for transformative educational initiatives",
      icon: <GraduationCap size={24} />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Medical Officer, Rural Health Center",
      content: "PSF's medical camps have been instrumental in providing healthcare to remote villages. Their dedication and systematic approach is truly commendable.",
      location: "Visakhapatnam"
    },
    {
      name: "Priya Sharma",
      role: "Beneficiary Parent",
      content: "My daughter received a scholarship that changed her life. Today she's pursuing engineering, all thanks to PSF's educational support program.",
      location: "Seethammadhara"
    },
    {
      name: "Venkat Rao",
      role: "Community Leader",
      content: "For over two decades, I've witnessed PSF's unwavering commitment to our community. They truly embody the spirit of seva.",
      location: "Andhra Pradesh"
    }
  ];

  const partnerships = [
    "Government Health Department",
    "Local Educational Institutions",
    "Community Development Organizations",
    "Traditional Arts Societies",
    "Skill Development Centers",
    "Religious and Cultural Groups"
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeader
          title="35 Years of Impact"
          subtitle="A legacy of compassionate service, meaningful change, and community transformation."
          icon={<Award size={32} />}
          centered
          className="mb-16"
        />

        {/* Statistics Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-soft border-0 hover:shadow-warm transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-trust-maroon rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-trust-maroon mb-2">
                    {stat.number}
                  </div>
                  <h4 className="text-xl font-bold text-trust-maroon mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <SectionHeader
            title="Recognition & Awards"
            subtitle="Our efforts have been recognized by various organizations and communities."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white border-trust-pink/20 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trust-gold rounded-lg flex items-center justify-center text-trust-maroon flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-trust-maroon">{achievement.year}</span>
                      </div>
                      <h4 className="text-lg font-bold text-trust-maroon mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <SectionHeader
            title="Voices from the Community"
            subtitle="Stories and testimonials from those whose lives have been touched by our work."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-trust-pink/20">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-trust-pink rounded-full flex items-center justify-center text-trust-maroon mb-4">
                      <Heart size={24} />
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="border-t border-trust-pink/20 pt-4">
                    <h5 className="font-bold text-trust-maroon">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-trust-gold font-medium">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="mb-20">
          <div className="bg-trust-cream rounded-2xl p-8 md:p-12">
            <SectionHeader
              title="Our Partners"
              subtitle="Building stronger communities through collaborative partnerships."
              centered
              className="mb-8"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partnerships.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center border border-trust-pink/20">
                  <span className="text-trust-maroon font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section>
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Looking Ahead: Our Vision for the Future
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              As we continue our journey beyond 35 years, we remain committed to expanding our reach, 
              enhancing our programs, and touching even more lives. Our vision includes developing 
              sustainable healthcare initiatives, establishing permanent educational centers, and 
              creating lasting infrastructure that will serve communities for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-trust-gold text-trust-maroon rounded-lg hover:bg-yellow-400 transition-all duration-300 font-medium"
              >
                <HandHeart size={20} className="mr-2" />
                Join Our Legacy
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-trust-maroon transition-all duration-300 font-medium"
              >
                <Users size={20} className="mr-2" />
                Learn About Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legacy;