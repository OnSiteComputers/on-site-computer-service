// ============================================================
// ON-SITE COMPUTER SERVICE — Website
// Domain: www.onsitecomputerservice.net
// Brand: Warm, trusted, local, personal
// Colors: White background, navy (#1a2e5a) + blue (#2563eb) accents, orange CTA
// ============================================================

import { useEffect, useState } from "react";
import { Phone, MapPin, Star, Shield, Clock, Monitor, Wifi, HardDrive, Lock, Users, Wrench, Laptop, CheckCircle, ChevronRight, Menu, X, Server, Database, Network } from "lucide-react";

// ── LOGO ── Replace src with your hosted logo URL if needed
const ONSITE_LOGO = "/hero-logo-no-text.png";
const HERO_IMAGE = "/hero-logo.png";

// ── CONTACT INFO ── Easy to edit
const PHONE = "980-236-0810";
const EMAIL = "greg@onsitecomputerservice.net";
const ADDRESS = "53 Cabarrus Ave. W, Concord, NC 28025";

// ── GOOGLE REVIEWS ── Add new ones here as they come in (newest first looks best).
// Keep "text" reasonably short so all 8 cards fit on screen; full text optional.
const REVIEWS = [
  { name: "Marlo James", when: "20 days ago", text: "We've been working with Onsite Computer Services for several years; recently we needed to upgrade our security and they handled it start to finish." },
  { name: "Puro Dano", when: "12 days ago", text: "I first met Greg when I had a PC emergency about 20 years ago. He fixed it and helped improve our office network. Still my go-to." },
  { name: "Liam Custer", when: "25 days ago", text: "I needed a quick part to get a PC working, and Greg helped me out super quick and with a great price. Highly recommend." },
  { name: "Anon Ymous", when: "1 month ago", text: "Took my non-bootable laptop to his shop about 10 a.m. He fixed it and delivered it back to my home about 8 p.m. Can't ask for better." },
  { name: "Bryce Rogers", when: "1 month ago", text: "Greg is thorough and honest; the Lord bless this place!" },
  { name: "Garen Kalender", when: "1 month ago", text: "Brought in my gaming PC that was shot after a power outage. Greg solved a multitude of problems and I couldn't be more thankful." },
  { name: "Max Williams", when: "1 month ago", text: "Had an issue with my PC for 1.5 years and finally took it in. Nobody else could diagnose it — Greg did. Outstanding." },
  { name: "von gab", when: "2 months ago", text: "I'd like to commend Greg Blair of On-Site Computer Service. Extremely efficient, knowledgeable, and an expert at troubleshooting." },
];

// ── SERVICES ── Edit labels and descriptions freely
const SERVICES = [
  { icon: Monitor, title: "Computer Repair", desc: "Windows PCs running slow, crashing, or acting up? We diagnose and fix it right the first time." },
  { icon: Laptop, title: "Mac Repair", desc: "Certified experience with Apple laptops and desktops. Fans, screens, logic boards, and more." },
  { icon: HardDrive, title: "Data Recovery", desc: "Lost files, failed hard drives, accidental deletions — we recover what matters most to you." },
  { icon: Users, title: "Business IT Support", desc: "Keep your business running. We handle networks, servers, workstations, and on-site visits." },
  { icon: Lock, title: "Virus & Malware Removal", desc: "Caught a virus or pop-ups taking over? We clean it up, lock it down, and set up protection for home and business." },
  { icon: Wifi, title: "Networking", desc: "Home or office — routers, switches, Wi-Fi setup, and wired network installations." },
  { icon: Shield, title: "Remote Support", desc: "Many issues solved remotely without you leaving home — fast, secure, and convenient. See our Remote Support page to get started." },
  { icon: Wrench, title: "On-Site Service", desc: "We come to you — home or office visits available throughout Concord and surrounding areas." },
];

