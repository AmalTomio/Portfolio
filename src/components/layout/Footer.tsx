import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 relative z-10">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Code2 className="text-accent-cyan h-5 w-5" />
          <span className="font-heading font-bold tracking-wide">
            Che Amal.
          </span>
        </Link>
        
        <p className="text-foreground/60 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Che Amal Nur Ilham. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm font-medium text-foreground/60">
                    <a href="https://cherasrians.my" target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors">
            Main Project
          </a>
        </div>
      </div>
    </footer>
  );
}