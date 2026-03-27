"use client";
import React, { useState, useEffect, useRef } from "react";
import { Building, Home, Hotel, Wrench, Users, BookOpen, PenTool, Star, FileText, Briefcase } from "lucide-react";
import { ProjectCard } from "../ui/project-card";

interface Project {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  status: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "1:1 Business Coaching",
    category: "Coaching",
    subtitle: "Personalized mentorship",
    description:
      "Tailored one-on-one guidance to help entrepreneurs overcome challenges and achieve measurable growth.",
    location: "Push To Profit",
    status: "as seen",
    image: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364212/IMG-20250401-WA0022_z8knms.jpg",
    icon: Users,
    gradient: "from-amber-950 via-slate-900 to-black",
    accentColor: "amber",
  },
  {
    id: 2,
    title: "Trainings",
    category: "Skill Development",
    subtitle: "Sharpen your expertise",
    description:
      "Intensive workshops and training programs designed to equip business owners with practical tools and strategies.",
    location: "Push To Profit",
    status: "as seen",
    image: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364272/IMG-20250401-WA0105_c34rrx.jpg",
    icon: BookOpen,
    gradient: "from-gray-900 via-slate-800 to-black",
    accentColor: "gray",
  },
  {
    id: 3,
    title: "Content Creation",
    category: "Marketing",
    subtitle: "Boost visibility",
    description:
      "Professional content strategies to strengthen your brand presence and engage your target audience effectively.",
    location: "Push To Profit",
    status: "as seen",
    image: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364247/IMG-20250401-WA0179_zikex8.jpg",
    icon: PenTool,
    gradient: "from-green-900 via-slate-800 to-black",
    accentColor: "green",
  },
  {
    id: 4,
    title: "Business/Personal Branding",
    category: "Branding",
    subtitle: "Craft your identity",
    description:
      "Develop a powerful business and personal brand that communicates your values and sets you apart.",
    location: "Push To Profit",
    status: "as seen",
    image: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364238/IMG-20250401-WA0153_ecsmg0.jpg",
    icon: Star,
    gradient: "from-orange-950 via-slate-900 to-black",
    accentColor: "orange",
  },
  {
    id: 5,
    title: "Business Plan",
    category: "Strategy",
    subtitle: "Plan for success",
    description:
      "Structured business plans that outline your vision, strategy, and roadmap for sustainable growth.",
    location: "Push To Profit",
    status: "as seen",
    image: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364218/IMG-20250401-WA0118_v7uggp.jpg",
    icon: FileText,
    gradient: "from-blue-950 via-slate-900 to-black",
    accentColor: "blue",
  },
  {
    id: 6,
    title: "Business Management",
    category: "Operations",
    subtitle: "Streamline your growth",
    description:
      "Systems and strategies to optimize operations, improve efficiency, and scale your business effectively.",
    location: "Push To Profit",
    status: "as seen",
    image: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364276/IMG-20250401-WA0176_cn931o.jpg",
    icon: Briefcase,
    gradient: "from-slate-950 via-amber-900 to-black",
    accentColor: "slate",
  },
];

const Facilities: React.FC = () => {
  const [, setHoveredProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 lg:py-40 overflow-hidden bg-slate-50"
    >
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(15, 23, 42, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(30, 41, 59, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 40% 80%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)
            `,
            animation: "aurora 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 7}%`,
              transform: `rotate(${i * 30}deg)`,
              animation: `float ${8 + (i % 4)}s ease-in-out infinite ${
                i * 0.5
              }s`,
            }}
          >
            <div
              className="w-24 h-24 border border-slate-800/30 transform-gpu"
              style={{
                clipPath:
                  i % 3 === 0
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : i % 3 === 1
                      ? "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                      : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-linear-to-r from-slate-800 to-amber-900 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${3 + Math.random() * 4}s linear infinite ${
                Math.random() * 3
              }s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Cinematic Header */}
        <div
          className={`text-center mb-20 md:mb-32 transform transition-all duration-2000 ease-out ${
            activeSection
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-linear-to-r from-slate-900/20 via-amber-900/30 to-slate-900/20 blur-2xl rounded-full animate-pulse"></div>
            <span className="relative text-sm font-light text-slate-800 tracking-[0.3em] uppercase backdrop-blur-sm">
              Push To Profit
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin leading-[0.9] mb-8 tracking-tight">
            <span className="inline-block bg-linear-to-r from-slate-900 via-amber-900 to-slate-900 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="inline-block bg-linear-to-r from-slate-900 via-black to-slate-900 bg-clip-text text-transparent font-light">
              Services
            </span>
          </h2>

          <div className="w-32 h-0.5 bg-linear-to-r from-slate-800 via-amber-900 to-slate-800 mx-auto mb-12" />

          <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed max-w-2xl mx-auto">
            Discover our world‑class programs designed to provide a supportive, inspiring, and results‑driven environment for entrepreneurial and personal growth.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reversed={index % 2 === 1}
              onHover={setHoveredProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