// ── SERVER SETUPS ──
const SERVER_SERVICES = [
  { icon: Server, title: "Small-Business & Office Servers", desc: "From a first file server to a full domain — we spec, build, and install the right server for how your business actually works." },
  { icon: Database, title: "File Sharing & User Management", desc: "Shared drives that just work. Centralized files, user accounts, permissions, and printer sharing so your whole team is on the same page." },
  { icon: HardDrive, title: "NAS & File Storage", desc: "Network-attached storage sized to your needs. Documents, project files, and archives in one reliable place reachable from any machine." },
  { icon: Shield, title: "Backups & Data Protection", desc: "On-site and off-site backups that run automatically and actually get tested. If a drive dies or ransomware hits, your data is safe." },
  { icon: Network, title: "Networking & Wi-Fi", desc: "Routers, switches, business-grade Wi-Fi, and clean wired runs. A network that stays fast and stable as you add people and devices." },
  { icon: Lock, title: "VPN & Secure Remote Access", desc: "Reach your office files and systems securely from home, the road, or a second location. Locked-down remote access done right." },
];

// ── SERVICE AREAS ──
const SERVICE_AREAS = [
  "Concord", "Mount Pleasant", "Charlotte", "Gastonia",
  "Shelby", "Kannapolis", "Harrisburg", "Albemarle",
  "Salisbury", "Cabarrus County", "Mecklenburg County", "Surrounding Areas",
];

