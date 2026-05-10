import React from "react";

export default function SiteForgeWebCo() {
  const services = [
    {
      title: "Custom Website Design",
      text: "Modern, mobile-friendly websites built for small businesses that want to look professional online.",
    },
    {
      title: "Business Setup Pages",
      text: "Home, services, menu, about, contact, reviews, and location sections made simple and clean.",
    },
    {
      title: "Monthly Maintenance",
      text: "Ongoing updates for hours, photos, menus, services, pricing, links, and basic website fixes.",
    },
  ];

  const portfolio = [
    "Cafe Website Mockup",
    "Plumbing Company Website",
    "Barbershop Booking Page",
    "Lawn Care Service Site",
  ];

  const pricing = [
    {
      name: "Starter Site",
      price: "$300+",
      details: "One-page website for new or small local businesses.",
    },
    {
      name: "Business Site",
      price: "$500+",
      details: "Professional multi-section website with services, reviews, contact, and call-to-action buttons.",
    },
    {
      name: "Maintenance",
      price: "$75/mo",
      details: "Monthly updates, basic edits, site checks, and keeping business information current.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-2xl font-black tracking-tight">SiteForge Web Co</p>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Websites for small businesses</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-blue-500 px-5 py-3 text-sm font-bold text-white hover:bg-blue-400">
            Get a Website
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.22),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 w-fit rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              Professional websites without agency prices
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Websites that help local businesses look trusted online.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              SiteForge Web Co builds clean, mobile-friendly websites for small businesses that need more calls, more trust, and a stronger online presence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-blue-500 px-7 py-4 text-center font-bold text-white hover:bg-blue-400">
                Start Your Website
              </a>
              <a href="#portfolio" className="rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white hover:bg-white/10">
                View Work
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-400">Suggested domain: siteforgewebco.com or siteforgetx.com</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl">
            <div className="rounded-[1.5rem] bg-slate-900 p-4">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-8 text-slate-950">
                <p className="text-sm font-bold uppercase tracking-[0.25em]">Website Preview</p>
                <h2 className="mt-4 text-4xl font-black">Your Business, Online Fast.</h2>
                <p className="mt-3 text-slate-900">Clean pages, strong calls-to-action, mobile design, and easy contact buttons.</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-2xl font-black">Mobile</p>
                  <p className="mt-2 text-sm text-slate-300">Looks great on phones.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-2xl font-black">Local</p>
                  <p className="mt-2 text-sm text-slate-300">Built for service businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Services</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Everything a small business site needs.</h2>
          <p className="mt-4 text-slate-300">Simple, professional websites built to help customers understand what you do and contact you quickly.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-black">✓</div>
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-white px-5 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Portfolio</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Demo websites that sell the idea.</h2>
            </div>
            <p className="max-w-xl text-slate-600">Use this section to show screenshots and live demos of websites you build for cafes, trades, barbers, gyms, and local services.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {portfolio.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-200 to-blue-100 text-center font-bold text-slate-700">
                  Screenshot Placeholder
                </div>
                <p className="font-black">{item}</p>
                <p className="mt-2 text-sm text-slate-600">Modern, responsive business website example.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Pricing</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Simple pricing for local businesses.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {pricing.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl">
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className="mt-4 text-5xl font-black text-blue-300">{plan.price}</p>
              <p className="mt-5 leading-7 text-slate-300">{plan.details}</p>
              <a href="#contact" className="mt-7 block rounded-full bg-blue-500 px-5 py-4 text-center font-bold text-white hover:bg-blue-400">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-blue-500 px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-100">Get Started</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Ready to build a professional site?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50">
              Send a message with your business name, services, phone number, photos, and the style you want. SiteForge Web Co will turn it into a clean website your customers can trust.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-7 text-slate-950 shadow-2xl">
            <p className="text-2xl font-black">Contact SiteForge</p>
            <div className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-4" placeholder="Your name" />
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-4" placeholder="Business name" />
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-4" placeholder="Phone or email" />
              <textarea className="min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-4" placeholder="Tell me what website you need" />
              <button className="w-full rounded-full bg-slate-950 px-5 py-4 font-bold text-white hover:bg-slate-800">Request a Website</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 SiteForge Web Co. All rights reserved.</p>
          <p>Custom website design for small businesses.</p>
        </div>
      </footer>
    </div>
  );
}
