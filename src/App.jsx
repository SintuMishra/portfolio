import { TypeAnimation } from "react-type-animation";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Terminal,
  Briefcase,
  Award,
  GraduationCap,
  MapPinned,
  ChevronRight,
  Sparkles,
  X,
  Menu,
  Download,
  ExternalLink,
  Send,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const skillsData = [
  {
    title: "Frontend",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 84 },
      { name: "HTML/CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 82 },
      { name: "Node.js", level: 75 },
      { name: "SQL", level: 86 },
    ],
  },
  {
    title: "Problem Solving",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      { name: "DSA", level: 88 },
      { name: "OOPs", level: 87 },
      { name: "Git & GitHub", level: 85 },
      { name: "REST APIs", level: 84 },
    ],
  },
  {
    title: "Data & ML",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "Machine Learning", level: 78 },
      { name: "Data Analysis", level: 80 },
      { name: "Python Basics", level: 68 },
      { name: "Visualization", level: 72 },
    ],
  },
];

const projects = [
  {
    title: "Campus Issue Tracker",
    category: "Full Stack",
    description:
      "Full-stack issue tracking system with JWT authentication and role-based access.",
    tech: ["React", "Spring Boot", "MySQL", "JWT"],
    live: "https://issue-tracker-frontend-two.vercel.app/",
    github: "https://github.com/SintuMishra",
    featured: true,
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "A modern personal portfolio website showcasing projects, skills, and achievements with smooth animations and responsive design.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://portfolio-flame-six-93wdoxmah1.vercel.app/",
    github: "https://github.com/SintuMishra",
    featured: true,
  },
  {
    title: "Weather App",
    category: "Frontend",
    description: "Weather app using API for real-time data.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    live: "",
    github: "https://github.com/SintuMishra/weather-app",
  },
  {
    title: "Todo App",
    category: "Frontend",
    description: "Task manager with CRUD operations.",
    tech: ["React", "JavaScript"],
    live: "",
    github: "https://github.com/SintuMishra/todo-app",
  },
  {
    title: "JavaFX Calculator",
    category: "Backend",
    description: "Scientific calculator using JavaFX.",
    tech: ["Java", "JavaFX"],
    live: "",
    github: "https://github.com/SintuMishra/JavaFX-Scientific-Calculator",
  },
  {
    title: "Bus Route Optimizer (In Progress)",
    category: "Full Stack",
    description: "Traffic-based smart routing system.",
    tech: ["React", "Spring Boot", "Maps API"],
    live: "",
    github: "#",
  },
];

const achievements = [
  {
    title: "Deloitte Data Analytics Program",
    subtitle: "Certification / Virtual Experience",
    icon: <Award className="h-5 w-5" />,
    description:
      "Completed data analytics learning experience focused on business insights, dashboards, and analytical thinking.",
  },
  {
    title: "BTech in Computer Science & Data Science",
    subtitle: "Final Year Student",
    icon: <GraduationCap className="h-5 w-5" />,
    description:
      "Focused on software development, data-driven problem solving, and placement-oriented technical preparation.",
  },
  {
    title: "MERN + Java Full Stack Projects",
    subtitle: "Hands-on Development",
    icon: <Briefcase className="h-5 w-5" />,
    description:
      "Building practical projects using React.js, Spring Boot, REST APIs, SQL, and modern UI systems.",
  },
];

