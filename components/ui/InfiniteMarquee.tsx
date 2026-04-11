"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";

interface InfiniteMarqueeProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  direction = "left",
  speed = 40,
  className,
  pauseOnHover = true,
}) => {
  return (
    <div className={cn("flex overflow-hidden group/marquee select-none py-10", className)}>
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className={cn(
          "flex items-center gap-10 min-w-full shrink-0",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]"
        )}
      >
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
};
