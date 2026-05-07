"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-24 md:pb-0 relative overflow-hidden">
      <div className="container px-6 mx-auto grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        
            {/* LEFT: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 space-y-8 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass-card text-xs md:text-sm font-medium text-accent border-muted/40">
            Available for Internship: Aug 2026 - Dec 2026
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
            Frontend-Focused <br />
            <span className="text-muted dark:text-accent">Full Stack Developer</span>
          </h1>

          <div className="text-lg md:text-xl text-foreground/70 h-[60px] md:h-[30px]">
            <TypeAnimation
              sequence={[
                "Crafting scalable digital experiences.", 2000,
                "Building immersive user interfaces.", 2000,
                "Architecting robust full-stack solutions.", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <Link href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="/CheAmal_DeveloperIntern_CV.pdf" target="_blank" className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-card hover:bg-muted/10 transition-colors flex items-center justify-center gap-2 font-medium">
              Download CV <Download className="w-4 h-4" />
            </a>
            <a href="https://github.com/AmalTomio" target="_blank" rel="noreferrer" className="hidden sm:flex p-3.5 rounded-full glass-card hover:bg-muted/10 transition-colors">
              <SiGithub className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
            <div className="absolute inset-0 rounded-full border border-muted/20 scale-[1.05]" />
            <div className="absolute inset-0 rounded-full border border-muted/10 scale-[1.1]" />
            <div className="absolute inset-0 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl animate-pulse" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <Image 
                src="/profile.jpg" 
                alt="Che Amal Nur Ilham"
                fill 
                priority
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 400px, 480px" 
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}