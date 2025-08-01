import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { Heart, Users, Award, Target, Calendar, Handshake } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "1988", title: "Foundation", description: "PSF Manavaseva Madhavaseva was established with a vision to serve humanity." },
    { year: "1995", title: "Medical Camps", description: "Started regular medical camps and healthcare services for rural communities." },
    { year: "2000", title: "Educational Programs", description: "Launched educational support and scholarship programs for underprivileged children." },
    { year: "2005", title: "Cultural Heritage", description: "Began cultural preservation and promotion activities across the region." },
    { year: "2010", title: "Skill Development", description: "Introduced vocational training and skill development programs." },
    { year: "2015", title: "Community Centers", description: "Established community centers for social welfare activities." },
    { year: "2020", title: "Digital Outreach", description: "Expanded services through digital platforms during the pandemic." },
    { year: "2024", title: "35+ Years Legacy", description: "Continuing our mission with renewed commitment and expanded reach." }
  ];

  const values = [
    {
      icon: <Heart size={24} />,
      title: "Compassion",
      description: "Serving with love and empathy for all beings, regardless of background or belief."
    },
    {
      icon: <Users size={24} />,
      title: "Community",
      description: "Building strong, supportive communities through collective action and shared values."
    },
    {
      icon: <Award size={24} />,
      title: "Excellence",
      description: "Maintaining high standards in all our programs and services to maximize impact."
    },
    {
      icon: <Target size={24} />,
      title: "Purpose",
      description: "Dedicated to meaningful service that creates lasting positive change in society."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeader
          title="About PSF Manavaseva Madhavaseva"
          subtitle="A journey of 35+ years dedicated to serving humanity through faith, compassion, and community service."
          icon={<Heart size={32} />}
          centered
          className="mb-16"
        />

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="bg-gradient-soft rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-trust-maroon mb-6">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                PSF Manavaseva Madhavaseva is a dedicated non-profit organization committed to serving humanity 
                through comprehensive programs that address spiritual, medical, social, cultural, and economic needs. 
                For over three decades, we have been a beacon of hope, providing essential services and fostering 
                community development through the principles of seva (selfless service) and compassion.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Our work is rooted in the belief that every individual deserves access to healthcare, education, 
                cultural enrichment, and opportunities for personal growth. Through our diverse programs, we strive 
                to create sustainable positive change that uplifts entire communities.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide our work and define our approach to community service."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-trust-pink/20 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-trust-pink rounded-full flex items-center justify-center text-trust-maroon mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-trust-maroon mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in our 35+ year journey of service and community development."
            icon={<Calendar size={32} />}
            centered
            className="mb-12"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-trust-pink"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-trust-maroon rounded-full border-4 border-white shadow-soft z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="bg-white shadow-soft border-trust-pink/20">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl font-bold text-trust-gold">{milestone.year}</span>
                        </div>
                        <h4 className="text-xl font-bold text-trust-maroon mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team/Leadership Section */}
        <section className="mb-20">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-trust-gold rounded-full flex items-center justify-center text-trust-maroon">
                  <Handshake size={32} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our Leadership & Team
              </h3>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                Our dedicated team of volunteers, board members, and community leaders work tirelessly 
                to ensure that our programs reach those who need them most. With decades of combined 
                experience in social service, healthcare, education, and community development, our 
                leadership team guides the organization with wisdom and compassion.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Every member of our team shares a common commitment to the values of seva (selfless service) 
                and the belief that positive change is possible through collective action and dedication.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-trust-cream rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-trust-maroon mb-4">
              Want to Learn More?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We'd love to share more about our work and explore how you can get involved in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-trust-maroon text-white rounded-lg hover:bg-trust-maroon/90 transition-all duration-300"
              >
                <Users size={20} className="mr-2" />
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-trust-maroon text-trust-maroon rounded-lg hover:bg-trust-maroon hover:text-white transition-all duration-300"
              >
                <Heart size={20} className="mr-2" />
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;