import {
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FileCode2,
  FolderGit2,
  GitBranch,
  Github,
  GraduationCap,
  Layers3,
  LayoutGrid,
  Linkedin,
  Mail,
  Network,
  Phone,
  Rocket,
  ScanText,
  Server,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TrendingUp,
  Users2,
  Workflow,
  Wrench,
} from 'lucide-react';

export const profile = {
  name: 'Nikhil Kshirasagar',
  initials: 'NK',
  role: 'Software Engineer | Backend & Full-Stack Development | AI-Integrated Applications',
  shortRole: 'Software Engineer',
  headline: 'Software Engineer | Backend & Full-Stack Developer',
  location: 'Hyderabad, Telangana, India',
  relocationStatus: 'Willing to relocate',
  education: 'Bachelor of Technology in Computer Science and Engineering, CMR Technical Campus, Hyderabad',
  graduationDate: 'July 2026',
  cgpa: '8.19 / 10.0',
  email: 'nikkhil.theguru@gmail.com',
  phone: '+91 9618136194',
  github: 'https://github.com/nikhhh12',
  linkedin: 'https://www.linkedin.com/in/nikhil-kshirasagar08/',
  leetcode: 'https://leetcode.com/u/nikhTheguru/',
  resume: '/resume/Nikhil_Kshirasagar_Resume.pdf',
};

export const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'LeetCode', href: profile.leetcode, icon: TerminalSquare },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone },
];

export const heroRoles = [
  'Software Engineer',
  'Backend & Full-Stack Developer',
  'Spring Boot & Java Engineer',
  'AI-Integrated Systems Builder',
];

export const heroBadges = [
  'Java 17',
  'Spring Boot 3',
  'Spring Security',
  'MySQL & Redis',
  'React.js',
  'Next.js',
  'REST APIs',
  'Spring AI & RAG',
  'Docker',
];

export const focusAreas = [
  {
    icon: TerminalSquare,
    title: 'Software Engineering',
    copy: 'System design, object-oriented principles, modular architecture, root-cause debugging, and clean code fundamentals.',
  },
  {
    icon: ServerCog,
    title: 'Backend Engineering',
    copy: 'Robust REST API design, Spring Boot 3, Spring Security, JWT authentication, RBAC, and efficient SQL query optimization.',
  },
  {
    icon: Layers3,
    title: 'Full Stack Development',
    copy: 'End-to-end applications connecting modern React/Next.js frontends with high-performance Java and Node.js backends.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Integrated Applications',
    copy: 'Practical LLM integration, Spring AI, RAG workflows, Chroma vector embeddings, and structured AI outputs.',
  },
];

export const aboutStats = [
  { value: 'B.Tech CSE', label: 'CMR Technical Campus', sub: 'CGPA: 8.19 / 10.0' },
  { value: '500+', label: 'DSA Problems Solved', sub: 'Strong algorithmic foundation' },
  { value: '50+', label: 'Community Members', sub: 'Vice President, Codeoholics' },
  { value: '1', label: 'Software Dev Internship', sub: 'DineGo Technologies' },
];

export const aboutKeywords = [
  'Java 17',
  'Spring Boot 3',
  'Spring Security',
  'JWT & RBAC',
  'REST API Design',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Redis Caching',
  'React.js',
  'Next.js',
  'TypeScript',
  'Docker Compose',
  'Flyway Migrations',
  'Spring AI',
  'Chroma Vector DB',
  'RAG Pipelines',
  '500+ DSA',
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'],
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'Node.js',
      'Express.js',
      'REST API Design',
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'MVC Architecture',
    ],
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Frontend Development',
    icon: Layers3,
    skills: ['React.js', 'Next.js', 'React Hooks', 'HTML5', 'CSS3', 'Tailwind CSS'],
    accent: 'from-sky-400 to-indigo-500',
  },
  {
    title: 'Databases & Caching',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Chroma Vector Database'],
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Developer Tools & Infrastructure',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'Docker', 'Docker Compose', 'Flyway', 'AWS', 'WebContainers'],
    accent: 'from-purple-400 to-fuchsia-500',
  },
  {
    title: 'Testing & Engineering Fundamentals',
    icon: ShieldCheck,
    skills: [
      'JUnit',
      'Mockito',
      'Unit Testing',
      'Integration Testing',
      'Regression Testing',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'DBMS',
      'Debugging',
      'Root-Cause Analysis',
      'Agile',
      'SDLC',
    ],
    accent: 'from-rose-400 to-pink-500',
  },
  {
    title: 'AI & Generative AI',
    icon: BrainCircuit,
    skills: [
      'Spring AI',
      'Retrieval-Augmented Generation (RAG)',
      'Embeddings',
      'Vector Databases',
      'LLM Integration',
      'Prompt Engineering',
      'Structured Outputs',
    ],
    accent: 'from-violet-400 to-purple-600',
  },
];

const createCaseStudy = ({
  pitch,
  problem,
  limitations,
  solution,
  innovations,
  features,
  architecture,
  challenges,
  impact,
  recruiter,
  roadmap,
  techStack,
  resume,
  readme,
  portfolio,
  assumption,
}) => ({
  pitch,
  problem,
  limitations,
  solution,
  innovations,
  features,
  architecture,
  challenges,
  impact,
  recruiter,
  roadmap,
  techStack,
  resume,
  readme,
  portfolio,
  assumption,
});

