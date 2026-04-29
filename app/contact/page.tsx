"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/mail";

type FormStatus = "idle" | "submitting" | "success" | "fallback" | "error";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [mailtoHref, setMailtoHref] = useState(`mailto:${CONTACT_EMAIL}`);

  const statusMessage = useMemo(() => {
    if (formStatus === "success") return "Message sent successfully.";
    if (formStatus === "fallback") return "The website mail service is not configured yet. Please send through your email app.";
    if (formStatus === "error") return "Something went wrong. Please contact AZUO directly by email.";
    return "";
  }, [formStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const subject = String(data.subject || "AZUO Technologies enquiry");
    const body = [
      `Name: ${data.name || ""}`,
      `Email: ${data.email || ""}`,
      "",
      String(data.message || ""),
    ].join("\n");

    setMailtoHref(`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
        return;
      }

      const result = await response.json().catch(() => ({}));
      setFormStatus(result.code === "EMAIL_NOT_CONFIGURED" ? "fallback" : "error");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-[#f6f8fb] pt-32">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">Contact</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Let&apos;s Build the Future Together
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you&apos;re looking to modernize operations, deploy AI systems, develop scalable
            software, or explore blockchain-powered solutions, AZUO Technologies is ready to collaborate.
          </p>

          <div className="mt-10 grid gap-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-sm hover:text-brand-green">
              <Mail className="h-5 w-5" />
              {CONTACT_EMAIL}
            </a>
            <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
              <MapPin className="h-5 w-5 text-brand-green" />
              India
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          {statusMessage ? (
            <div
              className={`mb-6 rounded-md border px-4 py-3 text-sm font-medium ${
                formStatus === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-amber-200 bg-amber-50 text-amber-900"
              }`}
            >
              <p>{statusMessage}</p>
              {formStatus === "fallback" || formStatus === "error" ? (
                <a href={mailtoHref} className="mt-2 inline-flex font-semibold underline">
                  Open email to {CONTACT_EMAIL}
                </a>
              ) : null}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Full name
                <input name="name" required className="min-w-0 rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input name="email" type="email" required className="min-w-0 rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100" placeholder="you@company.com" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Subject
              <input name="subject" required className="min-w-0 rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100" placeholder="AI automation, software, or blockchain project" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea name="message" required rows={6} className="min-w-0 resize-none rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100" placeholder="Tell us what you want to build..." />
            </label>
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formStatus === "submitting" ? "Sending..." : "Schedule a Consultation"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
