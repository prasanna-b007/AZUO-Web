"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "SmartAgri AI",
    description: "An AI-powered agricultural monitoring system that optimizes crop health and yield.",
    tag: "Agriculture"
  },
  {
    title: "InsightDash",
    description: "Advanced data analytics platform for MSMEs to track and predict business growth.",
    tag: "Analytics"
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d]" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-purple text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Our Innovations
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Our <span className="text-gradient">Products</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We build innovative digital products that solve real-world problems using AI and automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-8 rounded-3xl bg-glass border border-white/5 hover:border-brand-purple/20 transition-all group"
            >
              <span className="px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-6 inline-block">
                {product.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-purple transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {product.description}
              </p>
              <Link 
                href="/contact" 
                className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all"
              >
                Learn More <ArrowRight className="w-5 h-5 text-brand-purple" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
