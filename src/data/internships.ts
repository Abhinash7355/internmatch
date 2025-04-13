
import { Internship, Testimonial } from "../types";

export const internships: Internship[] = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechX Solutions",
    location: "Remote",
    domain: "Web Development",
    duration: "3 months",
    eligibility: "B.Tech (CS/IT) 2nd year onwards",
    stipend: "₹15,000/month",
    description: "Join our team to build responsive web applications using React, TypeScript, and modern CSS frameworks. You'll work closely with senior developers to create user-friendly interfaces.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: true,
    logo: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Machine Learning Engineer Intern",
    company: "AI Innovations",
    location: "Bangalore (Hybrid)",
    domain: "AI/ML",
    duration: "6 months",
    eligibility: "B.Tech (CS/IT/ECE) 3rd year onwards",
    stipend: "₹20,000/month",
    description: "Work on cutting-edge machine learning models for computer vision applications. Experience with Python and deep learning frameworks is preferred.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: true,
    logo: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Mobile App Developer",
    company: "AppWave Technologies",
    location: "Remote",
    domain: "App Development",
    duration: "4 months",
    eligibility: "B.Tech (Any branch) 2nd year onwards",
    stipend: "₹12,000/month",
    description: "Develop cross-platform mobile applications using Flutter. You'll be involved in the full development lifecycle from concept to deployment.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: true,
    logo: "/placeholder.svg"
  },
  {
    id: "4",
    title: "Data Science Intern",
    company: "DataMinds",
    location: "Delhi (On-site)",
    domain: "Data Science",
    duration: "3 months",
    eligibility: "B.Tech (CS/IT/Mathematics) 3rd year onwards",
    stipend: "₹18,000/month",
    description: "Help us analyze large datasets and extract meaningful insights. Knowledge of Python, SQL, and statistical methods is required.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: false,
    logo: "/placeholder.svg"
  },
  {
    id: "5",
    title: "IoT Systems Intern",
    company: "ConnectedTech",
    location: "Pune (Hybrid)",
    domain: "IoT",
    duration: "5 months",
    eligibility: "B.Tech (ECE/EEE) 3rd year onwards",
    stipend: "₹15,000/month",
    description: "Work on IoT device firmware and connectivity solutions. Experience with embedded systems and networking protocols is a plus.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: false,
    logo: "/placeholder.svg"
  },
  {
    id: "6",
    title: "Cybersecurity Analyst Intern",
    company: "SecureNet",
    location: "Remote",
    domain: "Cybersecurity",
    duration: "4 months",
    eligibility: "B.Tech (CS/IT) 3rd year onwards",
    stipend: "₹20,000/month",
    description: "Join our security team to identify vulnerabilities and implement protective measures. Knowledge of network security and penetration testing is desired.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: false,
    logo: "/placeholder.svg"
  },
  {
    id: "7",
    title: "Cloud Engineering Intern",
    company: "CloudStack",
    location: "Mumbai (Hybrid)",
    domain: "Cloud Computing",
    duration: "6 months",
    eligibility: "B.Tech (CS/IT) 3rd year onwards",
    stipend: "₹25,000/month",
    description: "Help design and implement cloud-based solutions using AWS/Azure. Knowledge of serverless architecture and containerization is a plus.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: false,
    logo: "/placeholder.svg"
  },
  {
    id: "8",
    title: "DevOps Intern",
    company: "DeployFast",
    location: "Remote",
    domain: "DevOps",
    duration: "4 months",
    eligibility: "B.Tech (CS/IT) 3rd year onwards",
    stipend: "₹18,000/month",
    description: "Work with our team to streamline development workflows and implement CI/CD pipelines. Experience with Docker and Git is required.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: false,
    logo: "/placeholder.svg"
  },
  {
    id: "9",
    title: "UI/UX Design Intern",
    company: "DesignHub",
    location: "Bangalore (On-site)",
    domain: "UI/UX Design",
    duration: "3 months",
    eligibility: "B.Tech (Any branch) 2nd year onwards",
    stipend: "₹15,000/month",
    description: "Create engaging user interfaces and experiences for web and mobile applications. Proficiency in Figma or Adobe XD is required.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: false,
    logo: "/placeholder.svg"
  },
  {
    id: "10",
    title: "Blockchain Developer Intern",
    company: "ChainBlock",
    location: "Remote",
    domain: "Blockchain",
    duration: "5 months",
    eligibility: "B.Tech (CS/IT) 3rd year onwards",
    stipend: "₹22,000/month",
    description: "Develop and implement blockchain solutions for various use cases. Knowledge of smart contracts and distributed ledger technology is preferred.",
    applicationUrl: "https://forms.google.com/xyz",
    featured: false,
    logo: "/placeholder.svg"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Former Intern, now Software Engineer",
    company: "TechX Solutions",
    image: "/placeholder.svg",
    testimonial: "The internship portal helped me find my dream opportunity at TechX. The experience I gained during my internship was invaluable and directly led to a full-time role after graduation."
  },
  {
    id: "2",
    name: "Arjun Patel",
    role: "Data Scientist",
    company: "DataMinds",
    image: "/placeholder.svg",
    testimonial: "I found my internship at DataMinds through this portal, which kickstarted my career in data science. The application process was straightforward, and the internship matched exactly what was described."
  },
  {
    id: "3",
    name: "Riya Gupta",
    role: "App Developer",
    company: "AppWave Technologies",
    image: "/placeholder.svg",
    testimonial: "The domain-specific filters helped me find the perfect mobile app development internship. Three months later, I had built my first production app and secured a recommendation from my mentor."
  }
];

export const domains: string[] = [
  "All Domains",
  "Web Development",
  "App Development",
  "AI/ML",
  "Data Science",
  "IoT",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Blockchain"
];
