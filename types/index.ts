export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  technologies: string[];
  features: string[];
  benefits: string[];
  deliverables: string[];
  faq: FAQItem[];
  metaTitle: string;
  metaDescription: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  client: string;
  timeline: string;
  role: string;
  problem: string;
  solution: string;
  impact: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  isDemo: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  projectSlug?: string;
}

export type Testimonial = TestimonialItem;

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  tags: string[];
  tableOfContents: { id: string; text: string; level: number }[];
  featured: boolean;
}

export interface InquiryFormData {
  serviceTypes: string[];
  budget: string;
  timeline: string;
  description: string;
  name: string;
  email: string;
  company?: string;
}
