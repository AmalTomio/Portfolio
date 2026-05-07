"use client";
import { motion } from "framer-motion";
import {
  Server, MonitorSmartphone, Code2, PencilRuler, SearchCheck, CheckCircle2
} from "lucide-react";
import { SiFigma } from "react-icons/si";

const experiences = [
  {
    id: "ultrack",
    role: "Front-End Engineering Intern",
    company: "Ultrack Technology Sdn. Bhd.",
    location: "Cyberjaya",
    period: "Jan 2024 - May 2024",
    techSummary: [
      { name: "Frontend Development", icon: Code2, tools: "Internal Dashboards (IonConnect for DRB-HICOM & KESPA)" },
      { name: "UI/UX & Design Systems", icon: SiFigma, tools: "PDRM File Tracking (System Flow & Interface Mockups)" },
      { name: "Infrastructure Deployment", icon: Server, tools: "Dell PowerEdge R620 (Physical Config, OS Installation)" },
    ],
    detailedContributions: [
      { title: "Dashboard Architecture", desc: "Contributed core frontend features and seamless system integration for enterprise dashboard solutions.", icon: MonitorSmartphone },
      { title: "User Interaction Mockups", desc: "Designed full Figma mockups focusing heavily on system flow and user experience principles.", icon: PencilRuler },
      { title: "Platform Testing (QA)", desc: "Supported frontend development and software testing for the PropKita public landing page.", icon: SearchCheck },
    ]
  },
  {
    id: "mydin",
    role: "Staff Associate (SOFT SKILLS / SALES ACUMEN)",
    company: "Mydin Taman Batik",
    location: "Kedah",
    period: "Mar 2021 - Jun 2021",
    softSkillsFocus: true,
    highlights: [
      { title: "RM 10,000+ Sales Milestone", desc: "Achieved the highest departmental sales through strategic customer promotion in May 2021." },
      { title: "Team Coordination", desc: "Collaborated in weekly departmental meetings to resolve bottleneck issues and improve daily operations." },
    ]
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            Engineering <span className="text-muted dark:text-accent">Milestones</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-body">
            A precise architectural breakdown of my professional roles, technical layer integrations, and operational successes.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id} 
              variants={itemVariants}
              className="glass-card rounded-[2.5rem] border-muted/20 hover:border-accent/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-surface to-background/50 z-0" />
              
              {/* Premium Header/Status Bar */}
              <div className="relative z-10 px-8 py-6 border-b border-muted/20 bg-surface/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-foreground/50 tracking-widest">
                <span className="uppercase text-muted dark:text-accent font-bold">{exp.period}</span>
                <span>{exp.location.toUpperCase()}</span>
              </div>

              <div className="relative z-10 p-8 md:p-12">
                {/* Section 1: Role Overview */}
                <div className="mb-12">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold tracking-tighter text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-xl font-medium text-foreground/80 mb-6">{exp.company}</p>
                </div>

                {/* Section 2: Technical Arsenal Grid (Only for Ultrack) */}
                {exp.techSummary && (
                  <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {exp.techSummary.map((tech) => (
                      <div key={tech.name} className="flex flex-col gap-4 p-6 rounded-2xl glass-card border-accent/20 bg-accent/5">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-background border border-muted/20 text-accent">
                            <tech.icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-foreground/90">{tech.name}</h4>
                        </div>
                        <p className="text-sm text-foreground/70 leading-relaxed font-mono">// {tech.tools}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Section 3: Deep Dive Contributions */}
                {exp.detailedContributions && (
                  <div>
                    <h4 className="text-sm font-mono text-accent tracking-widest uppercase mb-8">Performance Deep Dive</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {exp.detailedContributions.map((deep, i) => (
                        <div key={i} className="glass-card p-6 rounded-xl border-muted/10 group">
                          <deep.icon className="w-8 h-8 text-foreground/40 group-hover:text-accent transition-colors mb-5" />
                          <h5 className="font-semibold mb-2">{deep.title}</h5>
                          <p className="text-sm text-foreground/70 leading-relaxed">{deep.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 4: Mydin Soft Skills Focus */}
                {exp.softSkillsFocus && (
                  <div>
                    <h4 className="text-sm font-mono text-muted dark:text-accent tracking-widest uppercase mb-8">Operational Success & Soft Skills</h4>
                    <div className="space-y-6 max-w-3xl">
                      {exp.highlights.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-5 rounded-xl glass-card border-muted/10">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                          <div>
                            <h5 className="font-semibold text-foreground/90 mb-1">{item.title}</h5>
                            <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}