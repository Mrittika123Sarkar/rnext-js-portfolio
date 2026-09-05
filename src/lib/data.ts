export const profile = {
  name: "Mrittika Sarkar",
  role: "React Native Developer",
  tagline: "4+ Years Experience",
  location: "Kolkata, India",
  email: "mrittikasarkar123@gmail.com",
  phone: "+91 7864807035",
  linkedin: "https://linkedin.com/in/mrittika-sarkar-0ab393259",
  github: "https://github.com/",
  summary:
    "React Native Developer with 4+ years of professional application development experience, specializing in cross-platform mobile applications for iOS and Android. Strong experience in React Native, JavaScript, ReactJS, REST APIs, JSON, Git/GitLab/GitHub, debugging, performance optimization, and Agile delivery. Experienced in translating UI/UX designs into responsive mobile components, integrating backend services, resolving production issues, and collaborating with design, product, and engineering teams.",
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Mobile Development",
    items: ["React Native", "iOS", "Android", "Android Studio", "Xcode"],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "ReactJS", "HTML", "CSS"],
  },
  {
    category: "APIs & Integration",
    items: ["RESTful APIs", "JSON", "Backend Integration"],
  },
  {
    category: "Tools & Version Control",
    items: ["Git", "GitLab", "GitHub", "Bitbucket", "SourceTree"],
  },
  {
    category: "Engineering",
    items: ["Debugging", "Troubleshooting", "Testing", "Performance Optimization", "Agile"],
  },
];

export type Experience = {
  company: string;
  role: string;
  duration: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Pronti",
    role: "Application Developer",
    period: "Sep 2025 – Sep 2026",
    duration: "1 year",
    bullets: [
      "Developed and maintained React Native mobile applications for iOS and Android.",
      "Integrated REST APIs and backend services to support application functionality.",
      "Worked with Git/GitHub and followed Agile development practices.",
      "Debugged application issues and optimized performance for stable releases.",
      "Collaborated with developers, designers, and product teams to deliver project requirements.",
    ],
  },
  {
    company: "Grey Matter Technology",
    role: "Application Developer",
    period: "Sep 2023 – Sep 2025",
    duration: "2 years",
    bullets: [
      "Developed and optimized cross-platform mobile application features using React Native for iOS and Android.",
      "Integrated APIs and backend services to deliver reliable application functionality and smooth user experiences.",
      "Debugged application issues, resolved technical defects, and optimized performance and stability.",
      "Collaborated with developers and designers to deliver scalable mobile solutions aligned with project requirements.",
      "Contributed to projects including Bhooter Raja Dilo Bor and Hatari.",
    ],
  },
  {
    company: "Webskitters Technologies Private Ltd.",
    role: "Application Developer",
    period: "Sep 2022 – Sep 2023",
    duration: "1 year",
    bullets: [
      "Developed, tested, and maintained React Native mobile applications for iOS and Android.",
      "Worked with APIs and JSON to support application integration and functionality.",
      "Used GitLab for source-code and project-task management.",
      "Collaborated with backend developers, designers, and the wider team to deliver quality solutions.",
      "Troubleshot application issues and resolved bugs and errors.",
      "Completed a 4-month ReactJS training program at Webskitters Technology Solutions.",
    ],
  },
];

export type Project = {
  name: string;
  company: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Bhooter Raja Dilo Bor",
    company: "Grey Matter Technology",
    description:
      "Cross-platform mobile application feature development, focused on smooth user experience and stable performance across iOS and Android.",
    tags: ["React Native", "iOS", "Android", "REST APIs"],
  },
  {
    name: "Hatari",
    company: "Grey Matter Technology",
    description:
      "Contributed to feature development and backend/API integration for a cross-platform mobile app, with a focus on debugging and performance optimization.",
    tags: ["React Native", "iOS", "Android", "Backend Integration"],
  },
  {
    name: "Mobile App Suite",
    company: "Webskitters Technologies",
    description:
      "Built and maintained React Native applications for iOS and Android, integrating APIs and JSON-driven data, using GitLab for source and task management.",
    tags: ["React Native", "JSON", "GitLab"],
  },
  {
    name: "Pronti User",
    company: "Pronti",
    description:
      "Customer-facing React Native app for iOS and Android, published on the App Store and Google Play. Integrated REST APIs and backend services, following Agile practices for stable, on-time releases.",
    tags: ["React Native", "iOS", "Android", "REST APIs", "Agile", "Git/GitHub"],
  },
  {
    name: "Pronti Driver",
    company: "Pronti",
    description:
      "Driver-facing companion React Native app for iOS and Android, published on the App Store and Google Play, built to work alongside the Pronti User app with REST API integration and Agile delivery.",
    tags: ["React Native", "iOS", "Android", "REST APIs", "Agile", "Git/GitHub"],
  },
];

export const education = [
  {
    school: "Camellia Institute of Technology & Management",
    degree: "B.Tech in Computer Science & Engineering",
    period: "Aug 2023 – Jul 2026",
  },
  {
    school: "ABS Academy of Science, Technology & Management",
    degree: "Diploma in Computer Science, 8.2 SGPA",
    period: "Aug 2019 – Jul 2022",
  },
];

export const certifications = [
  "Completed 4-month ReactJS training at Webskitters Technology Solutions Private Ltd.",
];

export const languages = ["Bangla (Native)", "English", "Hindi (Professional)"];
export const interests = ["Travelling", "Music", "Gardening"];

export const allProjectTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
