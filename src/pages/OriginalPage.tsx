import React, { useState } from 'react';
import '../App.css';
import ScrollCard from '../components/ScrollCard';
import TechConveyor from '../components/TechConveyor';
import MouseLight from '../components/MouseLight';
import AnimatedText from '../components/AnimatedText';
import ExpandableServiceCard from '../components/ExpandableServiceCard';
import ContactModal from '../components/ContactModal';

function OriginalPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceData = [
    {
      icon: '📊',
      title: 'Accounting & Finance',
      description: 'We provide a full suite of accounting and financial services to help you gain clarity, maintain compliance, and grow your business with confidence. Our solutions are tailored for startups, small businesses, and growing enterprises.',
      features: [
        {
          title: 'Bookkeeping & Ledger Management',
          description: 'We ensure your financial records are accurate, up-to-date, and compliant.',
          items: [
            'Daily, weekly, or monthly transaction recording',
            'General ledger maintenance',
            'Bank and credit card reconciliations',
            'Accounts payable and receivable tracking',
            'Monthly financial closings and adjustments'
          ]
        },
        {
          title: 'Financial Reporting & Analysis',
          description: 'We go beyond numbers to deliver insights.',
          items: [
            'Preparation of Balance Sheet, Profit & Loss, and Cash Flow statements',
            'Budgeting and forecasting',
            'Variance analysis to identify trends and cost-saving opportunities',
            'Custom financial dashboards and KPI tracking',
            'Management reports for internal and external stakeholders'
          ]
        },
        {
          title: 'Tax Planning & Compliance',
          description: 'Stay compliant while minimizing your tax burden through smart planning.',
          items: [
            'Strategic tax planning based on your entity type and business model',
            'Preparation and filing of business tax returns (corporate, VAT/GST, etc.)',
            'Support during audits and tax assessments',
            'Compliance with local and international tax regulations'
          ]
        },
        {
          title: 'Payroll Processing',
          description: 'We simplify your payroll processes so you can focus on your team and business.',
          items: [
            'Monthly/biweekly payroll calculations',
            'Payslip generation and employee portal setup',
            'Tax and statutory deductions (e.g., PF, ESI, social security, etc.)',
            'Direct deposit setup and reporting',
            'End-of-year forms like W-2s, 1099s, or regional equivalents'
          ]
        }
      ]
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Boost your online presence with strategic content, consistent branding, and campaigns that drive engagement and growth. We help you turn followers into loyal customers across all major platforms.',
      features: [
        {
          title: 'Content Creation & Scheduling',
          description: 'We create and post content that aligns with your brand voice and goals.',
          items: [
            'Branded graphics, videos, and reels for Instagram, Facebook, LinkedIn & more',
            'Content calendar creation for consistent posting',
            'Captions with relevant hashtags and CTAs',
            'Platform-specific content optimization',
            'Engaging stories and carousel posts'
          ]
        },
        {
          title: 'Account Setup & Optimization',
          description: 'We help you build a professional presence from scratch or revamp your existing profiles.',
          items: [
            'Bio and profile optimization',
            'Custom highlight covers and banners',
            'Link-in-bio setup',
            'Social media branding alignment',
            'Competitive benchmarking'
          ]
        },
        {
          title: 'Growth & Engagement Strategy',
          description: 'Grow your audience organically and boost engagement.',
          items: [
            'Hashtag strategy and audience targeting',
            'Organic growth techniques (DM outreach, comment engagement, etc.)',
            'Community management (replying to comments and messages)',
            'Collaboration with influencers (if required)',
            'Weekly/Monthly performance reports'
          ]
        },
        {
          title: 'Paid Ad Campaigns',
          description: 'Run high-converting paid campaigns that deliver real results.',
          items: [
            'Facebook, Instagram, and LinkedIn ad setup & management',
            'Target audience research & segmentation',
            'Ad creative design (graphics, video, copy)',
            'A/B testing and budget optimization',
            'Conversion tracking and reporting'
          ]
        }
      ],
      pricing: '$3-5/hour'
    },
    {
      icon: '🎥',
      title: 'Poster & Video Creation',
      description: 'Captivating visual content that tells your brand\'s story, captures attention, and drives engagement. We combine creativity with strategy to deliver designs that convert.',
      features: [
        {
          title: 'Custom Poster Design',
          description: 'Stand out with eye-catching posters tailored to your brand and audience.',
          items: [
            'Event, sale, and announcement posters',
            'Business flyers, digital ads, and promo creatives',
            'Brand-consistent design in various sizes',
            'High-resolution formats for print and digital',
            'Fast turnaround with unlimited revisions'
          ]
        },
        {
          title: 'Social Media Video Creation',
          description: 'Engage your audience with scroll-stopping videos made for social platforms.',
          items: [
            'Short-form videos (Reels, TikToks, YouTube Shorts)',
            'Product showcase videos and tutorials',
            'Brand storytelling and promotional clips',
            'Motion graphics and animated intros',
            'Text overlays, transitions, and royalty-free music'
          ]
        },
        {
          title: 'Business & Marketing Videos',
          description: 'Present your brand professionally across platforms and campaigns.',
          items: [
            'Company intro and explainer videos',
            'Client testimonial edits',
            'Event recap or launch videos',
            'Custom animation and voiceovers (if needed)',
            'Branded templates for consistency'
          ]
        },
        {
          title: 'Video Editing & Optimization',
          description: 'Transform your raw footage into polished content ready to share.',
          items: [
            'Trimming, color correction, and sound balancing',
            'Subtitles and branded overlays',
            'Vertical, square, and landscape formats',
            'Optimized file sizes for each platform',
            'Fast delivery with quality assurance'
          ]
        }
      ],
      pricing: '$4-6/hour'
    },
    {
      icon: '💼',
      title: 'Sales & Lead Generation',
      description: 'Fuel your business growth with data-driven strategies, high-quality leads, and sales systems tailored to your goals. We help you find, attract, and convert your ideal customers—consistently.',
      features: [
        {
          title: 'Lead Generation (B2B & B2C)',
          description: 'We identify and deliver verified leads that match your target audience.',
          items: [
            'Targeted lead lists by industry, location, and role',
            'Email, phone, and social media lead data',
            'LinkedIn prospecting and outreach',
            'Contact enrichment and qualification',
            'CRM-ready leads in Excel, Google Sheets, or CSV'
          ]
        },
        {
          title: 'Outreach Campaigns & Follow-ups',
          description: 'We build and manage personalized outreach that gets replies.',
          items: [
            'Email, LinkedIn, and WhatsApp outreach setups',
            'Custom message writing (non-spammy, engaging tone)',
            'Automated follow-up sequences',
            'Inbox monitoring and lead engagement',
            'A/B testing and response tracking'
          ]
        },
        {
          title: 'Sales Funnel Strategy & Setup',
          description: 'Convert leads into paying customers with a structured sales journey.',
          items: [
            'Funnel design (awareness → conversion)',
            'Landing page and form setup',
            'CRM integration (HubSpot, Zoho, etc.)',
            'Automated responses and lead nurturing',
            'Analytics and conversion tracking'
          ]
        },
        {
          title: 'Cold Calling & Appointment Setting',
          description: 'We take care of outreach so your team can focus on closing.',
          items: [
            'Cold calling scripts and trained agents (if needed)',
            'Appointment setting with qualified leads',
            'Calendar scheduling and confirmation handling',
            'Personalized pitch preparation',
            'Weekly performance reporting'
          ]
        }
      ],
      pricing: '$2-3/hour + low commission'
    },
    {
      icon: '✍️',
      title: 'Content Writing & Blogging',
      description: 'Engage your audience, rank higher on search engines, and build lasting authority with well-researched, high-quality content tailored to your brand voice and goals.',
      features: [
        {
          title: 'Blog Writing',
          description: 'Drive traffic and build trust with informative and engaging blog posts.',
          items: [
            'SEO-optimized long-form and short-form blog articles',
            'Keyword research and topic clustering',
            'Original, well-structured, and plagiarism-free content',
            'Internal and external linking',
            'Meta titles, descriptions, and formatting for readability'
          ]
        },
        {
          title: 'Website Content',
          description: 'Make your website work harder with powerful, brand-aligned copy.',
          items: [
            'Homepage, About Us, Services, Contact pages, etc.',
            'Benefit-driven headlines and clear CTAs',
            'Content that reflects your tone (formal, friendly, or technical)',
            'Optimized for both desktop and mobile visitors',
            'Written to convert visitors into clients'
          ]
        },
        {
          title: 'Product Descriptions & E-commerce Copy',
          description: 'Boost online sales with compelling product content.',
          items: [
            'Feature-benefit-focused product descriptions',
            'SEO-optimized for search engines',
            'Tone adapted to your target audience (fun, luxury, tech-savvy, etc.)',
            'Bullet points and formatting for readability',
            'Brand story and category descriptions'
          ]
        },
        {
          title: 'Ghostwriting & Articles',
          description: 'Let us write for you while you take the credit.',
          items: [
            'Ghostwritten LinkedIn articles, eBooks, and thought leadership posts',
            'Industry research and expert-level tone',
            'Anonymous blog writing for executives or brands',
            'Consistent voice matching and confidentiality',
            'Format-ready for newsletters, blogs, or publishing'
          ]
        }
      ],
      pricing: '$4-6/hour or $5 per 700 words'
    },
    {
      icon: '📋',
      title: 'MS Office & Excel Solutions',
      description: 'Streamline your workflows and make smarter decisions with tailored Excel tools and Office integrations. We turn raw data into actionable insights and repetitive tasks into automated systems.',
      features: [
        {
          title: 'Custom Excel Templates',
          description: 'Professional, user-friendly templates tailored to your unique business needs.',
          items: [
            'Invoices, financial models, trackers, dashboards',
            'Editable and scalable structures',
            'Built-in data validation and conditional formatting',
            'Easy-to-use with clear instructions',
            'Designed for both functionality and presentation'
          ]
        },
        {
          title: 'Data Analysis & Visualization',
          description: 'Make sense of your data with compelling visuals and actionable reports.',
          items: [
            'PivotTables and PivotCharts',
            'Interactive dashboards and KPI tracking',
            'Forecasting and trend analysis',
            'Visual storytelling with charts, slicers, and conditional formatting',
            'Insights presentation in Excel or PowerPoint'
          ]
        },
        {
          title: 'Excel Automation & Macros',
          description: 'Eliminate repetitive tasks and boost productivity with automation.',
          items: [
            'Custom VBA macros for routine operations',
            'Button-based task automation',
            'Report generation and formatting automation',
            'Data import/export from other systems',
            'Debugging and macro optimization'
          ]
        },
        {
          title: 'MS Office Integration',
          description: 'Seamless workflows across Excel, Word, Outlook, and PowerPoint.',
          items: [
            'Mail merge for personalized emails and letters',
            'Excel-to-Word/PowerPoint report automation',
            'Outlook scheduling and email automation via Excel',
            'Cross-platform templates and formatting',
            'Document consistency and branding'
          ]
        }
      ]
    },
    {
      icon: '🤝',
      title: 'Customer Support',
      description: 'Deliver exceptional service with reliable, responsive, and professional customer support that enhances client satisfaction and loyalty. We provide support that feels personal, yet operates with precision.',
      features: [
        {
          title: 'Multi-Channel Support',
          description: 'Be available where your customers are—across platforms.',
          items: [
            'Email, live chat, and social media support',
            'WhatsApp and Messenger handling',
            'Ticketing system management (e.g., Zendesk, Freshdesk)',
            'Platform-specific customer engagement',
            'Seamless support handovers'
          ]
        },
        {
          title: 'Order & Inquiry Handling',
          description: 'We manage customer orders and inquiries from start to finish.',
          items: [
            'Order confirmations, updates, and follow-ups',
            'Product/service-related inquiries',
            'Issue resolution and escalation handling',
            'Refunds, exchanges, and feedback collection',
            'Response templates for faster service'
          ]
        },
        {
          title: 'Technical & Product Support',
          description: 'Support your customers with detailed, accurate responses.',
          items: [
            'FAQ management and knowledge base updates',
            'Step-by-step troubleshooting',
            'Technical support documentation',
            'Coordinating with internal teams for solutions',
            'Clear, non-technical explanations for users'
          ]
        },
        {
          title: 'Virtual Assistant Support',
          description: 'Delegate your routine tasks to a reliable support partner.',
          items: [
            'Calendar scheduling and email management',
            'Client communication and follow-ups',
            'CRM updates and contact management',
            'Report preparation and data entry',
            'Admin task support for growing teams'
          ]
        }
      ],
      pricing: '$3-5/hour or project-based'
    },
    {
      icon: '🚚',
      title: 'Truck Dispatching & Trucking Services',
      description: 'Streamline your logistics operations with reliable, efficient, and round-the-clock dispatching support. We help owner-operators and fleet managers maximize loads, reduce downtime, and stay compliant—so you can focus on the road.',
      features: [
        {
          title: 'End-to-End Dispatching Support',
          description: 'We handle all the back-office tasks so you can focus on driving.',
          items: [
            'Load planning and route optimization',
            'Rate negotiation with brokers and shippers',
            'Paperwork handling (rate confirmations, BOLs, PODs)',
            '24/7 dispatching support and driver communication',
            'Dedicated dispatcher assigned to your fleet'
          ]
        },
        {
          title: 'Load Booking & Management',
          description: 'Find the best-paying loads based on your preferences.',
          items: [
            'Access to top load boards (DAT, TruckStop, etc.)',
            'Dry van, reefer, flatbed, power-only, box truck, hotshot—supported',
            'No forced dispatch—your approval comes first',
            'Minimized deadhead and layover times',
            'Daily/weekly load reports and summaries'
          ]
        },
        {
          title: 'Compliance & Documentation',
          description: 'Stay organized and compliant with DOT and industry standards.',
          items: [
            'Driver and truck setup in carrier systems',
            'IFTA tracking and reporting support',
            'Insurance certificate requests and updates',
            'Record-keeping of BOLs, receipts, and load documents',
            'Safety and hours-of-service (HOS) monitoring assistance'
          ]
        },
        {
          title: 'Billing & Invoicing Assistance',
          description: 'Ensure fast and accurate payments.',
          items: [
            'Invoicing to brokers and factoring companies',
            'POD collection and documentation checks',
            'Follow-ups on unpaid invoices',
            'Coordination with QuickPay or factoring',
            'Daily payment status updates'
          ]
        }
      ]
    },
    {
      icon: '🏥',
      title: 'Medical Billing Services',
      description: 'Ensure faster reimbursements, fewer claim denials, and better cash flow with end-to-end medical billing solutions. We support healthcare providers with accurate billing, insurance verification, and compliance-driven processes.',
      features: [
        {
          title: 'Complete Revenue Cycle Management (RCM)',
          description: 'Manage every stage of your patient billing process seamlessly.',
          items: [
            'Patient registration and eligibility verification',
            'Charge entry and claim creation',
            'Claim submission to insurance (CMS-1500/UB-04)',
            'Payment posting and reconciliation',
            'Denial management and AR follow-ups'
          ]
        },
        {
          title: 'Insurance Verification & Authorization',
          description: 'Prevent delays and denials by verifying patient coverage in advance.',
          items: [
            'Eligibility checks for Medicare, Medicaid, PPOs, HMOs, etc.',
            'Pre-authorization requests and tracking',
            'Verification of copays, deductibles, and out-of-pocket costs',
            'Real-time updates for front desk teams',
            'Documented approvals for audit protection'
          ]
        },
        {
          title: 'Medical Coding & Compliance',
          description: 'Accurate coding aligned with the latest CPT, ICD-10, and HCPCS updates.',
          items: [
            'Specialty-specific coding (family practice, cardiology, chiropractic, etc.)',
            'NCCI edits and CCI bundling checks',
            'HIPAA-compliant processes',
            'Code audits to prevent undercoding/overcoding',
            'Denial prevention through clean claim submission'
          ]
        },
        {
          title: 'Claims Management & Denial Handling',
          description: 'Boost your collection rate with expert claims handling.',
          items: [
            'Primary, secondary, and tertiary claim submissions',
            'ERA and EOB reconciliation',
            'Re-submissions and appeals for denied claims',
            'Tracking unpaid claims with aging reports',
            'Root-cause analysis to reduce future denials'
          ]
        },
        {
          title: 'Patient Billing & Support',
          description: 'Handle patient statements and collections professionally.',
          items: [
            'Patient-friendly billing statements',
            'Payment reminders and follow-ups',
            'Phone/email support for billing inquiries',
            'Payment plan setup and monitoring',
            'Secure and confidential communication'
          ]
        }
      ]
    }
  ];

  return (
    <div className="App">
      {/* Mouse Light Effect */}
      <MouseLight />
      
      {/* Scroll-triggered Card */}
      <ScrollCard 
        title="Business Partner"
        content="Comprehensive solutions for small & medium businesses. Drive growth with expert support."
        triggerOffset={600}
        delay={800}
      />

      {/* Header Navigation */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <img src="/thewisewayLogo.png" alt="The WiseWay Solutions" className="logo-icon" />
            <span className="logo-text">The WiseWay Solutions</span>
          </div>
          <nav className="nav-menu">
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link" onClick={scrollToContact}>Contact</a>
          </nav>
          <button className="cta-button-header" onClick={scrollToContact}>Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <div className="hero-section">
          <div className="services-tag">
            Data Analytics • Accounting • Creative Design • Digital Marketing
          </div>
          
          <h1 className="hero-title">
            <AnimatedText text="Empowering Small & Medium Businesses with Customized Solutions" delay={80} startDelay={1500} loop={false} />
          </h1>
          
          <p className="hero-subtitle">
            Streamline operations, enhance visibility, and achieve sustainable growth with our comprehensive business services.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={scrollToContact}>
              Explore Services 
              <span className="arrow">→</span>
            </button>
            <button className="cta-button secondary" onClick={scrollToContact}>
              Get Free Consultation
            </button>
          </div>
        </div>
      </main>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>To be the go-to partner for small and medium businesses, offering innovative end-to-end solutions that drive growth and enhance brand visibility.</p>
            </div>
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>Empowering businesses with comprehensive, customized solutions that enhance efficiency and drive sustainable growth through data-driven insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Conveyor Belt */}
      <TechConveyor />

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">
            <AnimatedText text="Our Services" delay={120} startDelay={500} loop={false} />
          </h2>
          <p className="section-subtitle">Comprehensive solutions tailored to meet your business needs</p>
          
          <div className="services-grid">
            {serviceData.map((service, index) => (
              <ExpandableServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                pricing={service.pricing}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">
            <AnimatedText text="Why Choose The WiseWay Solutions?" delay={100} startDelay={500} loop={false} />
          </h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h4>Streamlined Operations</h4>
              <p>Optimize your workflows with our efficient, tailored solutions designed for productivity.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h4>Targeted Strategies</h4>
              <p>Data-driven approaches that deliver measurable results and exceed expectations.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h4>Personalized Support</h4>
              <p>Dedicated professionals committed to your success with responsive, empathetic service.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h4>Sustainable Growth</h4>
              <p>Long-term success through innovative solutions that adapt to your evolving needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <h2>
            <AnimatedText text="Ready to Transform Your Business?" delay={110} startDelay={500} loop={false} />
          </h2>
          <p>Partner with us and let's work together to bring your vision to life.</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={scrollToContact}>
              Start Your Journey
              <span className="arrow">→</span>
            </button>
            <button className="cta-button secondary" onClick={scrollToContact}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">
            <AnimatedText text="Get In Touch" delay={100} startDelay={500} loop={false} />
          </h2>
          <p className="section-subtitle">Ready to start your journey? Connect with us today</p>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p className="contact-info">+92 333 4250848</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p className="contact-info">Wisewaysolutionspk@gmail.com</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🌍</div>
              <h3>Locations</h3>
              <p className="contact-info">Pakistan, USA and UK offices</p>
            </div>
          </div>
          
          <div className="contact-form-button-wrapper">
            <button 
              className="cta-button primary contact-form-button"
              onClick={() => setIsContactModalOpen(true)}
            >
              Send Us a Message
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src="/thewisewayLogo.png" alt="The WiseWay Solutions" className="logo-icon" />
                <span className="logo-text">The WiseWay Solutions</span>
              </div>
              <p>Empowering businesses through innovative solutions</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#accounting">Accounting & Finance</a>
                <a href="#social">Social Media</a>
                <a href="#content">Content Writing</a>
                <a href="#excel">MS Office Solutions</a>
                <a href="#trucking">Truck Dispatching</a>
                <a href="#medical">Medical Billing</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#contact" onClick={scrollToContact}>Contact</a>
                <a href="#careers">Careers</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 The WiseWay Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OriginalPage;

