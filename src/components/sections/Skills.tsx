"use client";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiVuedotjs, SiTailwindcss,
  SiPhp, SiLaravel, SiNodedotjs, SiExpress, SiMysql, SiMongodb,
  SiGit, SiGithub, SiJira, SiFigma, SiVercel, SiRender, SiTypescript, SiNextdotjs
} from "react-icons/si";

const stack = [
  { name: "React", icon: SiReact, color: "#61DAFB" }, 
  { name: "Next.js", icon: SiNextdotjs, color: "" }, // Adapts to Light/Dark mode
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" }, 
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, 
  { name: "Express", icon: SiExpress, color: "" }, // Adapts to Light/Dark mode
  { name: "PHP", icon: SiPhp, color: "#777BB4" }, 
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, 
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" }, 
  { name: "GitHub", icon: SiGithub, color: "" }, // Adapts to Light/Dark mode
  { name: "Figma", icon: SiFigma, color: "#F24E1E" }, 
  { name: "Render", icon: SiRender, color: "#46E3B7" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden border-y border-muted/10 bg-surface/30">
      <div className="container px-6 mx-auto mb-12 text-center md:text-center">
        <h2 className="text-5xl font-heading font-bold">Tech <span className="text-muted dark:text-accent">Stack</span></h2>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex gap-8 md:gap-16 items-center px-8">
          {/* Double the array for seamless infinite scroll */}
          {[...stack, ...stack].map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 glass-card rounded-2xl flex items-center justify-center group-hover:bg-muted/10 group-hover:-translate-y-2 transition-all duration-300">
                {/* Dynamically apply brand color or fallback to theme color */}
                <tech.icon 
                  className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${
                    tech.color 
                      ? "opacity-90 group-hover:opacity-100 group-hover:scale-110" 
                      : "text-foreground/50 group-hover:text-foreground group-hover:scale-110"
                  }`}
                  style={tech.color ? { color: tech.color } : {}}
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}