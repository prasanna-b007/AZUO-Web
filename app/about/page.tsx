import { Blocks, Bot, CloudCog, Landmark } from "lucide-react";

const pillars = [
  {
    icon: <Blocks className="h-5 w-5" />,
    title: "Blockchain infrastructure",
    text: "Carbon credit systems, distributed ledgers, smart contracts, and transparent audit trails.",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI automation",
    text: "AI agents, intelligent workflows, predictive systems, and practical automation for operations.",
  },
  {
    icon: <CloudCog className="h-5 w-5" />,
    title: "Software engineering",
    text: "SaaS platforms, dashboards, mobile apps, APIs, and enterprise-grade digital systems.",
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    title: "India-ready deployment",
    text: "Technology designed for regional accessibility, scale, interoperability, and real-world adoption.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f6f8fb] pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">About AZUO</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Building next-generation digital infrastructure and intelligent business systems.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              AZUO Technologies is an Indian technology company focused on blockchain technology,
              AI automation, SaaS platforms, and enterprise software engineering.
            </p>
            <p>
              From carbon credit ecosystems powered by government blockchain infrastructure to
              AI-driven automation tools for businesses, AZUO builds practical technology designed
              for deployment and scalability.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex rounded-md bg-emerald-50 p-3 text-brand-green">{item.icon}</div>
              <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
