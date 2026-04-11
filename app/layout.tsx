import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import CursorGlow from "@/components/ui/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AZUO | Building Scalable Digital Solutions",
  description: "AZUO is a premium tech brand engineering web apps, SaaS, and automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-brand-purple/30 overflow-x-hidden">
        <SmoothScroll>
          <PageLoader />
          <CursorGlow />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
