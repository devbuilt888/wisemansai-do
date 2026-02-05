import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-new');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToServices = () => {
        const servicesSection = document.getElementById('full-services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    return (
        <header className="home-header">
            <div className="home-nav-container">
                <div className="home-logo">
                    {/* <img src="/thewisewayLogo.png" alt="The WiseWay Solutions" className="home-logo-icon" /> */}
                    <img src="./NewLogo/favImg-cpy.jpg" alt="The WiseWay Solutions" className="home-logo-icon" />
                    <span className="home-logo-text">The WiseWay Solutions</span>
                </div>
                <nav className="home-nav-menu">
                    {/* ABOUT WITH DROPDOWN */}
                    <div className="nav-item">
                        <a href="#about" className="home-nav-link">
                            About <img src="/down-chevron.png" style={{ width: '10px', margin: '5px' }} alt="down_arrow" />
                        </a>

                        <div className="dropdown-menu">
                            <a href="#company-profile">Company Profile</a>
                            <Link to="/our-team">Our Team</Link>
                            <a href="#methodology">Our Methodology</a>
                            <a href="/careers">Careers</a>
                        </div>
                    </div>
                    {/* Services */}
                    <a href="#full-services" className="home-nav-link" onClick={(e) => { e.preventDefault(); scrollToServices(); }}>Services</a>
                    {/* Industry */}
                    <div className="nav-item">
                        <a href="#industries" className="home-nav-link">
                            Industry <img src="/down-chevron.png" style={{ width: '10px', margin: '5px' }} alt="down_arrow" />
                        </a>

                        <div className="dropdown-menu">
                            <a href="#auto-tech">AutoTech</a>
                            <a href="#fin-tech">FinTech</a>
                            <a href="#food-tech">FoodTech</a>
                            <a href="/health-care">HealthCare</a>
                            <a href="/construction">Construction</a>
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