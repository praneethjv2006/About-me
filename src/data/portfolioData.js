export const heroData = {
  name: "Venkata Praneeth Jangampalli",
  title: "AI/ML and Full-Stack Developer building intelligent, real-world systems",
  subtitle:
    "Focused on computer vision, intelligent recommendation systems, and product-grade web and mobile applications that solve meaningful problems.",
}

export const aboutData = {
  intro:
    "I am currently pursuing my Bachelor of Technology at Indian Institute of Technology, Ropar. I enjoy combining strong problem-solving foundations with AI and software engineering to build practical systems across agriculture, media, legal-tech, and education.",
  highlights: [
    "IIT Ropar B.Tech with 8.85 CGPA (2027)",
    "Project Intern: Multi-Modal Drone & Bird Detection (IEEE VIP Cup 2025)",
    "Intern at Annam.AI (CoE in AI for Agriculture)",
    "Codeforces Specialist (Max Rating: 1548)",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80",
}


export const experience = [
  {
    accent: "cyan",
    period: "May 2025 - Jul 2025",
    duration: "03 Months",
    title: "Project Intern - Multi-Modal Drone & Bird Detection System",
    organization: "Under Dr. Puneet Goyal, IEEE VIP Cup 2025",
    focus: "Computer Vision / Edge AI",
    description:
      "Developed a multi-modal UAV and bird detection system using YOLOv11 with RGB-IR sensor fusion.",
    tags: ["YOLOv11", "RGB-IR Fusion", "Deep SORT", "Low-Light Detection"],
    achievements: [
      "Implemented Deep SORT for multi-object tracking and trajectory analysis of detected objects.",
      "Designed a channel-replacement fusion method (G-B-IR) to improve detection under low-light and adverse conditions.",
      "Built an end-to-end UAV and bird detection workflow tailored for research-grade aerial perception benchmarks.",
    ],
    points: [
      "Implemented Deep SORT for multi-object tracking and trajectory analysis.",
      "Designed a channel-replacement fusion method (G-B-IR) for improved low-light and adverse-condition detection.",
    ],
    technologies: ["YOLOv11", "Deep SORT", "Sensor Fusion", "RGB-IR", "Trajectory Analysis"],
    timeline: [
      {
        phase: "Research Framing",
        detail: "Defined detection objectives, sensor modalities, and evaluation constraints for UAV and bird scenarios.",
      },
      {
        phase: "Fusion Pipeline",
        detail: "Experimented with RGB and IR combinations, then designed the G-B-IR channel replacement strategy.",
      },
      {
        phase: "Tracking & Analysis",
        detail: "Integrated Deep SORT to track objects across frames and analyze movement trajectories reliably.",
      },
    ],
    media: [
      {
        type: "Image Support",
        title: "Detection pipeline overview",
        caption: "Preview slot for fused RGB-IR detection flow, inference stages, and tracking pipeline diagrams.",
      },
      {
        type: "Video Support",
        title: "Low-light scenario demo",
        caption: "Preview slot for showing qualitative improvements under low-light and adverse aerial conditions.",
      },
    ],
    links: [
      { label: "View Projects", href: "/projects" },
      { label: "Back Home", href: "/" },
    ],
  },
  {
    accent: "emerald",
    period: "Jul 2025 - Dec 2025",
    duration: "06 Months",
    title: "Intern, Annam.AI",
    organization: "CoE in AI for Agriculture",
    focus: "AI for Agriculture / Mobile Product",
    description:
      "Developed an Android application to create a digital twin of crops and simulate growth virtually.",
    tags: ["Android", "Digital Twin", "3D Visualization", "AR Crop View"],
    achievements: [
      "Developed an Android application that creates a digital twin of crops to simulate plant growth virtually.",
      "Provided precise crop recommendations based on crop growth simulation and environmental data.",
      "Implemented 3D visualization and AR-based viewing for interactive crop monitoring and analysis.",
    ],
    points: [
      "Provided precise crop recommendations from simulated growth and environmental data.",
      "Implemented 3D visualization and AR-based viewing for interactive crop monitoring and analysis.",
    ],
    technologies: ["Android", "Digital Twin", "3D Visualization", "AR", "Agriculture AI"],
    timeline: [
      {
        phase: "Product Design",
        detail: "Mapped how growers would create crop twins, inspect growth stages, and understand simulation outputs.",
      },
      {
        phase: "Simulation Engine",
        detail: "Connected crop growth logic with environmental inputs to generate recommendations from virtual growth states.",
      },
      {
        phase: "Immersive Visualization",
        detail: "Added 3D and AR-based views to enable richer crop monitoring and interactive analysis in the field.",
      },
    ],
    media: [
      {
        type: "Image Support",
        title: "Digital twin interface",
        caption: "Preview slot for crop twin creation flow, simulation dashboard, and recommendation surfaces.",
      },
      {
        type: "Video Support",
        title: "AR monitoring walkthrough",
        caption: "Preview slot for interactive AR crop visualization and growth monitoring sequences.",
      },
    ],
    links: [
      { label: "View Projects", href: "/projects" },
      { label: "Back Home", href: "/" },
    ],
  },
]

export const skills = [
  { name: "C++", level: 91 },
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 86 },
  { name: "React.js", level: 88 },
  { name: "Node.js", level: 83 },
  { name: "PostgreSQL", level: 79 },
  { name: "MongoDB", level: 80 },
  { name: "Flutter", level: 75 },
  { name: "Computer Vision", level: 87 },
]

