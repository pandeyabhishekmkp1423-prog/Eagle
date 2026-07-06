export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  area: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  image: string;
  description: string;
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  detailedDescription: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  text: string;
  location: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TimelineStep {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
}
