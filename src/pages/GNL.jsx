// ============================================================
// GNL DIGITAL GROUP — Website
// Domain: www.gnldigitalgroup.com
// Brand: Premium, bold, black/gold, growth-focused
// Colors: Black (#0a0a0a) background, gold (#c9a84c) accents, white text
// Build: 2026-07-05 v1 ✅
// ============================================================

import { TrendingUp, Globe, Search, Star, Zap, Settings, BarChart2, MessageSquare, ChevronRight, Phone, ArrowRight, CheckCircle } from "lucide-react";

// ── LOGO ── Replace src with your hosted logo URL if needed
const GNL_LOGO = "/gnl-tagline-logo.png";

// ── CONTACT INFO ── Easy to edit
const PHONE = "(704) 555-0200"; // TODO: replace with real number
const EMAIL = "hello@gnldigitalgroup.com"; // TODO: replace

// ── SERVICES ──
const SERVICES = [
  { icon: Globe, title: "Website Design", desc: "Professional websites built for local business growth. Fast, mobile-first, built to convert visitors into customers." },
  { icon: Search, title: "SEO", desc: "Rank where it counts. Local SEO strategies that put you in front of customers searching right now in your area." },
  { icon: Star, title: "Google Business Profile", desc: "Dominate the local map pack. We optimize and manage your GBP to drive more calls, clicks, and foot traffic." },
  { icon: Zap, title: "AI Integration", desc: "Put AI to work in your business. Chatbots, automation, content generation — practical tools, not buzzwords." },
  { icon: Settings, title: "Automation", desc: "Stop doing things manually that a system can do for you. We build smart workflows that save time and money." },
  { icon: MessageSquare, title: "Reputation Management", desc: "More reviews. Better reviews. A stronger online reputation that turns strangers into customers." },
  { icon: BarChart2, title: "Local Lead Generation", desc: "Full-funnel lead systems designed specifically for local businesses ready to grow." },
  { icon: TrendingUp, title: "Digital Strategy", desc: "Not a cookie-cutter plan — a real growth strategy built around your business, your market, and your goals." },
];

// ── THE GNL METHOD ──
const GNL_METHOD = [
  { number: "01", title: "Audit", desc: "We start with a deep dive into your current digital presence — what is working, what is not, and what is being left on the table." },
  { number: "02", title: "Strategy", desc: "No templates. We build a custom growth plan based on your market, competition, and business goals." },
  { number: "03", title: "Execute", desc: "We build, launch, and activate — websites, campaigns, automations — all done for you by people who run a real business." },
  { number: "04", title: "Scale", desc: "Results lead to refinement. We track everything and scale what works. No fluff reports — just real numbers." },
];

// ── WHY DIFFERENT ──
const DIFFERENCES = [
  { icon: "🏢", title: "We are business owners first", desc: "Greg and Linda have run a real local business for 26 years. We have felt every pain point you have — and solved most of them." },
  { icon: "📍", title: "Local market is our specialty", desc: "National agencies guess at local. We live it. Our strategies are built for businesses competing in real communities." },
  { icon: "🚫", title: "No buzzwords. No fluff.", desc: "We do not impress you with jargon — we impress you with results. Plain language, clear deliverables, real ROI." },
  { icon: "🔗", title: "Backed by 26 years of trust", desc: "On-Site Computer Service's reputation is our foundation. The same values that built that business drive everything at GNL." },
];

