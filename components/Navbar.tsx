"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Industries", href: "/#industries" },
  { name: "Technology", href: "/#technology" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const borderGlow = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [
      "linear-gradient(120deg, rgba(57,217,159,0.45), rgba(37,99,235,0.15), rgba(255,255,255,0.18))",
      "linear-gradient(120deg, rgba(37,99,235,0.28), rgba(57,217,159,0.35), rgba(15,23,42,0.1))",
      "linear-gradient(120deg, rgba(22,143,99,0.35), rgba(91,91,214,0.2), rgba(15,23,42,0.12))",
      "linear-gradient(120deg, rgba(57,217,159,0.32), rgba(37,99,235,0.24), rgba(15,23,42,0.12))",
    ],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        style={{ background: borderGlow }}
        className="mx-auto max-w-7xl rounded-xl p-px shadow-[0_18px_60px_rgba(2,8,23,0.16)]"
      >
        <div
          className={`rounded-[11px] px-4 transition duration-500 ${
            scrolled || isOpen
              ? "bg-white/95 shadow-lg shadow-slate-950/5 backdrop-blur-2xl"
              : "bg-[#071315]/72 text-white backdrop-blur-2xl"
          }`}
        >
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <Image src="/AZUO-logo.png" alt="AZUO Technologies" width={38} height={38} className="rounded-md" />
            <div className="leading-tight">
              <p className={`text-lg font-semibold tracking-tight ${scrolled || isOpen ? "text-slate-950" : "text-white"}`}>
                AZUO
              </p>
              <p className={`text-[11px] font-medium uppercase tracking-[0.22em] ${scrolled || isOpen ? "text-slate-500" : "text-slate-300"}`}>
                Technologies
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition duration-300 ${
                  scrolled
                    ? "text-slate-700 hover:bg-emerald-50 hover:text-slate-950"
                    : "text-white/90 hover:bg-white/12 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold transition ${
                scrolled ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-brand-teal text-[#061010] hover:bg-[#45e0a7]"
              }`}
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden ${
              scrolled || isOpen ? "border-slate-200 text-slate-900" : "border-white/15 text-white"
            }`}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <div className="grid gap-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-md bg-slate-950 px-3 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : null}
        </div>
      </motion.nav>
    </header>
  );
}
