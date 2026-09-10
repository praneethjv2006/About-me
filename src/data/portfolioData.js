export const heroData = {
  name: "Venkata Praneeth Jangampalli",
  title: "",
  subtitle:
    "Focused on computer vision, intelligent recommendation systems, and product-grade web and mobile applications that solve meaningful problems.",
}

export const aboutData = {
  intro:
    "I am currently pursuing my Bachelor of Technology at Indian Institute of Technology, Ropar. I enjoy combining strong problem-solving foundations with AI and software engineering to build practical systems across agriculture, media, legal-tech, and education.",
  highlights: [
    "R&D Intern at Samsung R&D Noida (2nd Best Project Award)",
    "IIT Ropar B.Tech with 9.00 CGPA (2027)",
    "Project Intern: Multi-Modal Drone & Bird Detection (IEEE VIP Cup 2025)",
    "Intern at Annam.AI (CoE in AI for Agriculture)",
    "Codeforces Expert (Max Rating: 1731)",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80",
}


export const experience = [
  {
    accent: "indigo",
    period: "May 2026 - Jul 2026",
    duration: "03 Months",
    title: "R&D Intern",
    organization: "Samsung R&D Noida",
    focus: "NLP / Large Language Models & Translation",
    description:
      "Achieved 2nd Best Project Award by addressing word-level alignment and translation challenges in complex Asian languages using parameter-efficient fine-tuning of NLLB-3.3B.",
    tags: ["NLLB-3.3B", "LoRA", "Word Alignment", "Machine Translation", "NLP"],
    achievements: [
      "Achieved the 2nd Best Project Award for high-accuracy translation & alignment systems.",
      "Addressed word-level alignment and translation challenges in complex languages like Chinese, Japanese, and Thai.",
      "Fine-tuned NLLB-3.3B parameter model using Low-Rank Adaptation (LoRA) to improve alignment and translation performance.",
      "Achieved ≈ 93.8% word alignment accuracy and ≈ 95.2% translation accuracy, significantly enhancing performance.",
    ],
    points: [
      "Addressed word-level alignment and translation challenges in complex languages (Chinese, Japanese, Thai).",
      "Fine-tuned NLLB-3.3B using LoRA, achieving ≈ 93.8% word alignment and ≈ 95.2% translation accuracy.",
    ],
    technologies: ["Python", "PyTorch", "NLLB-3.3B", "LoRA", "Word Alignment", "NLP"],
    timeline: [
      {
        phase: "Problem Framing & Benchmark",
        detail: "Analyzed word-level alignment and translation bottlenecks across Asian languages (Chinese, Japanese, Thai).",
      },
      {
        phase: "Parameter-Efficient Fine-Tuning",
        detail: "Applied Low-Rank Adaptation (LoRA) on the 3.3B parameter NLLB translation model.",
      },
      {
        phase: "Evaluation & Award",
        detail: "Reached 93.8% alignment and 95.2% translation accuracy, securing the 2nd Best Project Award.",
      },
    ],
    media: [
      {
        type: "Image Support",
        title: "NLLB LoRA Architecture",
        caption: "Fine-tuning workflow and Low-Rank Adaptation parameter configuration diagrams.",
      },
      {
        type: "Metrics Overview",
        title: "Alignment & Translation Accuracy",
        caption: "Comparative benchmark curves showing ~93.8% alignment and ~95.2% translation accuracy.",
      },
    ],
    links: [
      { label: "View Projects", href: "/projects" },
      { label: "Back Home", href: "/" },
    ],
  },
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
    title: "ApexJudge - Reimagining Competitive Programming",
    period: "May 2026 - Present",
    tagline: "Innovative challenge formats & AI-powered skill assessment platform for competitive programmers",
    context: "Self-Initiated Project",
    description:
      "Developed an engaging competitive programming platform featuring non-traditional contest rooms and AI-driven code evaluation.",
    bullets: [
      "Developed 'Dojo' (Surprise Room) with innovative challenge formats including debugging tasks, large-scale input handling (e.g., fragmenting), dynamic interactive test cases, and non-traditional assessments.",
      "Implemented an intelligent code editor equipped with AI analysis for time & space complexity, edge-case detection, code review, and skill assessment.",
    ],
    problem:
      "Programmers are losing interest in traditional coding contests due to repetitive formats, while standard rating systems fail to effectively identify individual strengths and weaknesses.",
    motivation:
      "Designed to revitalize competitive programming by introducing adaptive, multi-faceted contest formats alongside deep AI-driven feedback for continuous skill growth.",
    architecture: [
      "Interactive contest engine supporting dynamic test cases, interactive debugging, and fragmented input handling.",
      "AI code analysis service evaluating time/space complexity, edge cases, and automated code review.",
      "Modern web code editor interface with live feedback, problem statements, and real-time execution outputs.",
    ],
    challenges: [
      {
        title: "Dynamic & Non-traditional Contest Assessments",
        solution:
          "Engineered the Dojo evaluation engine to support custom interactive test scripts, real-time input fragmenting, and multi-stage debugging scenarios.",
      },
      {
        title: "AI-Powered Code Review & Complexity Analysis",
        solution:
          "Integrated specialized prompt and model pipelines to evaluate time/space complexity, detect hidden edge cases, and deliver actionable skill breakdowns.",
      },
    ],
    previews: [
      {
        label: "Dojo Surprise Room",
        caption: "Interactive challenge interface featuring non-traditional problem formats, dynamic test cases, and debugging tasks.",
      },
      {
        label: "AI Code Reviewer",
        caption: "Embedded code editor displaying real-time space/time complexity analysis and edge-case detection.",
      },
    ],
    stack: ["React.js", "Node.js", "Python", "AI Analysis", "WebSockets"],
    repositoryLabel: "Project Link",
    live: "#",
    source: "#",
  },
  {
    title: "Digital Leave Management System",
    period: "Feb 2026 - May 2026",
    tagline: "Institutional workflow automation with dynamic forms, RBAC, and automated PDF approvals",
    context: "B.Tech Development Project for Institutional Workflow Automation",
    description:
      "Built an institutional web platform to digitize manual paper leave applications into transparent, automated approval workflows.",
    bullets: [
      "Built a flexible platform capable of building dynamic forms, configurable workflows, and real-time application tracking.",
      "Developed secure workflow features including digital signatures, auto-fill forms, Role-Based Access Control (RBAC), audit trails, multilingual support, automated PDF generation, and analytics reporting.",
    ],
    problem:
      "Manual leave approval processes relied on paper forms, resulting in poor transparency and high administrative overhead.",
    motivation:
      "To modernize institutional workflows with automated routing, paperless processing, compliance audit trails, and data-driven administrative insights.",
    architecture: [
      "Dynamic form builder engine allowing custom field creation and configurable approval hierarchies.",
      "Secure RBAC and audit logging backend for enterprise compliance and application lifecycle tracking.",
      "Automated document processing service for digital signatures, PDF generation, and multilingual localization.",
    ],
    challenges: [
      {
        title: "Configurable Approval Hierarchies",
        solution:
          "Designed a flexible workflow engine allowing institutional admins to configure custom multi-stage approval routes and RBAC policies.",
      },
      {
        title: "Automated Document Generation & Compliance",
        solution:
          "Implemented server-side PDF generation, digital signature verification, and immutable audit logging for administrative transparency.",
      },
    ],
    previews: [
      {
        label: "Workflow Engine Dashboard",
        caption: "Dynamic form builder and configurable multi-role approval workflow management surface.",
      },
      {
        label: "Application Tracking & Analytics",
        caption: "Real-time leave status tracking, digital signature approval view, and administrative analytics reports.",
      },
    ],
    stack: ["React.js", "Node.js", "PostgreSQL", "RBAC", "PDF Generation"],
    repositoryLabel: "GitHub Repository",
    live: "#",
    source: "#",
  },
  {
    title: "Client Selection in Federated Learning",
    period: "Jan 2026 - Apr 2026",
    tagline: "Drift-aware client selection framework for federated learning under non-IID data distribution",
    context: "Course Project - CS503 : Machine Learning",
    description:
      "Engineered a federated learning pipeline and client selection framework capable of adapting to non-IID data, noise, and concept drift across 100 distributed nodes.",
    bullets: [
      "Built a federated learning pipeline (FedAvg with Random, DivFL, S-FedAvg) achieving 98% accuracy on MNIST.",
      "Simulated real-world non-IID conditions by introducing concept drift and noisy data across 100 clients.",
      "Proposed a driftless and drift-aware client selection framework, achieving ≈ 92% accuracy under changing data distributions.",
    ],
    problem:
      "Standard federated learning client selection algorithms suffer performance drops under non-IID data distributions, noisy clients, and real-world concept drift.",
    motivation:
      "Explored robust client selection strategies that optimize communication efficiency and model convergence in volatile, heterogeneous edge networks.",
    architecture: [
      "Distributed simulation engine supporting 100 client nodes running FedAvg, DivFL, and S-FedAvg aggregation.",
      "Concept drift and noise injection module for heterogeneous non-IID environment modeling.",
      "Drift-aware client selection mechanism scoring and selecting representative client subsets dynamically.",
    ],
    challenges: [
      {
        title: "Simulating Non-IID Drift & Noise across 100 Clients",
        solution:
          "Constructed synthetic partitioners to introduce feature/label distribution skews and temporal concept drift across edge clients.",
      },
      {
        title: "Robust Accuracy under Concept Drift",
        solution:
          "Formulated a drift-aware selection metric that filters corrupted or drifted updates, sustaining ~92% accuracy despite dynamic shifts.",
      },
    ],
    previews: [
      {
        label: "FL Simulation Benchmark",
        caption: "Convergence curves comparing FedAvg, DivFL, S-FedAvg, and the proposed drift-aware framework.",
      },
      {
        label: "Client Distribution Matrix",
        caption: "Visualization of non-IID data partitioning, concept drift timelines, and client participation rates.",
      },
    ],
    stack: ["Python", "PyTorch", "Federated Learning", "Machine Learning", "FedAvg"],
    repositoryLabel: "GitHub Repository",
    live: "#",
    source: "#",
  },
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
  {
    title: "Music Notes & DNA Sequence Compression & Decompression",
    period: "June 2024 - Dec 2024",
    tagline: "Lossless compression pipeline leveraging Palindromic Trees (Eertree) for genomic & musical data",
    context: "Course Project - CS201 : Data Structures & Algorithms",
    description:
      "Designed and implemented an advanced data compression pipeline using Palindromic Trees (Eertree) to exploit structural symmetry in DNA sequences and musical pitch data.",
    bullets: [
      "DNA sequences and music data contain recurring and symmetric palindromic patterns suitable for compression.",
      "Implemented a Palindromic Tree (Eertree) for linear-time palindrome extraction and a pipeline for compression-decompression.",
      "Achieved ≈ 53.4% average compression on DNA sequences and music files with 100% lossless recovery after decompression.",
    ],
    problem:
      "Standard compression algorithms do not specifically optimize for palindromic symmetries inherently prevalent in biological DNA sequences and repetitive musical note patterns.",
    motivation:
      "Demonstrated how advanced algorithmic structures like the Eertree can significantly compress domain-specific symmetric sequences while guaranteeing exact lossless reconstruction.",
    architecture: [
      "Eertree (Palindromic Tree) data structure for O(N) extraction of all distinct palindromic subsegments.",
      "Pattern encoding pipeline converting detected palindromic symmetries into compact token streams.",
      "Lossless decoding engine verifying byte-exact recovery across genomic FASTA and musical score inputs.",
    ],
    challenges: [
      {
        title: "Linear-Time Palindrome Extraction",
        solution:
          "Implemented an efficient Eertree data structure to construct palindrome trees in linear time O(N) without computational overhead.",
      },
      {
        title: "Lossless Recovery Verification",
        solution:
          "Designed a multi-stage validation suite checking bit-for-bit equivalence between uncompressed and decompressed biological/musical streams.",
      },
    ],
    previews: [
      {
        label: "Eertree Structure Diagram",
        caption: "Visual representation of odd and even root trees handling palindromic transitions.",
      },
      {
        label: "Compression Metrics Benchmark",
        caption: "Performance chart detailing compression ratio (~53.4%) and throughput across DNA and music datasets.",
      },
    ],
    stack: ["C++", "Data Structures", "Eertree", "Compression Algorithms", "Algorithms"],
    repositoryLabel: "GitHub Repository",
    live: "#",
    source: "#",
  },
]

