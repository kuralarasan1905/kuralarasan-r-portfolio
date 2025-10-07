"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
              Kuralarasan R
            </h3>
            <p className="text-muted-foreground text-sm">
              .NET Full Stack Developer
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/kuralarasan-r-45a1271ab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://github.com/kuralarasan1905"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a
              href="mailto:kuralarasan1905@gmail.com"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Kuralarasan R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}