export const projects = [
  {
    title: 'StockPilot AI',
    subtitle: 'Intelligent Inventory Management System',
    description:
      'An enterprise-grade inventory management platform designed to handle product and warehouse operations, stock transfers, purchase orders, receiving workflows, inventory synchronization, and transaction audit logs.',
    githubUrl: 'https://github.com/nikhhh12/stockpilot',
    liveUrl: '',
    image: '/images/projects/stockpilot.svg',
    icon: Boxes,
    metric: 'Enterprise Backend + AI',
    featured: true,
    features: [
      'Controller-Service-Repository architecture with JWT auth & RBAC',
      'Redis cache-aside caching reducing p95 latency by 64%',
      'Statistical inventory intelligence (moving averages, exponential smoothing, Z-score anomalies)',
      'RAG-based policy retrieval using Spring AI and Chroma Vector DB',
    ],
    tech: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security',
      'JWT',
      'MySQL',
      'Redis',
      'React 18',
      'TypeScript',
      'Docker Compose',
      'Flyway',
      'Spring AI',
      'Chroma',
    ],
    metrics: [
      { value: '64%', label: 'p95 lookup latency cut (180ms → 65ms)' },
      { value: '68%', label: 'fewer database queries' },
      { value: '27', label: 'passing automated tests' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'StockPilot AI brings modern distributed systems principles and practical generative AI to inventory management, combining sub-70ms lookup latency with statistical demand forecasting and RAG-powered operational documentation search.',
      problem: [
        'Traditional inventory platforms suffer from severe database lookup bottlenecks during high-concurrency warehouse picking operations.',
        'Warehouse managers struggle with stockouts and over-purchasing due to manual calculation of reorder points and lack of statistical demand intelligence.',
        'Standard operational documentation and policy manuals are disconnected from inventory tools, causing operational errors during transfers and receiving workflows.',
      ],
      limitations: [
        'Legacy monolithic inventory software lacks cache-aside architectures and causes database contention on hot product lookups.',
        'Manual spreadsheet forecasts fail to detect sudden demand spikes or anomalous consumption patterns.',
        'Standard LLM chat integrations lack strict role-based tool scoping and access controls, creating security hazards around warehouse transaction data.',
      ],
      solution: [
        'Engineered a layered Spring Boot 3 backend implementing a clean Controller-Service-Repository architecture.',
        'Integrated a Redis cache-aside caching layer with deterministic cache invalidation on inventory mutative operations.',
        'Developed statistical intelligence algorithms: moving averages, exponential smoothing, and Z-score anomaly detection for automatic reorder suggestions.',
        'Embedded a Spring AI RAG pipeline over Chroma vector database with role-scoped tools for secure, read-only policy retrieval.',
      ],
      innovations: [
        'Dual-layer performance model: sub-70ms Redis cached reads for warehouse scanners combined with ACID transaction guarantees in MySQL for ledger audits.',
        'Statistical + AI hybrid intelligence: deterministic mathematical calculations for financial metrics paired with RAG for human-language policy inquiries.',
        'Read-only AI assistant workflows strictly constrained by Spring Security role-based tool execution boundaries.',
      ],
      features: [
        'Comprehensive Inventory Lifecycle: product catalogs, suppliers, multi-warehouse stock allocations, and reservations.',
        'Procurement & Receiving: multi-item purchase orders with automatic stock synchronization and transaction audit logging.',
        'Stockout-Risk & Anomaly Engine: automated stockout risk scores and Z-score consumption outlier detection.',
        'Interactive React 18 & TypeScript Dashboard with responsive dark UI and real-time operational feedback.',
      ],
      architecture: [
        'Backend: Spring Boot 3.x, Java 17, Spring Security with stateless JWT filter chain and RBAC.',
        'Persistence: MySQL 8 with Flyway versioned schema migrations ensuring repeatable migrations across environments.',
        'Caching Layer: Redis cache-aside pattern with automatic invalidation on stock update, transfer, and receiving events.',
        'AI Engine: Spring AI integration querying a containerized Chroma vector database storing embedded operational documentation.',
        'Frontend: React 18, TypeScript, Tailwind CSS with modular component breakdown.',
        'Infrastructure: Multi-container setup orchestratable via Docker Compose.',
      ],
      challenges: [
        'Ensuring cache consistency across high-frequency inventory reservations, stock releases, and warehouse transfers without stale reads.',
        'Implementing strict RBAC validation down to the AI tool invocation layer so unauthorized users cannot prompt-inject confidential procurement data.',
        'Maintaining 100% data integrity across multi-step purchase order receiving workflows using transactional boundaries.',
      ],
      impact: [
        'Reduced p95 product-lookup latency from 180 ms to 65 ms (~64% improvement) under tested read-heavy benchmarks.',
        'Reduced overall database query load by 68% through disciplined Redis cache invalidation.',
        'Achieved full test coverage across critical business services with 27 passing JUnit and Mockito test suites.',
      ],
      recruiter: [
        'Demonstrates enterprise backend architecture in Java 17 and Spring Boot 3 with production-grade patterns (CSR, DTOs, custom exception handling).',
        'Validates real-world performance optimization capabilities with Redis caching and verified latency metrics.',
        'Shows practical understanding of AI integration (RAG + vector databases) applied safely within an enterprise security perimeter.',
      ],
      roadmap: [
        'Add distributed event-driven order processing via Apache Kafka or RabbitMQ.',
        'Implement barcode/QR scanner integration in the frontend for mobile warehouse operations.',
        'Introduce multi-tenant schema isolation for SaaS deployment.',
      ],
      techStack: {
        'Backend Core': ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'RBAC', 'Flyway'],
        'Data & Caching': ['MySQL 8', 'Redis', 'Chroma Vector DB', 'Spring Data JPA', 'Hibernate'],
        'AI & Search': ['Spring AI', 'RAG Pipelines', 'OpenAI/Local Embeddings', 'Prompt Scoping'],
        'Frontend & DevOps': ['React 18', 'TypeScript', 'Tailwind CSS', 'Docker', 'Docker Compose'],
      },
      resume: [
        'Architected enterprise inventory management platform using Java 17, Spring Boot 3, MySQL, Redis, and React 18.',
        'Implemented Redis cache-aside caching, cutting p95 product lookup latency by 64% (180ms to 65ms) and database queries by 68%.',
        'Integrated Spring AI with Chroma vector DB for RAG-based inventory policy retrieval with role-scoped tools.',
      ],
      readme:
        'StockPilot AI is an enterprise-grade full-stack inventory management and optimization platform built with Java 17, Spring Boot 3, Redis, MySQL, and Spring AI.',
      portfolio:
        'StockPilot AI demonstrates production-level backend engineering, database query optimization, Redis caching benchmarks, and secure AI integration.',
    }),
  },
  {
    title: 'FinSight',
    subtitle: 'Financial Data Aggregator and Stock Tracker',
    description:
      'A financial analytics application that integrates real-time and historical equity data with persistent watchlists, price alerts, and scheduled data refresh workflows.',
    githubUrl: 'https://github.com/nikhhh12/FinSight-financial-data-aggregator',
    liveUrl: '',
    image: '/images/projects/finsight.svg',
    icon: TrendingUp,
    metric: 'Real-Time Data + Async Jobs',
    featured: true,
    features: [
      'Financial data integration through the Finnhub API for real-time market quotes',
      'Persistent stock watchlists stored in MongoDB',
      'Price alert evaluation engine to detect target triggers',
      'Scheduled background refresh workflows using Inngest with email alerts via Nodemailer',
    ],
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Finnhub API', 'Inngest', 'Nodemailer', 'Tailwind CSS'],
    metrics: [
      { value: 'Real-time', label: 'Finnhub equity streaming' },
      { value: 'Automated', label: 'Inngest scheduled refresh jobs' },
      { value: 'Instant', label: 'Nodemailer threshold alerts' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'FinSight provides active stock investors with real-time equity tracking, customizable price-threshold monitoring, and automated background evaluations without requiring manual dashboard refreshing.',
      problem: [
        'Retail market watchers miss critical price breakout points because standard platforms require constant browser tab monitoring.',
        'Financial tracking tools often couple user sessions with synchronous data fetching, leading to rate limit exhaustion and sluggish UI performance.',
      ],
      limitations: [
        'Basic stock tracking widgets lack persistent watchlists tied to individual user profiles.',
        'Synchronous price checking against external APIs leads to API rate-limit throttling and timeout errors.',
      ],
      solution: [
        'Constructed a Next.js full-stack platform integrating the Finnhub API for real-time and historical market data.',
        'Designed MongoDB persistence models for user watchlists, portfolio targets, and alert trigger parameters.',
        'Implemented Inngest asynchronous background jobs to decouple heavy market polling from user requests.',
        'Integrated Nodemailer to dispatch formatted email notifications as soon as price thresholds are triggered.',
      ],
      innovations: [
        'Event-driven background scheduling with Inngest ensures zero API quota waste and resilient retry logic.',
        'Decoupled architecture protects user interfaces from external Finnhub API latency spikes.',
      ],
      features: [
        'Interactive Stock Watchlists: add, remove, and categorize equity tickers with real-time change percentages.',
        'Automated Alert Evaluator: set high/low trigger bands with automated status transitions.',
        'Historical Market Visualization: clean charting interfaces to inspect equity trends over time.',
        'Automated Email Dispatch: instant email notifications triggered via background worker jobs.',
      ],
      architecture: [
        'Frontend: Next.js App Router, TypeScript, Tailwind CSS, dynamic SVG trend charts.',
        'Backend / Serverless: Next.js Route Handlers orchestrating data sanitization and database mutations.',
        'Background Queue: Inngest serverless event workflows managing periodic quote fetches and evaluations.',
        'Database: MongoDB with Mongoose schema modeling for users, watchlists, and price alerts.',
        'External Services: Finnhub API for stock quotes; Nodemailer for automated SMTP delivery.',
      ],
      challenges: [
        'Designing background polling schedules that respect strict Finnhub API rate limits while maintaining timely alerts.',
        'Handling asynchronous job retries without triggering duplicate alert emails to users.',
      ],
      impact: [
        'Automated 100% of price monitoring workflows through resilient background job execution.',
        'Delivered responsive dashboard interaction times by completely isolating user queries from external API latency.',
      ],
      recruiter: [
        'Demonstrates mastery of asynchronous workflow orchestration and background queue patterns using Inngest.',
        'Highlights production-level integration of 3rd-party REST APIs and secure handling of external rate limits.',
        'Shows full-stack proficiency with Next.js, TypeScript, and MongoDB schema design.',
      ],
      roadmap: [
        'Add technical indicators (RSI, MACD) to equity chart views.',
        'Integrate SMS and push notification dispatch channels.',
      ],
      techStack: {
        'Full-Stack Framework': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        'Database': ['MongoDB', 'Mongoose ORM'],
        'Background Workflows': ['Inngest Event Engine', 'Cron Schedules'],
        'APIs & Services': ['Finnhub Financial API', 'Nodemailer SMTP'],
      },
      resume: [
        'Built full-stack financial analytics application with Next.js, TypeScript, MongoDB, and Finnhub API.',
        'Engineered persistent watchlists, price alert evaluations, and automated refresh workflows using Inngest.',
        'Integrated Nodemailer email dispatch for real-time price threshold trigger notifications.',
      ],
      readme:
        'FinSight is a financial data aggregator and equity tracking application with persistent watchlists and automated background alerts.',
      portfolio:
        'FinSight showcases full-stack Next.js development, external financial API integration, and asynchronous background worker queues.',
    }),
  },
  {
    title: 'Code Editor Pro',
    subtitle: 'AI-Powered Modular Web IDE',
    description:
      'A browser-based development environment that combines an interactive code editor, browser-based Node.js execution, AI-powered code assistance, authentication, and persistent project files.',
    githubUrl: 'https://github.com/nikhhh12/code-editor-pro',
    liveUrl: '',
    image: '/images/projects/code-editor-pro.svg',
    icon: Code2,
    metric: 'WebContainers + Gemini AI',
    featured: true,
    features: [
      'Monaco Editor integration with syntax highlighting and multi-tab workflows',
      'Browser-based Node.js runtime execution using StackBlitz WebContainers',
      'Context-aware code completion and intelligent coding assistant via Google Gemini API',
      'Persistent virtual file system backed by Prisma ORM and MongoDB with NextAuth.js',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'Monaco Editor',
      'Google Gemini API',
      'WebContainers',
      'Prisma',
      'MongoDB',
      'NextAuth.js',
      'xterm.js',
    ],
    metrics: [
      { value: 'In-Browser', label: 'Node.js execution via WebContainers' },
      { value: 'Gemini AI', label: 'Context-aware code completion' },
      { value: 'Multi-Tab', label: 'Monaco Editor with xterm.js' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'Code Editor Pro brings a desktop-grade IDE experience directly into modern web browsers, pairing in-browser Node.js runtime execution with Google Gemini AI coding suggestions and persistent cloud workspaces.',
      problem: [
        'Setting up local development environments is friction-heavy for new developers and across different operating systems.',
        'Most web code sandboxes rely on expensive remote server compute containers, introducing latency and server maintenance overhead.',
        'Standard browser editors lack integrated, context-aware AI completion that understands the surrounding project files.',
      ],
      limitations: [
        'Traditional web playgrounds are limited to frontend HTML/CSS/JS and cannot execute server-side Node.js or run npm install.',
        'Server-side code execution sandboxes are vulnerable to security escapes and impose massive server hosting costs.',
      ],
      solution: [
        'Integrated StackBlitz WebContainers to boot a micro operating system directly inside browser WebAssembly.',
        'Integrated Microsoft Monaco Editor (the core of VS Code) with full syntax highlighting, tabs, and keyboard shortcuts.',
        'Connected xterm.js to WebContainer terminal processes, enabling interactive terminal execution (`node`, `npm`).',
        'Built an AI coding assistant powered by the Google Gemini API with ghost-text inline completions.',
        'Implemented a persistent Virtual File System (VFS) with Prisma ORM and MongoDB, authenticated via NextAuth.js.',
      ],
      innovations: [
        'Zero-server execution cost: all code compilation and Node.js servers run client-side inside WebContainers with 0ms network latency.',
        'Intelligent cursor-aware prompting: Gemini prompts are dynamically contextualized with active file tokens and adjacent lines.',
      ],
      features: [
        'Modular Resizable Layout: draggable panel groups separating file tree, editor, terminal, and AI assistant.',
        'Interactive In-Browser Terminal: full xterm.js terminal attached to live WebContainer shell.',
        'Contextual Gemini Coding Assistant: code generation, debugging recommendations, and ghost-text autocompletion.',
        'Project Persistence & Auth: Google and GitHub sign-in with full CRUD over projects, folders, and files.',
      ],
      architecture: [
        'Frontend IDE: Next.js App Router, TypeScript, Tailwind CSS, Monaco Editor, xterm.js.',
        'Client Runtime: WebContainers API running Node.js in WebAssembly directly inside the client browser thread.',
        'AI Integration: Google Generative AI SDK with structured prompt templates and response streaming.',
        'Database & Auth: MongoDB with Prisma ORM for file system tree persistence; NextAuth.js for session management.',
      ],
      challenges: [
        'Managing Cross-Origin Isolation (COOP and COEP HTTP headers) required by WebContainers without breaking third-party authentication.',
        'Synchronizing Monaco Editor buffer edits with the WebContainer in-memory filesystem in real-time.',
      ],
      impact: [
        'Enabled instantaneous in-browser Node.js execution with 0 server compute footprint.',
        'Delivered responsive desktop-grade IDE interactions and low-latency AI completions directly in the browser.',
      ],
      recruiter: [
        'Exhibits advanced frontend engineering: Monaco editor integration, WebAssembly execution, and terminal emulators.',
        'Proves capability in designing complex modular software architectures with clean separation of concerns.',
        'Demonstrates practical, context-aware Generative AI integration beyond naive chat widgets.',
      ],
      roadmap: [
        'Add live multi-user collaborative editing via WebRTC and operational transformation / CRDTs.',
        'Support Python and Rust WebAssembly runtimes.',
      ],
      techStack: {
        'IDE & Editor': ['Monaco Editor', 'xterm.js', 'Tailwind CSS', 'TypeScript'],
        'Runtime': ['WebContainers (Wasm)', 'Node.js in Browser'],
        'AI Services': ['Google Gemini API', 'Generative AI SDK'],
        'Backend & Database': ['Next.js', 'Prisma ORM', 'MongoDB', 'NextAuth.js'],
      },
      resume: [
        'Developed browser-based IDE combining Monaco Editor, in-browser Node.js execution, and Gemini AI assistance.',
        'Utilized WebContainers for client-side WebAssembly Node.js runtime execution with zero server compute overhead.',
        'Persisted virtual file system with Prisma ORM and MongoDB; implemented NextAuth.js authentication.',
      ],
      readme:
        'Code Editor Pro is a sophisticated browser-based IDE powered by Monaco Editor, WebContainers, and Google Gemini AI.',
      portfolio:
        'Code Editor Pro illustrates advanced developer tooling, in-browser runtime execution, and context-aware AI integration.',
    }),
  },
  {
    title: 'SmartAIgent',
    subtitle: 'Agentic Work Intake & Execution Engine',
    description:
      'An AI-powered workflow intake and execution engine that converts unstructured requests into structured, validated action plans, with deterministic execution rules, human approval for sensitive actions, and persistent workflow tracking.',
    githubUrl: 'https://github.com/nikhhh12/smartAIgent',
    liveUrl: '',
    image: '/images/projects/smartaigent.svg',
    icon: Workflow,
    metric: 'Autonomous Intake + Human Guardrails',
    featured: false,
    features: [
      'Converts natural-language work requests into structured JSON workflow schemas using Google Gemini',
      'Strict Zod schema validation prevents model hallucination and verifies missing required context',
      'Deterministic backend planning categorizes actions: Auto-Execute, Human Review, Clarify, or Cannot Execute',
      'Human-in-the-loop review queue for sensitive and destructive operations (communication drafts, deletions)',
      'SQLite persistence via Drizzle ORM recording workflow states, tool execution logs, tasks, and reminders',
    ],
    tech: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'Google Gemini API',
      'Zod',
      'SQLite',
      'Drizzle ORM',
      'Vitest',
      'Tailwind CSS',
    ],
    metrics: [
      { value: '7-Stage', label: 'Deterministic workflow pipeline' },
      { value: '100% Zod', label: 'Structured schema enforcement' },
      { value: '20 / 20', label: 'Passing Vitest specifications' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'SmartAIgent bridges the gap between unstructured business operations and reliable automation by combining LLM-powered intake interpretation with strict schema validation, deterministic planning rules, explicit tool permissions, and mandatory human review.',
      problem: [
        'Operations teams receive messy work requests via emails, call transcripts, and chat messages, making manual triage slow and error-prone.',
        'Unconstrained autonomous agents are unpredictable and unsafe for enterprise operations, frequently hallucinating actions or performing unauthorized destructive operations.',
      ],
      limitations: [
        'Traditional chatbot agents execute arbitrary commands without formal schema validation or rollback safety.',
        'Rule-based automation requires rigid forms and fails when dealing with ambiguous or incomplete human requests.',
      ],
      solution: [
        'Architected a 7-stage workflow pipeline: Intake -> LLM Interpretation -> Deterministic Planning -> Tool Execution -> Human Review -> Persistence -> Audit Trace.',
        'Enforced Google Gemini structured JSON outputs strictly validated via Zod schemas before any downstream processing.',
        'Built a deterministic planner that categorizes actions into auto-execution, human approval, clarification, or unsupported.',
        'Implemented a human-in-the-loop review queue for sensitive actions such as client communications and deployment mutations.',
      ],
      innovations: [
        'Context-gap halting: system explicitly pauses and flags missing context rather than fabricating parameters.',
        'Deterministic security boundary: LLM only interprets text into schema; all planning authority and tool execution permissions reside entirely in deterministic backend code.',
      ],
      features: [
        'Structured Intake Engine: transforms free-form paragraphs into validated task schemas with priorities and deadlines.',
        'Internal Tool Registry: safely invokes pre-registered handlers (createTask, createReminder, websiteCheck, generateMarkdownBrief).',
        'Human Approval Queue: interactive Approve / Edit / Reject workflow for sensitive actions.',
        'Persistent Execution Trace: complete SQLite audit log tracking every state transition and tool outcome.',
      ],
      architecture: [
        'Frontend: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Lucide icons.',
        'AI Engine: Google Generative AI SDK (@google/genai, @google/generative-ai) with structured output prompts.',
        'Validation Layer: Zod schema validation ensuring zero malformed payloads.',
        'Persistence: SQLite database via better-sqlite3 and Drizzle ORM managing workflows, tasks, reminders, and drafts.',
        'Testing Suite: Vitest test suite validating planner categorization, schema parsing, and execution security.',
      ],
      challenges: [
        'Preventing prompt injection and model drift when parsing messy customer requests by decoupling semantic parsing from deterministic tool routing.',
        'Designing an atomic SQLite transaction model to record state transitions alongside tool execution side-effects.',
      ],
      impact: [
        'Eliminated 100% of unauthorized or hallucinated tool executions through deterministic permission boundaries.',
        'Verified system robustness with 20 passing unit and integration tests across schemas, planning logic, and mock tools.',
      ],
      recruiter: [
        'Demonstrates advanced understanding of Agentic AI engineering: moving beyond naive wrappers into production guardrails and deterministic orchestration.',
        'Exhibits rigorous software engineering practices: strict TypeScript typing, Zod schema validation, and comprehensive automated Vitest test coverage.',
        'Proves ability to design reliable enterprise systems featuring human-in-the-loop governance and immutable audit traces.',
      ],
      roadmap: [
        'Add webhook triggers for incoming email and Slack message ingestion.',
        'Implement vector search over historical workflows using SQLite-VSS or Chroma.',
      ],
      techStack: {
        'Frontend & Framework': ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'],
        'AI & Validation': ['Google Gemini SDK', 'Zod Schema Validation', 'Structured Outputs'],
        'Database & ORM': ['SQLite', 'better-sqlite3', 'Drizzle ORM'],
        'Testing & Tooling': ['Vitest', 'Node.js', 'Lucide Icons'],
      },
      resume: [
        'Engineered an AI workflow intake engine using Next.js 14, TypeScript, Google Gemini structured outputs, and Zod validation.',
        'Implemented deterministic backend planner with explicit tool permissions and human-in-the-loop approval for sensitive actions.',
        'Persisted state transitions and execution logs in SQLite via Drizzle ORM; achieved 20 passing Vitest automated tests.',
      ],
      readme:
        'SmartAIgent transforms unstructured work requests into structured, reviewable workflows using Google Gemini structured outputs, Zod schema validation, deterministic planning, and human-in-the-loop approvals.',
      portfolio:
        'SmartAIgent illustrates agentic AI design patterns, deterministic safety guardrails, schema enforcement, and full-stack TypeScript engineering.',
    }),
  },
  {
    title: 'CodeForge AI',
    subtitle: 'Competitive Programming & AI Mentorship Platform',
    description:
      'A full-stack competitive programming and coding practice platform featuring Monaco Editor, multi-language code execution via Piston API, and a 10-feature AI mentor powered by Google Gemini.',
    githubUrl: 'https://github.com/ruthvikamburay/codeforge-AI',
    liveUrl: '',
    image: '/images/projects/codeforge-ai.svg',
    icon: TerminalSquare,
    metric: 'Online Judge + 10x AI Mentor Modes',
    featured: false,
    features: [
      'Monaco Code Editor integration with syntax highlighting, language switching (Python, JavaScript, C++, Java), and keyboard shortcuts',
      'Dual code execution engine supporting remote sandboxed execution via Piston API and local execution engine',
      'AI-Assisted Problem Generator using Google Gemini to draft problem statements, test cases, and reference solutions',
      '10-feature AI Mentor Toolbar providing progressive hints, complexity analysis, dry-run visualizers, and interview mode',
      'JWT authentication, Google OAuth 2.0, problem bookmarking, submission history, and MongoDB persistence',
    ],
    tech: [
      'React 18',
      'Vite',
      'Monaco Editor',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Google Gemini API',
      'Piston API',
      'Tailwind CSS',
    ],
    metrics: [
      { value: '10 Modes', label: 'AI coding mentorship suite' },
      { value: 'Dual Engine', label: 'Piston API + Local Judge execution' },
      { value: 'Monaco', label: 'VS Code editor integration' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'CodeForge AI combines the speed of modern online coding judges with an intelligent, context-aware AI mentor that teaches problem-solving progressively rather than merely revealing answers.',
      problem: [
        'Competitive programmers and interview candidates get stuck on DSA problems and often resort to reading the full editorial, which ruins the learning process.',
        'Traditional coding platforms lack automated problem generation tools for educators and interviewers who need custom, well-formatted test cases.',
      ],
      limitations: [
        'Standard platforms like LeetCode offer all-or-nothing solutions without step-by-step Socratic hints.',
        'Generic AI chatbots hallucinate syntax, reveal full solutions immediately, and fail to validate code against actual test cases.',
      ],
      solution: [
        'Engineered a decoupled full-stack platform with a React 18 / Monaco Editor frontend and Node.js / Express backend.',
        'Integrated Piston API sandbox for safe remote execution across multiple programming languages with runtime and memory measurements.',
        'Built a 10-feature AI Mentor Suite using the Google Gemini API with system prompts enforcing progressive hints, dry-run visualizations, and time/space complexity analysis.',
        'Developed an AI Problem Creation pipeline that generates problem statements, input/output constraints, sample test cases, hidden edge cases, and reference solutions.',
      ],
      innovations: [
        'Progressive Hint Engine: delivers tiered hints (Concept -> Intuition -> Implementation Hint) without revealing complete code.',
        'Dual execution architecture: evaluates code via remote Piston sandbox while offering an in-memory MongoDB fallback for zero-setup evaluation.',
      ],
      features: [
        'Monaco Editor: full-featured code editing experience with split-screen problem layout and custom themes.',
        'AI Mentor Toolbar: 10 specialized modal modes including Code Debugger, Solution Comparator, Interviewer Mode, and Edge Case Generator.',
        'AI Problem Generator: transforms raw concepts into standardized, structured coding problems with automated test cases.',
        'User Tracking & Submissions: tracks problem difficulty, topics, companies, submission verdicts, and bookmarks.',
      ],
      architecture: [
        'Frontend: React 18, Vite, Tailwind CSS, @monaco-editor/react, React Router v6, Axios, Lucide React.',
        'Backend API: Node.js, Express.js (ES modules), CORS, JWT authentication, Google Auth Library.',
        'Execution Engines: Piston API client (emkc.org) for sandboxed code evaluation; local judge fallback.',
        'AI Engine: @google/genai SDK with dedicated prompt templates for generation, validation, analysis, and mentorship.',
        'Database: MongoDB with Mongoose schema models (User, Problem, DraftProblem, Submission, Bookmark) and mongodb-memory-server.',
      ],
      challenges: [
        'Preventing the AI mentor from immediately leaking full solutions by constructing strict system prompts and multi-turn hint states.',
        'Normalizing stdout, stderr, and exit codes across diverse compilers in the Piston API to generate consistent judge verdicts.',
      ],
      impact: [
        'Enabled multi-language execution and algorithmic verification across sample and hidden test suites.',
        'Supported 10 distinct AI mentorship workflows that reinforce active recall and algorithm comprehension.',
      ],
      recruiter: [
        'Demonstrates full-stack fluency across complex UI components (Monaco Editor, split panels) and backend REST API architecture.',
        'Proves ability to integrate external code execution sandboxes, manage multi-language compilers, and handle execution timeouts.',
        'Showcases thoughtful Generative AI prompt engineering: building pedagogical AI tools rather than simple text generators.',
      ],
      roadmap: [
        'Add real-time collaborative coding sessions using WebSockets.',
        'Support custom contest hosting with automated leaderboard recalculation.',
      ],
      techStack: {
        'Frontend & Editor': ['React 18', 'Vite', 'Monaco Editor', 'Tailwind CSS', 'React Router'],
        'Backend & Services': ['Node.js', 'Express.js', 'JWT', 'Google OAuth'],
        'Code Execution': ['Piston API Sandbox', 'Local Judge Engine'],
        'AI & Database': ['Google Gemini (@google/genai)', 'MongoDB', 'Mongoose'],
      },
      resume: [
        'Developed full-stack competitive programming platform with React, Monaco Editor, Node.js, Express, and MongoDB.',
        'Integrated Piston API sandbox for sandboxed multi-language code execution and real-time judge verdicts.',
        'Engineered 10-feature AI mentorship toolbar and automated problem generator using Google Gemini API.',
      ],
      readme:
        'CodeForge AI is a full-stack competitive programming platform featuring Monaco Editor, sandboxed multi-language execution via Piston, and an AI mentor powered by Google Gemini.',
      portfolio:
        'CodeForge AI highlights full-stack web development, code editor integration, remote code execution sandboxing, and practical AI mentorship tools.',
    }),
  },
  {
    title: 'Intelligent Job Application Automation Engine (IJAAE)',
    subtitle: 'Autonomous Job Discovery & Matching Platform',
    description:
      'A modular job application automation platform that combines semantic job matching, resume parsing, AI-assisted cover-letter generation, and browser-based form filling with human verification.',
    githubUrl: 'https://github.com/nikhhh12/Job-automation-engine',
    liveUrl: '',
    image: '/images/projects/ijaae.svg',
    icon: BriefcaseBusiness,
    metric: 'Semantic Match + Playwright Automation',
    featured: false,
    features: [
      'Resume PDF parsing and profile extraction using Python PyMuPDF',
      'Candidate-profile and job-description semantic matching using Sentence Transformers (all-MiniLM-L6-v2)',
      'Vector similarity search and match scoring using FAISS (Inner Product / Cosine Similarity)',
      'Tailored cover-letter generation strictly grounded in candidate facts using OpenAI LLM API',
      'Playwright browser automation for discovery and form filling with human-in-the-loop review before submission',
    ],
    tech: [
      'React',
      'Vite',
      'Zustand',
      'Node.js',
      'Express',
      'Prisma ORM',
      'Python',
      'FastAPI',
      'PyMuPDF',
      'Sentence Transformers',
      'FAISS',
      'OpenAI API',
      'Playwright',
      'Docker Compose',
    ],
    metrics: [
      { value: 'FAISS Index', label: 'Semantic cosine similarity' },
      { value: 'SBERT 384-d', label: 'Dense vector embeddings' },
      { value: 'Human Pause', label: 'Pre-submission verification' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'IJAAE eliminates repetitive job search toil by pairing dense vector semantic matching with automated form-filling, ensuring high job relevance while maintaining strict human control before applications are submitted.',
      problem: [
        'Job seekers spend hundreds of hours manually searching job portals, retyping resume facts into disparate application forms, and tailoring cover letters.',
        'Keyword-based job matching fails to capture semantic relevance between engineering experience and modern job descriptions.',
      ],
      limitations: [
        'Existing browser extensions spray generic resumes indiscriminately, hurting candidate credibility.',
        'Fully autonomous application bots frequently hallucinate answers on sensitive application fields or submit inaccurate data.',
      ],
      solution: [
        'Designed a 4-tier microservice architecture: React/Zustand frontend, Node.js/Prisma backend, Python/FastAPI AI engine, and Playwright automation service.',
        'Parsed candidate PDF resumes with PyMuPDF to extract factual work histories, skills, and metrics.',
        'Generated 384-dimensional dense semantic embeddings using Sentence Transformers (all-MiniLM-L6-v2) and indexed them in FAISS.',
        'Engineered a Playwright automation worker that maps standard form fields and pauses for human verification prior to final submission.',
      ],
      innovations: [
        'Human-in-the-Loop Safeguard: automation strictly pauses at the final review screen, allowing candidate verification before submission.',
        'Fact-grounded generation: cover letter LLM prompts forbid speculative assertions, grounding every claim on verified resume bullet points.',
      ],
      features: [
        'Semantic Matcher: FAISS vector similarity calculation scoring candidate fit against job requirements.',
        'AI Cover Letter Generator: automatically drafts targeted cover letters highlighting relevant project metrics.',
        'Playwright Form Filler: detects form fields, auto-populates candidate details, and uploads resume PDF.',
        'Application Tracking Dashboard: centralized status tracking across discovered, matched, queued, and submitted jobs.',
      ],
      architecture: [
        'Frontend: React, Vite, Tailwind CSS, Zustand state management.',
        'Backend API: Node.js, Express, Prisma ORM with SQLite for development and PostgreSQL for production.',
        'AI Core Microservice: Python, FastAPI, PyMuPDF, Sentence Transformers (all-MiniLM-L6-v2), FAISS, OpenAI API.',
        'Automation Service: Node.js, Playwright with headless/headed browser support.',
        'Containerization: Docker Compose orchestration linking all decoupled services.',
      ],
      challenges: [
        'Handling diverse, non-standardized application form DOM structures across various job application portals.',
        'Aligning high-dimensional text embeddings between verbose resume bullets and concise job requirement lists.',
      ],
      impact: [
        'Reduced manual application preparation time while boosting profile-to-job relevance via FAISS semantic scoring.',
        'Protected candidate reputation through mandatory pre-submission human confirmation.',
      ],
      recruiter: [
        'Showcases multi-language systems design: orchestrating Python (FastAPI, AI/ML) and Node.js microservices.',
        'Exhibits practical Machine Learning engineering: dense vector embeddings, vector databases (FAISS), and semantic search.',
        'Demonstrates complex browser automation expertise with Playwright and robust human-in-the-loop safeguards.',
      ],
      roadmap: [
        'Add automated interview scheduling detection via email inbox webhook sync.',
        'Support local open-source LLM inference via Ollama for zero-cost cover letter generation.',
      ],
      techStack: {
        'Frontend & State': ['React', 'Vite', 'Tailwind CSS', 'Zustand'],
        'Backend & ORM': ['Node.js', 'Express', 'Prisma ORM', 'SQLite / PostgreSQL'],
        'AI & Vector Search': ['Python', 'FastAPI', 'PyMuPDF', 'Sentence Transformers', 'FAISS', 'OpenAI API'],
        'Automation & Infra': ['Playwright', 'Docker Compose'],
      },
      resume: [
        'Architected multi-service job application automation system with React, Node.js, Python FastAPI, and Playwright.',
        'Implemented semantic profile-job matching using Sentence Transformers and FAISS vector similarity.',
        'Automated form filling with Playwright and integrated mandatory human verification controls before submission.',
      ],
      readme:
        'IJAAE is a 4-tier automation system that discovers jobs, computes semantic profile-to-job matching via Sentence-Transformers and FAISS, drafts cover letters, and automates form filling with human verification.',
      portfolio:
        'IJAAE demonstrates multi-service architecture, vector embeddings, semantic search, and browser automation with human guardrails.',
    }),
  },
  {
    title: 'TaskPulse',
    subtitle: 'Full-Stack Task Management System',
    description:
      'A full-stack task management application with secure authentication, task lifecycle management, advanced filtering and pagination, interactive productivity analytics, and query-optimized MongoDB access.',
    githubUrl: 'https://github.com/nikhhh12/taskmanager',
    liveUrl: '',
    image: '/images/projects/taskpulse.svg',
    icon: CheckCircle2,
    metric: 'Indexed MongoDB + Analytics',
    featured: false,
    features: [
      'Secure JWT-based user authentication with bcrypt password hashing and centralized authorization middleware',
      'Complete task CRUD with status workflows (Todo, In Progress, Done) and priority ratings (Low, Medium, High)',
      'Instant regex search, multi-attribute filtering, sorting by due date or priority, and server-side pagination',
      'Interactive productivity analytics dashboard displaying completion rates, pending counts, and priority distributions',
      'Query-optimized MongoDB compound indexes and in-memory MongoDB fallback for zero-config evaluation',
    ],
    tech: [
      'React 18',
      'Vite',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcryptjs',
      'Lucide React',
    ],
    metrics: [
      { value: 'Sub-ms', label: 'Compound indexed DB queries' },
      { value: 'Interactive', label: 'Productivity analytics dashboard' },
      { value: 'Full CRUD', label: 'Filter, sort & paginated search' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'TaskPulse provides an intuitive, high-performance task management environment that combines snappy client-side responsiveness with query-optimized MongoDB backend indexing and real-time productivity analytics.',
      problem: [
        'Software teams and busy individuals lose track of deadlines due to clunky, slow task managers with poor search and lack of progress insights.',
        'Naive task manager implementations suffer from full table scans and severe query degradation as user task collections grow.',
      ],
      limitations: [
        'Basic Todo apps lack persistent user authentication, server-side pagination, and priority analytics.',
        'Unindexed database architectures lead to slow filtering queries across status and due-date fields.',
      ],
      solution: [
        'Built a decoupled full-stack application using React (Vite) on the frontend and Node.js / Express on the backend.',
        'Designed query-optimized compound MongoDB indexes ({ user: 1, status: 1 }, { user: 1, priority: 1 }, { user: 1, dueDate: 1 }, { title: "text" }).',
        'Implemented JWT authentication with bcryptjs password hashing and route-level authorization middleware.',
        'Constructed an interactive productivity analytics dashboard computing completion percentages and sprint metrics.',
      ],
      innovations: [
        'Database query optimization: compound indexes eliminate in-memory sorting and full collection scans for sub-millisecond lookups.',
        'Automatic in-memory database fallback: integrates mongodb-memory-server to allow frictionless evaluation without local MongoDB setup.',
      ],
      features: [
        'Task Lifecycle CRUD: create, update, delete, and transition tasks between Todo, In Progress, and Done.',
        'Filter & Search: instant case-insensitive search, status/priority filtering, and due date sorting.',
        'Analytics Dashboard: animated sprint completion bars, total counts, and task priority distribution.',
        'Dark/Light Mode: persistent theme switcher with custom CSS tokens and glassmorphism styling.',
      ],
      architecture: [
        'Frontend: React 18, Vite, Lucide Icons, Custom CSS design tokens with HSL color variables.',
        'Backend API: Node.js, Express.js REST API structured with Controller-Middleware-Route architecture.',
        'Auth & Security: jsonwebtoken, bcryptjs, input sanitization, and centralized error handling middleware.',
        'Database: MongoDB and Mongoose ODM with compound indexing and mongodb-memory-server fallback.',
      ],
      challenges: [
        'Designing compound index strategies that efficiently cover simultaneous filtering on status, priority, and due dates.',
        'Maintaining responsive UI state synchronization during rapid task status toggling.',
      ],
      impact: [
        'Achieved sub-millisecond query execution times across indexed task filtering queries.',
        'Delivered a zero-friction evaluation experience with automated in-memory MongoDB fallback.',
      ],
      recruiter: [
        'Demonstrates rock-solid software engineering fundamentals: REST API design, database schema indexing, and JWT authentication.',
        'Highlights clean architecture: separated controllers, middleware, models, and responsive client-side state.',
        'Proves attention to performance optimization and query planning in NoSQL databases.',
      ],
      roadmap: [
        'Add recurring task schedules with automated cron triggers.',
        'Implement team workspaces and collaborative task assignment.',
      ],
      techStack: {
        'Frontend': ['React 18', 'Vite', 'Lucide React', 'Custom CSS Tokens'],
        'Backend API': ['Node.js', 'Express.js', 'REST API Design', 'Centralized Error Handling'],
        'Auth & Security': ['JWT', 'bcryptjs', 'Route Guards'],
        'Database': ['MongoDB', 'Mongoose ORM', 'Compound Indexes', 'mongodb-memory-server'],
      },
      resume: [
        'Engineered full-stack task management application using React, Vite, Node.js, Express, and MongoDB.',
        'Implemented JWT authentication, bcrypt password hashing, and compound indexes for sub-millisecond query performance.',
        'Built productivity analytics dashboard with completion rate tracking, multi-attribute filtering, and pagination.',
      ],
      readme:
        'TaskPulse is a full-stack task management system featuring JWT authentication, task CRUD, advanced filtering, productivity analytics, and query-optimized MongoDB indexes.',
      portfolio:
        'TaskPulse showcases full-stack web engineering, database indexing, authentication patterns, and responsive UI design.',
    }),
  },
  {
    title: 'Ultimate Graph Visualizer',
    subtitle: 'Interactive Algorithm Explorer',
    description:
      'An interactive algorithm visualization tool that brings graph traversal, pathfinding, and maze generation to life through dynamic visual exploration.',
    githubUrl: 'https://github.com/nikhhh12/ultimate-graph-visualizer',
    liveUrl: 'https://ultimate-visualizer.netlify.app/',
    image: '/images/projects/graph-visualizer.svg',
    icon: Network,
    metric: 'Interactive Pathfinding & Mazes',
    featured: false,
    features: [
      'Interactive grid and graph manipulation with dynamic node and edge interactions',
      'Start and target node customization with drag-and-drop repositioning',
      'Real-time visual execution of A*, Dijkstra, Breadth-First Search (BFS), Depth-First Search (DFS), and Bidirectional Search',
      'Procedural maze generation algorithms including Prim\'s Algorithm and Recursive Backtracker',
      'Pure vanilla JavaScript, HTML5 Canvas, CSS3, and SVG architecture for lightweight, zero-dependency performance',
    ],
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'SVG',
      'Algorithms',
      'Data Structures',
    ],
    metrics: [
      { value: '5 Algorithms', label: 'A*, Dijkstra, BFS, DFS, Bidirectional' },
      { value: '2 Maze Gens', label: "Prim's + Recursive Backtracker" },
      { value: 'Live on Netlify', label: 'Interactive browser deployment' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'Ultimate Graph Visualizer transforms abstract graph traversal and pathfinding algorithms into an intuitive, interactive visual experience, helping engineers and students build deep mental models of algorithm behavior.',
      problem: [
        'Graph theory and shortest-path algorithms are notoriously difficult to conceptualize through static code or text descriptions alone.',
        'Most algorithm demonstrations are non-interactive video recordings that do not allow users to place custom obstacles or compare heuristics.',
      ],
      limitations: [
        'Theoretical complexity formulas do not illustrate the search frontier or why A* outperforms Dijkstra when given Euclidean heuristics.',
        'Heavy framework-based visualizers often suffer from frame drops during rapid canvas repaints.',
      ],
      solution: [
        'Created a responsive, zero-dependency browser visualizer using vanilla JavaScript, HTML5, and CSS3.',
        'Implemented 5 core pathfinding algorithms: Breadth-First Search (BFS), Depth-First Search (DFS), Dijkstra\'s Algorithm, A* Search, and Bidirectional Search.',
        'Added procedural maze generators: Prim\'s Algorithm and Recursive Backtracker to generate challenging obstacle topologies.',
        'Built intuitive drag-and-drop start/target node positioning and real-time wall painting.',
      ],
      innovations: [
        'Dual visualization mode: seamless toggle between 2D pathfinding grid mode and dynamic network graph mode.',
        'High-performance tick-based animation loop that maintains smooth 60fps rendering even during large grid traversals.',
      ],
      features: [
        'Algorithm Comparison: observe distinct exploration patterns between uninformed search (BFS/Dijkstra) and heuristic-guided search (A*).',
        'Maze Generators: instantly create labyrinth patterns using Prim\'s algorithm or Recursive Backtracker.',
        'Customizable Topologies: draw walls, create bottlenecks, and dynamically move start/end nodes.',
        'Metrics Overlay: displays nodes evaluated, shortest path step count, and execution time.',
      ],
      architecture: [
        'Core Engine: Vanilla JavaScript (ES6+) with modular algorithm modules (astar.js, dijkstra.js, bfs.js, dfs.js, bidirectional.js).',
        'Rendering Layer: DOM Grid & HTML5 Canvas / SVG rendering for dynamic edges and nodes.',
        'Styling & Layout: Custom CSS3 animations and responsive controls.',
        'Deployment: Deployed and live on Netlify.',
      ],
      challenges: [
        'Managing asynchronous animation delays without blocking user inputs or UI interactions.',
        'Implementing bidirectional search synchronization so that forward and backward search frontiers meet reliably at the optimal vertex.',
      ],
      impact: [
        'Provides an intuitive learning sandbox used by learners to explore pathfinding and maze algorithms.',
        'Demonstrates mastery of core Computer Science fundamentals and Data Structures & Algorithms.',
      ],
      recruiter: [
        'Validates deep proficiency in Data Structures and Algorithms: graphs, priority queues, heuristics, and procedural generation.',
        'Demonstrates ability to write clean, performant vanilla JavaScript without relying on heavy frameworks.',
        'Shows strong front-end animation engineering and DOM manipulation skills.',
      ],
      roadmap: [
        'Add weighted terrain cells (mud, water) with dynamic edge cost modifiers.',
        'Introduce Bellman-Ford algorithm visualization with negative cycle detection.',
      ],
      techStack: {
        'Core Technologies': ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'SVG Assets'],
        'Pathfinding Algorithms': ['A* Search', 'Dijkstra', 'BFS', 'DFS', 'Bidirectional Search'],
        'Procedural Generation': ['Prims Algorithm', 'Recursive Backtracker'],
        'Deployment': ['Netlify'],
      },
      resume: [
        'Built interactive browser-based algorithm visualizer supporting A*, Dijkstra, BFS, DFS, and Bidirectional search.',
        'Implemented procedural maze generation using Prim\'s algorithm and Recursive Backtracker.',
        'Engineered high-performance 60fps animation loop using vanilla JavaScript, HTML5, and CSS3; deployed on Netlify.',
      ],
      readme:
        'Ultimate Graph Visualizer is an interactive web-based algorithm tool designed to visualize graph structures, pathfinding algorithms, and procedural maze generation.',
      portfolio:
        'Ultimate Graph Visualizer showcases algorithm engineering, data structures, vanilla JavaScript performance, and interactive visualization design.',
    }),
  },
];

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'DineGo Technologies, Hyderabad',
    period: 'May 2025 – July 2025',
    type: 'Internship',
    description:
      'Contributed to backend development for DineBees, a social-dining and hangout platform, by building and improving REST API functionality.',
    responsibilities: [
      'Developed 15+ REST API endpoints using Node.js, JavaScript, and SQL.',
      'Contributed to the Hangout API, implementing creation, discovery, and joining workflows.',
      'Implemented request validation, data handling, and participant-management functionality.',
      'Optimized database access by eliminating duplicate data lookups and tightening SQL query paths.',
      'Supported API reliability through regression testing of hangout creation, discovery, and joining workflows.',
    ],
    skills: ['Node.js', 'JavaScript', 'SQL', 'REST API Design', 'Regression Testing', 'Query Optimization'],
    icon: BriefcaseBusiness,
  },
];

