"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/Button";
import { projects, projectCategories } from "@/data/projects";


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg max-w-xl"
            >
              A selection of our latest and most impactful projects across different domains.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {projectCategories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "primary" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                shimmer={activeCategory === cat}
              >
                {cat}
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
              >
                {/* Project Image Container */}
                <div className="absolute inset-0 shimmer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    onLoadingComplete={(img) => {
                      img.parentElement?.classList.remove('shimmer');
                    }}
                  />
                </div>
                
                {/* Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-3">
                       <span className="w-8 h-[1px] bg-brand-blue" />
                       <p className="text-brand-blue font-semibold uppercase tracking-wider text-xs">{project.category} Architecture</p>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
