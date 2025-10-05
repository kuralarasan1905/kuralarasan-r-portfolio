"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Code, Database, Layers } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "Expert in .NET Core, ASP.NET, and modern frontend frameworks",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Design",
      description: "Proficient in SQL Server, PostgreSQL, and database optimization",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Architecture",
      description: "Experience with microservices, RESTful APIs, and cloud solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm a passionate <span className="text-foreground font-semibold">.NET Full Stack Developer</span> based in Chennai, India, 
                with over 3 years of professional experience in building scalable and efficient web applications. 
                My journey in software development has equipped me with a strong foundation in both backend and frontend technologies.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in creating robust server-side applications using <span className="text-foreground font-semibold">.NET Core and ASP.NET</span>, 
                while also crafting intuitive user interfaces with modern frameworks like <span className="text-foreground font-semibold">React and Angular</span>. 
                I'm committed to writing clean, maintainable code and following best practices in software development.
              </p>
            </Card>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}