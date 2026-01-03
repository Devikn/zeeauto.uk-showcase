import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import ambientInterior from '@/assets/ambient-interior.jpg';
import starlightCeiling from '@/assets/starlight-ceiling.jpg';
import audioUpgrade from '@/assets/audio-upgrade.jpg';
import heroCar from '@/assets/hero-car.jpg';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: ambientInterior, alt: 'Luxury ambient lighting interior', category: 'Ambient Lighting' },
  { src: starlightCeiling, alt: 'Starlight headliner installation', category: 'Starlights' },
  { src: audioUpgrade, alt: 'Premium audio system upgrade', category: 'Audio' },
  { src: heroCar, alt: 'Orange Lamborghini sports car', category: 'Exterior' },
  { src: ambientInterior, alt: 'Custom interior lighting', category: 'Ambient Lighting' },
  { src: starlightCeiling, alt: 'Galaxy starlight roof', category: 'Starlights' },
];

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4 tracking-wide">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our portfolio of premium automotive transformations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
                visibleItems.has(index)
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-10 h-10 text-primary mb-3" />
                <span className="text-primary font-heading text-lg tracking-wide">
                  {image.category}
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Add More Note */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>More images coming soon. Follow us on Instagram for the latest updates!</p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary hover:text-secondary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[80vh] rounded-xl border-2 border-primary/30"
          />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
            <p className="font-heading text-xl text-primary mb-1">{selectedImage.category}</p>
            <p className="text-muted-foreground">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
