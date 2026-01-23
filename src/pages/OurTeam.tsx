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
        id: "asif",
        name: "Asif Riaz",
        role: "Co-founder / CEO",
        image: "./asif-riaz.jpg",
        education:
            "MSC Computer Science Illinois Institute of Technology Chicago, BSC Mech Engineering UET",
        linkedin: "#",
        bio: `Asif Riaz has over 16 years of international experience with technology companies and groups. 
           Asif is a specialist on the role technology plays in disruptive innovation and has been involved actively 
           in product design, creative direction and strategy development. Before co-founding Mashkraft, 
           which he bootstrapped to a team of 40, a large portfolio of international clients and profitability within 3 years, 
           Asif worked in leadership roles with various tech companies including a Silicon Valley and Mountain View startup, 
           where he spearheaded the development of mobile gaming divisions, which was acquired by DeNA.`,
        expertise:
            "Mobile/web apps, Video Games, IoT, AI & ML, UI/UX design, Chatbots, Data Scrapers, RPA, VR/AR, Agile",
        innovationFocus:
            "Ecommerce, Fintech, Foodtech, Proptech, Healthtech, Media & Entertainment",
    },
    {
        id: "tauseef",
        name: "Tauseef Riaz",
        role: "Co-founder / Startup Consulting & North American Business Development",
        image: "./Tauseef-Profile.png",
        education:
            "MBA Richard Ivey School of Business, BSC Electrical Engineering UET, CFA Charter Holder",
        linkedin: "#",
        bio: `Tauseef is a venture builder, tech investor, global growth strategist and digital transformation expert. 
           He has CXO/VP level experience with companies ranging in size from global multi-billion dollar corporations 
           to start-ups across a number of technology verticals. ...`,
        expertise:
            "Social Enterprises, Venture Building, Private Equity, Venture Capital, Public and Private Sector Innovation, Mergers & Acquisitions Corporate Strategy, Startup Incubation, Digital Transformation, Global Expansion, New Business and Product Development, P&L management.",
        innovationFocus:
            "Fintech, Healthtech, Proptech, Ecommerce, Digital Advertising, Edtech, Telecommunications & Media, Manufacturing",
    },
    {
        id: "boye",
        name: "Boye Hartmann",
        role: "Advisor, Business Development and Technology Scaling",
        image: "./boye-hartmann.jpg",
        linkedin: "#",
        bio: `Boye is a successful global entrepreneur, co-founder, venture builder, investor and hyper-connector 
           and an advisor to technology businesses, VCs and governments across Europe and Asia. 
           He has cofounded a number of successful business across Asia.`,
        expertise:
            "Entrepreneurship, Operations Management, Fund raising, Networking, Sales & Marketing Management, Business Development, Venture Capital, Startup incubation",
    },
    {
        id: "david",
        name: "David Vicary",
        role: "Advisor, Deep Tech, Blockchain and AI Solutions",
        image: "./david-vicar.jpg",
        linkedin: "#",
        bio: `David is an entrepreneur, inventor and seasoned technology executive with extensive SME and MNE experience 
           across industrial sectors from telecom through security to gaming and entertainment. 
           His expertise spans all key functions in innovation from R&D to technology commercialization ...`,
        expertise:
            "Blockchain, AI/ML, Gaming, Machine Vision, Telecommunications & Media",
    },
    {
        id: "don",
        name: "Don Lawrence",
        role: "Advisor, Financial Services and Solutions",
        image: "./don-lawrence.jpg",
        linkedin: "#",
        bio: `Don Lawrence is based in Canada's technology triangle (Kitchener - Waterloo - Cambridge) 
           and is a fintech entrepreneur, an investment researcher and the co-founder of stocktargetadvisor.com and STA Research. 
           He leverages his education and experience to build and execute solutions to empower individuals and small investment firms...`,
        expertise: "Fintech, Agtech, Social Platforms, Financial Markets, Mobile Technologies",
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
