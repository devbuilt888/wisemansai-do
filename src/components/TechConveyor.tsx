import React from 'react';
import './TechConveyor.css';

// Import technology images
import office365 from '../assets/images/technologies/365.png';
import access from '../assets/images/technologies/access.png';
import excel from '../assets/images/technologies/excel.png';
import infoPath from '../assets/images/technologies/infoPath.png';
import microsoft from '../assets/images/technologies/microsoft.png';
import outlook from '../assets/images/technologies/outlook.png';
import skype from '../assets/images/technologies/skype.png';

const TechConveyor: React.FC = () => {
  const technologies = [
    { name: 'Office 365', image: office365 },
    { name: 'Microsoft Excel', image: excel },
    { name: 'Microsoft Outlook', image: outlook },
    { name: 'Microsoft', image: microsoft },
    { name: 'Microsoft Access', image: access },
    { name: 'Skype', image: skype },
    { name: 'InfoPath', image: infoPath },
  ];

  // Duplicate the array for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="tech-conveyor">
      <div className="conveyor-track">
        {duplicatedTechnologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <img 
              src={tech.image} 
              alt={tech.name}
              className="tech-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechConveyor; 