export const education = [
  {
    degree: "Bachelor of Technology",
    institute: "Indian Institute of Technology, Ropar",
    score: "CGPA: 9.00",
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
    title: "SIH 2024 Finalist (PS1702)",
    description: "Finalist in Smart India Hackathon 2024 for problem statement PS1702.",
    year: "2024",
    category: "Hackathons",
    impact: "Finalist",
    meta: ["Smart India Hackathon", "PS1702"],
    featured: true,
    icon: "award",
  },
  {
    title: "HackOn With Amazon - Season 5",
    description: "Selected among top 130 teams out of 15,000+ teams from 100+ premier colleges.",
    year: "2025",
    category: "Hackathons",
    impact: "Top 130 teams",
    meta: ["Season 5", "Amazon"],
    featured: true,
    icon: "sparkles",
  },
  {
    title: "Codeforces Expert (1731)",
    description: "Expert tier in competitive programming with a maximum rating of 1603.",
    year: "2025",
    category: "Competitive Programming",
    impact: "Max rating 1731",
    meta: ["Codeforces", "Algorithmic contests"],
    featured: true,
    icon: "trophy",
  },
  {
    title: "INMO Qualifier",
    description: "Qualified for the Indian National Mathematical Olympiad (INMO).",
    year: "2023",
    category: "Olympiads",
    impact: "Top 141 nationwide",
    meta: ["National-level qualifier", "Proof-based math"],
    featured: true,
    icon: "medal",
  },
  {
    title: "IOQM 2022 & 2023",
    description: "Merit List in Indian Olympiad Qualifier in Mathematics for two consecutive years.",
    year: "2022-2023",
    category: "Olympiads",
    impact: "Two-year merit list",
    meta: ["IOQM 2022", "IOQM 2023"],
    featured: false,
    icon: "sparkles",
  },
  {
    title: "COMEDK UGET",
    description: "Secured AIR 54 in COMEDK UGET (Other than JEE).",
    year: "2023",
    category: "Academics",
    impact: "54th Rank (Open Category)",
    meta: ["National rank", "Engineering entrance"],
    featured: true,
    icon: "award",
  },
  {
    title: "Abacus & Mental Arithmetic Competitions",
    description: "1st Runner-Up at 13th National and Champion at 3rd Regional Level.",
    year: "2016",
    category: "Academics",
    impact: "National runner-up",
    meta: ["13th National Level", "3rd Regional Level"],
    featured: false,
    icon: "star",
  },
  {
    title: "Math Arena",
    description: "Secured Runner-up position at Advitya 2025, the annual tech fest of IIT Ropar.",
    year: "2025",
    category: "Competitions",
    impact: "Runner-up",
    meta: ["Advitya 2025", "IIT Ropar"],
    featured: false,
    icon: "rocket",
  },
]

export const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Codeforces", href: "#" },
  { label: "LeetCode", href: "#" },
]
