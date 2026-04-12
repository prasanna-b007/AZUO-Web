"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "AZUO delivered a world-class SaaS platform that completely transformed our operations. Their technical expertise is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Horizon"
  },
  {
    quote: "The attention to detail and performance optimization was incredible. Our new web application is blisteringly fast.",
    author: "David Chen",
    role: "Founder, EcoCommerce"
  },
  {
    quote: "Highly professional team that understands scale. They didn't just build software, they built a sustainable architecture for our growth.",
    author: "Elena Rodriguez",
    role: "VP Engineering, HealthSync"
  }
];

export default function Testimonials() {
  return (
    <section className="py-10 bg-[#050505] relative border-y border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Client Success
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-glass border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex text-brand-blue mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{test.quote}"</p>
              <div>
                <p className="text-foreground font-semibold">{test.author}</p>
                <p className="text-gray-500 text-sm">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
