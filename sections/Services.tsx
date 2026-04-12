"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/data/services";
import { containerVariants, itemVariants } from "@/lib/animations";


export default function Services({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="py-10 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showTitle && (
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              We combine AI, cloud, and modern software architecture to deliver forward-ready products.
            </motion.p>
          </div>
        )}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <SpotlightCard className="p-8 h-full bg-glass border-white/5 hover:border-white/10 transition-all duration-300 group">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 p-4 bg-background rounded-xl inline-block w-fit border border-white/10 group-hover:scale-110 group-hover:border-brand-blue/50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-400 flex-grow leading-relaxed">{service.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
