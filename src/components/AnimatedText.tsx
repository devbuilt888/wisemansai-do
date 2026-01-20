import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  startDelay?: number;
  loop?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 100,
  startDelay = 1000,
  loop = false
}) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
      setAnimationKey(1);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
    };
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted || !loop) return;

    // Calculate total animation duration based on text length and delays
    const totalLetters = text.replace(/\s/g, '').length;
    const animationDuration = (totalLetters * delay) + 1000; // +1000ms for animation completion

    const loopTimer = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, animationDuration);

    return () => {
      clearInterval(loopTimer);
    };
  }, [hasStarted, loop, text.length, delay]);

  // Split text into words, then each word into letters
  const words = text.split(' ');
  let letterIndex = 0;

  const animatedWords = words.map((word, wordIndex) => {
    const letters = word.split('').map((char, charIndex) => {
      const currentLetterIndex = letterIndex++;
      return (
        <span
          key={`${wordIndex}-${charIndex}-${animationKey}`}
          className={`letter ${hasStarted ? 'animate' : ''}`}
          style={{
            animationDelay: `${currentLetterIndex * delay}ms`,
          }}
        >
          {char}
        </span>
      );
    });

    return (
      <span key={wordIndex} className="word-unit">
        {letters}
      </span>
    );
  });

  return (
    <span className={`animated-text ${className}`}>
      {animatedWords.map((word, index) => (
        <React.Fragment key={index}>
          {word}
          {index < animatedWords.length - 1 && <span className="letter space">&nbsp;</span>}
        </React.Fragment>
      ))}
    </span>
  );
};

export default AnimatedText; 