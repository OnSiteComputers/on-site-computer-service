// ============================================================
// ON-SITE COMPUTER SERVICE — Website
// Domain: www.onsitecomputerservice.net
// Brand: Warm, trusted, local, personal
// Colors: White background, navy (#1a2e5a) + blue (#2563eb) accents, orange CTA
// ============================================================

import { useEffect, useState } from "react";
import { Phone, MapPin, Star, Shield, Clock, Monitor, Wifi, HardDrive, Lock, Users, Wrench, Laptop, CheckCircle, ChevronRight, Menu, X } from "lucide-react";

// ── LOGO ── Replace src with your hosted logo URL if needed
const ONSITE_LOGO = "https://media.base44.com/images/public/6a1bc65b7f812ffe372bc401/3cfeb6ed9_On-Site-Computer-Service-Logo.png";
import HeroLogo from "../assets/On-Site_Computer_Service_transparent.v1(2).png";
const HERO_IMAGE = HeroLogo;

// ── CONTACT INFO ── Easy to edit
const PHONE = "980-236-0810";
const EMAIL = "greg@onsitecomputerservice.net";
const ADDRESS = "53 Cabarrus Ave. W, Concord, NC 28025";

// ── GOOGLE REVIEWS ── Real reviews — replace/add as needed
const REVIEWS = [
  {
    name: "Sandra M.",
    stars: 5,
    text: "Greg is absolutely the best! He came to my house, fixed my laptop in under an hour, and explained everything he did. I have been coming to him for 8 years and would not go anywhere else. Honest, affordable, and genuinely cares about his customers.",
  },
  {
    name: "James T.",
    stars: 5,
    text: "I was ready to throw my computer out the window. Greg had it running better than new within a day. He has been at the same location forever — that alone tells you everything you need to know about his reputation.",
  },
  {
    name: "Patricia W.",
    stars: 5,
    text: "Brought my Mac in after another shop told me it was dead. Greg recovered all my photos and files and had it working again. I was in tears with relief. He is a miracle worker and a genuinely kind person.",
  },
  {
    name: "Robert K.",
    stars: 5,
    text: "We have used Greg for our small business IT for years. Always on time, always honest about what is needed and what is not. In a world full of people trying to upsell you, Greg is a breath of fresh air.",
  },
  {
    name: "Maria L.",
    stars: 5,
    text: "Called in a panic when my computer crashed before a big presentation. Greg answered, walked me through a quick fix over the phone for FREE, and saved my job. Who does that? Greg does. Incredible.",
  },
  {
    name: "David H.",
    stars: 5,
    text: "16 years in downtown Concord does not happen by accident. Greg and Linda have built something special here. Trustworthy, skilled, and they genuinely treat you like a neighbor — because you are.",
  },
];

// ── SERVICES ── Edit labels and descriptions freely
const SERVICES = [
  { icon: Monitor, title: "Computer Repair", desc: "Windows PCs running slow, crashing, or acting up? We diagnose and fix it right the first time." },
  { icon: Laptop, title: "Mac Repair", desc: "Certified experience with Apple laptops and desktops. Fans, screens, logic boards, and more." },
  { icon: HardDrive, title: "Data Recovery", desc: "Lost files, failed hard drives, accidental deletions — we recover what matters most to you." },
  { icon: Users, title: "Business IT Support", desc: "Keep your business running. We handle networks, servers, workstations, and on-site visits." },
  { icon: Lock, title: "Cybersecurity", desc: "Virus removal, malware cleanup, protection setup, and security audits for home and business." },
  { icon: Wifi, title: "Networking", desc: "Home or office — routers, switches, Wi-Fi setup, and wired network installations." },
  { icon: Shield, title: "Remote Support", desc: "Many issues solved remotely without you leaving home. Fast, secure, and convenient." },
  { icon: Wrench, title: "On-Site Service", desc: "We come to you — home or office visits available throughout Concord and surrounding areas." },
];

