"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Sparkles, 
  Award, 
  Rocket,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  avatar: string;
  skills: string[];
  achievement: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: SITE_CONFIG.founder.name,
    role: SITE_CONFIG.founder.role,
    specialty: "Full-Stack Architecture & Web Apps",
    bio: "Passionate full-stack developer with 5+ years of experience building high-scale Next.js SaaS platforms, industrial IoT telemetry systems, and custom web applications.",
    avatar: "/founder.jpg",
    skills: ["Next.js 16", "React 19", "Node.js", "TypeScript", "PostgreSQL", "WebSockets"],
    achievement: "Founder & Lead Architect",
  },
  {
    name: "Rajesh Padhi",
    role: "Backend & Cloud Infrastructure Lead",
    specialty: "Distributed Systems & Cloud Security",
    bio: "Architects zero-downtime cloud infrastructure on AWS, manages PostgreSQL & Redis clusters, and builds secure enterprise REST & GraphQL APIs.",
    avatar: "/team/rajesh.png",
    skills: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS EC2/S3", "GraphQL"],
    achievement: "Cloud DevOps Lead",
  },
  {
    name: "Prince Kushwaha",
    role: "Full-Stack & Web Application Engineer",
    specialty: "Modern Web Engineering & High-Scale Systems",
    bio: "Specializes in building high-performance web applications, modular React & Next.js frontend systems, and resilient REST API microservices.",
    avatar: "/team/prince.png",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "REST API"],
    achievement: "Senior Full-Stack Engineer",
  },
  {
    name: "Ankit Kushawaha",
    role: "Lead DevOps & Cloud Automation Engineer",
    specialty: "CI/CD Pipelines, Kubernetes & Infrastructure as Code",
    bio: "Specializes in automated Docker & Kubernetes deployments, Terraform infrastructure scaling, CI/CD pipeline automation, and zero-downtime server architecture.",
    avatar: "/team/ankit.png",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Linux"],
    achievement: "Senior DevOps Architect",
  },
];

interface TeamSectionProps {
  onOpenInquiry?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Info */}
      <div className="text-center sm:text-left flex flex-col items-center sm:items-start max-w-3xl mb-12 sm:mb-16 mx-auto sm:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
          <span>OUR ENGINEERING TEAM</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mt-4 leading-tight text-center sm:text-left"
        >
          Driven by Engineers & Designers Who Care About <span className="text-gradient-indigo">Excellence</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed text-center sm:text-left"
        >
          When you partner with us, you work directly with experienced senior engineers and designers — no middle management, zero fluff.
        </motion.p>
      </div>

      {/* Team Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-[28px] p-5 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Decorative Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-80" />

            <div>
              {/* Prominent Real Human Portrait Photo */}
              <div className="relative w-full h-52 sm:h-56 mb-5 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4f46e5&color=fff&size=256`;
                  }}
                />
                
                {/* Verified Specialist Pill Overlay */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-100 mb-3">
                <Award className="w-3.5 h-3.5 text-indigo-600" />
                <span>{member.achievement}</span>
              </div>

              {/* Member Name & Role */}
              <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                {member.name}
              </h3>

              <p className="text-xs font-bold text-indigo-600 mb-2">
                {member.role}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {member.bio}
              </p>
            </div>

            {/* Skills Pills */}
            <div className="pt-3 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};