export const leadership = [
  {
    role: 'Vice President',
    organization: 'Codeoholics Community, CMR Technical Campus',
    period: 'March 2025 – July 2026',
    description:
      'Led a coding community of 50+ members and helped strengthen technical learning through workshops and collaborative activities.',
    highlights: [
      'Coordinated coding-community initiatives and peer problem-solving sessions.',
      'Conducted workshops on Java, API development, and software engineering fundamentals.',
      'Supported collaborative learning and technical engagement across 50+ active members.',
    ],
    skills: ['Technical Leadership', 'Java Workshops', 'API Mentorship', 'Community Building'],
    icon: Users2,
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'CMR Technical Campus, Hyderabad, Telangana, India',
    period: 'November 2022 – July 2026',
    score: 'CGPA: 8.19 / 10.0',
    description:
      'Comprehensive study of computer science foundations, systems architecture, algorithmic problem solving, and software engineering methodologies.',
    highlights: [
      'Data Structures & Algorithms: 500+ problems solved across arrays, trees, dynamic programming, and graphs.',
      'Database Management Systems: Relational modeling, normalization, indexing, and SQL optimization.',
      'Operating Systems & Networks: Concurrency, threads, memory management, TCP/IP, and REST protocols.',
      'Software Engineering: Object-oriented programming (OOP), design patterns, and agile methodologies.',
    ],
    icon: GraduationCap,
  },
];

