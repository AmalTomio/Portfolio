"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, CheckCircle2, Users, Star } from "lucide-react";
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio, 
  SiGithub, SiLaravel, SiPhp, SiMysql, SiBootstrap
} from "react-icons/si";

const projects = [
  {
    id: "cherasrians",
    title: "CherasRians Athletes Pro",
    badge: "Main Solo Project",
    badgeIcon: Star,
    description: "A comprehensive full-stack sports management platform designed for elite athlete and training management. Engineered to handle complex workflows from facility reservations to real-time performance tracking.",
    contributions: [
      "Facility Booking & Inventory System", 
      "Real-time Analytics & Notifications",
      "Role-Based Authentication", 
      "Coach & Athlete Dashboards"
    ],
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Socket.IO", icon: SiSocketdotio }
    ],
    liveUrl: "https://cherasrians.my",
    githubUrl:"https://github.com/AmalTomio/CherasRians-Athlete-Pro",
    image: "/landing-page.jpg" 
  },
  {
    id: "gmichaft",
    title: "GMi Chäft – Campus Marketplace",
    badge: "Collaborative Project",
    badgeIcon: Users,
    description: "A collaborative web-based platform developed to streamline communication, digital workflow management, and marketplace interactions within an educational team environment. My primary focus involved architecting a scalable frontend and delivering a polished, modern user experience.",
    contributions: [
      "Frontend Architecture & Development", 
      "UI/UX & Interaction Enhancements",
      "Modern Component Restructuring", 
      "Responsive Layout Optimization"
    ],
    tech: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "GitHub", icon: SiGithub }
    ],
    liveUrl: null, 
    githubUrl: "https://github.com/AmalTomio/ChaftGitHub",
    image: "/Picture1.png" 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="text-muted dark:text-accent">Architecture</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Production-grade applications designed for scalability, seamless collaboration, and premium user experiences.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="glass-card rounded-[2.5rem] overflow-hidden border border-muted/20 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                  
                  <div className="lg:w-1/2 relative aspect-square lg:aspect-auto lg:min-h-[600px] bg-muted/5 p-6 md:p-12 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 z-10" />
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-muted/20 group-hover:scale-[1.03] transition-transform duration-700 ease-out z-20 bg-surface">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top" 
                      />
                    </div>
                  </div>

                  <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-surface/50 relative z-20">
                    
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-muted/20 text-xs font-mono text-accent mb-6 w-max shadow-sm">
                      <project.badgeIcon className="w-3.5 h-3.5" />
                      <span className="tracking-wider uppercase">{project.badge}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                      {project.description}
                    </p>

                    <div className="mb-8 space-y-3">
                      <p className="text-sm font-mono text-muted dark:text-foreground/50 uppercase tracking-widest mb-4">
                        Key Features & Contributions
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                        {project.contributions.map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 
                            <span className="leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5 mb-10">
                      {project.tech.map(tech => (
                        <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-muted/20 group-hover:border-accent/40 transition-colors">
                          <tech.icon className="w-4 h-4 text-foreground/60 group-hover:text-accent transition-colors" />
                          <span className="text-xs font-medium text-foreground/80">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-foreground text-background font-semibold hover:scale-105 hover:shadow-lg hover:shadow-foreground/10 transition-all"
                        >
                          View Live Platform <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass-card hover:bg-muted/10 font-semibold transition-all"
                        >
                          Source Code <SiGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}