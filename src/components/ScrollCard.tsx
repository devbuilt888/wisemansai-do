import React, { useState, useEffect } from 'react';
import './ScrollCard.css';

interface ScrollCardProps {
  title: string;
  content: string;
  triggerOffset?: number;
  delay?: number;
}

const ScrollCard: React.FC<ScrollCardProps> = ({ 
  title, 
  content, 
  triggerOffset = 500,
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.querySelector('.hero-section');
      const contactSection = document.getElementById('contact');
      
      if (!heroSection || !contactSection) return;

      const heroBottom = heroSection.getBoundingClientRect().bottom + scrollY;
      const contactTop = contactSection.getBoundingClientRect().top + scrollY;
      
      // Show card when past hero section and before contact section
      const shouldShow = scrollY > triggerOffset && 
                        scrollY > (heroBottom - window.innerHeight) && 
                        scrollY < (contactTop - window.innerHeight / 2) &&
                        !isDismissed;

      if (shouldShow && !isVisible) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
      } else if (!shouldShow && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerOffset, delay, isVisible, isDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
    }, 300); // Wait for exit animation
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div className={`scroll-card ${isVisible ? 'visible' : ''}`}>
      <div className="scroll-card-content">
        <button className="scroll-card-close" onClick={handleClose} aria-label="Close">
          ×
        </button>
        <div className="scroll-card-glow"></div>
        <h3 className="scroll-card-title">{title}</h3>
        <p className="scroll-card-text">{content}</p>
        <div className="scroll-card-accent"></div>
      </div>
    </div>
  );
};

export default ScrollCard; 