export const journey = [
  {
    title: 'DineGo Technologies — Software Developer Intern (May 2025 – July 2025)',
    detail:
      'Developed 15+ REST API endpoints for DineBees in Node.js/JavaScript & SQL. Built Hangout API workflows (creation, discovery, joining), implemented request validation, optimized SQL queries by eliminating redundant lookups, and stabilized functionality via regression testing.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Codeoholics Community — Vice President (March 2025 – July 2026)',
    detail:
      'Led a community of 50+ active developers at CMR Technical Campus. Organized coding sessions and conducted technical workshops on Java, REST API design, and software engineering fundamentals.',
    icon: Users2,
  },
  {
    title: 'Backend & Systems Engineering Foundations',
    detail:
      'Engineered enterprise systems with Java 17 and Spring Boot 3, implementing JWT authentication, RBAC, Redis cache-aside caching (cutting p95 lookup latency by 64%), and Flyway database migrations.',
    icon: ServerCog,
  },
  {
    title: 'Full-Stack & Developer Tooling Delivery',
    detail:
      'Built modern full-stack web products connecting React and Next.js frontends with robust backends; integrated advanced tooling such as Monaco Editor, in-browser WebContainers, and asynchronous background jobs.',
    icon: Layers3,
  },
  {
    title: 'Applied Generative AI & Vector Search',
    detail:
      'Constructed practical AI integrations using Spring AI, RAG pipelines, Chroma vector database, and Google Gemini API, enforcing strict role-scoped tools and deterministic structured outputs.',
    icon: BrainCircuit,
  },
  {
    title: 'Algorithmic Problem Solving (500+ DSA)',
    detail:
      'Solved 500+ Data Structures and Algorithms problems across LeetCode and competitive programming platforms, mastering arrays, graphs, dynamic programming, and system design patterns.',
    icon: GraduationCap,
  },
];

export const resumeHighlights = [
  { label: 'Software Engineer', icon: Code2 },
  { label: 'Spring Boot 3 & Java 17', icon: ServerCog },
  { label: 'Full-Stack (React / Next.js)', icon: Layers3 },
  { label: 'Redis Caching & SQL Optimization', icon: Database },
  { label: 'Spring AI & RAG Vector Pipelines', icon: BrainCircuit },
  { label: '500+ DSA Problems Solved', icon: TerminalSquare },
];
