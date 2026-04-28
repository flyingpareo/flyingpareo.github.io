import { RandomStar } from "./SpaceElements";
const SpiritSection = () => {
  const spirits = [{
    emoji: "🌍",
    text: "Travels with pure hearts and free souls"
  }, {
    emoji: "🌿",
    text: "Symbol of freedom, kindness & connection"
  }, {
    emoji: "✨",
    text: "If it found you, someone saw light in you"
  }, {
    emoji: "🚀",
    text: "Mission: reach space"
  }];
  return <section className="relative py-24 px-6 bg-sand overflow-hidden">
      {/* Subtle space elements */}
      <RandomStar top="20%" left="10%" size="sm" delayClass="animation-delay-400" />
      <RandomStar top="60%" left="85%" size="md" delayClass="animation-delay-1000" />
      <RandomStar top="80%" left="20%" size="sm" delayClass="animation-delay-600" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
          Spirit of the <span className="italic text-ocean">Pareo</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-12">To travel from person to person, across countries and oceans, and one day… to reach outer space 🚀</p>

        <div className="space-y-5">
          {spirits.map((item, index) => <div key={index} className="flex items-center gap-5 bg-background/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-soft border border-ocean/10">
              <span className="text-4xl">{item.emoji}</span>
              <p className="font-body text-foreground text-left text-lg sm:text-xl font-medium">
                {item.text}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SpiritSection;