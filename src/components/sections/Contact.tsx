// src/components/sections/Contact.tsx
"use client";
import { Mail, ArrowRight } from "lucide-react";
import { SiGithub, SiLinkerd } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container px-6 mx-auto max-w-4xl text-center">
        <div className="glass-card p-12 md:p-20 rounded-[3rem] border-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-muted dark:text-accent">Great</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto">
            Currently seeking frontend and full-stack internship opportunities
            starting August 2026. My inbox is always open for collaborations and
            inquiries.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cheamalothman@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform text-lg mb-12"
          >
            Say Hello
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/AmalTomio"
              target="_blank"
              rel="noreferrer"
              className="p-4 glass-card rounded-full hover:bg-muted/10 hover:text-accent transition-colors"
            >
              <SiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/che-amal-che-othman-157023222"
              target="_blank"
              rel="noreferrer"
              className="p-4 glass-card rounded-full hover:bg-muted/10 hover:text-accent transition-colors"
            >
              <SiLinkerd className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cheamalothman@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Email"
              className="glass-card rounded-full p-4 transition-all duration-300 hover:bg-muted/10 hover:text-accent hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
