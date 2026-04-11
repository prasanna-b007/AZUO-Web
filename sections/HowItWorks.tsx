"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Understand Your Problem",
    desc: "We deep-dive into your business challenges to identify automation opportunities."
  },
  {
    num: "02",
    title: "Design AI-powered Solution",
    desc: "Our architects map out a scalable, intelligent solution tailored to your needs."
  },
  {
    num: "03",
    title: "Develop & Deploy",
    desc: "Fast-cycle development followed by seamless deployment into your ecosystem."
  },
  {
    num: "04",
    title: "Optimize & Scale",
    desc: "Continuous monitoring and AI-driven optimization to ensure maximum ROI."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            How We <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A systematic approach to transforming your business with intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-blue/50 transition-all"
            >
              <div className="text-5xl font-black text-white/5 absolute top-4 right-4 group-hover:text-brand-blue/20 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-brand-blue/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
