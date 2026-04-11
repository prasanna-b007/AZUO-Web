"use client";

import { motion } from "framer-motion";
import { CreditCard, Shield, Settings, Zap } from "lucide-react";

const models = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Subscription-based pricing",
    desc: "Predictable monthly or annual plans for organizations of all sizes."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise licensing",
    desc: "Dedicated instances and priority support for large-scale operations."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Custom solution development",
    desc: "Tailored AI architectures built specific to your unique business logic."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "API usage pricing",
    desc: "Flexible, usage-based consumption for our core intelligence APIs."
  }
];

export default function BusinessModel() {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="business-model">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            How We <span className="text-gradient">Deliver Value</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We operate on a scalable SaaS-based model designed for long-term partnership and efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 p-8 rounded-3xl bg-glass border border-white/5 hover:border-brand-blue/30 transition-all"
            >
              <div className="p-4 bg-brand-blue/10 text-brand-blue rounded-2xl h-fit">
                {model.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{model.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
