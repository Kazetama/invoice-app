import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function TechStack() {
  const technologies = [
    "Next.js", "TailwindCSS", "Shadcn/UI", "Laravel", "Inertia.js", 
    "TypeScript", "Postman", "Figma", "GitHub", "Ubuntu Server"
  ];

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-end border-b-2 border-emerald-500 pb-1 w-fit gap-8">
        <h3 className="text-xl font-bold text-white">Tech Stack</h3>
      </div>
      <p className="text-sm text-zinc-500">Tools and technologies I use to build and develop applications.</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge 
            key={tech} 
            variant="secondary" 
            className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-emerald-500/50 transition-colors cursor-default"
          >
            {tech}
          </Badge>
        ))}
        <Button variant="ghost" size="sm" className="text-zinc-500 hover:text-white">
          <ChevronDown className="w-4 h-4 mr-1" /> Show All
        </Button>
      </div>
    </section>
  );
}