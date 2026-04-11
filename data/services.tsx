import { Brain, Cloud, Database, BarChart3, Globe, Smartphone } from "lucide-react";
import React from "react";

export const services = [
  {
    icon: <Brain className="w-8 h-8 text-brand-blue" />,
    title: "AI Automation",
    description: "Automate repetitive tasks and decision workflows using intelligent AI systems."
  },
  {
    icon: <Cloud className="w-8 h-8 text-brand-purple" />,
    title: "SaaS Product Development",
    description: "End-to-end development of scalable SaaS platforms tailored to your business needs."
  },
  {
    icon: <Database className="w-8 h-8 text-brand-pink" />,
    title: "API & Backend Systems",
    description: "Robust backend architecture and API integrations for seamless performance."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-brand-blue" />,
    title: "Data Analytics & Insights",
    description: "Turn your data into actionable insights with AI-powered analytics."
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-purple" />,
    title: "Custom Software Solutions",
    description: "Build tailored software solutions for unique business challenges."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-brand-pink" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that provide intuitive and engaging user experiences."
  }
];
