import { RandomStar, Planet } from "./SpaceElements";
const JourneySection = () => {
  const places = ["beaches", "mountains", "deserts", "cities"];
  return <section className="relative py-24 px-6 bg-gradient-cosmic overflow-hidden">
      {/* Star field */}
      <RandomStar top="5%" left="10%" size="lg" delayClass="animation-delay-200" />
      <RandomStar top="15%" left="85%" size="md" delayClass="animation-delay-600" />
      <RandomStar top="25%" left="30%" size="sm" delayClass="animation-delay-1000" />
      <RandomStar top="40%" left="70%" size="lg" delayClass="animation-delay-400" />
      <RandomStar top="55%" left="15%" size="md" delayClass="animation-delay-1500" />
      <RandomStar top="65%" left="90%" size="sm" delayClass="animation-delay-800" />
      <RandomStar top="75%" left="50%" size="lg" delayClass="animation-delay-200" />
      <RandomStar top="85%" left="25%" size="md" delayClass="animation-delay-1000" />
      <RandomStar top="90%" left="75%" size="sm" delayClass="animation-delay-600" />

      <div className="absolute top-10 left-6">
        <Planet />
      </div>

      <div className="max-w-md mx-auto text-center relative z-10">
        <span className="text-5xl mb-4 block animate-float">🪶</span>
        <h2 className="font-display text-4xl sm:text-5xl text-primary-foreground mb-4">
          The Living <span className="italic text-golden">Story</span>
        </h2>
        <p className="text-primary-foreground/80 font-body text-lg mb-10">Each photo, each step, and each person becomes part of the pareo’s living map.</p>

        {/* Places */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {places.map(place => <span key={place} className="px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full font-body text-base text-primary-foreground border border-primary-foreground/30 font-medium">
              {place}
            </span>)}
        </div>

        {/* Polarsteps CTA */}
        <div className="bg-primary-foreground/10 backdrop-blur-md p-8 rounded-3xl border border-primary-foreground/20">
          <p className="text-primary-foreground/90 font-body text-lg mb-5">🗺️ Follow and track the pareo's journey on</p>
          <a className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-space px-8 py-4 rounded-full font-body font-bold text-lg hover:scale-105 transition-transform duration-300" href="https://www.polarsteps.com/Flyingpareo/21386174-the-grand-tour">
            <span>🌐</span>
            Polarsteps
          </a>
        </div>

        {/* Final destination */}
        <div className="mt-16 p-8">
          <p className="font-display text-2xl italic opacity-85 text-primary-foreground">The mission will end only when this pareo has left Earth — even for a moment — and floats freely in the final destination:</p>
          <p className="font-display text-5xl sm:text-6xl mt-3 animate-pulse-glow inline-block text-accent">
            Space 🌌
          </p>
        </div>
      </div>
    </section>;
};
export default JourneySection;