import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: 'AMG pink ambient lighting interior' },
  { src: gallery2, alt: 'Audi red ambient lighting' },
  { src: gallery3, alt: 'Starlight ceiling with purple ambient' },
  { src: gallery4, alt: 'Purple ambient lighting interior' },
  { src: gallery5, alt: 'VW purple ambient lighting' },
  { src: gallery6, alt: 'BMW purple ambient interior' },
  { src: gallery7, alt: 'Pink footwell ambient lighting' },
  { src: gallery8, alt: 'Maserati purple ambient interior' },
  { src: gallery9, alt: 'Console screen ambient lighting' },
  { src: gallery10, alt: 'Rear screen entertainment system' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4 tracking-wide">
            Our Work
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rotate-45 border border-primary/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of premium automotive transformations
          </p>
        </div>

        {/* Clean Gallery Grid - No animations, no lightbox */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden border border-primary/10"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
