interface GlowOrbProps {
  className?: string;
  size?: number;
}

export function GlowOrb({ className = "", size = 480 }: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={`glow-orb ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
