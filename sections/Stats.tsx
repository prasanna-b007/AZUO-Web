"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "+" },
  { label: "Client Rating", value: 4.9, suffix: "" }
];

function Counter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const duration = 1500;
      const steps = Number.isInteger(end) ? end : end * 10;
      const incrementTime = duration / steps;

      const timer = setInterval(() => {
        start += (end > from ? 1 : -1) * (Number.isInteger(end) ? 1 : 0.1);
        if (
          (end > from && start >= end) ||
          (end < from && start <= end)
        ) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.round(start * 10) / 10);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, from, to]);

  return (
    <span ref={nodeRef} className="text-5xl md:text-6xl font-bold text-foreground tracking-tighter">
      {count}
      <span className="text-brand-blue">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-purple/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="flex flex-col items-center py-6 md:py-0"
            >
              <Counter from={0} to={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-4 uppercase tracking-widest text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
