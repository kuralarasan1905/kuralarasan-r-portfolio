"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  features: string[];
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Green Data Manager (GDM)",
      subtitle: "Data Management Platform for Sustainability",
      description:
        "A comprehensive data management platform enabling organizations to track environmental data with real-time monitoring and compliance reporting for sustainability and regulatory compliance.",
      technologies: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-digital-illustration-of-a-sustainab-33fb2b59-20251005170823.jpg",
      features: [
        "Comprehensive data management for environmental tracking",
        "Real-time monitoring of sustainability metrics",
        "Compliance reporting for regulatory requirements",
        "Dashboard analytics for environmental data visualization",
        "Automated alerts for compliance deadlines",
        "Multi-organization support with role-based access",
      ],
    },
    {
      title: "Billing Software",
      subtitle: "Android POS & Web Billing Solution",
      description:
        "A comprehensive Billing Software System for Android POS devices with cloud-based backend infrastructure for seamless business operations.",
      technologies: ["Flutter", ".NET Core", "SQL Server", "AWS"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-digital-illustration-of-a-billing-1a333660-20251005165506.jpg",
      features: [
        "Login, Register, Attendance (with check-in/check-out and salary calculation)",
        "Product Management, Billing, Sales, Inventory",
        "Reports, Settings, Profile, Role-Based Access",
        "Play Store Submission",
        "Cloud Hosting: AWS EC2, RDS, S3",
        "Database: SQL Server (10 GB initially)",
      ],
    },
    {
      title: "VP Caterers",
      subtitle: "Catering Management Web App",
      description:
        "A catering business management system designed using Angular and Firebase for customer reviews, file uploads, and analytics.",
      technologies: ["Angular", "Firebase", "TypeScript", "Bootstrap"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-vector-illustration-of-a-catering-a25a63c2-20251005165516.jpg",
      features: [
        "Dynamic Admin Dashboard",
        "Review & Rating System with Photo Upload",
        "Event Management and Client Feedback",
        "Firebase Authentication & Firestore Storage",
        "Real-time data synchronization",
        "Responsive design with Bootstrap",
      ],
    },
    {
      title: "CodeNudge",
      subtitle: "AI-Powered Mock Interview Platform",
      description:
        "An intelligent platform that helps students prepare for interviews through automated code evaluation, report generation, and AI feedback.",
      technologies: [".NET Core", "Angular", "Firebase", "AI Integration"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-tech-illustration-of-ai-powered-c-9530f547-20251005165525.jpg",
      features: [
        "ASP.NET Core API with Angular Frontend",
        "Firebase for authentication and storage",
        "Real-time analytics dashboard for students and admins",
        "Machine Learning API integration for evaluation",
        "Automated code evaluation and scoring",
        "Comprehensive performance reports",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my latest work showcasing modern web and mobile solutions
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="w-full group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Details
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedProject?.subtitle}
            </DialogDescription>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative h-80 rounded-lg overflow-hidden border-2 border-border">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-semibold text-xl mb-3">About the Project</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xl mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <span className="text-muted-foreground flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-xl mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}