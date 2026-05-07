// src/components/sections/About.tsx
"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-heading font-bold sticky top-32">
              Engineering <br/><span className="text-muted dark:text-accent">Philosophy</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6 text-lg text-foreground/70 leading-relaxed glass-card p-8 md:p-10 rounded-3xl"
          >
            <p>
              As an Information Technology student specializing in Software Engineering, I am driven by the intersection of aesthetic design and robust system architecture.
            </p>
            <p>
              My expertise lies in frontend-focused full-stack development. I build responsive web applications and implement RESTful APIs, always prioritizing user-focused interfaces and seamless experiences.
            </p>
            <p>
              I am passionate about developing scalable, user-friendly digital solutions while continuously evolving my problem-solving methodologies in modern software engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}