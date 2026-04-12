"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Intelligence Gathering",
    desc: "We dive deep into your business logic to identify automation bottlenecks and AI opportunities.",
    status: "Phase 01",
    color: "text-brand-blue"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Precision Engineering",
    desc: "Our engineers build custom models and scalable architectures tailored to your specific scale.",
    status: "Phase 02",
    color: "text-brand-purple"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Production Launch",
    desc: "We deploy systems that learn and adapt, ensuring your business stays ahead of the curve.",
    status: "Phase 03",
    color: "text-brand-pink"
  }
];

export default function Process() {
  return (
    <section className="py-10 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-purple font-mono tracking-widest uppercase mb-4 text-sm"
          >
            [ The AZUO Methodology ]
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            From Concept to <span className="text-gradient">Intelligence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-12" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-xl relative z-10 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-2">
                
                {/* Status Tag */}
                <div className="flex justify-between items-center mb-8">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-mono border border-current/20 ${step.color} bg-white/5 uppercase tracking-tighter`}>
                    {step.status}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>

                <div className={`mb-6 p-4 rounded-2xl bg-white/5 inline-block ${step.color} group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-brand-blue transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="flex items-center gap-2 text-foreground/40 group-hover:text-foreground transition-colors cursor-pointer group/btn">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Step Number Decoration */}
              <div className="absolute -top-6 -right-6 text-8xl font-bold text-foreground/[0.02] pointer-events-none select-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
