import React from 'react';
import type { IndustryModalId } from '../data/servicesData';

interface HeaderProps {
  onOpenIndustryModal?: (id: IndustryModalId) => void;
  onOpenMethodologyModal?: () => void;
  onOpenTeamModal?: () => void;
  onOpenCareersModal?: () => void;
}

function Header({ onOpenIndustryModal, onOpenMethodologyModal, onOpenTeamModal, onOpenCareersModal }: HeaderProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-new');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    const servicesSection = document.getElementById('full-services');
    if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="home-header">
      <div className="home-nav-container">
        <div className="home-logo">
          <img src="./NewLogo/favImg-cpy.jpg" alt="The WiseWay Solutions" className="home-logo-icon" />
          <span className="home-logo-text">The WiseWay Solutions</span>
        </div>
        <nav className="home-nav-menu">
          {/* ABOUT WITH DROPDOWN - Company Profile removed */}
          <div className="nav-item">
            <a href="#about" className="home-nav-link">
              About <img src="/down-chevron.png" style={{ width: '10px', margin: '5px' }} alt="down_arrow" />
            </a>
            <div className="dropdown-menu">
              {onOpenTeamModal && <button type="button" className="dropdown-menu-btn" onClick={onOpenTeamModal}>Our Team</button>}
              {onOpenMethodologyModal && <button type="button" className="dropdown-menu-btn" onClick={onOpenMethodologyModal}>Our Methodology</button>}
              {onOpenCareersModal && <button type="button" className="dropdown-menu-btn" onClick={onOpenCareersModal}>Careers</button>}
            </div>
          </div>
          {onOpenTeamModal && (
            <button type="button" className="home-nav-link home-nav-link-btn" onClick={onOpenTeamModal}>Our Team</button>
          )}
          <a href="#full-services" className="home-nav-link" onClick={(e) => { e.preventDefault(); scrollToServices(); }}>Services</a>
          {/* Industry - opens modals */}
          <div className="nav-item">
            <a href="#industries" className="home-nav-link">
              Industry <img src="/down-chevron.png" style={{ width: '10px', margin: '5px' }} alt="down_arrow" />
            </a>
            <div className="dropdown-menu">
              {onOpenIndustryModal && (
                <>
                  <button type="button" className="dropdown-menu-btn" onClick={() => onOpenIndustryModal('autotech')}>AutoTech</button>
                  <button type="button" className="dropdown-menu-btn" onClick={() => onOpenIndustryModal('fintech')}>FinTech</button>
                  <button type="button" className="dropdown-menu-btn" onClick={() => onOpenIndustryModal('foodtech')}>FoodTech</button>
                  <button type="button" className="dropdown-menu-btn" onClick={() => onOpenIndustryModal('healthcare')}>HealthCare</button>
                  <button type="button" className="dropdown-menu-btn" onClick={() => onOpenIndustryModal('construction')}>Construction</button>
                </>
              )}
            </div>
          </div>
                    {/* Resources */}
                    <div className="nav-item">
                        {/* <a href="#resources" className="home-nav-link">
            Resources
          </a> */}
                        <a href="#resources" className="home-nav-link">
                            Insight <img src="/down-chevron.png" style={{ width: '10px', margin: '5px' }} alt="down_arrow" />
                        </a>

                        <div className="dropdown-menu">
                            <a href="#insights">Insights</a>
                            <a href="#case-study">Case Study</a>
                            <a href="#blog">Blog</a>
                        </div>
                    </div>

                    {/* <a href="#industries" className="home-nav-link">Industries</a> */}
                    {/* <a href="#resources" className="home-nav-link">Resources</a> */}

                    {/* Portfolio */}
                    {/* <a href="#portfolio" className="home-nav-link">Protfolio</a> */}

                    {/* Contact */}
                    <a href="#contact-new" className="home-nav-link" onClick={scrollToContact}>Contact</a>
                </nav>
                <button className="home-cta-button" onClick={scrollToContact}>Get Started</button>
            </div>
        </header>
    )
}

export default Header