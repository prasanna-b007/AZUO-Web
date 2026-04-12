"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/Button";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none pt-4 px-4 sm:pt-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "pointer-events-auto w-full max-w-7xl transition-all duration-500 ease-in-out border overflow-hidden",
          isOpen ? "bg-black/90 backdrop-blur-2xl rounded-3xl px-6 py-2 border-white/20" : 
          (scrolled 
            ? "bg-black/60 backdrop-blur-xl rounded-full px-5 md:px-8 py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border-white/20" 
            : "bg-white/5 backdrop-blur-md rounded-[2.5rem] px-6 md:px-10 py-5 border-white/10")
        )}
      >
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group pointer-events-auto">
            <motion.div
              animate={{ 
                rotate: scrolled ? 0 : [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="relative w-11 h-11"
            >
              <Image
                src="/AZUO-logo.png"
                alt="AZUO Logo"
                fill
                className="object-contain drop-shadow-[0_0_8px_rgba(14,165,233,0.5)] scale-110"
              />
            </motion.div>
            <span className="text-2xl md:text-4xl font-bold tracking-tighter text-white">
              AZUO
            </span>
          </Link>

          <div className="hidden md:block">
            <LayoutGroup>
              <div className="flex items-center gap-1">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-full",
                      pathname === link.href 
                        ? "text-white" 
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {pathname === link.href && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                    {link.name}
                  </Link>
                ))}
              </div>
            </LayoutGroup>
          </div>

          <div className="hidden md:flex items-center">
             <Link href="/contact">
               <Button variant="gradient" size="md">
                 Let&apos;s Talk
               </Button>
             </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-2xl text-lg font-medium transition-all",
                      pathname === link.href
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink"
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
