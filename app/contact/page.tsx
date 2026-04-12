"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/mail";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        setTimeout(() => setFormStatus("idle"), 5000);
        (e.target as HTMLFormElement).reset();
      } else {
        const error = await response.json();
        alert(error.message || "Failed to send message. Please try again.");
        setFormStatus("idle");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
      setFormStatus("idle");
    }
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-64 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Let's <span className="text-gradient">Talk</span>
          </h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Reach out to us directly or fill out the form and our team will get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-glass rounded-xl text-brand-purple">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-400">9345857136<br />Mon-Fri, 9am-6pm IST</p>

                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-glass rounded-xl text-brand-pink">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-400">{CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-glass p-8 rounded-2xl border border-white/5 shadow-2xl relative"
          >
            {formStatus === "success" && (
              <div className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20 flex-col text-center p-8">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-4 rounded-lg bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-brand-purple hover:text-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
