import { useEffect, useState } from 'react';
import zeeautoLogo from '@/assets/zeeauto-logo.jpeg';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Generate random stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div 
      className={`fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Starry background */}
      <div className="absolute inset-0">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-primary animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Logo */}
      <div className="relative mb-8 animate-pulse-glow">
        <div className="relative">
          <img
            src={zeeautoLogo}
            alt="ZeeAuto Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl"
            style={{
              filter: 'drop-shadow(0 0 40px hsl(30 100% 50% / 0.6))',
            }}
          />
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl -z-10" />
        </div>
      </div>

      {/* Logo text */}
      <h1 className="font-heading text-4xl md:text-6xl text-primary mb-4 tracking-widest">
        ZeeAuto.uk
      </h1>
      <p className="text-muted-foreground text-lg mb-8 tracking-wide">
        Transforming Cars into Masterpieces
      </p>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-primary mt-4 font-mono">{progress}%</p>

      {/* Spinning wheel */}
      <div className="mt-6 w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default LoadingScreen;
