import React from "react";
interface StarProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: string;
  style?: React.CSSProperties;
}
export const Star = ({
  className = "",
  size = "md",
  delay = "",
  style
}: StarProps) => {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3"
  };
  return <div className={`rounded-full bg-golden animate-twinkle ${sizeClasses[size]} ${className} ${delay}`} style={style} />;
};
export const Planet = ({
  className = ""
}: {
  className?: string;
}) => <div className={`relative animate-pulse-glow ${className}`}>
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic to-ocean shadow-lg" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-2 border border-cosmic/40 rounded-full -rotate-12" />
  </div>;
export const Rocket = ({
  className = ""
}: {
  className?: string;
}) => {};
export const Moon = ({
  className = ""
}: {
  className?: string;
}) => <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-soft ${className}`}>
    <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-gray-300/50" />
    <div className="absolute top-3 left-1 w-1 h-1 rounded-full bg-gray-300/50" />
  </div>;
export const StarField = ({
  count = 15,
  className = ""
}: {
  count?: number;
  className?: string;
}) => {
  const stars = Array.from({
    length: count
  }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: ["sm", "md", "lg"][Math.floor(Math.random() * 3)] as "sm" | "md" | "lg",
    delay: `animation-delay-${[200, 400, 600, 1000, 1500, 2000][Math.floor(Math.random() * 6)]}`
  }));
  return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map(star => <Star key={star.id} className="absolute" size={star.size} delay={star.delay} style={{
      top: star.top,
      left: star.left
    } as React.CSSProperties} />)}
    </div>;
};

// Custom star with inline styles for random positions
export const RandomStar = ({
  top,
  left,
  size = "md",
  delayClass = ""
}: {
  top: string;
  left: string;
  size?: "sm" | "md" | "lg";
  delayClass?: string;
}) => {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-1.5 h-1.5",
    lg: "w-2 h-2"
  };
  return <div className={`absolute rounded-full bg-golden animate-twinkle ${sizeClasses[size]} ${delayClass}`} style={{
    top,
    left
  }} />;
};