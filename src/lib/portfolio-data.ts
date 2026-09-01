/**
 * Single source of truth for portfolio content.
 * Edit these arrays/objects to update the site — no component changes needed.
 */

export const profile = {
  name: "Sonika Khatri",
  initials: "SK",
  title: "AI/ML Engineer & Full-Stack Developer",
  badge: "AI/ML Engineer • Full-Stack Developer",
  tagline: "Turning data and ideas into intelligent digital experiences.",
  intro:
    "I build intelligent solutions using machine learning and modern web technologies, combining data-driven thinking with clean and user-focused development.",
  email: "sonikakc985@gmail.com",
  github: "https://github.com/sonika45",
  githubUser: "sonika45",
  linkedin: "https://www.linkedin.com/in/sonika-kc-3b066926a/",
  /** Replace with your real CV file placed in /public. */
  cvUrl: "/Sonika-Khatri-CV.pdf",
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
] as const;

export const aboutParagraphs = [
  "Hey, I’m Sonika Khatri, a BSc.CSIT student currently pursuing my bachelor’s degree at Bhairahawa Multiple Campus. I’m currently in my 8th semester and passionate about Artificial Intelligence, Machine Learning, Full-Stack Development, and UI/UX Design.",
  "I enjoy learning how intelligent systems work and turning ideas into practical digital products. My goal is to grow as an AI/ML Engineer while also developing strong full-stack development skills.",
];

export const aboutCards = [
  { label: "BSc.CSIT", note: "Bhairahawa Multiple Campus", icon: "GraduationCap" },
  { label: "8th Semester", note: "Currently studying", icon: "CalendarClock" },
  { label: "AI/ML", note: "Primary focus", icon: "BrainCircuit" },
  { label: "Full-Stack Development", note: "Web applications", icon: "Layers" },
  { label: "UI/UX", note: "Design thinking", icon: "PenTool" },
] as const;

export const careerFocus = [
  {
    title: "AI/ML Engineer",
    icon: "BrainCircuit",
    primary: true,
    description:
      "My primary goal — designing, training and shipping machine learning models that solve real problems.",
  },
  {
    title: "Data Scientist",
    icon: "LineChart",
    primary: false,
    description:
      "Exploring data, finding patterns and turning raw datasets into decisions worth acting on.",
  },
  {
    title: "Full-Stack Developer",
    icon: "Code2",
    primary: false,
    description:
      "Building complete web applications end to end, from API and data layer to polished interface.",
  },
  {
    title: "UI/UX Designer",
    icon: "PenTool",
    primary: false,
    description:
      "Designing clear, accessible and user-focused interfaces before a single line of code is written.",
  },
] as const;

export type SkillLevel = "Learning" | "Comfortable" | "Strong";

export const skillGroups: {
  category: string;
  icon: string;
  skills: { name: string; level: SkillLevel }[];
}[] = [
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Strong" },
      { name: "JavaScript", level: "Comfortable" },
    ],
  },
  {
    category: "Frontend",
    icon: "MonitorSmartphone",
    skills: [
      { name: "HTML", level: "Strong" },
      { name: "CSS", level: "Strong" },
      { name: "React", level: "Comfortable" },
      { name: "Tailwind CSS", level: "Comfortable" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Comfortable" },
      { name: "Express.js", level: "Comfortable" },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Comfortable" },
      { name: "Firebase", level: "Learning" },
    ],
  },
  {
    category: "AI / Machine Learning",
    icon: "BrainCircuit",
    skills: [
      { name: "Pandas", level: "Comfortable" },
      { name: "NumPy", level: "Comfortable" },
      { name: "Scikit-learn", level: "Learning" },
      { name: "Machine Learning", level: "Learning" },
    ],
  },
  {
    category: "Design",
    icon: "PenTool",
    skills: [
      { name: "Figma", level: "Comfortable" },
      { name: "Canva", level: "Strong" },
    ],
  },
  {
    category: "Tools",
    icon: "GitBranch",
    skills: [
      { name: "Git", level: "Comfortable" },
      { name: "GitHub", level: "Comfortable" },
    ],
  },
];

export const skillLevelWidth: Record<SkillLevel, string> = {
  Learning: "38%",
  Comfortable: "68%",
  Strong: "92%",
};

export type ProjectCategory = "AI/ML" | "Full-Stack" | "UI/UX";

export type Project = {
  /** Placeholder — replace with your real project title. */
  name: string;
  description: string;
  categories: ProjectCategory[];
  tech: string[];
  github?: string;
  demo?: string;
  details?: string;
  /** Optional image path, e.g. "/projects/my-project.png" */
  image?: string;
  placeholder?: boolean;
};

/**
 * PLACEHOLDERS ONLY — replace each entry with a real project.
 * Set `placeholder: false` and fill in name, description, links and tech.
 */
export const projects: Project[] = [
  {
    name: "Project slot — AI/ML",
    description:
      "Placeholder card. Add a machine learning project here: the problem, the dataset approach and the model you used.",
    categories: ["AI/ML"],
    tech: ["Python", "Pandas", "Scikit-learn"],
    placeholder: true,
  },
  {
    name: "Project slot — Full-Stack",
    description:
      "Placeholder card. Add a full-stack web application here: the stack, the core features and your role.",
    categories: ["Full-Stack"],
    tech: ["React", "Node.js", "MongoDB"],
    placeholder: true,
  },
  {
    name: "Project slot — UI/UX",
    description:
      "Placeholder card. Add a design case study here: the research, the wireframes and the final interface.",
    categories: ["UI/UX"],
    tech: ["Figma", "Canva"],
    placeholder: true,
  },
  {
    name: "Project slot — Data + Web",
    description:
      "Placeholder card. Add a project that combines data work with a web interface, such as a prediction dashboard.",
    categories: ["AI/ML", "Full-Stack"],
    tech: ["Python", "React", "Tailwind CSS"],
    placeholder: true,
  },
];

export const projectFilters = ["All", "AI/ML", "Full-Stack", "UI/UX"] as const;

export const education = [
  {
    degree: "BSc.CSIT",
    institution: "Bhairahawa Multiple Campus",
    status: "Currently in 8th Semester",
    description:
      "Bachelor of Science in Computer Science and Information Technology, with coursework spanning programming, data structures, databases, and artificial intelligence.",
  },
];

/**
 * Experience & activities — EMPTY ON PURPOSE.
 * The section stays hidden until at least one entry exists.
 * Shape: { type, title, organisation, period, description }
 */
export const experiences: {
  type: string;
  title: string;
  organisation?: string;
  period?: string;
  description?: string;
}[] = [];

/**
 * GitHub repositories — optional manual list.
 * Leave empty to show the "visit GitHub" call-to-action instead.
 * Shape: { name, language, description, url }
 */
export const repositories: {
  name: string;
  language?: string;
  description?: string;
  url: string;
}[] = [];
