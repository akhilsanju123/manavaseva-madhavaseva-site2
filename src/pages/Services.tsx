import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Stethoscope, Users, Palette, Wrench, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "devotional",
      title: "Devotional Activities",
      icon: <Heart size={24} />,
      description: "Spiritual programs and temple services fostering community faith and devotion.",
      details: [
        "Daily prayer services and spiritual gatherings",
        "Festival celebrations and cultural events",
        "Spiritual discourse and religious education",
        "Temple maintenance and community worship",
        "Meditation and yoga sessions",
        "Religious literature distribution",
        "Pilgrimage organization and guidance"
      ]
    },
    {
      id: "medical",
      title: "Medical Support",
      icon: <Stethoscope size={24} />,
      description: "Comprehensive healthcare services and medical camps for underserved communities.",
      details: [
        "Regular medical camps in rural areas",
        "Free health checkups and consultations",
        "Medicine distribution for chronic conditions",
        "Health awareness and education programs",
        "Emergency medical assistance",
        "Specialist doctor consultations",
        "Blood donation drives and health screenings"
      ]
    },
    {
      id: "social",
      title: "Social Welfare",
      icon: <Users size={24} />,
      description: "Community development programs supporting education and livelihood improvement.",
      details: [
        "Educational scholarships for underprivileged children",
        "Adult literacy and computer training programs",
        "Women empowerment and self-help group formation",
        "Food distribution during emergencies",
        "Elderly care and support services",
        "Disaster relief and rehabilitation",
        "Community infrastructure development"
      ]
    },
    {
      id: "cultural",
      title: "Cultural Promotion",
      icon: <Palette size={24} />,
      description: "Preserving and promoting traditional arts, music, and cultural heritage.",
      details: [
        "Traditional music and dance performances",
        "Art exhibitions and cultural showcases",
        "Heritage preservation initiatives",
        "Folk art and craft workshops",
        "Language and literature promotion",
        "Cultural exchange programs",
        "Youth cultural development programs"
      ]
    },
    {
      id: "industrial",
      title: "Industrial & Skill Development",
      icon: <Wrench size={24} />,
      description: "Vocational training and skill development for economic empowerment.",
      details: [
        "Technical skill training programs",
        "Entrepreneurship development workshops",
        "Job placement assistance and career guidance",
        "Small business development support",
        "Computer and digital literacy training",
        "Handicraft and traditional skill training",
        "Industry partnership and internship programs"
      ]
    },
    {
      id: "events",
      title: "Community Events",
      icon: <Calendar size={24} />,
      description: "Regular community gatherings and celebration of festivals and special occasions.",
      details: [
        "Annual cultural festivals and celebrations",
        "Community sports and recreational activities",
        "Educational seminars and workshops",
        "Environmental awareness campaigns",
        "Youth development programs",
        "Senior citizen activities and support",
        "Inter-community harmony events"
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive programs designed to serve and uplift our community through various meaningful initiatives."
          icon={<Heart size={32} />}
          centered
          className="mb-16"
        />

        {/* Services Tabs */}
        <Tabs defaultValue="devotional" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 bg-trust-cream">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex flex-col items-center gap-2 p-4 text-sm data-[state=active]:bg-trust-maroon data-[state=active]:text-white"
              >
                <div className="text-trust-maroon data-[state=active]:text-white">
                  {service.icon}
                </div>
                <span className="hidden md:block">{service.title}</span>
                <span className="md:hidden text-xs">{service.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Service Overview */}
                <div className="lg:col-span-1">
                  <Card className="bg-gradient-soft border-0 h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-trust-maroon rounded-2xl flex items-center justify-center text-white mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-trust-maroon mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Service Details */}
                <div className="lg:col-span-2">
                  <Card className="bg-white shadow-soft border-trust-pink/20 h-full">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-trust-maroon mb-6">
                        What We Offer
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.details.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-trust-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <section className="mt-20">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Get Involved in Our Services
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you want to volunteer, donate, or participate in our programs, 
              there are many ways to be part of our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-trust-gold text-trust-maroon rounded-lg hover:bg-yellow-400 transition-all duration-300 font-medium"
              >
                <Users size={20} className="mr-2" />
                Volunteer Today
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-trust-maroon transition-all duration-300 font-medium"
              >
                <Heart size={20} className="mr-2" />
                Support Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;