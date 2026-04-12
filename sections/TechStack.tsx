"use client";

import { motion } from "framer-motion";

import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { Brain, Cloud, Database, Layout, Smartphone, Shield, Zap, Code } from "lucide-react";

const allTechs = [
  { name: "FastAPI", icon: <Code className="w-4 h-4" /> },
  { name: "Node.js", icon: <Code className="w-4 h-4" /> },
  { name: "Next.js", icon: <Layout className="w-4 h-4" /> },
  { name: "React", icon: <Layout className="w-4 h-4" /> },
  { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
  { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
  { name: "Python", icon: <Brain className="w-4 h-4" /> },
  { name: "Flutter", icon: <Smartphone className="w-4 h-4" /> },
  { name: "Azure", icon: <Cloud className="w-4 h-4" /> },
  { name: "GCP", icon: <Cloud className="w-4 h-4" /> },
  { name: "Firebase", icon: <Database className="w-4 h-4" /> },
  { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
];

export default function TechStack() {
  const marqueeItems = allTechs.map((tech, i) => (
    <div 
      key={i} 
      className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-400 hover:text-foreground hover:border-brand-purple/50 transition-all duration-300 group/item"
    >
      <div className="text-brand-purple group-hover/item:scale-110 transition-transform">
        {tech.icon}
      </div>
      <span className="text-lg font-bold tracking-tight">{tech.name}</span>
    </div>
  ));

  return (
    <section className="py-10 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Our <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We leverage market-leading technologies to build performance-ready, scalable AI solutions.
          </motion.p>
        </div>
      </div>

      <InfiniteMarquee items={marqueeItems} speed={60} />
      <InfiniteMarquee items={marqueeItems.reverse()} speed={50} direction="right" />
    </section>
  );
}

