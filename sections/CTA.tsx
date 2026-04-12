"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

export default function CTA() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-brand-purple/5 to-[#0a0a0a]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-7xl font-bold tracking-tighter mb-8"
        >
          Ready to Transform{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            Your Business?
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Let&apos;s build intelligent systems that work for you. Reach out today and start your journey towards intelligent automation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Magnetic strength={0.3}>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<Rocket className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Start Now
              </Button>
            </Link>
          </Magnetic>
          <Magnetic strength={0.3}>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={<MessageSquare className="w-5 h-5" />}
                iconAnimation="bounce"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
