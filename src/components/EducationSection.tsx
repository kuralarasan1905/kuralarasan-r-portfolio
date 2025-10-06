"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering (CSE)",
    institution: "Priyadarshini Engineering College",
    university: "Anna University",
    period: "08/2018 - 05/2022",
    location: "Tamil Nadu",
  },
  {
    degree: "HSC",
    institution: "Vaani Matric School",
    period: "2017 - 2018",
    location: "Vaniyambadi",
  },
];

const certifications = [
  {
    title: "Python Developer",
    institution: "Besant Technologies",
    description: "Course completed in Besant technologies",
  },
  {
    title: "AWS Certified Cloud Practitioner Exam",
    institution: "GeeksforGeeks",
    description: "Course completed in GeeksforGeeks",
  },
];

const projects = [
  {
    title: "Systematic IP Tracing of Participants in Academic Session",
    period: "02/2022 - 05/2022",
    description: "A project that involves analyzing IP addresses in academic sessions to ensure security.",
    highlights: [
      "Collected and analyzed data about the IP addresses of participants in academic sessions",
      "Identified potential security threats based on IP tracking data",
      "Developed using Python for data analysis and security monitoring",
    ],
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"></div>
        </motion.div>

        {/* Education */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-6"
          >
            Academic Background
          </motion.h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-muted-foreground mb-2">{edu.university}</p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl font-bold mb-6"
          >
            Training & Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                    <p className="text-primary font-semibold mb-2">{cert.institution}</p>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Year Project */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl font-bold mb-6"
          >
            Academic Projects
          </motion.h3>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{project.period}</p>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2 text-muted-foreground">
                    <span className="text-primary">✓</span>
                    <span>{highlight}</span>
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