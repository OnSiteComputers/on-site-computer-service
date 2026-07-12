// ============================================================
// ON-SITE COMPUTER SERVICE — Server Setups page
// Domain: www.onsitecomputerservice.net/server-setups
// Brand: Warm, trusted, local, personal (matches homepage)
// Colors: White background, navy (#1A1A1D) + blue (#C8A85A) accents, orange CTA
// Focus: small-business/office servers · NAS & backups · networking, VPN & remote access
// Goal: sell the service — get the visitor to call
// ============================================================

import { useEffect, useState } from "react";
import { Phone, Server, HardDrive, Network, Shield, Database, Lock, CheckCircle, ChevronRight, Menu, X, Star } from "lucide-react";

// ── LOGO ──
const ONSITE_LOGO = "/mascot-doctor.png";

// ── CONTACT INFO ── Easy to edit
const PHONE = "980-236-0810";
const EMAIL = "greg@onsitecomputerservice.net";

// ── SERVER SERVICES ── Edit labels and descriptions freely
const SERVER_SERVICES = [
  { icon: Server, title: "Small-Business & Office Servers", desc: "From a first file server to a full domain — we spec, build, and install the right server for how your business actually works. Windows Server, Linux, or a quiet office tower in the closet." },
  { icon: Database, title: "File Sharing & User Management", desc: "Shared drives that just work. Centralized files, user accounts, permissions, and printer sharing so your whole team is on the same page — literally." },
  { icon: HardDrive, title: "NAS & File Storage", desc: "Network-attached storage sized to your needs. Photos, documents, project files, and archives in one reliable place you can reach from any machine in the building." },
  { icon: Shield, title: "Backups & Data Protection", desc: "On-site and off-site backups that run automatically and actually get tested. If a drive dies or ransomware hits, your data is safe and recoverable." },
  { icon: Network, title: "Networking & Wi-Fi", desc: "Routers, switches, business-grade Wi-Fi, and clean wired runs. We build a network that stays fast and stable as you add people and devices." },
  { icon: Lock, title: "VPN & Secure Remote Access", desc: "Reach your office files and systems securely from home, the road, or a second location. Locked-down remote access set up the right way — no shortcuts." },
];

// ── WHY GREG FOR SERVERS ──
const SERVER_REASONS = [
  { icon: "🛠️", title: "Built right the first time", desc: "We plan the setup around your business, not a one-size-fits-all box. Properly sized, properly secured, properly documented." },
  { icon: "🔒", title: "Security baked in", desc: "Backups, user permissions, and remote access locked down from day one — not bolted on after something goes wrong." },
  { icon: "🤝", title: "A local you can actually reach", desc: "Same phone number, same face. When your server needs attention, you call Greg — not a ticket queue three states away." },
  { icon: "📈", title: "Grows with you", desc: "We set things up so adding users, storage, or locations later is simple — no tearing it all out and starting over." },
];

// ── COMMON SITUATIONS ──
const SITUATIONS = [
  "Files scattered across everyone's desktop",
  "No real backup if a computer dies",
  "Staff can't get to files from home",
  "Wi-Fi that drops when the office gets busy",
  "An old server nobody understands anymore",
  "Growing past what a single PC can handle",
];

