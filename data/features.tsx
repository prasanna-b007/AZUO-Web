import { Bot, Cpu, ShieldCheck, Zap } from "lucide-react";
import React from "react";

export const featureItems = [
  {
    icon: <Bot className="w-6 h-6" />,
    tag: "Intelligence",
    title: "Autonomous Agents",
    desc: "Self-learning AI systems that execute complex multi-step workflows with zero human intervention.",
    stats: "99.9% Accuracy",
    color: "brand-purple"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    tag: "Infrastructure",
    title: "Neural Architecture",
    desc: "Custom-built tensor processing pipelines optimized for proprietary LLM deployments and real-time inference.",
    stats: "< 40ms Latency",
    color: "brand-blue"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    tag: "Security",
    title: "Encrypted Logic",
    desc: "End-to-end data privacy with model weight encryption and secure federated learning protocols.",
    stats: "SOC2 Ready",
    color: "brand-pink"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    tag: "Performance",
    title: "Elastic Scaling",
    desc: "Auto-scalable infrastructure that dynamically allocates resources based on real-time computational demand.",
    stats: "∞ Scalability",
    color: "brand-blue"
  }
];
