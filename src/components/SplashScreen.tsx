import React from 'react';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen = ({ onAnimationEnd }: SplashScreenProps) => {
  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500"
      onTransitionEnd={onAnimationEnd}
    >
      <div className="text-center">
        <img 
          src="/logo-eg-digital.png" 
          alt="EG Digital Logo" 
          className="h-40 md:h-60 mx-auto animate-pulse-slow"
        />
        <p className="mt-4 text-lg text-muted-foreground animate-bounce-soft">Carregando...</p>
      </div>
    </div>
  );
};

export default SplashScreen;