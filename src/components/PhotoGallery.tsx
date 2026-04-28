import { useState, useEffect } from "react";
import { RandomStar } from "./SpaceElements";

// Placeholder images - these will be replaced with real photos
const placeholderPhotos = [
  {
    id: 1,
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    location: "Tulum, Mexico",
    image: "https://images.unsplash.com/photo-1682553064822-b28e66fd7e5c?w=600&h=400&fit=crop",
  },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholderPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-6 bg-ocean-light overflow-hidden">
      {/* Space elements */}
      <RandomStar top="10%" left="5%" size="sm" delayClass="animation-delay-400" />
      <RandomStar top="30%" left="92%" size="md" delayClass="animation-delay-1000" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="text-4xl mb-4 block">📸</span>
        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
          Journey <span className="italic text-ocean">Moments</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-10">
          Photos from the pareo's travels around the world
        </p>

        {/* Photo Carousel */}
        <div className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden shadow-soft">
          {placeholderPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={photo.image}
                alt={`Pareo in ${photo.location}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-space/80 to-transparent p-6">
                <p className="font-display text-2xl text-primary-foreground flex items-center justify-center gap-2">
                  <span>📍</span> {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {placeholderPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-ocean scale-125"
                  : "bg-ocean/30 hover:bg-ocean/50"
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>

        <p className="mt-8 font-body text-muted-foreground text-base italic">
          Send your photos to join the gallery ✨
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