export const projects = [
  {
    title: "AIMS Portal - Academic Information Management System",
    period: "Jan 2026 - Feb 2026",
    tagline: "Academic workflows unified into a single operational platform",
    context: "Full-stack academic operations platform",
    description:
      "Developed an academic portal for students, faculty, and advisors with robust enrollment and communication workflows.",
    bullets: [
      "Enabled student-side course enrollment with slot clash detection and personalized timetable generation.",
      "Implemented faculty tools to float courses, approve enrollments, and send customized emails to selected students.",
      "Built advisor workflows to manage enrollments and schedule meetings with assigned students.",
    ],
    problem:
      "Academic coordination is typically fragmented across spreadsheets, ad hoc approvals, and disconnected communication channels, creating friction for students, faculty, and advisors.",
    motivation:
      "The product was designed to centralize operational workflows into a dependable system that reduces administrative overhead while making the student experience clearer and faster.",
    architecture: [
      "React frontend for role-based dashboards and enrollment workflows.",
      "Node.js backend for authorization, enrollment validation, and notification orchestration.",
      "PostgreSQL data layer for course, section, timetable, and approval state management.",
    ],
    challenges: [
      {
        title: "Complex enrollment logic",
        solution: "Added clash detection, constraint-aware validation, and tailored timetable generation to keep scheduling decisions reliable.",
      },
      {
        title: "Role-specific operational flows",
        solution: "Separated interfaces and permissions for students, faculty, and advisors so each workflow stayed focused and low-friction.",
      },
      {
        title: "Targeted communication",
        solution: "Built faculty-side messaging controls to send customized emails to selected student groups without leaving the platform.",
      },
    ],
    previews: [
      {
        label: "Student Workspace",
        caption: "Enrollment dashboard with personalized timetable generation and clash-aware course selection.",
      },
      {
        label: "Faculty Control Center",
        caption: "Course floating, approval management, and student communication surfaces in a single admin flow.",
      },
    ],
    stack: ["React.js", "Node.js", "PostgreSQL", "JavaScript"],
    repositoryLabel: "GitHub Repository",
    live: "#",
    source: "#",
  },
  {
    title: "Enhanced Fire TV Experience (HackOn With Amazon - Season 5)",
    period: "May 2025 - Jun 2025",
    tagline: "AI-guided entertainment discovery layered onto the living-room experience",
    context: "Top 130 teams out of 15,000+ from 100+ premier colleges",
    description:
      "Designed an AI-powered entertainment discovery and social viewing layer for Fire TV experience enhancement.",
    bullets: [
      "Built a recommendation engine using user mood, behavior, and time-based preferences.",
      "Implemented social viewing features across OTT platforms with YOLOv11 mood detection and BERT-based chat analysis.",
      "Created a cross-platform service layer for unified content access without app switching.",
    ],
    problem:
      "Streaming experiences are often fragmented across apps and fail to adapt recommendations to real-time mood, intent, and shared-viewing behavior.",
    motivation:
      "The goal was to reimagine Fire TV as an intelligent discovery layer that feels proactive, social, and context-aware rather than a passive launcher.",
    architecture: [
      "Recommendation orchestration layer combining mood, behavior, and time-based viewing signals.",
      "Computer-vision and language-analysis modules using YOLOv11 and BERT to enrich entertainment context.",
      "Cross-platform aggregation service for unified access across OTT ecosystems.",
    ],
    challenges: [
      {
        title: "Cold and noisy preference signals",
        solution: "Combined mood detection, watch patterns, and time-sensitive heuristics to make early recommendations more relevant.",
      },
      {
        title: "Social viewing coordination",
        solution: "Designed shared-session logic that blends multiple user signals instead of optimizing for only one viewer.",
      },
      {
        title: "Cross-platform fragmentation",
        solution: "Introduced a service layer that unifies discovery across OTT apps so users do not need to context-switch during exploration.",
      },
    ],
    previews: [
      {
        label: "Discovery Surface",
        caption: "Adaptive recommendation canvas shaped by mood, watch behavior, and time-of-day patterns.",
      },
      {
        label: "Social Viewing Layer",
        caption: "Conceptual interface for synchronized discovery and collaborative viewing decisions across OTT platforms.",
      },
    ],
    stack: ["YOLOv11", "BERT", "AI Recommendation", "Cross-Platform Services"],
    repositoryLabel: "GitHub Repository",
    live: "#",
    source: "#",
  },
  {
    title: "Bail Reckoner (SIH 2024 Finalist - PS1702)",
    period: "Nov 2024 - Dec 2024",
    tagline: "Decision-support tooling for faster, more informed bail workflows",
    context: "Under Dr. Shashi Shekhar (assistance)",
    description:
      "Developed an AI-powered legal platform for bail support, advocate discovery, and judicial assistance.",
    bullets: [
      "Provided bail eligibility, risk assessment, and access to all user-filed case records.",
      "Enabled location-based advocate search and lawyer applications for pending cases.",
      "Built judicial support tools for case suggestions, handovers, and precedent-based historical case lookup.",
    ],
    problem:
      "Bail-related legal support is slow, opaque, and difficult to navigate for both applicants and judicial stakeholders when case context is scattered across sources.",
    motivation:
      "The platform aimed to make bail workflows more accessible and data-informed by combining legal assistance, advocate discovery, and judicial decision support.",
    architecture: [
      "AI-assisted eligibility and risk evaluation workflows for case intake.",
      "Search and matching layer for location-based advocate discovery and application handling.",
      "Judicial support module for case suggestions, handovers, and precedent-aware historical lookup.",
    ],
    challenges: [
      {
        title: "Balancing interpretability with AI support",
        solution: "Structured outputs around eligibility, risk, and record access so recommendations remained understandable and defensible.",
      },
      {
        title: "Multi-sided product design",
        solution: "Built dedicated workflows for applicants, advocates, and judicial users instead of forcing one generic interface across all roles.",
      },
      {
        title: "Historical legal retrieval",
        solution: "Added precedent-oriented lookup paths to surface relevant historical cases during decision-support flows.",
      },
    ],
    previews: [
      {
        label: "Case Intake Interface",
        caption: "Structured legal intake surface covering eligibility, risk evaluation, and user-filed record visibility.",
      },
      {
        label: "Judicial Assistance View",
        caption: "Decision-support workspace for case suggestions, handovers, and precedent-aware historical reference.",
      },
    ],
    stack: ["AI/ML", "Legal-Tech", "Search", "Decision Support"],
    repositoryLabel: "GitHub Repository",
    live: "#",
    source: "#",
  },
]