export default function OnSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerNavOpen, setFooterNavOpen] = useState(false);

  // ── REVIEWS ROTATION ── shows 8 at a time (2 rows × 4), auto-fades to the next set
  const REVIEWS_PER_PAGE = 8;
  const reviewPages = Math.max(1, Math.ceil(REVIEWS.length / REVIEWS_PER_PAGE));
  const [reviewPage, setReviewPage] = useState(0);
  const [reviewFading, setReviewFading] = useState(false);

  const goToReviewPage = (next) => {
    setReviewFading(true);
    setTimeout(() => {
      setReviewPage((p) => (next + reviewPages) % reviewPages);
      setReviewFading(false);
    }, 350);
  };

  useEffect(() => {
    if (reviewPages <= 1) return;
    const id = setInterval(() => {
      setReviewFading(true);
      setTimeout(() => {
        setReviewPage((p) => (p + 1) % reviewPages);
        setReviewFading(false);
      }, 350);
    }, 6000);
    return () => clearInterval(id);
  }, [reviewPages]);

  const visibleReviews = REVIEWS.slice(
    reviewPage * REVIEWS_PER_PAGE,
    reviewPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  );

  // ── CONTACT FORM ──
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqkgykp";
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  // Load the Elfsight platform script once (powers the live Google Reviews widget)
  useEffect(() => {
    const SRC = "https://elfsightcdn.com/platform.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Smooth-scroll for in-page anchor links. The reviews section loads a tall
  // third-party widget asynchronously; if we scroll while it's still expanding,
  // the layout shifts and the jump can strand at the top. So we scroll, then
  // re-assert the position twice after short delays to settle on the target.
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      if (!document.getElementById(id)) return;
      e.preventDefault();
      setMenuOpen(false);

      const scrollToTarget = (smooth) => {
        const el = document.getElementById(id);
        if (!el) return;
        const nav = document.getElementById("site-nav");
        const offset = (nav ? nav.offsetHeight : 72) - 16;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: smooth ? "smooth" : "auto" });
      };

      // Mobile (<=768px) scrolls smoothly; desktop snaps instantly.
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      scrollToTarget(isMobile);
      // re-assert after the layout (and any lazy widget) settles
      setTimeout(() => scrollToTarget(false), 350);
      setTimeout(() => scrollToTarget(false), 800);

      if (history.replaceState) history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // When arriving at the homepage with a #section in the URL (e.g. clicking
  // "About Us" from the Remote Support page lands at /#about), scroll to that
  // section once the page has rendered. Uses the same measured-header offset.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const nav = document.getElementById("site-nav");
      const offset = (nav ? nav.offsetHeight : 72) - 16;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "auto" });
    };
    // wait for layout (and lazy widgets) before measuring
    setTimeout(scrollToHash, 100);
    setTimeout(scrollToHash, 500);
    setTimeout(scrollToHash, 1000);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* ── NAVIGATION ── */}
      <nav id="site-nav" className="bg-blue-50 border-b border-blue-100 sticky top-0 z-50 shadow-sm overflow-visible">
        <div className="max-w-6xl mx-auto px-4 py-2.5">
          {/* top row: wordmark on the LEFT, phone/menu on the RIGHT */}
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex flex-col leading-none" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              <div className="text-xl md:text-3xl leading-none whitespace-nowrap">
                <span className="text-[#1a2e5a]">On-Site</span>{" "}
                <span className="text-orange-500">Computer Service</span>
              </div>
              <div className="text-orange-500 italic font-bold text-xs md:text-base mt-1 whitespace-nowrap" style={{ fontFamily: "inherit" }}>
                Your Computer's Doctor
              </div>
            </a>
            <div className="flex items-center justify-end flex-shrink-0">
              <a href={`tel:${PHONE}`} className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-5 py-2.5 rounded-lg transition-colors font-bold shadow-sm whitespace-nowrap text-sm lg:text-base">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-[#1a2e5a] p-2 -mr-2"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* bottom row: nav links spread across the full width */}
          <div className="hidden md:flex items-center justify-between text-sm lg:text-[15px] font-semibold text-gray-700 whitespace-nowrap mt-3">
            <a href="#top" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#why-us" className="hover:text-orange-500 transition-colors">Why Us?</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#server-setups" className="hover:text-orange-500 transition-colors">Server Setups</a>
            <a href="/remote-support" className="hover:text-orange-500 transition-colors">Remote Support</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
            <a href="#areas" className="hover:text-orange-500 transition-colors">Service Areas</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        {menuOpen && (
          <div className="md:hidden bg-blue-50 border-t border-blue-100 px-4 pb-4">
            <div className="flex flex-col text-base font-semibold text-gray-700">
              <a href="#top" className="py-3 border-b border-blue-100 hover:text-blue-700">Home</a>
              <a href="#why-us" className="py-3 border-b border-blue-100 hover:text-blue-700">Why Us?</a>
              <a href="#about" className="py-3 border-b border-blue-100 hover:text-blue-700">About Us</a>
              <a href="#services" className="py-3 border-b border-blue-100 hover:text-blue-700">Services</a>
              <a href="#server-setups" className="py-3 border-b border-blue-100 hover:text-blue-700">Server Setups</a>
              <a href="/remote-support" className="py-3 border-b border-blue-100 hover:text-blue-700">Remote Support</a>
              <a href="#reviews" className="py-3 border-b border-blue-100 hover:text-blue-700">Reviews</a>
              <a href="#areas" className="py-3 border-b border-blue-100 hover:text-blue-700">Service Areas</a>
              <a href="#contact" className="py-3 border-b border-blue-100 hover:text-blue-700">Contact</a>
              <a href={`tel:${PHONE}`} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="top" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#1a2e5a] to-[#2563eb] text-white pt-4 pb-6 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 w-full">
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
                <Phone className="w-5 h-5" /> Contact Us
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2">
                View Services <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Logo + Trust Card */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="p-2 md:p-8 flex flex-col items-center">

              <img
                src="/hero-logo-no-text.png"
                alt="On-Site Computer Service"
                className="w-[180px] md:w-[420px] h-auto mx-auto"
              />

              <div className="mt-3 md:mt-4 text-center leading-none" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                <div className="text-2xl md:text-4xl leading-none whitespace-nowrap">
                  <span className="text-white">On-Site</span>{" "}
                  <span className="text-orange-400">Computer Service</span>
                </div>
                <div className="text-orange-400 italic font-bold text-base md:text-2xl mt-1.5 whitespace-nowrap" style={{ fontFamily: "inherit" }}>
                  Your Computer's Doctor
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── TRUST BAR (bottom of hero) ── */}
        <div className="max-w-5xl mx-auto px-4 mt-10 md:mt-12 w-full">
          <div className="bg-white/[0.08] border border-white/15 rounded-2xl backdrop-blur-sm shadow-xl grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
            {[
              { number: "26", label: "Years of Expertise" },
              { number: "16", label: "Years Serving Downtown Concord" },
              { number: "177+", label: "Five-Star Reviews & Counting" },
              { number: "100%", label: "Locally Owned & Operated" },
            ].map((stat, i) => (
              <div key={i} className="px-4 py-5 md:py-6 text-center">
                <div
                  className="text-4xl md:text-5xl font-black leading-none mb-1.5"
                  style={{
                    color: "#f6c453",
                    textShadow: "0 0 16px rgba(246,196,83,0.55)",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-blue-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PEOPLE CALL GREG ── */}
      <section id="why-us" className="min-h-[calc(100vh-140px)] flex items-start py-16 md:py-20 bg-[#002868]">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Why Us?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-lg">No runaround. No upsells. Just honest answers and real fixes — the same way since 2000.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🩺", title: "He diagnoses first, bills second", desc: "Greg tells you exactly what is wrong and what it will cost before he does anything. No surprises, no hidden fees." },
              { icon: "🤝", title: "He treats you like a neighbor", desc: "Same location for 16 years. Same phone number. Same face. He knows his customers and they know him." },
              { icon: "⭐", title: "177+ five-star reviews speak for themselves", desc: "Not paid ads or gimmicks — just hundreds of real customers who came back and sent their families." },
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
      <section id="about" className="min-h-screen flex items-start py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 w-full">
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
              Greg grew up learning a lesson from his grandmother that shaped everything: "Greg, whatever you do for a living, make sure you love it — because you are going to do it a long time." Twenty-six years later, it still holds true. "I can do this stuff all day long and never feel like I worked a day in my life. That is not a sales line — that is just the truth."
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              "We have never been about volume. We are about doing right by each person who walks through that door or calls us for help. That has not changed in 26 years."
              <span className="block mt-2 text-[#1a2e5a] font-semibold not-italic">— Greg Blair</span>
            </p>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-gray-500 font-medium">177+ five-star Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="min-h-[calc(100vh-140px)] flex items-start py-16 md:py-20 bg-[#002868]">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">What We Fix</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-lg">From a slow laptop to a crashed server, Greg has seen it all — and fixed most of it.</p>
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
              <Phone className="w-5 h-5" /> Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVER SETUPS ── */}
      <section id="server-setups" className="min-h-[calc(100vh-140px)] flex items-start py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-3">Servers · Storage · Networking</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">Server Setups</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Built right the first time — servers, storage, backups, and networks sized to how your business actually works.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVER_SERVICES.map((svc, i) => (
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
              <Phone className="w-5 h-5" /> Contact Us
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
              { step: "1", title: "You Call or Bring It In", desc: "Reach out by phone or drop off your device at our downtown Concord location. Calling ahead is best — Greg is often out on service calls." },
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
      <section id="reviews" className="min-h-[calc(100vh-140px)] flex items-start py-16 md:py-20 bg-[#002868]">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">177+ Five-Star Reviews</h2>
            <p className="text-blue-200 text-lg">Real customers. Real words. No scripts.</p>
          </div>
          {/* ── ROTATING REVIEW GRID (2 rows × 4) ── */}
          <div className="relative">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-opacity duration-300 ${reviewFading ? "opacity-0" : "opacity-100"}`}
            >
              {visibleReviews.map((r, i) => (
                <div
                  key={`${reviewPage}-${i}`}
                  className="bg-white/[0.07] border border-white/12 rounded-2xl p-6 backdrop-blur-sm shadow-lg flex flex-col min-h-[260px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-base flex-shrink-0">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm leading-tight truncate">{r.name}</div>
                      <div className="text-blue-300 text-xs">{r.when}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>

            {/* arrows (only when there's more than one page) */}
            {reviewPages > 1 && (
              <>
                <button
                  onClick={() => goToReviewPage(reviewPage - 1)}
                  aria-label="Previous reviews"
                  className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1a2e5a] hover:bg-orange-500 text-white border border-white/20 flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <button
                  onClick={() => goToReviewPage(reviewPage + 1)}
                  aria-label="Next reviews"
                  className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1a2e5a] hover:bg-orange-500 text-white border border-white/20 flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* dots */}
            {reviewPages > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: reviewPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToReviewPage(i)}
                    aria-label={`Go to review set ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${i === reviewPage ? "w-6 bg-orange-500" : "w-2.5 bg-white/30 hover:bg-white/50"}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.google.com/search?q=On-Site+Computer+Service+Concord+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-[#1a2e5a] font-bold py-3 px-8 rounded-xl transition-all"
            >
              See All Reviews on Google
            </a>
            <a
              href="https://g.page/r/CSYE1297nyoJEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
            >
              <Star className="w-5 h-5 fill-white text-white" /> Leave Us a Review
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section id="areas" className="min-h-[calc(100vh-140px)] flex items-center py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center w-full">
          <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">Where We Serve</h2>
          <p className="text-gray-500 text-lg mb-6 md:mb-8">Based in downtown Concord — serving communities across the region.</p>

          {/* ── DESKTOP: map left + tiles right (one screen) ── */}
          <div className="hidden md:grid md:grid-cols-[1.3fr_1fr] gap-8 items-center mb-4">
            <div>
            <svg viewBox="0 0 820 560" className="w-full h-auto" role="img" aria-label="Map of the Charlotte metro service area with county outlines and cities">
              {/* counties */}
              <path d="M580.6,396.3 L576.9,398.7 L566.5,396.5 L561.4,390.7 L553.3,389.0 L627.8,250.4 L667.6,249.8 L714.0,307.0 L697.6,358.1 L705.6,406.8 L670.6,404.7 L634.2,383.8 L580.6,396.3 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M477.4,311.3 L468.7,303.5 L464.8,297.3 L461.6,295.0 L454.5,249.1 L471.2,249.2 L471.2,248.5 L488.5,248.8 L499.4,249.0 L501.9,249.0 L502.4,249.1 L503.5,249.1 L533.1,250.3 L627.8,250.4 L553.3,389.0 L552.9,388.5 L537.4,378.4 L496.5,352.4 L496.0,352.1 L486.6,318.2 L481.3,314.6 L477.4,311.3 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M362.7,404.5 L346.1,402.7 L293.3,399.5 L292.5,399.4 L282.7,399.0 L261.9,398.0 L264.2,355.9 L248.8,333.7 L216.4,286.6 L271.7,288.8 L393.9,294.8 L374.9,362.2 L373.1,373.1 L375.9,377.6 L376.3,386.5 L376.0,401.0 L362.9,405.5 L362.7,404.5 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M464.1,201.1 L459.0,175.6 L481.6,98.2 L508.5,101.3 L569.8,146.1 L585.7,154.9 L593.6,155.0 L601.3,157.6 L612.1,155.4 L614.7,156.4 L616.7,175.3 L658.6,216.7 L667.6,249.8 L627.8,250.4 L533.1,250.3 L503.5,249.1 L502.4,249.1 L501.9,249.0 L499.4,249.0 L488.5,248.8 L471.2,248.5 L464.1,201.1 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M261.9,398.0 L248.2,397.3 L248.2,397.3 L217.8,395.9 L214.6,395.7 L203.3,395.1 L203.0,395.2 L106.0,390.7 L129.1,313.7 L132.8,216.9 L187.6,223.6 L216.4,286.6 L248.8,333.7 L264.2,355.9 L261.9,398.0 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M339.3,131.4 L344.9,123.8 L350.1,120.0 L351.3,114.7 L355.1,110.6 L359.6,101.7 L376.2,52.4 L367.8,14.3 L419.8,10.0 L486.8,12.0 L481.6,98.2 L459.0,175.6 L464.1,201.1 L471.2,248.5 L471.2,249.2 L454.5,249.1 L396.8,257.0 L392.2,230.8 L404.8,198.7 L339.3,131.4 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M393.9,294.8 L271.7,288.8 L216.4,286.6 L187.6,223.6 L188.2,222.7 L188.3,222.5 L188.3,222.4 L188.8,221.7 L391.6,230.7 L392.2,230.8 L396.8,257.0 L393.9,294.8 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M533.4,548.4 L533.4,548.4 L512.3,548.1 L510.6,548.1 L510.6,548.1 L504.0,547.9 L503.3,547.9 L458.9,547.5 L456.8,547.4 L450.1,545.0 L455.3,497.0 L446.6,485.2 L446.5,485.0 L434.6,468.4 L459.4,454.2 L537.4,378.4 L552.9,388.5 L553.3,389.0 L561.4,390.7 L566.5,396.5 L576.9,398.7 L580.6,396.3 L634.2,383.8 L618.8,550.0 L590.7,549.4 L584.6,549.3 L584.1,549.2 L583.7,549.2 L581.5,549.1 L578.3,549.1 L573.4,548.9 L572.3,548.9 L560.3,548.7 L533.4,548.4 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M411.2,435.7 L411.2,435.7 L401.1,422.3 L393.0,428.8 L363.4,449.6 L357.7,442.1 L357.5,437.2 L357.8,431.6 L359.6,427.2 L361.6,425.3 L365.3,424.2 L366.6,421.6 L362.9,405.5 L376.0,401.0 L376.3,386.5 L375.9,377.6 L373.1,373.1 L374.9,362.2 L393.9,294.8 L396.8,257.0 L454.5,249.1 L461.6,295.0 L464.8,297.3 L468.7,303.5 L477.4,311.3 L481.3,314.6 L486.6,318.2 L496.0,352.1 L496.5,352.4 L537.4,378.4 L459.4,454.2 L434.6,468.4 L411.2,435.7 Z" fill="#dbe7fa" stroke="#2563eb" strokeWidth="1.5" />
              {/* county labels */}
              <text x="626" y="364" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Stanly</text>
              <text x="500" y="296" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Cabarrus</text>
              <text x="324" y="371" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Gaston</text>
              <text x="547" y="197" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Rowan</text>
              <text x="210" y="353" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Cleveland</text>
              <text x="404" y="142" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Iredell</text>
              <text x="283" y="250" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Lincoln</text>
              <text x="534" y="501" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Union</text>
              <text x="414" y="381" textAnchor="middle" fill="#1e3a8a" fontSize="11" className="uppercase tracking-wide" opacity="0.7">Mecklenburg</text>
              {/* city pins */}
              <g>
                <circle cx="527.1" cy="291.3" r="16" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.5" />
                <circle cx="527.1" cy="291.3" r="9" fill="#f97316" stroke="#fff" strokeWidth="2" />
                <text x="527" y="279" textAnchor="middle" fill="#c2410c" fontSize="15" className="font-bold">Concord</text>
              </g>
              <g>
                <circle cx="578.3" cy="295.0" r="6" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
                <text x="586" y="283" textAnchor="start" fill="#0f172a" fontSize="13" className="font-bold">Mount Pleasant</text>
              </g>
              <g>
                <circle cx="433.7" cy="370.3" r="6" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
                <text x="434" y="388" textAnchor="middle" fill="#0f172a" fontSize="13" className="font-bold">Charlotte</text>
              </g>
              <g>
                <circle cx="311.7" cy="355.1" r="6" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
                <text x="312" y="373" textAnchor="middle" fill="#0f172a" fontSize="13" className="font-bold">Gastonia</text>
              </g>
              <g>
                <circle cx="186.5" cy="341.9" r="6" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
                <text x="186" y="360" textAnchor="middle" fill="#0f172a" fontSize="13" className="font-bold">Shelby</text>
              </g>
              <g>
                <circle cx="512.1" cy="257.1" r="6" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
                <text x="512" y="245" textAnchor="middle" fill="#0f172a" fontSize="13" className="font-bold">Kannapolis</text>
              </g>
              <g>
                <circle cx="499.1" cy="328.4" r="6" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
                <text x="507" y="316" textAnchor="start" fill="#0f172a" fontSize="13" className="font-bold">Harrisburg</text>
              </g>
              <g>
                <circle cx="661.5" cy="316.8" r="6" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
                <text x="661" y="304" textAnchor="middle" fill="#0f172a" fontSize="13" className="font-bold">Albemarle</text>
              </g>
              <g>
                <circle cx="564.4" cy="177.3" r="6" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
                <text x="564" y="165" textAnchor="middle" fill="#0f172a" fontSize="13" className="font-bold">Salisbury</text>
              </g>
            </svg>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
              <span className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-orange-500"></span> Home base</span>
              <span className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: "#dbe7fa", border: "1.5px solid #2563eb" }}></span> Service counties</span>
            </div>
            </div>

            {/* right column: city tiles */}
            <div className="grid grid-cols-2 gap-3 content-center">
              {SERVICE_AREAS.map((area, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gray-200 rounded-xl px-3 py-3 shadow-sm hover:shadow-md hover:border-orange-300 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-orange-50 flex items-center justify-center transition-colors flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#2563eb] group-hover:text-orange-500 transition-colors" />
                  </div>
                  <span className="text-[#1a2e5a] font-semibold text-sm leading-tight">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── MOBILE: full-width tile grid (map hidden) ── */}
          <div className="grid md:hidden grid-cols-2 sm:grid-cols-3 gap-4">
            {SERVICE_AREAS.map((area, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-xl px-3 py-5 shadow-sm hover:shadow-md hover:border-orange-300 hover:-translate-y-0.5 transition-all flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 group-hover:bg-orange-50 flex items-center justify-center transition-colors">
                  <MapPin className="w-5 h-5 text-[#2563eb] group-hover:text-orange-500 transition-colors" />
                </div>
                <span className="text-[#1a2e5a] font-semibold text-sm leading-tight">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="min-h-[calc(100vh-140px)] flex items-start py-16 md:py-24 bg-gradient-to-br from-[#1a2e5a] to-[#2563eb] text-white">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">

            {/* LEFT: contact info */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Computer Problems? <br className="hidden md:block" />
                <span className="text-orange-400">Let us Talk.</span>
              </h2>
              <p className="text-blue-100 text-xl mb-8 max-w-xl mx-auto md:mx-0">
                Call Greg directly. No hold music, no ticket numbers — just a real conversation with someone who can actually help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a href={`tel:${PHONE}`} className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-8 rounded-xl text-lg transition-all shadow-xl flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-3">
                  Send Email
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-200 mb-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-lg">{ADDRESS}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-200 mb-6">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-lg">Mon–Fri, 10:00 AM – 6:00 PM EST</span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <iframe
                  title="On-Site Computer Service location"
                  src="https://www.google.com/maps?q=53%20Cabarrus%20Ave%20W%2C%20Concord%2C%20NC%2028025&output=embed"
                  width="100%"
                  className="block w-full h-[240px] md:h-[420px]"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* RIGHT: contact form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800">
              <h3 className="text-2xl font-extrabold text-[#1a2e5a] mb-1">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-6">Fill this out and Greg will get back to you.</p>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <p className="font-bold text-green-800 mb-1">Message sent!</p>
                  <p className="text-green-700 text-sm">Thanks for reaching out — we will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                    <input type="text" name="name" required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                      <input type="email" name="email" required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                      <input type="tel" name="phone"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">What can we help with?</label>
                    <select name="topic" required defaultValue=""
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="" disabled>Select a problem type…</option>
                      <option>Computer Repair</option>
                      <option>Mac Repair</option>
                      <option>Data Recovery</option>
                      <option>Virus / Malware Removal</option>
                      <option>Business IT Support</option>
                      <option>Networking / Wi-Fi</option>
                      <option>On-Site / House Call</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <textarea name="message" rows="4" required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 md:min-h-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>

                  {formStatus === "error" && (
                    <p className="text-red-600 text-sm font-medium">
                      Something went wrong. Please try again, or just call us at {PHONE}.
                    </p>
                  )}

                  <button type="submit" disabled={formStatus === "sending"}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-lg text-lg transition-all shadow-lg">
                    {formStatus === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111827] text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Top: three columns */}
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Col 1 — brand */}
            <div>
              <img src={ONSITE_LOGO} alt="On-Site Computer Service" className="h-16 w-auto mb-4 opacity-90" />
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Downtown Concord's trusted computer &amp; Mac repair. House calls, data recovery, and business IT — your computer's doctor since 2000.
              </p>
            </div>

            {/* Col 2 — navigation (collapsible pancake menu) */}
            <div>
              <h4 className="text-[#f97316] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Navigation</h4>
              <div className="relative inline-block">
                {/* expanding list — sits ABOVE the button, revealed on toggle */}
                {footerNavOpen && (
                  <ul className="absolute bottom-full mb-2 left-0 w-48 bg-[#1a2740] border border-white/10 rounded-lg shadow-xl overflow-hidden">
                    <li><a href="#top" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Home</a></li>
                    <li><a href="#about" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">About Us</a></li>
                    <li><a href="#services" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Services</a></li>
                    <li><a href="#server-setups" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Server Setups</a></li>
                    <li><a href="/remote-support" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Remote Support</a></li>
                    <li><a href="#reviews" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Reviews</a></li>
                    <li><a href="#contact" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors">Contact</a></li>
                  </ul>
                )}
                <button
                  onClick={() => setFooterNavOpen(!footerNavOpen)}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors font-semibold"
                  aria-expanded={footerNavOpen}
                >
                  {footerNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />} Menu
                </button>
              </div>
            </div>

            {/* Col 3 — contact */}
            <div>
              <h4 className="text-[#f97316] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <a href={`tel:${PHONE}`} className="hover:text-orange-400 transition-colors">{PHONE}</a>
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
                className="inline-flex items-center gap-2 bg-[#b8965a] hover:bg-[#c9aa6c] text-[#111827] font-bold px-7 py-3 rounded-lg transition-colors">
                Visit Our Website
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a href="tel:+17045945826"
                className="inline-flex items-center gap-2 bg-[#1a2740] hover:bg-[#22335a] text-white font-bold px-7 py-3 rounded-lg border border-white/15 transition-colors">
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