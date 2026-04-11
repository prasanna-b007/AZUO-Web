import Portfolio from "@/sections/Portfolio";
import CTA from "@/sections/CTA";

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-0">
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Our <span className="text-gradient">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-400">
          Explore our recent projects. We've helped startups and enterprises alike build category-defining products.
        </p>
      </div>
      
      {/* Reusing Home page portfolio section but without the title since we have the page header */}
      <Portfolio />
      
      <CTA />
    </div>
  );
}
