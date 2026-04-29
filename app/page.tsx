import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  CheckCircle2,
  CloudCog,
  Factory,
  Landmark,
  Leaf,
  LockKeyhole,
  Network,
  RadioTower,
  Satellite,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/mail";
import ScrollReveal from "@/components/ScrollReveal";

const ecochainCapabilities = [
  "Smart contract-based carbon credit lifecycle management",
  "IoT sensor integration for environmental verification",
  "ISRO satellite data validation",
  "Real-time compliance tracking and audit systems",
  "Regional-language mobile access for farmers",
  "Secure and transparent blockchain records",
  "Automated verification and reporting workflows",
];

const aiSolutions = [
  "SaaS Product Development",
  "AI Automation Systems",
  "AI Agents and Intelligent Workflows",
  "Enterprise Web Applications",
  "Mobile App Development",
  "Business Process Automation",
  "API and System Integrations",
  "Custom Dashboards and Analytics Platforms",
];

const whyAzuo = [
  {
    icon: <Blocks className="h-5 w-5" />,
    title: "Innovation-Driven Engineering",
    text: "We combine blockchain, AI, automation, and data intelligence into scalable real-world systems.",
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    title: "Built for India",
    text: "Our platforms are designed for Indian operating environments, regional accessibility, and large-scale adoption.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Enterprise-Ready Architecture",
    text: "We prioritize scalability, interoperability, security, and long-term maintainability in every system.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Automation First",
    text: "Our solutions reduce manual processes, improve operational visibility, and enable faster decisions.",
  },
  {
    icon: <LockKeyhole className="h-5 w-5" />,
    title: "Data Transparency and Trust",
    text: "From blockchain audit trails to AI-driven analytics, our systems are built around reliability.",
  },
];

const industries = [
  "Climate and Sustainability",
  "Agriculture and Rural Technology",
  "Manufacturing",
  "MSMEs and Enterprises",
  "Government and Public Sector",
  "Logistics and Supply Chain",
  "Financial and Compliance Systems",
  "Smart Infrastructure",
];

