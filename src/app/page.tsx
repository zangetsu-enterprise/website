"use client";

import { useState } from "react";

/* ---------- Data (all real & verifiable) ---------- */

const STATS = [
  { value: "25+", label: "Projects built" },
  { value: "59", label: "GitHub repositories" },
  { value: "100", label: "Digital products" },
  { value: "6", label: "Micro-SaaS live" },
];

const PRODUCTS = [
  {
    name: "PriceHawk",
    tagline: "Track price drops on any store URL. Set target prices and get alerted.",
    category: "Micro-SaaS",
    live: "https://pricehawk-carlosreyesafks-projects.vercel.app",
    repo: "https://github.com/zangetsu-enterprise/pricehawk",
    accent: "#4e7dd4",
  },
  {
    name: "ContractKit",
    tagline: "Freelance contracts & invoices that get you paid. Free generator with late-fee clauses.",
    category: "Micro-SaaS",
    live: "https://contractkit-chachi.vercel.app",
    repo: "https://github.com/zangetsu-enterprise/contractkit",
    accent: "#d4a94e",
  },
  {
    name: "HireWire",
    tagline: "AI jobs, curated for people who build the future. Job board with verified AI positions.",
    category: "Micro-SaaS",
    live: "https://chachi-hirewire-b9fnrddjj-carlosreyesafks-projects.vercel.app",
    repo: "https://github.com/zangetsu-enterprise/hirewire",
    accent: "#34d399",
  },
  {
    name: "AgentHire",
    tagline: "Find vetted AI agencies & automation consultants. Directory of verified AI agencies.",
    category: "Micro-SaaS",
    live: "https://chachi-agenthire-quqkdeduj-carlosreyesafks-projects.vercel.app",
    repo: "https://github.com/zangetsu-enterprise/agenthire",
    accent: "#f472b6",
  },
  {
    name: "ListingKit",
    tagline: "Listing marketing kits for real estate agents.",
    category: "Micro-SaaS",
    live: "https://chachi-listingkit-lraiw2trq-carlosreyesafks-projects.vercel.app",
    repo: "https://github.com/zangetsu-enterprise/listingkit",
    accent: "#fbbf24",
  },
  {
    name: "ProfitStack",
    tagline: "AI tools that actually pay for themselves. Curated directory of verified AI tools.",
    category: "Micro-SaaS",
    live: "https://chachi-profitstack-2u2d6uts0-carlosreyesafks-projects.vercel.app",
    repo: "https://github.com/zangetsu-enterprise/profitstack",
    accent: "#a78bfa",
  },
  {
    name: "CobraYa",
    tagline: "Collections SaaS for Dominican SMEs — debtor dashboard, 1-click WhatsApp reminders.",
    category: "SaaS",
    live: "https://cobraya-xi.vercel.app",
    repo: "https://github.com/carlosreyesafk/carlosreyesafk-cobraya",
    accent: "#22d3ee",
  },
  {
    name: "Zangetsu Brain",
    tagline: "The command center — a 3D neural visualization of every business, project and metric.",
    category: "Platform",
    live: "https://zangetsu-enterprise-afk.netlify.app/",
    repo: "https://github.com/zangetsu-enterprise",
    accent: "#f0c75e",
  },
];

const SERVICES = [
  {
    title: "Custom Web Development",
    desc: "High-performance websites and web apps built with React, Next.js, TypeScript and Supabase. From landing pages to full platforms.",
    icon: "◈",
  },
  {
    title: "Micro-SaaS Development",
    desc: "Focused software products that solve one painful problem well — designed, built and shipped fast with AI-assisted development.",
    icon: "⬡",
  },
  {
    title: "Digital Products",
    desc: "Templates, kits and tools sold on Gumroad — from freelance contracts to AI prompt packs for real industries.",
    icon: "⬢",
  },
  {
    title: "AI Automation",
    desc: "Workflows and agents that remove repetitive work — outreach systems, content pipelines, and business dashboards.",
    icon: "✦",
  },
];

const STACK = [
  "React",
  "TypeScript",
  "Next.js",
  "Supabase",
  "Node.js",
  "Python",
  "Vercel",
  "Docker",
  "Flutter",
];

/* ---------- Components ---------- */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050510]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#f0c75e] to-[#9a742f] text-lg font-black text-[#0a0a14]">
            Z
          </div>
          <span className="text-sm font-bold tracking-[0.2em] uppercase">
            Zangetsu <span className="text-gradient-gold">Enterprise</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-[#8a8aa3] md:flex">
          <a href="#products" className="transition-colors hover:text-white">Products</a>
          <a href="#services" className="transition-colors hover:text-white">Services</a>
          <a href="#founder" className="transition-colors hover:text-white">Founder</a>
          <a href="#contact" className="btn-gold rounded-lg px-5 py-2.5 text-sm">
            Contact
          </a>
        </div>
        <a href="#contact" className="btn-gold rounded-lg px-4 py-2 text-sm md:hidden">
          Contact
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-pattern absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wider text-[#8a8aa3] uppercase">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Digital holding company — Est. 2026
        </div>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Zangetsu <span className="text-gradient-gold">Enterprise</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#8a8aa3] md:text-xl">
          Building the future,{" "}
          <span className="text-white">one product at a time.</span>
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#8a8aa3]/80 md:text-base">
          A portfolio of AI-powered micro-SaaS, developer tools and digital
          products — designed, built and shipped with AI-assisted development.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#products" className="btn-gold w-full rounded-xl px-8 py-3.5 text-center sm:w-auto">
            Explore Products
          </a>
          <a
            href="https://github.com/zangetsu-enterprise"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full rounded-xl px-8 py-3.5 text-center text-white sm:w-auto"
          >
            GitHub Organization
          </a>
        </div>
      </div>
    </header>
  );
}

