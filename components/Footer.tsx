import Link from "next/link";
import Image from "next/image";
import { Mail, Globe, MessageCircle, Briefcase } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/mail";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8">
                <Image
                  src="/AZUO-logo.png"
                  alt="AZUO Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter text-foreground">AZUO</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Building Scalable Digital Solutions. We engineer premium digital experiences for forward-thinking brands.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-foreground transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-foreground transition-colors">
                <Briefcase className="w-5 h-5" />
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-brand-blue transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-brand-blue transition-colors">Portfolio</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-brand-purple transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-brand-purple transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-purple transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
