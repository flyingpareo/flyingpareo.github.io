import HeroSection from "@/components/HeroSection";
import SpiritSection from "@/components/SpiritSection";
import MissionSection from "@/components/MissionSection";
import PhotoGallery from "@/components/PhotoGallery";
import JourneySection from "@/components/JourneySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SpiritSection />
      <MissionSection />
      <PhotoGallery />
      <JourneySection />
      <Footer />
    </main>
  );
};

export default Index;
