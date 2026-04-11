"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/utils";
import React from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "gradient" | "outline" | "glass" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconAnimation?: "none" | "bounce" | "slide" | "rotate";
  glow?: boolean;
  shimmer?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    icon, 
    iconPosition = "left",
    iconAnimation = "slide", 
    glow = true, 
    shimmer = true,
    children, 
    ...props 
  }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full overflow-hidden group isolate";
    
    const variants = {
      primary: "bg-white text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border border-transparent",
      secondary: "bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
      gradient: "bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink text-white border-0 shadow-lg shadow-brand-purple/20 hover:scale-[1.03] active:scale-[0.97]",
      outline: "bg-transparent border-2 border-white/10 text-white hover:border-white/40 hover:bg-white/5",
      glass: "bg-white/5 backdrop-blur-xl text-white border border-white/10 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
      ghost: "bg-transparent text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5"
    };

    const sizes = {
      sm: "px-5 py-2 text-sm gap-2",
      md: "px-8 py-3.5 text-base gap-2.5",
      lg: "px-10 py-4.5 text-lg gap-3",
      xl: "px-12 py-5 text-xl gap-4"
    };

    const iconAnims = {
      none: "",
      bounce: "group-hover:-translate-y-1 transition-transform",
      slide: "group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform",
      rotate: "group-hover:rotate-12 transition-transform"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Shimmer Effect */}
        {shimmer && (
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-full">
            <motion.div
              animate={{
                x: ["-150%", "150%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform-gpu"
              style={{ width: "200%" }}
            />
          </div>
        )}

        {/* Hover Gradient Glow Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-brand-purple/20 to-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-[inherit]">
          {icon && iconPosition === "left" && (
            <span className={cn("inline-flex shrink-0", iconAnims[iconAnimation])}>
              {icon}
            </span>
          )}
          <span>{children}</span>
          {icon && iconPosition === "right" && (
            <span className={cn("inline-flex shrink-0", iconAnims[iconAnimation])}>
              {icon}
            </span>
          )}
        </span>

        {/* Border Glow for Glass/Secondary */}
        {(variant === 'glass' || variant === 'secondary') && (
          <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/30 transition-colors z-0" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
