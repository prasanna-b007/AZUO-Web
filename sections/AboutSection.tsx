"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Users } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-10 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-mono uppercase mb-6"
            >
              <Users className="w-3 h-3" />
              Who We Are
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Engineering the <span className="text-gradient">Next Era</span> of Intelligence.
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              AZUO is a premium digital agency that bridges the gap between complex business challenges and intelligent AI-powered solutions. We don&apos;t just build software; we engineer scalability.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg mb-1">Our Mission</h4>
                  <p className="text-gray-500 text-sm">To simplify global business operations through accessible, high-performance AI systems.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-brand-pink" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg mb-1">Our Vision</h4>
                  <p className="text-gray-500 text-sm">To set the gold standard for intelligent digital transformation internationally.</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-foreground font-semibold group border-b border-white/10 pb-1 hover:border-brand-blue transition-all"
            >
              Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Side: Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-pink/20 border border-white/10 overflow-hidden group">
               {/* Abstract decorative elements */}
               <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-pulse" />
               <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-brand-blue/10 rounded-full blur-2xl" />
               
               <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <div className="space-y-4">
                    <div className="text-7xl font-black text-foreground/10 group-hover:text-foreground/20 transition-colors">AZUO</div>
                    <p className="text-brand-purple font-mono text-sm tracking-[0.3em] uppercase">Intelligence Squared</p>
                  </div>
               </div>
            </div>
            
            {/* Floating UI pips */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 p-6 bg-glass border border-white/10 rounded-2xl backdrop-blur-2xl shadow-2xl"
            >
               <div className="text-3xl font-bold text-foreground mb-1">98%</div>
               <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Efficiency Gain</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