export default function GNL() {
  console.log("GNL build: 2026-07-12 v4 ✅");
  return (
    <div className="font-sans bg-[#0a0a0a] text-white">

      {/* ── NAVIGATION ── */}
      <nav className="border-b border-white/10 sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src={GNL_LOGO} alt="GNL Digital Group" className="h-12 w-auto" />
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-[#c9a84c] transition-colors">Services</a>
            <a href="#method" className="hover:text-[#c9a84c] transition-colors">The GNL Method</a>
            <a href="#about" className="hover:text-[#c9a84c] transition-colors">Our Story</a>
            <a href="#contact" className="bg-[#c9a84c] hover:bg-[#b8952f] text-black px-4 py-2 rounded-lg font-bold transition-colors">
              Get Started
            </a>
          </div>
          <a href={`tel:${PHONE}`} className="md:hidden bg-[#c9a84c] text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Decorative gold glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse inline-block" />
            Founded by Greg and Linda Blair — Concord, NC
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            Built by<br />
            <span className="text-[#c9a84c]">Business Owners.</span><br />
            Not Marketing Agencies.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Websites. SEO. AI. Automation. <strong className="text-white">Real business growth.</strong>
          </p>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            After 26 years of solving technology problems, we now help local businesses solve digital growth problems. We have been in your shoes. That is the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#c9a84c] hover:bg-[#b8952f] text-black font-extrabold py-4 px-10 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2">
              Get a Free Growth Audit <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#method" className="border border-white/20 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] font-bold py-4 px-10 rounded-xl text-lg transition-all flex items-center justify-center gap-2">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "26+", label: "Years of Business Experience" },
              { number: "Local", label: "Market Specialists" },
              { number: "Real", label: "Business Owners, Not Theorists" },
              { number: "Zero", label: "Fluff. 100% Deliverables." },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl font-extrabold text-[#c9a84c] mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] uppercase tracking-widest text-xs font-semibold mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Digital Growth, <span className="text-[#c9a84c]">Done Right.</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">Everything your local business needs to dominate online — under one roof, with one team that actually cares.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 rounded-2xl p-6 transition-all group">
                <div className="w-11 h-11 bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <svc.icon className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{svc.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GNL EXISTS ── */}
      <section id="about" className="py-16 md:py-24 bg-white/3">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-14 items-center">
          {/* Photo placeholder — replace with real photo of Greg and Linda */}
          <div className="flex-shrink-0">
            <div className="w-64 h-72 rounded-2xl border border-dashed border-[#c9a84c]/30 flex flex-col items-center justify-center text-center p-6 bg-[#c9a84c]/5">
              <div className="text-5xl mb-3">📷</div>
              <p className="text-[#c9a84c] text-sm font-medium">Photo of Greg and Linda</p>
              <p className="text-gray-600 text-xs mt-1">(Replace with real photo)</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[#c9a84c] uppercase tracking-widest text-xs font-semibold mb-3">Why GNL Exists</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">We Grew Tired of Watching Great Businesses Lose Online.</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Greg and Linda Blair have run On-Site Computer Service in downtown Concord since 2008. Over those 16 years, they watched hundreds of local businesses — good, honest businesses — lose customers to competitors who were simply more visible online.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              GNL Digital Group was created to fix that. Not with templated campaigns or offshore tactics — but with real strategy, built by people who know what it means to run a local business and compete for every customer.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              We are not a marketing agency. We are growth partners with skin in the game.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-4 transition-all">
              Let us talk about your business <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY WE ARE DIFFERENT ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] uppercase tracking-widest text-xs font-semibold mb-3">Why We Are Different</p>
            <h2 className="text-3xl md:text-5xl font-extrabold">The Agency World Needed <span className="text-[#c9a84c]">New Blood.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {DIFFERENCES.map((d, i) => (
              <div key={i} className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="text-3xl flex-shrink-0">{d.icon}</div>
                <div>
                  <h3 className="font-bold text-white mb-2">{d.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE GNL METHOD ── */}
      <section id="method" className="py-16 md:py-24 bg-white/3">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] uppercase tracking-widest text-xs font-semibold mb-3">How We Work</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">The GNL Method</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Four clear steps. No mysteries. No 6-month waits to see results.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {GNL_METHOD.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-[#c9a84c] text-[#c9a84c] text-xl font-extrabold flex items-center justify-center mx-auto mb-5">
                  {step.number}
                </div>
                <h3 className="font-extrabold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT ON TRUST ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#c9a84c]/10 to-[#c9a84c]/5 border border-[#c9a84c]/30 rounded-3xl p-10 md:p-14 text-center">
            <div className="text-5xl mb-6">🏆</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
              Built on the Foundation of <span className="text-[#c9a84c]">On-Site Computer Service</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              On-Site Computer Service has earned 176+ five-star Google reviews over 26 years by doing one thing consistently: treating people honestly. GNL Digital Group was built on that same foundation. When you work with us, you are not hiring a faceless agency — you are hiring people with a real track record of trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Transparent Pricing", "No Long-Term Lock-Ins", "Real Results Reporting", "You Own Your Accounts", "Local and Available"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/20 px-4 py-2 rounded-full text-sm text-[#c9a84c]">
                  <CheckCircle className="w-4 h-4" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section id="contact" className="py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c9a84c] uppercase tracking-widest text-xs font-semibold mb-4">Ready to Grow?</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Let us Build Your<br />
            <span className="text-[#c9a84c]">Local Dominance.</span>
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-xl mx-auto">
            Start with a free audit. We will show you exactly where you stand and exactly what we would do about it — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <a href={`tel:${PHONE}`} className="bg-[#c9a84c] hover:bg-[#b8952f] text-black font-extrabold py-5 px-12 rounded-xl text-xl transition-all shadow-2xl flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="border border-white/20 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] font-bold py-5 px-12 rounded-xl text-xl transition-all flex items-center justify-center gap-3">
              Email Us
            </a>
          </div>
          <p className="text-gray-600 text-sm">No pressure. No pitch. Just a real conversation about your business.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <img src={GNL_LOGO} alt="GNL Digital Group" className="h-12 mx-auto mb-4 opacity-80" />
          <p className="text-gray-500 text-sm mb-1">2025 GNL Digital Group — Concord, NC</p>
          <p className="text-gray-600 text-xs">Local Dominance. Real Results. | Founded by Greg and Linda Blair</p>
          <p className="text-gray-700 text-xs mt-2">
            A proud partner of{" "}
            <a href="/" className="text-[#c9a84c] hover:underline">On-Site Computer Service</a>
          </p>
        </div>
      </footer>

    </div>
  );
}