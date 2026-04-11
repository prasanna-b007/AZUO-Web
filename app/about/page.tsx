"use client";

import { motion } from "framer-motion";
import CTA from "@/sections/CTA";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Who <span className="text-gradient">We Are</span>
          </h1>
          <p className="text-xl text-gray-400">
            We are a next-generation software company focused on building <strong>AI-driven SaaS platforms and automation solutions</strong>. Our mission is to simplify complex business processes using intelligent systems, enabling organizations to operate faster, smarter, and more efficiently. We combine <strong>AI, cloud, and modern software architecture</strong> to deliver scalable, secure, and future-ready products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-brand-blue pl-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              To simplify business operations through intelligent, scalable, and accessible technology.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-brand-purple pl-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              To become a global leader in AI-powered SaaS and automation, setting the standard for intelligent digital transformation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { title: "Innovation", desc: "Pushing boundaries with next-gen tech." },
            { title: "Scalability", desc: "Systems that grow with your vision." },
            { title: "Security", desc: "Enterprise-grade protection by default." },
            { title: "Quality", desc: "Premium code, exceptional experiences." }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-glass border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 text-brand-purple">{val.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}