const techStack = [
  {
    title: "Blockchain",
    icon: <Blocks className="h-5 w-5" />,
    items: ["Hyperledger Fabric", "MeitY Vishvasya Stack", "Smart Contracts", "Distributed Ledger Systems"],
  },
  {
    title: "Artificial Intelligence",
    icon: <Bot className="h-5 w-5" />,
    items: ["AI Agents", "Workflow Automation", "Predictive Systems", "Intelligent Analytics"],
  },
  {
    title: "Software Engineering",
    icon: <CloudCog className="h-5 w-5" />,
    items: ["Cloud Infrastructure", "Mobile Applications", "SaaS Platforms", "API Integrations", "Enterprise Dashboards"],
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">{eyebrow}</p>
      <h2 className={`text-3xl font-semibold tracking-tight md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f6f8fb] text-slate-950">
      <section className="relative overflow-hidden bg-[#071315] pt-28 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(24,95,74,0.35),transparent_42%),linear-gradient(0deg,rgba(7,19,21,0.2),rgba(7,19,21,1))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,183,125,0.12)_0,transparent_32%),radial-gradient(circle_at_80%_0%,rgba(31,100,255,0.1)_0,transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <ScrollReveal className="min-w-0" y={18}>
            <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-slate-200">
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-teal" />
              <span>Blockchain, AI and intelligent digital systems</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Building India&apos;s Future with Blockchain, AI, and Intelligent Digital Systems
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
              AZUO Technologies develops scalable technology platforms that help industries,
              governments, farmers, and businesses operate more efficiently through blockchain
              infrastructure, AI automation, and intelligent software systems.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-6 py-3 text-sm font-semibold text-[#061010] transition hover:bg-[#45e0a7]"
              >
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative min-w-0" delay={0.12} y={24}>
            <div className="hero-system-card rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl backdrop-blur sm:p-5">
              <div className="mb-5 flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Image src="/AZUO-logo.png" alt="AZUO Technologies" width={48} height={48} className="rounded-md" priority />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">EcoChain Bharat</p>
                    <p className="text-xs text-slate-400 break-words">Blockchain infrastructure for carbon credit management</p>
                  </div>
                </div>
                <span className="w-fit rounded-full bg-brand-teal/15 px-3 py-1 text-xs font-medium text-brand-teal">
                  Climate Tech
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 text-center text-xs text-slate-300 min-[440px]:grid-cols-3">
                {["Farm activity", "Verification", "Credit ledger"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-black/20 px-3 py-4">
                    {item}
                  </div>
                ))}
              </div>
              <div className="my-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-brand-teal">
                <div className="h-px bg-brand-teal/40" />
                <Satellite className="h-5 w-5" />
                <div className="h-px bg-brand-teal/40" />
                <RadioTower className="h-5 w-5" />
                <div className="h-px bg-brand-teal/40" />
              </div>
              <div className="grid gap-3">
                {[
                  ["Farmers and FPOs", "Generate and record sustainable carbon activity."],
                  ["Industries", "Manage compliance obligations with better visibility."],
                  ["Regulators and auditors", "Access transparent records, evidence, and reports."],
                ].map(([label, detail]) => (
                  <div key={label} className="flex items-start gap-4 rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <div className="rounded-md bg-brand-teal/12 p-2 text-brand-teal">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="about" className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">About AZUO</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Next-generation digital infrastructure for real-world deployment.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-base leading-8 text-slate-600 md:text-lg" delay={0.08}>
            <p>
              AZUO Technologies is an Indian technology company focused on building next-generation
              digital infrastructure and intelligent business systems.
            </p>
            <p>
              Our work combines blockchain technology, AI automation, SaaS platforms, and enterprise
              software engineering to solve large-scale operational and compliance challenges across industries.
            </p>
            <p>
              From carbon credit ecosystems powered by government blockchain infrastructure to
              AI-driven automation tools for businesses, AZUO builds practical technology designed
              for scalability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="solutions" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our core solutions"
              title="Climate infrastructure and intelligent software under one technology company."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScrollReveal className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8" delay={0.06}>
              <div className="mb-6 inline-flex rounded-md bg-emerald-50 p-3 text-brand-green">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-950">EcoChain Bharat</h3>
              <p className="mt-2 font-medium text-brand-green">Blockchain Infrastructure for Carbon Credit Management</p>
              <p className="mt-5 leading-8 text-slate-600">
                EcoChain Bharat is a blockchain-powered climate technology platform designed to
                modernize and streamline carbon credit management in India. Built on MeitY&apos;s
                Vishvasya National Blockchain Stack using Hyperledger Fabric, it connects farmers,
                FPOs, industries, regulatory bodies, auditors, and environmental monitoring systems.
              </p>
              <div className="mt-6 grid gap-3">
                {ecochainCapabilities.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md bg-slate-50 p-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8" delay={0.14}>
              <div className="mb-6 inline-flex rounded-md bg-brand-teal/12 p-3 text-brand-teal">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">AI and Digital Solutions</h3>
              <p className="mt-2 font-medium text-brand-teal">Intelligent Software for Modern Businesses</p>
              <p className="mt-5 leading-8 text-slate-300">
                AZUO develops custom digital platforms and AI-powered systems that help organizations
                automate operations, improve productivity, and accelerate digital transformation.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {aiSolutions.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-slate-600" delay={0.1}>
            We focus on building practical, scalable systems tailored to operational realities,
            not generic solutions that force businesses to change how they work.
          </ScrollReveal>
        </div>
      </section>

      <section id="why" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Why AZUO" title="Engineered for trust, automation, and scale." light />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {whyAzuo.map((item, index) => (
              <ScrollReveal key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5" delay={index * 0.05}>
                <div className="mb-5 inline-flex rounded-md bg-brand-teal/12 p-3 text-brand-teal">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Industries we serve"
              title="Built for sectors where operations, compliance, and trust matter."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-[#f8fafc] p-5" delay={index * 0.035}>
                <Factory className="h-5 w-5 shrink-0 text-brand-green" />
                <span className="font-medium text-slate-800">{industry}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Technology stack" title="Modern infrastructure across blockchain, AI, and software engineering." />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {techStack.map((group, index) => (
              <ScrollReveal key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" delay={index * 0.08}>
                <div className="mb-5 inline-flex rounded-md bg-emerald-50 p-3 text-brand-green">{group.icon}</div>
                <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                <div className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071315] py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">Vision</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Intelligent digital infrastructure for transparency, automation, sustainability, and scalable innovation.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="rounded-lg border border-white/10 bg-white/[0.04] p-6" delay={0.1}>
            <Network className="h-8 w-8 text-brand-teal" />
            <h3 className="mt-6 text-2xl font-semibold">Let&apos;s Build the Future Together</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Whether you&apos;re looking to modernize operations, deploy AI systems, develop scalable
              software, or explore blockchain-powered solutions, AZUO Technologies is ready to collaborate.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-[#061010]"
              >
                Schedule a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:gap-5">
              <span>Website: www.azuo.in</span>
              <span>Location: India</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
