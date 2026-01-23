import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import ContactModal from '../components/ContactModal';
import AnimatedCounter from '../components/AnimatedCounter';
import ExpandableSection from '../components/ExpandableSection';
import { technologyServices, businessServices } from '../data/servicesData';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [businessFormData, setBusinessFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    organization: '',
    comments: ''
  });
  const [businessFormStatus, setBusinessFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const heroImages = [
    { src: '/jumboPicture1Wise.png', alt: 'Professional business services' },
    { src: '/jumboPicture2Wise.png', alt: 'Business solutions expert' }
  ];

  // Auto-rotate slides every 8 seconds for a slower, more elegant cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    { name: 'Accounting & Finance', icon: '📊' },
    { name: 'Social Media', icon: '📱' },
    { name: 'Video Creation', icon: '🎥' },
    { name: 'Lead Generation', icon: '💼' },
    { name: 'Content Writing', icon: '✍️' },
    { name: 'Excel Solutions', icon: '📋' },
    { name: 'Customer Support', icon: '🤝' },
    { name: 'Truck Dispatching', icon: '🚚' },
    { name: 'Medical Billing', icon: '🏥' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-new');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBusinessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBusinessFormData({ ...businessFormData, [e.target.name]: e.target.value });
  };

  const handleBusinessFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusinessFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mgoovyle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: businessFormData.service,
          name: businessFormData.name,
          email: businessFormData.email,
          phone: businessFormData.phone,
          organization: businessFormData.organization,
          message: businessFormData.comments,
        }),
      });

      if (response.ok) {
        setBusinessFormStatus('success');
        setBusinessFormData({
          service: '',
          name: '',
          email: '',
          phone: '',
          organization: '',
          comments: ''
        });
        setTimeout(() => setBusinessFormStatus('idle'), 5000);
      } else {
        setBusinessFormStatus('error');
        setTimeout(() => setBusinessFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setBusinessFormStatus('error');
      setTimeout(() => setBusinessFormStatus('idle'), 5000);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 3,
    centerPadding: "60px",
    centerMode: true,
    slidesToScroll: 3,
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "2px"
        },
      },
    ],
  };

  return (
    <div className="home-page">
      {/* Navigation */}
      <header className="home-header">
        <div className="home-nav-container">
          <div className="home-logo">
            <img src="/thewisewayLogo.png" alt="The WiseWay Solutions" className="home-logo-icon" />
            <span className="home-logo-text">The WiseWay Solutions</span>
          </div>
          <nav className="home-nav-menu">
            {/* ABOUT WITH DROPDOWN */}
            <div className="nav-item">
              <a href="#about" className="home-nav-link">
                About
              </a>

              <div className="dropdown-menu">
                <a href="#company-profile">Company Profile</a>
                <Link to="/our-team">Our Team</Link>
                <a href="#methodology">Our Methodology</a>
                <a href="/careers">Careers</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#industries" className="home-nav-link">
              Industries
              </a>

              <div className="dropdown-menu">
                <a href="#auto-tech">AutoTech</a>
                <a href="#fin-tech">FinTech</a>
                <a href="#food-tech">FoodTech</a>
                <a href="/health-care">HealthCare</a>
                <a href="/construction">Construction</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#resources" className="home-nav-link">
              Resources
              </a>

              <div className="dropdown-menu">
                <a href="#insights">Insights</a>
                <a href="#case-study">Case Study</a>
                <a href="#blog">Blog</a>
              </div>
            </div>

            {/* <a href="#industries" className="home-nav-link">Industries</a> */}
            {/* <a href="#resources" className="home-nav-link">Resources</a> */}
            <a href="#portfolio" className="home-nav-link">Protfolio</a>
            <Link to="/original" className="home-nav-link">Services</Link>
            <a href="#contact-new" className="home-nav-link" onClick={scrollToContact}>Contact</a>
          </nav>
          <button className="home-cta-button" onClick={scrollToContact}>Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="home-hero-content">
          <div className="home-hero-text">
            <h1 className="home-hero-title">
              Innovative solutions for a changing world
            </h1>
            <p className="home-hero-description">
              Businesses rely on us to help them obtain a competitive advantage.
              Whether it's by developing a minimum viable product, releasing a new app
              first to market, analysing data to make better decisions, or designing an
              interactive website, we do it with a passion for the consumer and a
              fascination with technology.
            </p>
            <div className="home-hero-buttons">
              <button className="home-btn-primary" onClick={scrollToContact}>
                Get Started
                <span className="btn-arrow">→</span>
              </button>
              <Link to="/original" className="home-btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
          <div className="home-hero-image">
            <div className="hero-carousel">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
          {/* Dots navigation - commented out
          <div className="home-hero-dots">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
          */}
        </div>
      </section>

      {/* Services Carousel */}
      <section className="home-services-carousel">
        <div className="services-track">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="service-badge">
              <span className="service-badge-icon">{service.icon}</span>
              <span className="service-badge-name">{service.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="about" className="home-trusted-section">
        <div className="home-container">
          <div className="trusted-box">
            <div className="trusted-content">
              <div className="trusted-text">
                <h2 className="trusted-title">Trusted by Leading Companies across the World</h2>
                <p className="trusted-description">
                  We transform businesses with digital platforms with our product engineering,
                  data analytics, and comprehensive business solutions. Our team of experts
                  delivers tailored solutions that drive growth and enhance brand visibility.
                </p>
                <Link to="/original" className="trusted-link">
                  Explore Our Services
                  <span className="link-arrow">→</span>
                </Link>
              </div>
              <div className="trusted-image">
                <div className="trusted-image-card">
                  <img src="/notebookLaptop.jpg" alt="Professional workspace" className="trusted-laptop-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="home-services-grid-section">
        <div className="home-container">
          <div className="services-grid">
            <div className="service-grid-card featured">
              <div className="service-grid-icon">🚀</div>
              <h3>MVP Development</h3>
              <p>Our venture building experts help startups identify problems, develop value propositions and build a commercially ready MVP in just 8 weeks to start market validation.</p>
            </div>
            <div className="service-grid-card">
              <div className="service-grid-icon">💻</div>
              <h3>Custom Software Development</h3>
              <p>We craft business-centric applications tailored for the specific needs of our clients and their industries.</p>
            </div>
            <div className="service-grid-card">
              <div className="service-grid-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>We develop state-of-the art, customer driven and innovative mobile apps with a strong focus on customer success.</p>
            </div>
            <div className="service-grid-card">
              <div className="service-grid-icon">🌐</div>
              <h3>Web Development</h3>
              <p>We deliver outstanding user experiences by transforming ideas into robust web apps using Agile and state-of-art platforms.</p>
            </div>
            <div className="service-grid-card">
              <div className="service-grid-icon">🤖</div>
              <h3>Data Science and AI</h3>
              <p>We build advanced AI solutions for data collection, processing, interpretation and informed decision making.</p>
            </div>
            <div className="service-grid-card">
              <div className="service-grid-icon">📡</div>
              <h3>Internet of Things</h3>
              <p>We create IoT applications which bridge physical and digital worlds for automation, data collection and increased productivity.</p>
            </div>
          </div>
          <div className="services-grid-cta">
            <button
              className="view-all-services-btn"
              onClick={() => {
                const servicesSection = document.getElementById('full-services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View All Services
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="home-industries-section">
        <div className="home-container">
          <h2 className="industries-title">Industries we are serving</h2>
          <div className="industries-grid">
            <div className="industry-card light-blue">
              <div className="industry-icon">🚗</div>
              <div className="industry-content">
                <h3>Automotive</h3>
                <p>We develop solutions for the auto industry ranging from online marketplaces and auction systems to inspection apps and lead generation tools.</p>
              </div>
            </div>
            <div className="industry-card dark-blue">
              <div className="industry-icon">💳</div>
              <div className="industry-content">
                <h3>Fintech</h3>
                <p>Our Fintech Solutions span payments, wealth management, stock market tools and digital ledger technology applications built with state-of-the-art technologies.</p>
              </div>
            </div>
            <div className="industry-card white">
              <div className="industry-icon">🍔</div>
              <div className="industry-content">
                <h3>Foodtech</h3>
                <p>We have built custom food-delivery and restaurant management solutions for some of the most innovative food-tech startups in Europe and Asia.</p>
              </div>
            </div>
          </div>
          <div className="industries-grid-row-2">
            <div className="industry-card white">
              <div className="industry-icon">🏥</div>
              <div className="industry-content">
                <h3>Healthcare</h3>
                <p>We help healthcare and home care providers deliver better patient care through innovative products and services compliant with both local global regulations and standards.</p>
              </div>
            </div>
            <div className="industry-card white">
              <div className="industry-icon">🏗️</div>
              <div className="industry-content">
                <h3>Construction</h3>
                <p>Our digital solutions for construction industry provide Integrated Labor Delivery and Workforce Management, improving processes and productivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Highlight Section */}
      <section className="home-stats-section">
        <div className="home-container">
          <div className="stats-cards-grid">
            <div className="stats-highlight-card">
              <div className="stats-card-overlay"></div>
              <div className="stats-card-content">
                <span className="stats-big-number">
                  <AnimatedCounter end={250} duration={2500} />
                </span>
                <h3>Satisfied Clients</h3>
                <p>Our clients range from early stage startups to Fortune500 companies across the world.</p>
              </div>
            </div>
            <div className="stats-highlight-card">
              <div className="stats-card-overlay"></div>
              <div className="stats-card-content">
                <span className="stats-big-number">
                  <AnimatedCounter end={650} duration={2500} />
                </span>
                <h3>Projects Completed</h3>
                <p>We have delivered IT projects ranging from enterprise solutions to mobile apps on time, on budget, and on value.</p>
              </div>
            </div>
            <div className="stats-highlight-card third-stat">
              <div className="stats-card-overlay"></div>
              <div className="stats-card-content">
                <span className="stats-big-number">
                  <AnimatedCounter end={25} duration={2000} />
                </span>
                <h3>Countries Served</h3>
                <p>Delivering global solutions with local expertise across continents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="home-portfolio-section">
        <div className="home-container">
          <h2 className="portfolio-title">Our Portfolio</h2>

          <div className="slider-container">
            <Slider {...settings}>
              {/* Card 1 */}
              <div className="portfolio-card">
                <div className='card-Img'>

                  <img src="/portfolio-1.png" alt="AI Chatbot" />
                </div>
                <div className="portfolio-card-content">
                  <h3>AI Chatbot</h3>
                  <p>for Stock Analyst Ratings and Fundamental Analysis</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="portfolio-card">
                <div className='card-Img'>

                  <img src="/portfolio-2.png" alt="Bookkeeping" />
                </div>
                <div className="portfolio-card-content">
                  <h3>Bookkeeping & Ledger Management</h3>
                  <p>Cross-platform solution for enterprise communication</p>
                </div>
              </div>

              {/* Card 2.1 */}
              <div className="portfolio-card">
                <div className='card-Img'>
                  <img src="/portfolio-2.1.png" alt="Bookkeeping" />

                </div>
                <div className="portfolio-card-content">
                  <h3>Bookkeeping & Ledger Management</h3>
                  <p>Cross-platform solution for enterprise communication</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="portfolio-card">
                <div className='card-Img'>
                  <img src="/portfolio-3.png" alt="Financial Reporting" />
                </div>
                <div className="portfolio-card-content">
                  <h3>Financial Reporting & Analysis</h3>
                  <p>Full-stack solution with inventory management</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="portfolio-card">
                <div className='card-Img'>

                  <img src="/portfolio-4.png" alt="Another Project" />
                </div>
                <div className="portfolio-card-content">
                  <h3>Tax Planning & Compliance</h3>
                  <p>Custom enterprise-grade solution</p>
                </div>
              </div>
              {/* Card 5  */}
              <div className="portfolio-card">
                <div className='card-Img'>

                  <img src="/portfolio-5.png" alt="Another Project" />
                </div>
                <div className="portfolio-card-content">
                  <h3> Payroll Processing</h3>
                  <p>Custom enterprise-grade solution</p>
                </div>
              </div>
              {/* Card 6  */}
              <div className="portfolio-card">
                <div className='card-Img'>

                  <img src="/portfolio-6.png" alt="Another Project" />
                </div>
                <div className="portfolio-card-content">
                  <h3>Truck Dispatching & Trucking Services</h3>
                  <p>Custom enterprise-grade solution</p>
                </div>
              </div>
              {/* Card 7  */}
              <div className="portfolio-card">
                <div className='card-Img'>

                  <img src="/portfolio-7.png" alt="Another Project" />
                </div>
                <div className="portfolio-card-content">
                  <h3>Social Media Management</h3>
                  <p>Custom enterprise-grade solution</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="home-testimonial-section">
        <div
          className="testimonial-bg-map"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/worldMap.png)` }}
        ></div>
        <div className="home-container">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "The WiseWay Solutions has consistently done a superb job with design and development throughout the process of launching a B2B website. Highly recommended for their professional services".
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <span>👤</span>
              </div>
              <h4 className="testimonial-name">Sarah Johnson</h4>
              <p className="testimonial-location">New York, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="home-form-section">
        <div className="home-container">
          <h2 className="form-section-title">Let's talk about how we can help your business</h2>
          <form className="business-form" onSubmit={handleBusinessFormSubmit}>
            <div className="form-row full">
              <select
                className="form-select"
                name="service"
                value={businessFormData.service}
                onChange={handleBusinessFormChange}
                disabled={businessFormStatus === 'sending'}
              >
                <option value="" disabled>How we can help?</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="software">Custom Software</option>
                <option value="ai">Data Science & AI</option>
                <option value="consulting">Business Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                name="name"
                value={businessFormData.name}
                onChange={handleBusinessFormChange}
                required
                disabled={businessFormStatus === 'sending'}
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                name="email"
                value={businessFormData.email}
                onChange={handleBusinessFormChange}
                required
                disabled={businessFormStatus === 'sending'}
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                placeholder="Phone"
                className="form-input"
                name="phone"
                value={businessFormData.phone}
                onChange={handleBusinessFormChange}
                disabled={businessFormStatus === 'sending'}
              />
              <input
                type="text"
                placeholder="Organization"
                className="form-input"
                name="organization"
                value={businessFormData.organization}
                onChange={handleBusinessFormChange}
                disabled={businessFormStatus === 'sending'}
              />
            </div>
            <div className="form-row full">
              <textarea
                placeholder="Comments..."
                className="form-textarea"
                rows={6}
                name="comments"
                value={businessFormData.comments}
                onChange={handleBusinessFormChange}
                required
                disabled={businessFormStatus === 'sending'}
              ></textarea>
            </div>
            <div className="form-row full">
              <button
                type="submit"
                className="form-submit-btn"
                disabled={businessFormStatus === 'sending'}
              >
                {businessFormStatus === 'sending' ? 'Sending...' : 'Send Message'}
                {businessFormStatus === 'idle' && <span className="btn-arrow">→</span>}
              </button>
            </div>
            {businessFormStatus === 'success' && (
              <div className="form-message success">
                ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            {businessFormStatus === 'error' && (
              <div className="form-message error">
                ✗ Something went wrong. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Full Services Section */}
      <section id="full-services" className="home-full-services-section">
        <div className="home-container">
          <h2 className="full-services-title">Our Services</h2>
          <p className="full-services-subtitle">
            Comprehensive solutions across technology, business, and operations
          </p>

          <ExpandableSection
            title="Technology & Digital Solutions"
            icon="💻"
            services={technologyServices}
          />

          <ExpandableSection
            title="Business, Marketing & Operations"
            icon="📊"
            services={businessServices}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-why-section">
        <div className="home-container">
          <h2 className="section-heading">Why Choose Us</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times without compromising on quality</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>Excellence in every project we undertake</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Results Driven</h3>
              <p>Focused on delivering measurable outcomes</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>24/7 Support</h3>
              <p>Always available when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-new" className="home-contact-section">
        <div className="home-container">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">Ready to transform your business? Contact us today</p>

          <div className="contact-cards-grid">
            <div className="home-contact-card">
              <div className="contact-card-icon">📞</div>
              <h3>Phone</h3>
              <p>+92 333 4250848</p>
            </div>
            <div className="home-contact-card">
              <div className="contact-card-icon">✉️</div>
              <h3>Email</h3>
              <p>Wisewaysolutionspk@gmail.com</p>
            </div>
            <div className="home-contact-card">
              <div className="contact-card-icon">🌍</div>
              <h3>Locations</h3>
              <p>Pakistan, USA & UK</p>
            </div>
          </div>

          <button
            className="home-btn-primary contact-main-btn"
            onClick={() => setIsContactModalOpen(true)}
          >
            Send Us a Message
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-container">
          <div className="footer-grid">
            <div className="footer-brand-section">
              <div className="home-logo">
                <img src="/thewisewayLogo.png" alt="The WiseWay Solutions" className="home-logo-icon" />
                <span className="home-logo-text">The WiseWay Solutions</span>
              </div>
              <p className="footer-tagline">Empowering businesses through innovative solutions</p>
            </div>
            <div className="footer-links-section">
              <div className="footer-link-column">
                <h4>Services</h4>
                <Link to="/original">All Services</Link>
                <a href="#about">About Us</a>
              </div>
              <div className="footer-link-column">
                <h4>Contact</h4>
                <a href="#contact-new" onClick={scrollToContact}>Get in Touch</a>
                <a href="mailto:Wisewaysolutionspk@gmail.com">Email Us</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom-section">
            <p>&copy; 2024 The WiseWay Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

