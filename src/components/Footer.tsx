import { RandomStar } from "./SpaceElements";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 bg-space text-center overflow-hidden">
      {/* Stars */}
      <RandomStar top="20%" left="15%" size="sm" delayClass="animation-delay-400" />
      <RandomStar top="50%" left="80%" size="md" delayClass="animation-delay-1000" />
      <RandomStar top="70%" left="30%" size="sm" delayClass="animation-delay-600" />

      <p className="font-display text-2xl sm:text-3xl text-golden mb-3 relative z-10">
        The Flying Pareo
      </p>
      <p className="font-body text-lg text-primary-foreground/70 relative z-10">
        Keep it moving. Keep it free. ✨
      </p>
    </footer>
  );
};

export default Footer;
