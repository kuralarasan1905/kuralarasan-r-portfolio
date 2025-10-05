"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Backend",
      skills: [
        ".NET Core",
        "ASP.NET",
        "C#",
        "Web API",
        "Entity Framework",
        "LINQ",
        "SignalR",
        "Microservices",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      category: "Database",
      skills: [
        "SQL Server",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "T-SQL",
        "Stored Procedures",
        "Query Optimization",
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Git",
        "Azure DevOps",
        "Docker",
        "Kubernetes",
        "REST API",
        "GraphQL",
        "JWT",
        "OAuth",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "Azure",
        "AWS",
        "CI/CD",
        "GitHub Actions",
        "Azure Functions",
        "App Services",
        "Azure SQL",
        "Blob Storage",
      ],
    },
    {
      category: "Other Skills",
      skills: [
        "Agile/Scrum",
        "Design Patterns",
        "Unit Testing",
        "TDD",
        "Code Reviews",
        "Problem Solving",
        "Team Collaboration",
        "Technical Documentation",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}