"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, FolderGit2, User, Code2, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Desktop Top Navbar */}
      <header className="hidden md:flex fixed top-0 w-full z-50 py-6 px-8 items-center justify-between pointer-events-none">
        <Link href="/" className="pointer-events-auto font-heading font-bold text-xl tracking-tight">
          Che Amal
        </Link>
        <nav className="pointer-events-auto glass-card px-6 py-2.5 rounded-full flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-accent transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Theme Toggle Button with fixed dimensions to prevent layout shift */}
        <button 
          onClick={toggleTheme} 
          className="pointer-events-auto glass-card w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/20 transition-all"
        >
          {mounted ? (
            theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
          ) : (
            <div className="w-5 h-5" /> /* Invisible placeholder during SSR */
          )}
        </button>
      </header>

      {/* Mobile Floating Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <motion.nav 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-card px-4 py-3 rounded-full flex items-center gap-6 shadow-2xl border-muted/50"
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex flex-col items-center gap-1 text-foreground/70 hover:text-foreground">
              <item.icon className="w-5 h-5" />
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
          <div className="w-px h-6 bg-muted/30" />
          
          {/* Mobile Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="text-foreground/70 hover:text-foreground w-5 h-5 flex items-center justify-center"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>
        </motion.nav>
      </div>
    </>
  );
}