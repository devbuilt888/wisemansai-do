import React, { useState } from 'react';
import './ExpandableSection.css';

interface ServiceItem {
  title: string;
  description: string;
  categories: {
    name: string;
    items: string[];
  }[];
}

interface ExpandableSectionProps {
  title: string;
  icon: string;
  services: ServiceItem[];
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, icon, services }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <div className="expandable-section">
      <button 
        className={`section-header ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="section-icon">{icon}</span>
        <span className="section-title">{title}</span>
        <span className={`section-chevron ${isExpanded ? 'rotated' : ''}`}>▼</span>
      </button>
      
      {isExpanded && (
        <div className="section-content">
          {services.map((service, index) => (
            <div key={index} className="service-block">
              <button 
                className={`service-header ${expandedService === index ? 'active' : ''}`}
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <span className="service-number">{index + 1}.</span>
                <span className="service-name">{service.title}</span>
                <span className={`service-chevron ${expandedService === index ? 'rotated' : ''}`}>›</span>
              </button>
              
              <p className="service-desc">{service.description}</p>
              
              {expandedService === index && (
                <div className="service-details">
                  {service.categories.map((category, catIndex) => (
                    <div key={catIndex} className="category-block">
                      <h4 className="category-title">{category.name}</h4>
                      <ul className="category-items">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;