export default function ServerSetups() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerNavOpen, setFooterNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white page-fade-in">

      {/* ── NAVIGATION (matches homepage) ── */}
      <nav id="site-nav" className="bg-[#1A1A1D] sticky top-0 z-50 shadow-sm overflow-visible relative">
        <div className="silver-edge absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-end justify-between gap-4">
          <a href="/" className="leading-none flex-shrink-0" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            <div className="text-lg md:text-xl lg:text-2xl leading-none whitespace-nowrap">
              <span className="chrome-text">On-Site</span>{" "}
              <span className="text-[#C8A85A]">Computer Service</span>
            </div>
          </a>
          <div className="hidden md:flex items-end gap-5 lg:gap-6 text-sm lg:text-[15px] font-semibold text-[#E7DDCF] whitespace-nowrap">
            <a href="/" className="hover:text-[#C8A85A] transition-colors">Home</a>
            <a href="/#about" className="hover:text-[#C8A85A] transition-colors">About Us</a>
            <a href="/#services" className="hover:text-[#C8A85A] transition-colors">Services</a>
            <a href="/#server-setups" className="hover:text-[#C8A85A] transition-colors">Server Setups</a>
            <a href="/remote-support" className="hover:text-[#C8A85A] transition-colors">Remote Support</a>
            <a href="/#reviews" className="hover:text-[#C8A85A] transition-colors">Reviews</a>
            <a href="/#contact" className="hover:text-[#C8A85A] transition-colors">Contact</a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-[#C8A85A] hover:bg-[#B8965A] text-[#1A1A1D] px-4 lg:px-5 py-2 rounded-lg transition-colors font-bold shadow-sm whitespace-nowrap btn-pop">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#E7DDCF] p-2 -mr-2"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        {menuOpen && (
          <div className="md:hidden bg-[#1A1A1D] border-t border-[#2A2A30] px-4 pb-4">
            <div className="flex flex-col text-base font-semibold text-[#E7DDCF]">
              <a href="/" className="py-3 border-b border-[#2A2A30] hover:text-[#C8A85A]">Home</a>
              <a href="/#about" className="py-3 border-b border-[#2A2A30] hover:text-[#C8A85A]">About Us</a>
              <a href="/#services" className="py-3 border-b border-[#2A2A30] hover:text-[#C8A85A]">Services</a>
              <a href="/#server-setups" className="py-3 border-b border-[#2A2A30] hover:text-[#C8A85A]">Server Setups</a>
              <a href="/remote-support" className="py-3 border-b border-[#2A2A30] hover:text-[#C8A85A]">Remote Support</a>
              <a href="/#reviews" className="py-3 border-b border-[#2A2A30] hover:text-[#C8A85A]">Reviews</a>
              <a href="/#contact" className="py-3 border-b border-[#2A2A30] hover:text-[#C8A85A]">Contact</a>
              <a href={`tel:${PHONE}`} className="mt-4 bg-[#C8A85A] hover:bg-[#B8965A] text-[#1A1A1D] px-5 py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2 btn-pop">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1D] to-[#0B0B0D] text-white pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="silver-sheen absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#D8C6AD] uppercase tracking-widest text-sm font-semibold mb-3">Servers · Storage · Networking</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Server Setups That <span className="text-[#C8A85A]">Just Work.</span>
          </h1>
          <p className="text-xl text-[#E7DDCF] mb-8 max-w-2xl mx-auto">
            Servers, backups, and networks built for your business — installed right, secured from day one, and backed by 26 years of local, hands-on experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-[#C8A85A] hover:bg-[#B8965A] text-[#1A1A1D] font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg flex items-center justify-center gap-2 btn-pop">
              <Phone className="w-5 h-5" /> Call {PHONE}
            </a>
            <a href="#server-services" className="border-2 border-white text-white hover:bg-white hover:text-[#C8A85A] font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2 btn-pop">
              See What We Do <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#1A1A1D] text-white py-3 md:py-4">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid grid-cols-4 gap-x-2 md:gap-x-4 text-center">
            {[
              { number: "26", label: "Years of Experience" },
              { number: "16", label: "Years in Downtown Concord" },
              { number: "177+", label: "Five-Star Google Reviews" },
              { number: "100%", label: "Locally Owned and Operated" },
            ].map((stat, i) => (
              <div key={i} className="px-1">
                <div
                  className="glimmer-gold text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-0.5"
                  style={{ color: "#f6c453", textShadow: "0 0 14px rgba(246,196,83,0.5)" }}
                >
                  {stat.number}
                </div>
                <div className="text-[#D8C6AD] text-[10px] sm:text-xs font-semibold uppercase tracking-wide leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE SET UP ── */}
      <section id="server-services" className="relative min-h-screen flex items-start py-16 md:py-20 bg-[#1A1A1D]">
        <div className="silver-edge absolute top-0 left-0 right-0 h-px opacity-60 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">What We Set Up</h2>
            <p className="text-[#D8C6AD] max-w-xl mx-auto text-lg">Everything your office needs to store, share, protect, and reach its data — done by one trusted local pro.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVER_SERVICES.map((svc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#C8A85A]/50 transition-all group">
                <div className="w-12 h-12 bg-[#1A1A1D] group-hover:bg-[#232327] rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <svc.icon className="w-6 h-6 text-[#C8A85A]" />
                </div>
                <h3 className="text-base font-bold text-[#1A1A1D] mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-[#C8A85A] hover:bg-[#B8965A] text-[#1A1A1D] font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg btn-pop">
              <Phone className="w-5 h-5" /> Talk to Greg About Your Setup
            </a>
          </div>
        </div>
      </section>

      {/* ── SOUND FAMILIAR? ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1D] mb-3">Sound Familiar?</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">If any of these hit close to home, a proper server and network setup will fix it for good.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {SITUATIONS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#1A1A1D] border border-[#2A2A30] rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-[#C8A85A] flex-shrink-0 mt-0.5" />
                <span className="text-[#E7DDCF] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GREG ── */}
      <section className="relative py-16 md:py-20 bg-[#1A1A1D]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Why Have Greg Do It</h2>
            <p className="text-[#D8C6AD] max-w-xl mx-auto text-lg">A server is the heart of your office. It should be set up by someone who'll still be around to answer the phone.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVER_REASONS.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#1A1A1D] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1D] mb-3">How It Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">A clear plan and an honest quote before any work begins — same as everything else we do.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "We Talk It Through", desc: "Tell us how your business works and what's frustrating you today. We listen first — no jargon, no sales pitch." },
              { step: "2", title: "We Plan & Quote", desc: "You get a clear plan and an honest, up-front quote: what we'll install, what it does, and what it costs." },
              { step: "3", title: "We Build & Install", desc: "We set up the server, storage, network, backups, and remote access on-site — then test everything." },
              { step: "4", title: "We Stay in Your Corner", desc: "You've got a local number to call. As you grow or hit a snag, Greg is right here in Concord." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1A1A1D] text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#1A1A1D] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CTA ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1A1A1D] to-[#0B0B0D] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Server className="w-12 h-12 text-[#C8A85A] mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Get Your Server Set Up Right?</h2>
          <p className="text-[#E7DDCF] text-lg mb-8 max-w-xl mx-auto">
            Call Greg for a no-pressure conversation about what your business needs. Honest advice, a clear quote, and a setup built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-[#C8A85A] hover:bg-[#B8965A] text-[#1A1A1D] font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg flex items-center justify-center gap-2 btn-pop">
              <Phone className="w-5 h-5" /> Call {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="border-2 border-white text-white hover:bg-white hover:text-[#C8A85A] font-bold py-4 px-10 rounded-xl text-lg transition-all flex items-center justify-center gap-2 btn-pop">
              Email Us
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-[#D8C6AD] font-medium">177+ five-star Google reviews</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER (matches homepage) ── */}
      <footer className="bg-[#0B0B0D] text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Col 1 — brand */}
            <div>
              <img src={ONSITE_LOGO} alt="On-Site Computer Service" className="h-16 w-auto mb-4 opacity-90" />
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Downtown Concord's trusted computer &amp; Mac repair. House calls, data recovery, server setups, and business IT — your computer's doctor since 2000.
              </p>
            </div>

            {/* Col 2 — navigation (collapsible) */}
            <div>
              <h4 className="text-[#C8A85A] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Navigation</h4>
              <div className="relative inline-block">
                {footerNavOpen && (
                  <ul className="absolute bottom-full mb-2 left-0 w-48 bg-[#1A1A1D] border border-white/10 rounded-lg shadow-xl overflow-hidden">
                    <li><a href="/" className="block px-4 py-2.5 hover:bg-white/5 hover:text-[#C8A85A] transition-colors border-b border-white/5">Home</a></li>
                    <li><a href="/#about" className="block px-4 py-2.5 hover:bg-white/5 hover:text-[#C8A85A] transition-colors border-b border-white/5">About Us</a></li>
                    <li><a href="/#services" className="block px-4 py-2.5 hover:bg-white/5 hover:text-[#C8A85A] transition-colors border-b border-white/5">Services</a></li>
                    <li><a href="/#server-setups" className="block px-4 py-2.5 hover:bg-white/5 hover:text-[#C8A85A] transition-colors border-b border-white/5">Server Setups</a></li>
                    <li><a href="/remote-support" className="block px-4 py-2.5 hover:bg-white/5 hover:text-[#C8A85A] transition-colors border-b border-white/5">Remote Support</a></li>
                    <li><a href="/#contact" className="block px-4 py-2.5 hover:bg-white/5 hover:text-[#C8A85A] transition-colors">Contact</a></li>
                  </ul>
                )}
                <button
                  onClick={() => setFooterNavOpen(!footerNavOpen)}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#C8A85A] transition-colors font-semibold"
                  aria-expanded={footerNavOpen}
                >
                  {footerNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />} Menu
                </button>
              </div>
            </div>

            {/* Col 3 — contact */}
            <div>
              <h4 className="text-[#C8A85A] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C8A85A] flex-shrink-0" />
                  <a href={`tel:${PHONE}`} className="hover:text-[#C8A85A] transition-colors">{PHONE}</a>
                </li>
                <li className="leading-relaxed text-gray-400">
                  53 Cabarrus Ave. W<br/>Concord, NC 28025
                </li>
                <li className="text-gray-500">Mon–Fri 10AM–6PM EST</li>
              </ul>
            </div>
          </div>

          {/* GNL cross-link CTA box */}
          <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
            <img src="/gnl-logo.png" alt="GNL Digital Group" className="h-14 w-auto mx-auto mb-3" />
            <h3 className="text-[#d4af6a] text-xl md:text-2xl font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Website by GNL Digital Group</h3>
            <p className="text-gray-300 mb-6">Local Dominance. Real Results. — Web design &amp; SEO for local businesses.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="https://gnldigitalgroup.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b8965a] hover:bg-[#c9aa6c] text-[#0B0B0D] font-bold px-7 py-3 rounded-lg transition-colors">
                Visit Our Website
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a href="tel:+17045945826"
                className="inline-flex items-center gap-2 bg-[#1A1A1D] hover:bg-[#1A1A1D] text-white font-bold px-7 py-3 rounded-lg border border-white/15 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Us
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-gray-500">
            © 2026 On-Site Computer Service — Your Computer's Doctor. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
