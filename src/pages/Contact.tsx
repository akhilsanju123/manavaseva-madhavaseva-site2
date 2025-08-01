import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { Phone, Mail, MapPin, Clock, Send, Heart, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+91 7799222556"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["info@psfmanavaseva.org"],
      description: "Send us your queries anytime"
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: [
        "#55-14-2, Mani Dweepam 1st Floor",
        "APSEB Colony, Seethammadhara",
        "Visakhapatnam - 530 013 (A.P.)"
      ],
      description: "Visit us at our office"
    },
    {
      icon: <Clock size={24} />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ],
      description: "We're here to help during business hours"
    }
  ];

  const quickActions = [
    {
      title: "Volunteer Registration",
      description: "Join our team of dedicated volunteers",
      icon: <Heart size={20} />,
      action: "volunteer"
    },
    {
      title: "Donation Inquiry",
      description: "Learn about donation opportunities",
      icon: <Heart size={20} />,
      action: "donation"
    },
    {
      title: "Program Information",
      description: "Get details about our services",
      icon: <MessageSquare size={20} />,
      action: "program"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with us to learn more about our work or to get involved in our mission."
          icon={<Phone size={32} />}
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <Card className="bg-white shadow-soft border-trust-pink/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-trust-maroon mb-6">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-trust-pink/30 focus:border-trust-maroon"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-trust-pink/30 focus:border-trust-maroon"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-trust-pink/30 focus:border-trust-maroon"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-trust-pink/30 focus:border-trust-maroon"
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-trust-pink/30 focus:border-trust-maroon"
                      placeholder="Please share your message, questions, or how you'd like to get involved..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-warm hover:shadow-warm transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-trust-maroon mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Card key={index} className="bg-trust-cream border-trust-pink/20 hover:bg-trust-pink/30 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-trust-maroon rounded-lg flex items-center justify-center text-white">
                          {action.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-trust-maroon">{action.title}</h4>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white border-trust-pink/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-trust-pink rounded-lg flex items-center justify-center text-trust-maroon flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-trust-maroon mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold text-trust-maroon mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center text-white hover:shadow-warm transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center text-white hover:shadow-warm transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <section className="mt-20">
          <div className="bg-trust-cream rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-trust-maroon mb-6 text-center">
              Visit Our Office
            </h3>
            <div className="bg-white rounded-lg overflow-hidden shadow-soft">
              <div className="h-80 bg-gradient-soft flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-trust-maroon mb-4" />
                  <h4 className="text-xl font-bold text-trust-maroon mb-2">
                    PSF Manavaseva Madhavaseva
                  </h4>
                  <p className="text-gray-600 max-w-md">
                    #55-14-2, Mani Dweepam 1st Floor<br />
                    APSEB Colony, Seethammadhara<br />
                    Visakhapatnam - 530 013 (A.P.)
                  </p>
                  <Button className="mt-4 bg-trust-maroon hover:bg-trust-maroon/90">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mt-12">
          <div className="bg-gradient-warm rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
            <p className="mb-4 opacity-90">
              For urgent matters or emergency assistance, please call us directly
            </p>
            <a
              href="tel:+917799222556"
              className="inline-flex items-center justify-center px-6 py-3 bg-trust-gold text-trust-maroon rounded-lg hover:bg-yellow-400 transition-all duration-300 font-medium"
            >
              <Phone size={20} className="mr-2" />
              +91 7799222556
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;