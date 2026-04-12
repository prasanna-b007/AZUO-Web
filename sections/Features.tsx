"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Settings, Link as LinkIcon } from "lucide-react";
import { featureItems } from "@/data/features";


export default function Features() {
  return (
    <section className="py-12 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              <Settings className="w-3 h-3 animate-spin-slow" />
              Core Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
            >
              The Next Era of <br />
              <span className="text-gradient">Intelligence</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-sm mb-2"
          >
            We deploy specialized AI systems that redefine the boundaries of what software can achieve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featureItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <SpotlightCard className="p-6 md:p-10 h-full bg-[#0d0d0d]/80 border-white/5 backdrop-blur-3xl rounded-[2rem] flex flex-col items-start gap-8 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.02] -rotate-45 translate-x-24 -translate-y-24 group-hover:rotate-0 group-hover:bg-white/[0.04] transition-all duration-1000" />

                <div className="flex w-full items-start justify-between">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-110",
                    item.color === 'brand-purple' ? 'text-brand-purple bg-brand-purple/5 group-hover:border-brand-purple/50' : 'text-brand-blue bg-brand-blue/5 group-hover:border-brand-blue/50'
                  )}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto pt-8 w-full border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full", item.color === 'brand-purple' ? 'bg-brand-purple' : 'bg-brand-blue')} />
                    <span className="text-sm font-bold text-foreground/60 tracking-tight">{item.stats}</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-widest">
                    Technical Spec <LinkIcon className="w-3 h-3" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



