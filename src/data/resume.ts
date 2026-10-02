export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  summary: string;
  currentRole: string;
  currentCompany: string;
  currentPeriod: string;
  email: string;
  phone: string;
  phoneHref: string;
}

export interface Experience {
  id: string;
  period: string;
  start: string;
  end: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Impact {
  value: string;
  label: string;
  context: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const profile: Profile = {
  name: "Lee Joo Han",
  headline: "Technology. Sales. Leadership.",
  tagline: "Engineering solutions. Driving business growth.",
  summary:
    "I connect technology strategy, commercial execution and team leadership to turn business priorities into practical solutions.",
  currentRole: "Head of Divisions — IT, Sales & Marketing",
  currentCompany: "JointHire Singapore Pte Ltd.",
  currentPeriod: "Jan 2026–Present",
  email: "jhlee25122@gmail.com",
  phone: "012-4337517",
  phoneHref: "tel:+60124337517",
};

export const experiences: Experience[] = [
  {
    id: "jointhire-head-of-divisions",
    period: "Jan 2026–Present",
    start: "2026-01",
    end: "Present",
    role: "Head of Divisions — IT, Sales & Marketing",
    company: "JointHire Singapore Pte Ltd.",
    summary:
      "Lead IT, Sales and Marketing around technology delivery and growth.",
    highlights: [
      "Align divisional plans and execution with company objectives across IT, Sales and Marketing.",
      "Coordinate engineers, sales executives and marketers around customer needs, acquisition and delivery priorities.",
      "Oversee cloud architecture and infrastructure improvements for secure, scalable operations.",
      "Set divisional KPIs and report pipeline performance, technology adoption and return on investment to executive leadership.",
    ],
    technologies: ["AWS", "Node.js", "React", "IT strategy", "Digital marketing"],
  },
  {
    id: "jointhire-senior-consultant",
    period: "Mar 2025–Jan 2026",
    start: "2025-03",
    end: "2026-01",
    role: "Senior Consultant / IT Manager",
    company: "JointHire Singapore Pte Ltd.",
    summary:
      "Led the IT team and integrated recruitment platforms and workflows.",
    highlights: [
      "Led and mentored the IT team delivering recruitment technology and platform integrations.",
      "Architected AWS queue systems to synchronize job postings, candidate applications and recruiter workflows across platforms.",
      "Automated data exchange between applicant tracking systems, job boards and HR management systems.",
      "Used AWS Lambda and ECS in serverless and microservices architectures to support changing hiring demand.",
      "Aligned technology priorities with executives and engineering, security and business teams.",
    ],
    technologies: [
      "Laravel",
      "Node.js",
      "Go",
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "Python",
      "AWS",
      "Serverless",
      "Lambda",
      "ECS",
      "MySQL",
      "XML",
    ],
  },
  {
    id: "ideal-consulting",
    period: "Sep 2024–Mar 2025",
    start: "2024-09",
    end: "2025-03",
    role: "Senior Consultant",
    company: "Ideal Consulting Sdn Bhd",
    summary:
      "ERP delivery, pre-sales, account management and technical leadership.",
    highlights: [
      "Led an ERP upgrade and custom e-invoice compliance integration that improved process efficiency by 30%.",
      "Managed end-to-end pre-sales engagements, contributing to a 20% increase in client acquisition and contract renewals.",
      "Directed cross-functional delivery of cloud solutions with improved disaster recovery and 99.9% uptime.",
      "Delivered turnkey technology projects for government-linked companies, government organisations and multinational businesses.",
      "Managed stakeholder relationships and translated business requirements into technical priorities.",
    ],
    technologies: [
      "Laravel",
      "VB.NET",
      "ASP",
      "Flutter",
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "Python",
      "AWS",
      "Serverless",
      "Lambda",
      "Sage X3",
      "MSSQL",
      "XML",
    ],
  },
  {
    id: "veltra",
    period: "Jul 2022–Aug 2024",
    start: "2022-07",
    end: "2024-08",
    role: "Senior Software Engineer",
    company: "Veltra Malaysia Sdn Bhd",
    summary:
      "Modernised in-house products, microservices and AWS infrastructure.",
    highlights: [
      "Upgraded microservices, server infrastructure and application architecture.",
      "Designed and maintained AWS components using CloudFront, Cognito, S3, SQS, Lambda and RDS, alongside caching services.",
      "Renewed user authentication and back-office functionality in existing systems.",
      "Contributed to team leadership and CI/CD delivery.",
    ],
    technologies: [
      "CakePHP",
      "Phalcon",
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "Go",
      "Python",
      "AWS",
      "Serverless",
      "CloudFront",
      "Cognito",
      "S3",
      "SQS",
      "Lambda",
      "RDS",
      "Memcached",
    ],
  },
  {
    id: "my-electrical-and-hardware",
    period: "2020–2022",
    start: "2020",
    end: "2022",
    role: "Software Manager",
    company: "My Electrical and Hardware Sdn Bhd",
    summary:
      "Led the software team building an e-commerce and operations platform.",
    highlights: [
      "Delivered ERP-related functionality and a warehouse management system to support operations.",
      "Automated accounting and invoicing workflows.",
      "Supported online revenue growth from zero to RM1.2 million within six months through the digital platform and supporting systems.",
    ],
    technologies: [
      "Laravel",
      "Node.js",
      "Redis",
      "Memcached",
      "RDS",
      "NestJS",
      "SendGrid",
    ],
  },
  {
    id: "ipp",
    period: "2017–2019",
    start: "2017",
    end: "2019",
    role: "Senior Web Developer",
    company: "IPP Sdn Bhd",
    summary:
      "Built a real-estate portal and automated property-listing workflows.",
    highlights: [
      "Architected a real-estate web portal and desktop application for property agencies.",
      "Delivered listing automation for more than 2,000 agencies across five real-estate portals.",
      "Built web-crawling capabilities with headless Chrome and supported CI/CD delivery.",
    ],
    technologies: [
      "Joomla",
      "MySQL",
      "jQuery",
      "PHP",
      ".NET",
      "C#",
      "WPF",
      "Selenium",
    ],
  },
  {
    id: "national-instrument-engineer",
    period: "2015–2017",
    start: "2015",
    end: "2017",
    role: "R&D Department Engineer",
    company: "National Instrument Penang",
    summary:
      "Improved new-product test flows and embedded test automation.",
    highlights: [
      "Presented test automation work at NI Tech Day and spoke for the R&D track at NI Day.",
      "Contributed embedded-system design work listed in a white paper.",
    ],
    technologies: [
      "Bash",
      "Perl",
      "C/C++",
      "FPGA",
      "LabVIEW",
      "Python",
      "PHP",
      "Microcontrollers",
      "Sensors",
      "Test automation",
      "Test inspection",
    ],
  },
  {
    id: "national-instrument-intern",
    period: "Jan–Mar 2014",
    start: "2014-01",
    end: "2014-03",
    role: "R&D Test Development Intern",
    company: "National Instrument Penang",
    summary:
      "Linux-based embedded test-station automation.",
    highlights: [
      "Developed automation for an embedded Linux test station.",
    ],
    technologies: [
      "Bash",
      "Perl",
      "LabVIEW",
      "Python",
      "Microcontrollers",
      "Sensors",
      "Test automation",
      "Test inspection",
    ],
  },
  {
    id: "orionplex",
    period: "Jan–Jun 2011",
    start: "2011-01",
    end: "2011-06",
    role: "Sales and Technical Executive",
    company: "Orionplex Sdn Bhd",
    summary:
      "Software and embedded solutions across sales and technical work.",
    highlights: [
      "Developed software and embedded solutions for customer needs.",
    ],
    technologies: ["C/C++", "C#", ".NET", "Visual Basic", "Java", "Spring SWT", "Test instruments"],
  },
];

export const impacts: Impact[] = [
  {
    value: "RM1.2M",
    label: "Online revenue from zero in 6 months",
    context: "My Electrical and Hardware",
  },
  {
    value: "30%",
    label: "Process efficiency improvement",
    context: "Ideal Consulting · ERP and e-invoice",
  },
  {
    value: "20%",
    label: "Increase in client acquisition & renewals",
    context: "Ideal Consulting · pre-sales",
  },
  {
    value: "2,000+",
    label: "Agencies served across 5 portals",
    context: "IPP · property-listing automation",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering (Hons), Electrical & Electronic Engineering",
    institution: "INTI International College Penang, in collaboration with the University of Bradford, UK",
    period: "2013–2015",
  },
  {
    degree: "Diploma, Electrical & Electronic Engineering",
    institution: "INTI International College Penang",
    period: "2010–2012",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Cloud & architecture",
    skills: ["AWS", "Lambda", "Serverless", "Microservices", "Solution architecture", "System integration", "CI/CD"],
  },
  {
    label: "Application development",
    skills: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "NestJS",
      "Vue",
      "PHP",
      "Laravel",
      "Go",
      "Python",
      ".NET",
      "C#",
    ],
  },
  {
    label: "Additional technologies listed",
    skills: ["Express", "Angular", "React Native", "Flutter", "Ionic", "AI / LLM"],
  },
  {
    label: "Development tools & styling",
    skills: ["Git", "Gulp", "SCSS"],
  },
  {
    label: "Data & integration",
    skills: ["MySQL", "PostgreSQL", "MSSQL", "RDS", "Redis", "Prisma", "Queue-based integration", "ERP", "ATS", "HRMS"],
  },
  {
    label: "Commercial & leadership",
    skills: [
      "Pre-sales",
      "Business development",
      "Account management",
      "IT strategy",
      "Project management",
      "Cross-functional leadership",
      "KPI management",
      "Sales and marketing",
    ],
  },
  {
    label: "Earlier engineering",
    skills: ["C/C++", "Embedded systems", "FPGA", "LabVIEW", "Test automation", "Instrumentation"],
  },
  {
    label: "Embedded platforms & vendors listed",
    skills: ["Raspberry Pi", "Arduino", "Microchip", "Analog Devices"],
  },
];
