import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Products from "@/sections/Products";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Features from "@/sections/Features";
import BusinessModel from "@/sections/BusinessModel";
import Process from "@/sections/Process";
import TechStack from "@/sections/TechStack";
import Industries from "@/sections/Industries";
import Stats from "@/sections/Stats";
import Portfolio from "@/sections/Portfolio";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent blur-sm" />
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <Products />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <Features />
      <Divider />
      <BusinessModel />
      <Divider />
      <Process />
      <Divider />
      <TechStack />
      <Divider />
      <Industries />
      <Divider />
      <Stats />
      <Divider />
      <Portfolio />
      <Divider />
      <Testimonials />
      <Divider />
      <CTA />
    </div>
  );
}
