/**
 * Portfolio content & config — single source of truth
 */

export const site = {
  name: "Sumaiya Talukder",
  role: "Fullstack MERN Developer",
  tagline: "Building robust, scalable solutions from front to back.",
  location: "Bangladesh",
  languages: ["Bangla", "English"],
  status: "Open to Hire",
  resumeUrl: "#", // Replace with actual resume URL or /resume.pdf
  email: "sumaiya@example.com", // Replace with real email
  linkedin: "https://linkedin.com/in/sumaiya-talukder",
  github: "https://github.com/sumaiya-talukder",
  phone: "01533992209",
  avatar: "https://i.ibb.co.com/zxHkQn2/Sumaiyaa.jpg"
} as const;

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#hire", label: "Hire Me" },
  { href: "#contact", label: "Contact" },
] as const;

export const skills = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Redux RTK Query",
  ],
  backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "Prisma",
    "TypeORM",
  ],
  auth: ["JWT", "Passport.js"],
  tools: ["Git", "REST APIs", "Figma"],
} as const;

export const experience = [
  {
    company: "Current Role",
    role: "Fullstack Developer Intern",
    period: "Present",
    bullets: [
      "Building full-stack features with MERN stack.",
      "Collaborating on API design and database modeling.",
      "Implementing auth and state management in production apps.",
    ],
  },
  {
    company: "Previous Role",
    role: "Junior Software Engineer (Frontend)",
    period: "1 year",
    bullets: [
      "Developed and maintained React/Next.js frontends.",
      "Improved UI/UX and performance of customer-facing apps.",
      "Worked with design systems and responsive layouts.",
    ],
  },
] as const;

export const projects = [
  {
    id: "blood-bank",
    title: "Blood Bank Platform",
    summary:
      "A full-stack platform connecting blood donors with recipients. Manages donor registration, search, requests, and notifications.",
    features: [
      "Donor/recipient registration and profiles",
      "Search and filter by blood group and location",
      "Request management and notifications",
      "Admin dashboard for moderation",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "JWT"],
    architecture: "REST API, JWT auth, MongoDB with Mongoose, responsive SPA.",
    image: "", // Add /projects/blood-bank.png when you have a screenshot
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "basa-lagbe",
    title: "Basa Lagbe — Property Rental Platform",
    summary:
      "Property rental marketplace for listing, searching, and managing rentals with user roles and booking flows.",
    features: [
      "Property listing and search with filters",
      "Landlord and tenant roles",
      "Booking and inquiry system",
      "Dashboard for managing listings and bookings",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    architecture: "Next.js full-stack, Prisma ORM, PostgreSQL, role-based access.",
    image: "", // Add /projects/basa-lagbe.png when you have a screenshot
    liveUrl: "#",
    githubUrl: "#",
  },
] as const;

export const openToHire = {
  availability: "Available for full-time and contract roles.",
  roles: [
    "Fullstack Developer (MERN)",
    "Frontend Engineer (React/Next.js)",
    "Backend Developer (Node.js)",
    "Software Engineer",
  ],
  cta: "Let's build something great together.",
} as const;