function Stats() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-12 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-black text-gradient-gold md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs tracking-[0.18em] text-[#8a8aa3] uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
  const shown = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="products" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="mb-4 text-xs font-bold tracking-[0.25em] text-[#d4a94e] uppercase">
        Portfolio
      </div>
      <h2 className="text-3xl font-black md:text-5xl">
        Products that <span className="text-gradient-blue">ship</span>
      </h2>
      <p className="mt-4 max-w-2xl text-[#8a8aa3]">
        Every product below is live and verifiable — click through to use it or
        inspect the source code.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm transition-all ${
              filter === c
                ? "bg-[#d4a94e] font-semibold text-[#0a0a14]"
                : "border border-white/10 text-[#8a8aa3] hover:border-white/25 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article key={p.name} className="card flex flex-col p-6">
            <div
              className="mb-4 h-1.5 w-12 rounded-full"
              style={{ background: p.accent }}
            />
            <div className="mb-1 text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: p.accent }}>
              {p.category}
            </div>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8a8aa3]">
              {p.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 rounded-lg px-4 py-2.5 text-center text-sm"
              >
                Live Demo →
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-lg px-4 py-2.5 text-sm text-white"
                aria-label={`${p.name} source code`}
              >
                &lt;/&gt;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-4 text-xs font-bold tracking-[0.25em] text-[#d4a94e] uppercase">
          Services
        </div>
        <h2 className="text-3xl font-black md:text-5xl">
          What we <span className="text-gradient-gold">build</span>
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.title} className="card p-7">
              <div className="mb-4 text-3xl text-gradient-gold">{s.icon}</div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8a8aa3]">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="mb-4 text-xs tracking-[0.2em] text-[#8a8aa3] uppercase">
            Built with
          </div>
          <div className="flex flex-wrap gap-2.5">
            {STACK.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-[#c9c9d9]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="card overflow-hidden md:flex">
        <div className="flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] p-10 md:w-2/5">
          <div className="animate-float flex h-40 w-40 items-center justify-center rounded-3xl bg-gradient-to-br from-[#f0c75e] to-[#9a742f] text-6xl font-black text-[#0a0a14] shadow-[0_0_60px_rgba(212,169,78,0.3)]">
            CR
          </div>
        </div>
        <div className="p-8 md:w-3/5 md:p-12">
          <div className="mb-3 text-xs font-bold tracking-[0.25em] text-[#d4a94e] uppercase">
            Founder
          </div>
          <h2 className="text-3xl font-black">Carlos Reyes</h2>
          <p className="mt-1 text-sm text-[#8a8aa3]">
            Systems & Computer Engineer · AI-assisted developer
          </p>
          <p className="mt-5 leading-relaxed text-[#c9c9d9]">
            Carlos founded Zangetsu Enterprise to build software the way it
            should be built in the AI era — fast, focused, and shipped. Every
            product in the portfolio is designed and engineered by him using
            AI-assisted development workflows, from concept to production
            deployment.
          </p>
          <p className="mt-4 leading-relaxed text-[#c9c9d9]">
            His approach: small teams (or none), tight feedback loops, and
            products that solve one painful problem exceptionally well.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/carlosreyesafk/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline rounded-lg px-5 py-2.5 text-sm text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/carlosreyesafk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline rounded-lg px-5 py-2.5 text-sm text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Zangetsu Enterprise] Inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:carlosreyesafk@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <div className="mb-4 text-center text-xs font-bold tracking-[0.25em] text-[#d4a94e] uppercase">
          Contact
        </div>
        <h2 className="text-center text-3xl font-black md:text-5xl">
          Let&apos;s build <span className="text-gradient-gold">something</span>
        </h2>
        <p className="mt-4 text-center text-[#8a8aa3]">
          Have a project in mind, or want to work together? Send a message.
        </p>

        {sent ? (
          <div className="card mt-10 p-8 text-center">
            <div className="text-4xl">✉️</div>
            <p className="mt-4 font-semibold">Your email client should have opened.</p>
            <p className="mt-2 text-sm text-[#8a8aa3]">
              If it didn&apos;t, write directly to{" "}
              <a href="mailto:carlosreyesafk@gmail.com" className="text-[#d4a94e] underline">
                carlosreyesafk@gmail.com
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="card mt-10 space-y-5 p-7 md:p-9">
            <div>
              <label className="mb-2 block text-sm text-[#8a8aa3]">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-[#55556a] focus:border-[#d4a94e]/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-[#8a8aa3]">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-[#55556a] focus:border-[#d4a94e]/60"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-[#8a8aa3]">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-[#55556a] focus:border-[#d4a94e]/60"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn-gold w-full rounded-xl px-8 py-3.5">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="gold-divider mb-8" />
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f0c75e] to-[#9a742f] font-black text-[#0a0a14]">
              Z
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8a8aa3]">
              Zangetsu Enterprise
            </span>
          </div>
          <div className="flex gap-6 text-sm text-[#8a8aa3]">
            <a href="https://github.com/zangetsu-enterprise" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/carlosreyesafk/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              LinkedIn
            </a>
            <a href="https://zangetsu-enterprise-afk.netlify.app/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Command Center
            </a>
          </div>
          <p className="text-xs text-[#55556a]">
            © 2026 Zangetsu Enterprise. Building the future, one product at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Products />
      <Services />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}
