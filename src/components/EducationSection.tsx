"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Anna University",
      location: "Chennai, India",
      period: "2018 - 2022",
      description: "Specialized in software engineering, data structures, and web technologies. Graduated with distinction.",
      achievements: [
        "CGPA: 8/10",
        "Dean's List for Academic Excellence",
        "Final Year Project: Systematic IP Tracing of Participants in Academic Session",
      ],
    },
    {
      degree: "Higher Secondary Certificate",
      institution: " Vaani Matric Higher Secondary School",
      location: "Chennai, India",
      period: "2017 - 2018",
      description: "Focused on Computer Science, Mathematics, and Physics.",
      achievements: [
        "Percentage: 92%",
        "State Level Science Exhibition Winner",
      ],
    },
  ];

  const certifications = [
    "Microsoft Certified: Azure Developer Associate",
    "AWS Certified Solutions Architect",
    ".NET Core Certification",
    "React Professional Certification",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-start mb-2">
                        <GraduationCap className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-lg font-semibold text-muted-foreground">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-muted-foreground mb-3 ml-9">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3 ml-9">
                        {edu.description}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-9">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 text-primary mr-2" />
                Certifications
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}