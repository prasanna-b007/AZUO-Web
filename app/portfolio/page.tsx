import Link from "next/link";
import { ArrowRight, Blocks, Bot, Leaf } from "lucide-react";

const work = [
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "EcoChain Bharat",
    status: "Climate technology",
    text: "Blockchain carbon credit platform concept for farmer activity verification, credit issuance, industry buying, and regulator oversight.",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI automation systems",
    status: "AI systems",
    text: "AI workflows and agents for businesses that need practical automation rather than generic demonstrations.",
  },
  {
    icon: <Blocks className="h-5 w-5" />,
    title: "Digital product builds",
    status: "Software engineering",
    text: "Websites, mobile apps, SaaS dashboards, integrations, and business software for Indian MSMEs and startups.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[#f6f8fb] pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">Work</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Blockchain, AI, and digital systems built around real operational problems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore AZUO&apos;s core product direction and technology capabilities across climate
            infrastructure, AI automation, and enterprise software.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {work.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex rounded-md bg-emerald-50 p-3 text-brand-green">{item.icon}</div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.status}</p>
              <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Work with AZUO <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
