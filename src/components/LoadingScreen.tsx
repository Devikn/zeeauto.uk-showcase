import { useEffect, useState } from 'react';
import heroCar from '@/assets/hero-car.jpg';

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

      {/* Animated car */}
      <div className="relative w-full h-48 mb-8 overflow-hidden">
        <img
          src={heroCar}
          alt="Loading car"
          className="absolute h-40 w-auto object-contain animate-slide-car"
          style={{
            filter: 'drop-shadow(0 0 30px hsl(30 100% 50% / 0.8))',
          }}
        />
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