export const education = [
  {
    degree: "Bachelor of Technology",
    institute: "Indian Institute of Technology, Ropar",
    score: "CGPA: 8.85",
    year: "2027",
  },
  {
    degree: "Senior Secondary",
    institute: "Andhra Pradesh Board of Intermediate Education",
    extra: "College: FIITJEE Junior College",
    score: "Percentage: 98%",
    year: "2023",
  },
  {
    degree: "Secondary",
    institute: "Central Board of Secondary Education",
    extra: "School: Wise Woods International School",
    score: "Percentage: 93.6%",
    year: "2021",
  },
]

export const technicalSkills = {
  programmingLanguages: ["C++", "Python", "C", "Java", "JavaScript", "SQL", "RISC-V"],
  webAndAppDevelopment: ["React.js", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Supabase", "Flutter", "Firebase"],
  aiMl: ["Regression", "Classification", "Clustering", "Computer Vision", "CNN"],
  other: ["Data Structures & Algorithms", "Competitive Programming"],
}

export const certifications = [
  { name: "Machine Learning Specialization (Coursera)", link: "#" },
  { name: "Deep Learning Specialization (Coursera)", link: "#" },
  { name: "AWS Cloud Practitioner Essentials (AWS)", link: "#" },
  { name: "Finlatics Equity Markets Analyst", link: "#" },
]

export const keyCourses = [
  "Advanced Data Structures & Algorithms",
  "Machine Learning",
  "Software Engineering",
  "Artificial Neural Networks",
  "Computer Networks",
  "Computer Architecture",
  "Operating Systems",
  "Databases",
  "Digital Logic Design",
  "Discrete Mathematics",
  "Linear Algebra",
  "Probability and Statistics",
  "Signal and Systems",
  "Theory of Complexity",
  "Economics",
]

export const achievements = [
  {
    title: "Codeforces Specialist",
    description: "Achieved a maximum rating of 1548 (Specialist).",
    year: "2025",
  },
  {
    title: "INMO Qualifier",
    description: "Ranked Top 141 nationwide in the Indian National Mathematical Olympiad.",
    year: "2023",
  },
  {
    title: "Abacus & Mental Arithmetic Competitions",
    description: "1st Runner-Up at 13th National Level and Champion at 3rd Regional Level.",
    year: "2016",
  },
  {
    title: "IOQM Merit List",
    description: "Qualified in the Indian Olympiad Qualifier in Mathematics for two consecutive years.",
    year: "2022 & 2023",
  },
  {
    title: "COMEDK UGET",
    description: "Secured AIR 54 (Open Category).",
    year: "2023",
  },
]

export const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Codeforces", href: "#" },
  { label: "LeetCode", href: "#" },
]
