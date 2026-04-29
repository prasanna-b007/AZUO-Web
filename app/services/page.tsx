import Link from "next/link";
import { ArrowRight, Bot, Code2, Globe, Layers3, Smartphone, Workflow } from "lucide-react";

const services = [
  { icon: <Globe className="h-5 w-5" />, title: "Corporate websites", text: "High-quality web presence for startups, MSMEs, and service businesses." },
  { icon: <Layers3 className="h-5 w-5" />, title: "SaaS products", text: "Dashboards, portals, workflows, and subscription-ready software platforms." },
  { icon: <Smartphone className="h-5 w-5" />, title: "Mobile apps", text: "Mobile-first applications for operations, customers, teams, and field users." },
  { icon: <Bot className="h-5 w-5" />, title: "AI agents", text: "Agent systems for customer support, data entry, follow-ups, research, and internal operations." },
  { icon: <Workflow className="h-5 w-5" />, title: "Automation", text: "Workflow automation that connects tools, reduces manual work, and improves reliability." },
  { icon: <Code2 className="h-5 w-5" />, title: "Custom integrations", text: "APIs, backend systems, reporting layers, and business-specific digital infrastructure." },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f6f8fb] pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">Services</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Intelligent software for modern businesses.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            AZUO develops custom digital platforms and AI-powered systems that help organizations
            automate operations, improve productivity, and accelerate digital transformation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex rounded-md bg-emerald-50 p-3 text-brand-green">{service.icon}</div>
              <h2 className="text-xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Plan a project <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
