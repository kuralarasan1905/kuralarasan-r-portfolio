"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior .NET Developer",
      company: "Bridge Labz Solutions Pvt Ltd",
      location: "Chennai, India",
      period: "Feb 2025 - Present",
      description: [
        "Led development of enterprise-level applications using .NET Core and microservices architecture",
        "Implemented RESTful APIs and integrated third-party services",
        "Mentored junior developers and conducted code reviews",
        "Optimized database queries resulting in 40% performance improvement",
      ],
    },
    {
      title: ".NET Full Stack Developer",
      company: "Bridge Labz Solutions Pvt Ltd",
      location: "Chennai, India",
      period: "Feb 2025 - Present",
      description: [
        "Developed and maintained full-stack web applications using ASP.NET Core and React",
        "Designed and implemented database schemas using SQL Server",
        "Collaborated with cross-functional teams in Agile environment",
        "Implemented CI/CD pipelines using Azure DevOps",
      ],
    },
    {
      title: "Junior .NET Developer",
      company: "Quick Zeal Solutions Pvt Ltd",
      location: "Chennai, India",
      period: "Jun 2023 - Dec 2024",
      description: [
        "Assisted in development of web applications using ASP.NET Core",
        "Developed dynamic front-end components using Angular framework",
        "Created and maintained SQL Server databases and stored procedures",
        "Participated in requirement analysis and technical documentation",
        "Resolved bugs and performed unit testing",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}