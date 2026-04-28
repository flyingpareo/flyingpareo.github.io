import heroImage from "@/assets/hero-pareo.jpg";
import { RandomStar } from "./SpaceElements";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-sky">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="The Flying Pareo flowing in the wind" className="w-full h-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      {/* Space Elements */}
      <RandomStar top="10%" left="15%" size="lg" delayClass="animation-delay-200" />
      <RandomStar top="20%" left="80%" size="md" delayClass="animation-delay-600" />
      <RandomStar top="35%" left="5%" size="sm" delayClass="animation-delay-1000" />
      <RandomStar top="15%" left="60%" size="lg" delayClass="animation-delay-400" />
      <RandomStar top="45%" left="90%" size="md" delayClass="animation-delay-1500" />
      
      {/* Live Tracking Button */}
      <a href="https://www.polarsteps.com/Flyingpareo/21386174-the-grand-tour" target="_blank" rel="noopener noreferrer" className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 hover:bg-background/90 transition-all duration-300 group">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse-recording" />
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          Live tracking
        </span>
      </a>
      
      {/* Scroll to top button */}
      <button onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })} className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 hover:bg-background/90 transition-all duration-300 group" aria-label="Scroll to top">
        <span className="text-sm group-hover:-translate-y-1 transition-transform duration-300">🚀</span>
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          Top
        </span>
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-lg mx-auto">
        <span className="inline-block text-sunset-hot font-body text-base tracking-[0.25em] uppercase mb-4 opacity-0 animate-fade-in-up font-bold">
          A Journey Around the World
        </span>
        
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-medium text-foreground mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          The Flying <span className="italic text-ocean block">Pareo</span>
        </h1>
        
        <p className="font-body text-xl sm:text-2xl text-foreground/80 leading-relaxed mb-10 opacity-0 animate-fade-in-up animation-delay-400 font-light">
          No owner. No home. <span className="text-cosmic font-medium">It belongs to the world and beyond.</span>
        </p>

        <div className="flex flex-col gap-3 opacity-0 animate-fade-in-up animation-delay-600">
          <a href="#mission" className="inline-flex items-center justify-center gap-2 bg-gradient-sunset text-primary-foreground px-10 py-5 rounded-full font-body font-bold text-lg shadow-glow hover:scale-105 transition-transform duration-300 shadow-lg">Discover the Mission </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-7 h-12 rounded-full border-2 border-ocean flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-ocean rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;