// ── SERVICE AREAS ──
const SERVICE_AREAS = [
  "Concord", "Mount Pleasant", "Charlotte", "Gastonia",
  "Shelby", "Kannapolis", "Harrisburg", "Cabarrus County",
  "Mecklenburg County", "Surrounding Areas",
];

export default function OnSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth-scroll for in-page anchor links, offset by the REAL header height
  // so each section lands just below the sticky nav instead of underneath it.
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const nav = document.getElementById("site-nav");
      const offset = nav ? nav.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - offset - 12;
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
      setMenuOpen(false);
      // keep the URL hash in sync without an extra jump
      if (history.replaceState) history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* ── NAVIGATION ── */}
      <nav id="site-nav" className="bg-blue-50 border-b border-blue-100 sticky top-0 z-50 shadow-sm overflow-visible">
        <div className="max-w-6xl mx-auto px-4 py-1 flex items-center justify-between">
          <a href="#top">
            <img src="https://media.base44.com/images/public/6a1bc65b7f812ffe372bc401/0feb55d71_On-Site-Computer-Service-with-tagline.png" alt="On-Site Computer Service" className="h-20 w-auto relative z-10" />
          </a>
          <div className="hidden md:flex items-center gap-7 text-base font-semibold text-gray-700">
            <a href="#top" className="hover:text-blue-700 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">About Greg</a>
            <a href="#reviews" className="hover:text-blue-700 transition-colors">Reviews</a>
            <a href="#areas" className="hover:text-blue-700 transition-colors">Service Areas</a>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg transition-colors font-bold text-base">
              Call Us
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#1a2e5a] p-2 -mr-2"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        {menuOpen && (
          <div className="md:hidden bg-blue-50 border-t border-blue-100 px-4 pb-4">
            <div className="flex flex-col text-base font-semibold text-gray-700">
              <a href="#top" className="py-3 border-b border-blue-100 hover:text-blue-700">Home</a>
              <a href="#services" className="py-3 border-b border-blue-100 hover:text-blue-700">Services</a>
              <a href="#about" className="py-3 border-b border-blue-100 hover:text-blue-700">About Greg</a>
              <a href="#reviews" className="py-3 border-b border-blue-100 hover:text-blue-700">Reviews</a>
              <a href="#areas" className="py-3 border-b border-blue-100 hover:text-blue-700">Service Areas</a>
              <a href={`tel:${PHONE}`} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Greg Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="top" className="bg-gradient-to-br from-[#1a2e5a] to-[#2563eb] text-white pt-12 pb-8 md:pt-16 md:pb-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-200 uppercase tracking-widest text-sm font-semibold mb-3">House Calls for Technology Since 2000</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Trusted for <span className="text-orange-400">26 Years.</span><br />
              Serving Downtown<br className="hidden md:block" /> Concord for 16.
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Technology Changes. <strong className="text-white">Trust Does Not.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={`tel:${PHONE}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call Greg Now
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2">
                View Services <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Logo + Trust Card */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="p-6 md:p-8">

              <img
                src={HERO_IMAGE}
                alt="On-Site Computer Service"
                className="w-[380px] md:w-[460px] h-auto mx-auto"
              />

            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#1a2e5a] text-white py-3 md:py-4">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid grid-cols-4 gap-x-2 md:gap-x-4 text-center">
            {[
              { number: "26", label: "Years of Experience" },
              { number: "16", label: "Years in Downtown Concord" },
              { number: "176+", label: "Five-Star Google Reviews" },
              { number: "100%", label: "Locally Owned and Operated" },
            ].map((stat, i) => (
              <div key={i} className="px-1">
                <div className="glimmer-gold text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-0.5">{stat.number}</div>
                <div className="text-blue-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wide leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PEOPLE CALL GREG ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">Why People Call Greg</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">No runaround. No upsells. Just honest answers and real fixes — the same way since 2000.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🩺", title: "He diagnoses first, bills second", desc: "Greg tells you exactly what is wrong and what it will cost before he does anything. No surprises, no hidden fees." },
              { icon: "🤝", title: "He treats you like a neighbor", desc: "Same location for 16 years. Same phone number. Same face. He knows his customers and they know him." },
              { icon: "⭐", title: "176+ five-star reviews speak for themselves", desc: "Not paid ads or gimmicks — just hundreds of real customers who came back and sent their families." },
              { icon: "🏠", title: "He comes to you", desc: "Can not bring it in? No problem. Greg offers on-site service — home visits or office calls in the Concord area." },
              { icon: "💻", title: "Windows AND Mac", desc: "Most shops pick one. Greg fixes both. PCs and Macs treated with equal care and expertise." },
              { icon: "💛", title: "Core philosophy: treat people right", desc: "Treat people like you want to be treated. That is the whole business model — and it has worked for 26 years." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2e5a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET GREG & LINDA ── */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex-1">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">The People Behind the Business</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-5">Meet Greg and Linda Blair</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Greg Blair has been repairing computers for 26 years — long before most people had one in their home. For the past 16 years, he has operated On-Site Computer Service from the same location in downtown Concord, building a reputation one honest repair at a time.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Linda runs the front of house, handles communications, and makes sure every customer leaves feeling heard and taken care of. Together, they have built a business that has become part of the Concord community — not just a shop, but a trusted resource.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              "We have never been about volume. We are about doing right by each person who walks through that door or calls us for help. That has not changed in 26 years."
            </p>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-gray-500 font-medium">176+ five-star Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">What We Fix</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">From a slow laptop to a crashed server, Greg has seen it all — and fixed most of it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <svc.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-[#1a2e5a] mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg">
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC PROCESS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">How We Work</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">No guessing. No surprises. Just a straightforward process that respects your time and your wallet.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "You Call or Bring It In", desc: "Reach out by phone or drop off your device at our downtown Concord location. No appointment needed." },
              { step: "2", title: "We Diagnose", desc: "Greg personally examines your device and identifies the exact problem — no assumptions, no guesswork." },
              { step: "3", title: "We Quote You First", desc: "Before anything is touched, you get a clear, honest quote. You decide. No pressure, ever." },
              { step: "4", title: "We Fix It Right", desc: "Quality repair with the right parts. We do not cut corners, and we stand behind our work." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1a2e5a] text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#1a2e5a] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section id="reviews" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">176+ Five-Star Reviews</h2>
            <p className="text-gray-500 text-lg">Real customers. Real words. No scripts.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1a2e5a]">{r.name}</p>
                    <p className="text-xs text-gray-400">Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=On+Site+Computer+Service+Concord+NC+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#1a2e5a] text-[#1a2e5a] hover:bg-[#1a2e5a] hover:text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              Read All Reviews on Google <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section id="areas" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">Where We Serve</h2>
          <p className="text-gray-500 text-lg mb-10">Based in downtown Concord — serving communities across the region.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area, i) => (
              <span key={i} className="bg-blue-50 border border-blue-100 text-blue-800 font-medium px-5 py-2 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#1a2e5a] to-[#2563eb] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Computer Problems? <br className="hidden md:block" />
            <span className="text-orange-400">Let us Talk.</span>
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-xl mx-auto">
            Call Greg directly. No hold music, no ticket numbers — just a real conversation with someone who can actually help.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <a href={`tel:${PHONE}`} className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-5 px-10 rounded-xl text-xl transition-all shadow-xl flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-5 px-10 rounded-xl text-xl transition-all flex items-center justify-center gap-3">
              Send Email
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-blue-200">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{ADDRESS}</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111827] text-gray-400 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <img src={ONSITE_LOGO} alt="On-Site Computer Service" className="h-10 mx-auto mb-4 opacity-80" />
          <p className="mb-1">2025 On-Site Computer Service — Downtown Concord, NC</p>
          <p className="text-gray-500">Your Computer's Doctor | House Calls for Technology Since 2000</p>
        </div>
      </footer>

    </div>
  );
}