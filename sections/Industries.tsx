"use client";

import { motion } from "framer-motion";
import { Leaf, Factory, Landmark, TreePine, ShoppingBag, Activity } from "lucide-react";

const industries = [
  { icon: <Leaf className="w-6 h-6" />, name: "Agriculture" },
  { icon: <Factory className="w-6 h-6" />, name: "Manufacturing" },
  { icon: <Landmark className="w-6 h-6" />, name: "Finance & MSMEs" },
  { icon: <TreePine className="w-6 h-6" />, name: "Sustainability" },
  { icon: <ShoppingBag className="w-6 h-6" />, name: "E-commerce" },
  { icon: <Activity className="w-6 h-6" />, name: "Healthcare" }
];

export default function Industries() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
        >
          Industries <span className="text-gradient">We Serve</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-glass border border-white/5 hover:border-brand-blue/30 transition-all hover:-translate-y-1"
            >
              <div className="text-brand-blue">{ind.icon}</div>
              <span className="text-xl font-bold text-foreground">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
