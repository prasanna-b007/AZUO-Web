import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/mail";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Technology", href: "/#technology" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/AZUO-logo.png" alt="AZUO Technologies" width={42} height={42} className="rounded-md" />
              <div>
                <p className="text-xl font-semibold tracking-tight text-slate-950">AZUO Technologies</p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">Climate tech and AI</p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Building blockchain, AI, SaaS, and enterprise software systems for real-world
              operational and compliance challenges.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Navigate</h3>
            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-700 hover:text-brand-green">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Reach us</h3>
            <div className="mt-5 grid gap-4 text-sm text-slate-700">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 hover:text-brand-green">
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AZUO Technologies. All rights reserved.</p>
          <p>Website: www.azuo.in</p>
        </div>
      </div>
    </footer>
  );
}
