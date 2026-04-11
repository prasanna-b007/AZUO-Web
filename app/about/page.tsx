"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { Mail, Phone, MapPin } from "lucide-react";

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
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

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-gradient">Core Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals behind AZUO, dedicated to pushing the boundaries of technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-8 bg-glass border border-white/5 rounded-3xl hover:border-brand-purple/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-col gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl block hover:text-brand-purple transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 flex items-center justify-center text-2xl font-bold text-white border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-purple transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue font-medium text-sm tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="space-y-4 w-full">
                <div className="flex items-center gap-4 text-sm text-gray-400 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:text-brand-blue transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:text-brand-purple transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-start gap-4 text-sm text-gray-400 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover/item:text-brand-blue transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-relaxed">{member.address}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}