const socialLinks = {
  github: "https://github.com/SintuMishra",
  linkedin: "https://www.linkedin.com/in/sintu-mishra-3o11/",
  email: "mailto:sintumishra22201@gmail.com",
  resume: "/resume.pdf",
};

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function SectionHeading({ badge, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <Sparkles className="h-3.5 w-3.5" />
        {badge}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const filters = useMemo(() => ["All", "Full Stack", "Frontend", "Data", "ML"], []);
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/10" />
        <div className="absolute left-0 top-1/3 h-[20rem] w-[20rem] rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/10" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-left text-lg font-bold tracking-wide text-slate-900 dark:text-white"
          >
            Sintu<span className="text-cyan-500">.dev</span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-600 transition hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm md:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white/90 px-6 py-4 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-slate-950/90">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial="hidden" animate="show" variants={sectionFade}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Available for internships & placements
              </div>

              <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                Hi, I'm Sintu Mishra 👋
              </h1>

              <div className="mt-3">
                <TypeAnimation
                  sequence={[
                    "Java Developer 💻",
                    1500,
                    "Full Stack Developer 🌐",
                    1500,
                    "DSA Problem Solver 🧠",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl text-cyan-500 font-semibold"
                />
              </div>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I’m <span className="font-semibold text-slate-900 dark:text-white">Sintu Mishra</span>, a software developer and data science student focused on Java, MERN Stack, DSA, Spring Boot, and machine learning. I create clean, scalable, recruiter-friendly projects with strong UI and practical impact.
              </p>
              <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-300">
                🚀 Solved 200+ DSA problems | Built 3+ Full Stack Projects
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={socialLinks.resume}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  View Projects
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 bg-white p-3 text-slate-700 transition hover:-translate-y-1 hover:text-cyan-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 bg-white p-3 text-slate-700 transition hover:-translate-y-1 hover:text-cyan-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.email}
                  className="rounded-2xl border border-slate-300 bg-white p-3 text-slate-700 transition hover:-translate-y-1 hover:text-cyan-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  <MdEmail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-cyan-950/20">
                <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Role</p>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Software Developer / Data Science Student
                      </h3>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                      Building Projects
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Core Stack</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">Java · React · Spring Boot</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Focus</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">Placements · Internships · Problem Solving</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Strength</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">Full Stack + DSA + SQL</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Goal</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">Create impactful, scalable software</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeading
              badge="About Me"
              title="A developer mindset with a data-driven edge"
              description="I combine software engineering, UI thinking, and problem solving to build practical digital experiences that are polished, efficient, and useful."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Who I am</h3>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  I am a final year BTech student in <span className="font-semibold text-slate-900 dark:text-white">Computer Science and Data Science</span>, preparing for software development and data-oriented roles. I enjoy building projects that solve real problems and present them with premium, intuitive user experiences.
                </p>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  My interests span full-stack development, backend systems, scalable APIs, DSA, and applied machine learning. I am especially motivated by opportunities where engineering quality and user-centric design come together.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                    <p className="font-medium text-slate-900 dark:text-white">BTech — Computer Science & Data Science</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Final Year Student</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                    <p className="font-medium text-slate-900 dark:text-white">Career Goal</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Secure strong software development or data-related opportunities</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                    <p className="font-medium text-slate-900 dark:text-white">Approach</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Projects, DSA, system thinking, and continuous skill building</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeading
              badge="Skills"
              title="Technical strengths across development and data"
              description="A balanced portfolio of frontend, backend, algorithms, tools, and machine learning fundamentals."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {skillsData.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">{group.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeading
              badge="Projects"
              title="Selected work that blends engineering and design"
              description="These projects highlight practical problem-solving, clean development practices, and premium presentation."
            />

            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "border border-slate-300 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-white/5"
                >
                  {/* IMAGE */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={`/${
                      project.title.includes("Bus")
                        ? "bus.png"
                        : project.title.includes("JavaFX")
                        ? "javafx.png"
                        : project.title.includes("Portfolio")
                        ? "portfolio.png"
                        : project.title.includes("Issue")
                        ? "issue.png"
                        : project.title.includes("Weather")
                        ? "weather.png"
                        : project.title.includes("Todo")
                        ? "todo.png"
                        : "default.png"
                    }`}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    {/* 🔥 GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 relative z-10">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-semibold text-cyan-500">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="text-xs text-amber-400">★ Featured</span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>

                    {/* TECH */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-100 px-2 py-1 text-xs dark:bg-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-5 flex gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-cyan-400 hover:underline"
                        >
                          Live →
                        </a>
                      )}

                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-white hover:underline"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>

                  {/* 🔥 GLOW EFFECT */}
                  <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-cyan-500/40 transition duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeading
              badge="Experience & Achievements"
              title="Learning milestones and career-building highlights"
              description="A growing track record of technical learning, project execution, and role-focused preparation."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-300">{item.subtitle}</p>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="resume" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
          >
            <SectionHeading
              badge="Resume"
              title="Make it easy for recruiters to know you fast"
              description="Keep your latest resume in the public folder as resume.pdf so recruiters can open or download it directly."
            />

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
              >
                <Download className="h-4 w-4" />
                View Resume
              </a>
              <a
                href={socialLinks.resume}
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <ExternalLink className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeading
              badge="Contact"
              title="Let’s build something meaningful"
              description="This contact form is styled and ready. Connect it to EmailJS, Formspree, a Node backend, or Spring Boot API to make it functional."
            />

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Contact Details</h3>
                <div className="mt-6 space-y-4">
                  <a
                    href={socialLinks.email}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10"
                  >
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-500">
                      <MdEmail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                      <p className="font-medium text-slate-900 dark:text-white">sintumishra22201@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10"
                  >
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-500">
                      <FaGithub className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                      <p className="font-medium text-slate-900 dark:text-white">github.com/SintuMishra</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10"
                  >
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-500">
                      <FaLinkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                      <p className="font-medium text-slate-900 dark:text-white"> sintu-mishra-3o11</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-500">
                      <MapPinned className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Open To</p>
                      <p className="font-medium text-slate-900 dark:text-white">Placements, internships, collaborations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                    <textarea
                      rows="6"
                      placeholder="Tell me about your opportunity, idea, or collaboration..."
                      className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 px-6 py-8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Sintu Mishra. Crafted with React, Tailwind CSS, and Framer Motion.
          </p>
          <div className="flex items-center gap-4">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-slate-500 transition hover:text-cyan-500 dark:text-slate-400">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 transition hover:text-cyan-500 dark:text-slate-400">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href={socialLinks.email} className="text-slate-500 transition hover:text-cyan-500 dark:text-slate-400">
              <MdEmail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
