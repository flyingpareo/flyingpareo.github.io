import { RandomStar, Rocket } from "./SpaceElements";
const MissionSection = () => {
  return <section id="mission" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Space elements */}
      <RandomStar top="15%" left="90%" size="lg" delayClass="animation-delay-200" />
      <RandomStar top="40%" left="5%" size="md" delayClass="animation-delay-800" />
      
      <div className="absolute top-20 right-4">
        <Rocket />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-5xl mb-4 block">📜</span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">Your <span className="text-sunset-hot">Mission</span></h2>
        </div>

        {/* Pass It On */}
        <div className="mb-10">
          <h3 className="font-display text-2xl text-ocean mb-5 flex items-center gap-3">
            <span className="text-2xl">1️⃣</span> Pass It On
          </h3>
          <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-soft space-y-5 border border-ocean/20">
            <div className="flex items-start gap-4">
              <span className="text-sunset text-xl">➡️</span>
              <p className="font-body text-lg sm:text-xl text-foreground">Choose the next person carefully, someone <span className="font-bold text-ocean">good-hearted</span></p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-sunset text-xl">➡️</span>
              <p className="font-body text-lg sm:text-xl text-foreground">
                Someone you've shared a <span className="font-bold text-cosmic">true moment</span> with
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-sunset text-xl">➡️</span>
              <p className="font-body text-lg sm:text-xl text-foreground">
                Someone who is traveling to a <span className="font-bold text-sunset">different place</span> than you
              </p>
            </div>
          </div>
        </div>

        {/* Share the Journey */}
        <div>
          <h3 className="font-display text-2xl text-ocean mb-5 flex items-center gap-3">
            <span className="text-2xl">2️⃣</span> Share the Journey
          </h3>
          <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-soft space-y-5 border border-cosmic/20">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📸</span>
              <p className="font-body text-lg sm:text-xl text-foreground">Take a photo wearing the pareo</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <p className="font-body text-lg sm:text-xl text-foreground">Mention your location</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📱</span>
              <p className="font-body text-lg sm:text-xl text-foreground">
                Send to <span className="font-bold text-ocean">WhatsApp/Telegram</span>
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <a href="https://wa.me/34648629653" target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-ocean text-primary-foreground px-8 py-5 rounded-full font-body font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-soft">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            +34 648 629 653
          </a>
        </div>
      </div>
    </section>;
};
export default MissionSection;