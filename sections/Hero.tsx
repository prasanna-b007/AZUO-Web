"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Rocket, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] mb-2"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full relative"
          >
            <Image
              src="/AZUO-logo.png"
              alt="AZUO Logo Large"
              fill
              className="object-contain scale-[1.5] drop-shadow-[0_0_30px_rgba(14,165,233,0.4)]"
            />
          </motion.div>
        </motion.div>



        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 max-w-4xl"
        >
          Build <span className="text-gradient">Smarter</span> Scale Faster with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed"
        >
          We design and deliver AI-powered SaaS solutions and automation systems that help businesses streamline operations, reduce costs, and unlock growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-12"
        >
          <Magnetic strength={0.2}>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<Rocket className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
            </Link>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={<PhoneCall className="w-5 h-5" />}
                iconAnimation="rotate"
                className="w-full sm:w-auto"
              >
                Book a Demo
              </Button>
            </Link>
          </Magnetic>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-sm tracking-widest uppercase font-medium"
        >
          Empowering startups, MSMEs, and enterprises with intelligent automation
        </motion.p>
      </div>


    </section>
  );
}
