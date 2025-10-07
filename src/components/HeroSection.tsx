"use client";

import { motion } from "framer-motion";
import { Download, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export default function HeroSection() {
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = (filename: string) => {
    // Open in new tab to avoid iframe issues
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage(
        { type: "OPEN_EXTERNAL_URL", data: { url: `/${filename}` } },
        "*"
      );
    } else {
      window.open(`/${filename}`, "_blank", "noopener,noreferrer");
    }
    setShowResumeDialog(false);
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
                Hi, I'm
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            >
              Kuralarasan R
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-4xl font-semibold mb-4">
                .NET Full Stack Developer
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Passionate developer from Chennai with 3 years of experience building
              robust, scalable applications using modern web technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 group"
                onClick={() => setShowResumeDialog(true)}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
                aria-label="Scroll to about section"
              >
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={showResumeDialog} onOpenChange={setShowResumeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Choose Resume Version</DialogTitle>
            <DialogDescription>
              Select which resume version you'd like to download
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="outline"
              className="w-full justify-start h-auto py-4 hover:bg-primary/10"
              onClick={() =>
                handleDownloadResume("resume.pdf")
              }
            >
              <FileText className="mr-3 h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Kuralarasan Resume BL</div>
                <div className="text-xs text-muted-foreground">
                  Standard resume version
                </div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start h-auto py-4 hover:bg-primary/10"
              onClick={() =>
                handleDownloadResume("resume.pdf")
              }
            >
              <FileText className="mr-3 h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Updated Resume BL</div>
                <div className="text-xs text-muted-foreground">
                  Latest updated version
                </div>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}