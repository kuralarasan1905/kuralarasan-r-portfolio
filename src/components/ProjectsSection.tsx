"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

const projects = [
  {
    title: "Green Data Manager (GDM)",
    subtitle: "Data Management Platform for Sustainability",
    description: "Comprehensive data management platform enabling organizations to track environmental data with real-time monitoring and compliance reporting.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-digital-illustration-of-a-sustain-9356d84f-20251006122537.jpg",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
    period: "06/2023 - 12/2024",
    location: "Chennai",
    features: [
      "Developed comprehensive data management platform",
      "Real-time monitoring and compliance reporting",
      "Sustainability and regulatory compliance tracking",
      "Environmental data tracking for organizations",
    ],
  },
  {
    title: "CodeNudge",
    subtitle: "AI-Powered Mock Interview Platform",
    description: "An intelligent platform that helps students prepare for interviews through automated code evaluation, report generation, and AI feedback.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-tech-illustration-of-ai-powered-c-9530f547-20251005165525.jpg",
    techStack: [".NET Core", "Angular", "Firebase", "AI Integration"],
    period: "08/2025 - Present",
    location: "Chennai, India",
    features: [
      "ASP.NET Core API with Angular Frontend",
      "Firebase for authentication and storage",
      "Real-time analytics dashboard for students and admins",
      "Machine Learning API integration for evaluation",
    ],
  },
  {
    title: "Billing Software Project",
    subtitle: "Android POS & Web Billing Solution",
    description: "Complete billing and POS system for Android devices with comprehensive inventory management, sales tracking, and cloud hosting.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-digital-illustration-of-a-billing-1a333660-20251005165506.jpg",
    techStack: ["Flutter", ".NET Core", "SQL Server", "AWS"],
    period: "03/2025 - Present",
    location: "Chennai, India",
    features: [
      "Login, Register, Attendance with salary calculation",
      "Product Management, Billing, Sales, Inventory",
      "Reports, Settings, Profile, Role-Based Access",
      "Play Store Submission ready",
    ],
  },
  {
    title: "VP Caterers",
    subtitle: "Catering Management Web App",
    description: "A catering business management system designed using Angular and Firebase for customer reviews, file uploads, and analytics.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-vector-illustration-of-a-catering-a25a63c2-20251005165516.jpg",
    techStack: ["Angular", "Firebase", "TypeScript", "Bootstrap"],
    period: "02/2025 - 03/2025",
    location: "Chennai, India",
    features: [
      "Dynamic Admin Dashboard",
      "Review & Rating System with Photo Upload",
      "Event Management and Client Feedback",
      "Firebase Authentication & Firestore Storage",
    ],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() => setSelectedProject(project)}
                  className="w-full relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </span>
                  {/* Glowing border animation */}
                  <span className="absolute inset-0 border-2 border-transparent group-hover/btn:border-primary group-hover/btn:animate-pulse rounded-md"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 group-hover/btn:animate-shimmer"></span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div>
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-primary font-semibold mb-4">{selectedProject.subtitle}</p>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {selectedProject.period} • {selectedProject.location}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Key Features:</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}