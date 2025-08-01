import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Camera, Heart, Users, Stethoscope, GraduationCap } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Sample gallery images (in a real app, these would come from a CMS or API)
  const galleryItems = [
    {
      id: 1,
      title: "Medical Camp - Rural Healthcare",
      category: "Medical",
      description: "Free health checkups and medicine distribution in remote villages",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Stethoscope size={20} />
    },
    {
      id: 2,
      title: "Cultural Festival Celebration",
      category: "Cultural",
      description: "Traditional dance and music performances during annual festival",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Heart size={20} />
    },
    {
      id: 3,
      title: "Educational Support Program",
      category: "Education",
      description: "Scholarship distribution ceremony for underprivileged students",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <GraduationCap size={20} />
    },
    {
      id: 4,
      title: "Community Kitchen Service",
      category: "Social",
      description: "Daily meal service for the needy and elderly community members",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Users size={20} />
    },
    {
      id: 5,
      title: "Temple Prayer Gathering",
      category: "Devotional",
      description: "Weekly spiritual discourse and community prayer sessions",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Heart size={20} />
    },
    {
      id: 6,
      title: "Skill Development Workshop",
      category: "Training",
      description: "Computer literacy and vocational training for women",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Users size={20} />
    },
    {
      id: 7,
      title: "Eye Checkup Camp",
      category: "Medical",
      description: "Free eye examination and spectacles distribution program",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Stethoscope size={20} />
    },
    {
      id: 8,
      title: "Children's Day Celebration",
      category: "Cultural",
      description: "Special programs and gifts for children from local schools",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Heart size={20} />
    },
    {
      id: 9,
      title: "Blood Donation Drive",
      category: "Medical",
      description: "Community blood donation camp in partnership with local hospital",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Stethoscope size={20} />
    }
  ];

  const categories = ["All", "Medical", "Cultural", "Education", "Social", "Devotional", "Training"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: any) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeader
          title="Our Gallery"
          subtitle="Capturing moments of service, compassion, and community impact over 35+ years."
          icon={<Camera size={32} />}
          centered
          className="mb-16"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-trust-maroon text-white shadow-warm'
                  : 'bg-trust-cream text-trust-maroon hover:bg-trust-pink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="bg-white border-trust-pink/20 overflow-hidden hover:shadow-warm transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-trust-maroon/80 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium bg-trust-gold text-trust-maroon px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-trust-maroon mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Camera size={64} className="mx-auto text-trust-pink mb-4" />
            <h3 className="text-xl font-bold text-trust-maroon mb-2">
              No images found
            </h3>
            <p className="text-gray-600">
              Try selecting a different category to see more photos.
            </p>
          </div>
        )}

        {/* Statistics */}
        <section className="mt-20">
          <div className="bg-gradient-soft rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-trust-maroon mb-2">500+</div>
                <div className="text-gray-600">Events Documented</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-trust-maroon mb-2">35+</div>
                <div className="text-gray-600">Years of Memories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-trust-maroon mb-2">1000+</div>
                <div className="text-gray-600">Community Moments</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Be Part of Our Story
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in creating new memories and making a difference in our community. 
              Your participation helps us continue this meaningful work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-trust-gold text-trust-maroon rounded-lg hover:bg-yellow-400 transition-all duration-300 font-medium"
              >
                <Users size={20} className="mr-2" />
                Get Involved
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-trust-maroon transition-all duration-300 font-medium"
              >
                <Heart size={20} className="mr-2" />
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
          {selectedImage && (
            <div className="relative bg-white rounded-lg overflow-hidden">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-trust-maroon rounded-full flex items-center justify-center text-white">
                    {selectedImage.icon}
                  </div>
                  <span className="text-sm font-medium bg-trust-pink text-trust-maroon px-3 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-trust-maroon mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;