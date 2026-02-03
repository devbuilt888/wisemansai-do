import React, { useState } from "react";
import "./OurTeam.css"; // We'll create this next

// Type definition for a team member
interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    education?: string;
    linkedin?: string;
    bio: string;
    expertise?: string;
    innovationFocus?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: "asim",
        name: "Muhammad Asim Atta",
        role: "CEO & Co-Founder | CA Finalist | Accounting & Financial Automation Specialist",
        image: "/muhammad-asim-atta.jpg",
        education:
            "CA Finalist, The Institute of Chartered Accountants of Pakistan (ICAP) | ITP | QuickBooks ProAdvisor",
        linkedin: "#",
        bio: `Muhammad Asim Atta is a Chartered Accountancy finalist and accomplished finance professional with extensive experience in accounting, bookkeeping, taxation, and financial automation. As CEO and Co-Founder, he combines strong financial expertise with strategic leadership, business development, and team management to transform ideas into real-world, scalable solutions.
He has worked with clients across the Globe, delivering accurate financial records, reconciliations, reporting, and tax compliance while leveraging AI-driven systems to enhance efficiency and precision. His contributions include automating workflows in QuickBooks, Excel, and Power BI—significantly reducing manual effort and improving data accuracy.
Asim plays a key role in audit preparation, financial analysis, and performance reporting, enabling clients to make informed, data-driven decisions. Beyond technical execution, he actively manages client communication, ensuring transparency, trust, and timely delivery. His exposure to global taxation frameworks and modern financial tools has strengthened his analytical thinking, adaptability, and attention to detail.
Through his leadership at WiseWay, he continues to bridge accounting precision with technological innovation, driving smarter financial management and sustainable business growth.`,
        expertise:
            "Accounting & Bookkeeping, Taxation & Compliance, Financial Reporting, Audit Support, Financial Analysis, QuickBooks Automation, Excel & Power BI, AI-Based Accounting Systems, Business Development, Team Management, Client Relations",
        innovationFocus:
            "Financial Automation, AI in Accounting, Global Taxation Systems, Data-Driven Decision Making, Business Process Optimisation, Scalable Financial Solutions",
    },
    {
        id: "iker",
        name: "Iker Valverde",
        role: "Chief Technology Officer (CTO)",
        image: "/iker-valverde.jpg",
        linkedin: "#",
        bio: `Iker Valverde is a highly experienced Senior Software Developer and Chief Technology Officer with deep expertise in building scalable, high-performance web applications. His core focus lies in crafting pixel-perfect, fast, and intuitive user experiences using modern JavaScript frameworks, particularly React.js, while maintaining robust and scalable system architectures.
As a full-stack developer, Iker has a proven track record of rapidly designing, developing, and launching platforms from the ground up. He has contributed to healthcare and education platforms serving over 50 million users globally and has delivered impactful solutions for two Fortune 500 companies.
Driven by continuous learning and innovation, Iker combines hands-on technical leadership with a strong commitment to building reliable, future-ready technology solutions that create real business value.`,
        expertise:
            "Full-Stack Web Development, JavaScript, React.js, Front-End Architecture, Pixel-Perfect UI Engineering, API Development, Data Analytics & Visualization, System Scalability, Technical Leadership, Platform Development",
        innovationFocus:
            "Scalable Web Platforms, High-Performance Applications, Healthcare & Education Technology, User-Centric Design, Modern Web Technologies, Product-Led Engineering",
    },
    {
        id: "raees",
        name: "Raees Ali",
        role: "Software Engineer | Front-End Web Developer",
        image: "/raees-ali.jpg",
        education:
            "BS Software Engineering, Abbottabad University of Science & Technology (AUST)",
        linkedin: "#",
        bio: `Raees Ali is a passionate Software Engineering graduate with a strong focus on Front-End Web Development. He specializes in building interactive, responsive, and user-friendly web applications that deliver clean design and seamless user experiences. With hands-on experience across modern front-end technologies, Raees enjoys transforming ideas into functional and visually appealing digital products.
He has practical experience developing responsive layouts, dynamic interfaces, and content-managed websites, and is highly motivated by problem-solving and continuous learning.`,
        expertise:
            "HTML, CSS, Tailwind CSS, JavaScript, React.js, Front-End Web Development, Responsive Design, WordPress Theme Development, Plugin Customization, UI Development",
        innovationFocus:
            "Web Applications, User Interface Design, User Experience, Interactive Websites, Modern Front-End Technologies",
    },
    {
        id: "ayra",
        name: "Ayra Malik",
        role: "Business Development Executive (BDE)",
        image: "/ayra-malik.jpg",
        education:
            "MBA (HRM & Marketing)",
        linkedin: "#",
        bio: `Ayra Malik is a results-driven Business Development Executive with a strong focus on sales growth, lead development, and strategic client acquisition. She plays a pivotal role in driving business expansion by identifying new opportunities, building sustainable revenue streams, and strengthening the company's market presence. With experience serving 100+ clients, she brings a client-centric and data-informed approach to business growth.
Her responsibilities span business strategy development, lead generation, and relationship management, where she consistently converts prospects into long-term partnerships. Ayra actively conducts market research and competitive analysis to understand customer needs, optimize sales strategies, and identify emerging growth opportunities. Her ability to align market insights with business objectives enables informed, high-impact decision-making.
Ayra works closely with cross-functional teams, including sales, marketing, and product development, ensuring seamless collaboration and execution of growth initiatives. Her strong communication skills and commitment to transparency help foster client trust and long-term engagement.
With an academic background in MBA (HRM & Marketing), Ayra combines strategic thinking with practical execution. She is driven by continuous improvement, innovation in sales processes, and delivering measurable business outcomes that contribute to sustainable organizational growth.`,
        expertise:
            "Business Development, Sales Strategy, Lead Generation, Client Relationship Management, Revenue Growth, Market Analysis, Competitive Research, CRM & Sales Pipelines, Cross-Functional Collaboration, Negotiation & Closing",
        innovationFocus:
            "Sales Optimization, Scalable Growth Strategies, Client-Centric Solutions, Market Expansion, Data-Driven Sales Decisions, Strategic Partnerships",
    },
];

const OurTeam: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

      const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
      };

    return (
        <div className="team-container">
            <h1>Our Team</h1>
            <p className="team-subtitle">Meet the members of our team</p>

            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-card">
                        <div className="memberImage">
                            <div className="image-wrapper">
                                <img src={member.image} alt={member.name} />
                                <div className="shadow"></div>
                            </div>
                        </div>

                        <div key={member.id} >

                            <h2>{member.name}</h2>
                            <h3>{member.role}</h3>
                            {member.education && <p className="education">{member.education}</p>}

                            <button
              className="expand-btn"
              onClick={() => toggleExpand(member.id)}
            >
              {expandedId === member.id ? "Show Less" : "Read More"}
            </button>

                            {expandedId === member.id && (
                            <div className="team-details">
                                <p>{member.bio}</p>
                                {member.expertise && (
                                    <p>
                                        <strong>Areas of Expertise:</strong> {member.expertise}
                                    </p>
                                )}
                                {member.innovationFocus && (
                                    <p>
                                        <strong>Innovation Focus:</strong> {member.innovationFocus}
                                    </p>
                                )}
                                {member.linkedin && (
                                    <p>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn Profile
                                        </a>
                                    </p>
                                )}
                            </div>
                             )} 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
