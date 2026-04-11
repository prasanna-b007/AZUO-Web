"use client";

import { motion } from "framer-motion";
import Services from "@/sections/Services";
import Features from "@/sections/Features";
import CTA from "@/sections/CTA";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CheckCircle2, Cpu, Globe, Zap, Settings } from "lucide-react";
import { cn } from "@/utils/utils";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-0">
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Our <span className="text-gradient">Services</span>
        </h1>
        <p className="text-xl text-gray-400">
          We don't just write code. We engineer scalable systems that drive growth, ensure security, and provide exceptional digital experiences.
        </p>
      </div>
      
      <Services showTitle={false} />
      <Features />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <Settings className="w-3 h-3 animate-spin-slow" />
              Syste m Engineering
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Our <span className="text-gradient">Engineering</span> Approach
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl">
              We employ a rigorous software development lifecycle emphasizing test-driven development, continuous integration, and scalable cloud architectures. Our process ensures that your product is not only beautiful but robust under pressure.
            </p>
            
            <div className="space-y-6">
              {[
                { label: "Discovery & Architecture", color: "bg-brand-blue", icon: <Globe className="w-5 h-5 text-brand-blue" /> },
                { label: "Agile Development", color: "bg-brand-purple", icon: <Cpu className="w-5 h-5 text-brand-purple" /> },
                { label: "Performance Optimization", color: "bg-brand-pink", icon: <Zap className="w-5 h-5 text-brand-pink" /> },
                { label: "Deployment & Scaling", color: "bg-brand-blue", icon: <CheckCircle2 className="w-5 h-5 text-brand-blue" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className={cn("w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform")}>
                    {item.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative group">
            {/* Visual Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 via-brand-purple/20 to-brand-pink/20 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            
            <div className="relative grid grid-cols-2 gap-6 p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <SpotlightCard className="aspect-square flex flex-col items-center justify-center p-8 text-center bg-white/[0.02] hover:bg-white/[0.04]">
                   <div className="w-full h-full border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 p-4">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center border border-brand-blue/30 scale-animation">
                         <div className="w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
                      </div>
                      <div className="h-2 w-24 bg-white/10 rounded-full" />
                      <div className="h-2 w-16 bg-white/5 rounded-full" />
                   </div>
                </SpotlightCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="translate-y-12"
              >
                <SpotlightCard className="aspect-square flex flex-col items-center justify-center p-8 text-center bg-white/[0.02] hover:bg-white/[0.04] border-brand-purple/20">
                   <div className="w-full h-full border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="h-1.5 w-full bg-brand-purple/30 rounded-full" />
                        <div className="h-1.5 w-3/4 bg-brand-purple/20 rounded-full" />
                        <div className="h-1.5 w-1/2 bg-brand-purple/10 rounded-full" />
                      </div>
                      <div className="mt-auto flex justify-end">
                        <Cpu className="w-8 h-8 text-brand-purple/40" />
                      </div>
                   </div>
                </SpotlightCard>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </div>
  );
}
