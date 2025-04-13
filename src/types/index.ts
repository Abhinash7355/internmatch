
export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  domain: InternshipDomain;
  duration: string;
  eligibility: string;
  stipend: string;
  description: string;
  applicationUrl: string;
  featured: boolean;
  logo?: string;
}

export type InternshipDomain = 
  | "Web Development"
  | "App Development"
  | "AI/ML"
  | "Data Science"
  | "IoT"
  | "Cybersecurity"
  | "Cloud Computing"
  | "DevOps"
  | "UI/UX Design"
  | "Blockchain";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
}
