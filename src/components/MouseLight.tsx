import React, { useEffect, useState } from 'react';
import './MouseLight.css';

const MouseLight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      className="mouse-light"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    />
  );
};

export default MouseLight; 