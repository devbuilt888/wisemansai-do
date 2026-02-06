export interface TeamMember {
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

export const teamMembers: TeamMember[] = [
  {
    id: "asim",
    name: "Muhammad Asim Atta",
    role: "CEO & Co-Founder | CA Finalist | Accounting & Financial Automation Specialist",
    image: "/team-asim.png",
    education: "CA Finalist, The Institute of Chartered Accountants of Pakistan (ICAP) | ITP | QuickBooks ProAdvisor",
    linkedin: "#",
    bio: "Muhammad Asim Atta is a Chartered Accountancy finalist and accomplished finance professional with extensive experience in accounting, bookkeeping, taxation, and financial automation. As CEO and Co-Founder, he combines strong financial expertise with strategic leadership, business development, and team management to transform ideas into real-world, scalable solutions. He has worked with clients across the Globe, delivering accurate financial records, reconciliations, reporting, and tax compliance while leveraging AI-driven systems to enhance efficiency and precision.",
    expertise: "Accounting & Bookkeeping, Taxation & Compliance, Financial Reporting, Audit Support, Financial Analysis, QuickBooks Automation, Excel & Power BI, AI-Based Accounting Systems, Business Development, Team Management, Client Relations",
    innovationFocus: "Financial Automation, AI in Accounting, Global Taxation Systems, Data-Driven Decision Making, Business Process Optimisation, Scalable Financial Solutions",
  },
  {
    id: "iker",
    name: "Iker Valverde",
    role: "Chief Technology Officer (CTO)",
    image: "/team-iker.png",
    linkedin: "#",
    bio: "Iker Valverde is a highly experienced Senior Software Developer and Chief Technology Officer with deep expertise in building scalable, high-performance web applications. His core focus lies in crafting pixel-perfect, fast, and intuitive user experiences using modern JavaScript frameworks, particularly React.js, while maintaining robust and scalable system architectures. He has contributed to healthcare and education platforms serving over 50 million users globally.",
    expertise: "Full-Stack Web Development, JavaScript, React.js, Front-End Architecture, Pixel-Perfect UI Engineering, API Development, Data Analytics & Visualization, System Scalability, Technical Leadership, Platform Development",
    innovationFocus: "Scalable Web Platforms, High-Performance Applications, Healthcare & Education Technology, User-Centric Design, Modern Web Technologies, Product-Led Engineering",
  },
  {
    id: "raees",
    name: "Raees Ali",
    role: "Software Engineer | Front-End Web Developer",
    image: "/team-raees.png",
    education: "BS Software Engineering, Abbottabad University of Science & Technology (AUST)",
    linkedin: "#",
    bio: "Raees Ali is a passionate Software Engineering graduate with a strong focus on Front-End Web Development. He specializes in building interactive, responsive, and user-friendly web applications that deliver clean design and seamless user experiences. He has practical experience developing responsive layouts, dynamic interfaces, and content-managed websites.",
    expertise: "HTML, CSS, Tailwind CSS, JavaScript, React.js, Front-End Web Development, Responsive Design, WordPress Theme Development, Plugin Customization, UI Development",
    innovationFocus: "Web Applications, User Interface Design, User Experience, Interactive Websites, Modern Front-End Technologies",
  },
  {
    id: "ayra",
    name: "Ayra Malik",
    role: "Business Development Executive (BDE)",
    image: "/team-ayra.png",
    education: "MBA (HRM & Marketing)",
    linkedin: "#",
    bio: "Ayra Malik is a results-driven Business Development Executive with a strong focus on sales growth, lead development, and strategic client acquisition. She plays a pivotal role in driving business expansion by identifying new opportunities, building sustainable revenue streams, and strengthening the company's market presence. With experience serving 100+ clients, she brings a client-centric and data-informed approach to business growth.",
    expertise: "Business Development, Sales Strategy, Lead Generation, Client Relationship Management, Revenue Growth, Market Analysis, Competitive Research, CRM & Sales Pipelines, Cross-Functional Collaboration, Negotiation & Closing",
    innovationFocus: "Sales Optimization, Scalable Growth Strategies, Client-Centric Solutions, Market Expansion, Data-Driven Sales Decisions, Strategic Partnerships",
  },
];
