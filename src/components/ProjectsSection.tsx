"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

const projects = [
  {
    title: "Green Data Manager (GDM)",
    subtitle: "Data Management Platform for Sustainability",
    description:
      "A comprehensive data management platform enabling organizations to track environmental data with real-time monitoring and compliance reporting for sustainability and regulatory compliance.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-digital-illustration-of-a-sustain-9356d84f-20251006122537.jpg",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
    period: "06/2023 - 12/2024",
    location: "Chennai",
    liveUrl: "https://www.greensofttech.com/greendata-manager-gdm-software/",
    features: [
      "Developed comprehensive data management platform",
      "Real-time monitoring and compliance reporting",
      "Sustainability and regulatory compliance tracking",
      "Environmental data tracking for organizations",
    ],
  },
  {
    title: "Gift House Corporate",
    subtitle: "Corporate Gifting E-Commerce Platform",
    description:
      "Corporate gifting web platform designed to streamline bulk gifting, product management, and order processing for businesses, with secure backend APIs and scalable architecture. Hosted on DigitalOcean for high availability and production stability.",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "DigitalOcean"],
    period: "12/2025 - 02/2026",
    location: "Chennai, India",
    liveUrl: "https://gifthousecorporate.in/",
    features: [
      "Full-stack corporate gifting platform using ASP.NET Core Web API, SQL Server, and Angular",
      "RESTful APIs for product catalog, order management, user authentication, and corporate client workflows",
      "Secure and scalable backend supporting bulk order processing and corporate client management",
      "Cloud hosting and deployment on DigitalOcean ensuring high availability and production stability",
    ],
  },
  {
    title: "QuickLinic",
    subtitle: "Digital Rural Health Clinic",
    description:
      "Healthcare landing website developed using Angular to enable users to view clinic information, book appointments, and communicate with the clinic digitally.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    techStack: ["Angular", "HTML", "CSS", "TypeScript"],
    period: "10/2025",
    location: "Chennai, India",
    liveUrl: "https://quicklinic.com/",
    features: [
      "Responsive healthcare landing website using Angular, HTML, CSS, and TypeScript",
      "Appointment booking feature allowing users to submit consultation requests through structured forms",
      "Email functionality to send appointment details and notifications to clinic administrators",
      "Capture and store appointment data in Excel for record management and operational tracking",
    ],
  },
  {
    title: "CodeNudge",
    subtitle: "AI-Powered Mock Interview & Coding Platform",
    description:
      "AI-powered mock interview and coding evaluation platform with real-time result tracking and analytics using SignalR and chart visualizations.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-tech-illustration-of-ai-powered-c-9530f547-20251005165525.jpg",
    techStack: [".NET Core", "Angular", "Firebase", "SignalR", "AI"],
    period: "08/2025 - Present",
    location: "Chennai, India",
    liveUrl: "",
    features: [
      "Backend APIs using ASP.NET Core following clean architecture principles (MediatR, Repository, Services)",
      "Angular frontend integrated with RESTful APIs for seamless user experience",
      "Real-time result tracking and analytics using SignalR and chart visualizations",
      "User authentication, role-based access, and data visualization dashboards",
    ],
  },
  {
    title: "Billing Software Project",
    subtitle: "POS & Inventory Management System",
    description:
      "Mobile and backend system for billing, inventory, and sales tracking with SQL Server and optimized APIs for real-time billing operations.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-digital-illustration-of-a-billing-1a333660-20251005165506.jpg",
    techStack: ["Flutter", ".NET Core", "SQL Server", "AWS"],
    period: "03/2025 - Present",
    location: "Chennai, India",
    liveUrl: "",
    features: [
      "Billing & POS mobile application with backend services built using ASP.NET Core and SQL Server",
      "Inventory management, sales tracking, attendance, and report generation modules",
      "Optimized RESTful APIs for smooth and fast communication between app and server",
      "User-friendly interface for seamless retail operations and accurate transaction handling",
    ],
  },
  {
    title: "VP Caterers",
    subtitle: "Catering Business Management Web App",
    description:
      "A web application to manage catering services and customer engagement with Angular and Firebase for event management, customer reviews, and admin dashboard.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2b5103d8-6c98-45eb-a9ae-aefc586773e0/generated_images/modern-vector-illustration-of-a-catering-a25a63c2-20251005165516.jpg",
    techStack: ["Angular", "Firebase", "TypeScript", "Bootstrap"],
    period: "02/2025 - 03/2025",
    location: "Chennai, India",
    liveUrl: "https://vpcaterers.com/index.html",
    features: [
      "Catering business management web application using Angular and Firebase",
      "Event management, customer reviews, and photo uploads with Firebase Storage",
      "Admin dashboard to manage bookings, monitor feedback, and track service performance",
      "Firebase Authentication for secure user access and role-based control",
    ],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.95 }
              }
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
                <p className="text-sm text-primary font-semibold mb-3">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
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
                <div className="flex gap-3">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Details
                      <ExternalLink className="h-4 w-4" />
                    </span>
                    <span className="absolute inset-0 border-2 border-transparent group-hover/btn:border-primary group-hover/btn:animate-pulse rounded-md"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 group-hover/btn:animate-shimmer"></span>
                  </Button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-primary/50 hover:bg-primary/10"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Visit Site
                          <Globe className="h-4 w-4" />
                        </span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
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
              <h2 className="text-3xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-primary font-semibold mb-4">
                {selectedProject.subtitle}
              </p>
              <p className="text-muted-foreground mb-4">
                {selectedProject.description}
              </p>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {selectedProject.period} &bull; {selectedProject.location}
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
                      <span className="text-primary">&#10003;</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {selectedProject.liveUrl && (
                <div className="mt-6">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" size="lg">
                      <Globe className="h-5 w-5 mr-2" />
                      Visit Live Site
                    </Button>
                  </a>
                </div>
              )}
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
