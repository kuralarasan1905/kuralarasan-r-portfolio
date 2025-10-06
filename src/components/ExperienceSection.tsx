"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: ".Net Full Stack Developer",
    company: "BridgeLabz Solutions Pvt Ltd",
    location: "Chennai, India",
    period: "02/2025 - Present",
    description: "BridgeLabz Solutions is a company focused on full stack development and deployment of real-time projects.",
    responsibilities: [
      "Developed and deployed ASP.NET Core backend APIs following clean architecture principles (MediatR, Repository, Services)",
      "Integrated Angular frontend with RESTful APIs for a seamless and scalable user experience",
      "Implemented real-time result tracking and analytics using SignalR with chart visualizations",
      "Designed and optimized database schema and queries to improve performance and scalability",
      "Built role-based authentication and dashboards for secure access and data visualization",
    ],
  },
  {
    title: ".Net Full Stack Developer",
    company: "QuickZeal Solution Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "06/2023 - 12/2024",
    description: "A software company specializing in full stack development solutions.",
    responsibilities: [
      "Developed and maintained dynamic web applications using ASP.Net, Angular, SQL, HTML, and CSS",
      "Designed and implemented RESTful APIs for seamless communication between front-end and back-end systems",
      "Participated in the full software development life cycle (SDLC)",
      "Utilized Entity Framework for database management, performing CRUD operations",
      "Led the migration of data and functionality from a legacy system to the new ASP.Net Core framework",
      "Updated front-end components using Angular, HTML, and CSS to improve user interface responsiveness",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-xl text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-muted-foreground mb-2">{exp.description}</p>
                </div>
                <div className="flex flex-col gap-2 md:text-right mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}