import React, { useState } from 'react';
import './ExpandableServiceCard.css';

interface ServiceFeature {
  title: string;
  description: string;
  items: string[];
}

interface ExpandableServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  pricing?: string;
}

const ExpandableServiceCard: React.FC<ExpandableServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  pricing
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div className={`service-features ${isExpanded ? 'expanded' : ''}`}>
        {features.map((feature, index) => (
          <div key={index} className="feature-section">
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-description">{feature.description}</p>
            <div className="feature-items">
              {feature.items.map((item, itemIndex) => (
                <span key={itemIndex} className="feature-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {pricing && <div className="pricing">{pricing}</div>}
      
      <button 
        className="expand-button"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Show Less' : 'See More'}
        <span className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>▼</span>
      </button>
    </div>
  );
};

export default ExpandableServiceCard; 