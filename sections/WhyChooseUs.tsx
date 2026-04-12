"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Globe, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils/utils";

const reasons = [
  { text: "AI-first product mindset", icon: <Brain className="w-5 h-5" />, desc: "Not just software, we build intelligence." },
  { text: "Rapid MVP to production", icon: <Zap className="w-5 h-5" />, desc: "From concept to market in weeks." },
  { text: "End-to-end ownership", icon: <ShieldCheck className="w-5 h-5" />, desc: "We own the results, not just the code." },
  { text: "Data-driven decisions", icon: <BarChart3 className="w-5 h-5" />, desc: "Every move backed by analytics." },
  { text: "Built for global scalability", icon: <Globe className="w-5 h-5" />, desc: "Infrastructure that grows with you." },
  { text: "Transparent collaboration", icon: <CheckCircle2 className="w-5 h-5" />, desc: "Real-time updates and active partnership." }
];

const stats = [
  {
    icon: <Brain className="w-8 h-8 text-brand-blue" />,
    label: "Precision",
    value: "98%",
    sub: "AI Accuracy Rate",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20"
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-purple" />,
    label: "Speed",
    value: "21",
    sub: "Avg. Days to MVP",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/20"
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-pink" />,
    label: "Scale",
    value: "10M+",
    sub: "Global User Ready",
    color: "from-pink-500/10 to-transparent",
    border: "border-pink-500/20"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-brand-blue" />,
    label: "ROI",
    value: "3.5x",
    sub: "Efficiency Increase",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 relative overflow-hidden bg-background" id="about">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              What Makes <span className="text-gradient">Us Different</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl">
              We bring clarity and maturity to building AI-powered systems. Our approach focuses on product thinking and end-to-end excellence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-foreground transition-all duration-300">
                      {reason.icon}
                    </div>
                    <span className="text-lg font-semibold text-foreground">{reason.text}</span>
                  </div>
                  <p className="text-sm text-gray-500 ml-13 leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={cn(
                    "relative group h-64 sm:h-72 rounded-[2rem] p-8 overflow-hidden border transition-all duration-500 hover:scale-[1.02]",
                    stat.border,
                    "bg-gradient-to-br",
                    stat.color
                  )}
                >
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  
                  <div className="h-full flex flex-col justify-end">
                    <p className="text-sm font-medium text-gray-400 mb-1 uppercase tracking-widest">{stat.label}</p>
                    <h4 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">{stat.value}</h4>
                    <p className="text-sm text-gray-500 font-medium">{stat.sub}</p>
                  </div>
                  
                  {/* Hover Decoration */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
