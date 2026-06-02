import { useEffect, useState } from "react";
import { Phone, Monitor, Clock, ShieldCheck, CreditCard, CalendarClock, Zap, CheckCircle, Menu, X } from "lucide-react";

// ── LOGO ──
const ONSITE_LOGO = "/logo.png";

// ── CONTACT INFO ──
const PHONE = "980-236-0810";

// ── PAYMENT LINKS ── TODO: replace with your real PayRoc payment links
const PAY_REGULAR = "https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=fdc8610a-5e1c-11f1-a8e1-12a0879a85b1";   // $199 regular remote support
const PAY_EMERGENCY = "https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=16545ed3-5e1d-11f1-a8e1-12a0879a85b1"; // $299 emergency remote support

// ── SCHEDULING ── Google Calendar booking page (live)
const BOOKING_LINK = "https://calendar.app.google/yYRnBHKE5EL12QZE9";

// ── REMOTE TOOL ── TODO: replace REMOTE_TOOL_LINK with your TeamViewer QuickSupport download link
const REMOTE_TOOL_NAME = "TeamViewer QuickSupport";
const REMOTE_TOOL_LINK = "https://download.teamviewer.com/download/TeamViewerQS_x64.exe";

export default function RemoteSupport() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 page-fade-in">

      {/* ── NAV (matches homepage) ── */}
      <nav id="site-nav" className="bg-blue-50 border-b border-blue-100 sticky top-0 z-50 shadow-sm overflow-visible">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-end justify-between gap-4">
          <a href="/" className="leading-none flex-shrink-0" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            <div className="text-lg md:text-xl lg:text-2xl leading-none whitespace-nowrap">
              <span className="text-[#1a2e5a]">On-Site</span>{" "}
              <span className="text-orange-500">Computer Service</span>
            </div>
          </a>
          <div className="hidden md:flex items-end gap-5 lg:gap-6 text-sm lg:text-[15px] font-semibold text-gray-700 whitespace-nowrap">
            <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="/#about" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="/#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="/remote-support" className="text-orange-500 transition-colors">Remote Support</a>
            <a href="/#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
            <a href="/#areas" className="hover:text-orange-500 transition-colors">Service Areas</a>
            <a href="/#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-5 py-2 rounded-lg transition-colors font-bold shadow-sm whitespace-nowrap">
              <Phone className="w-4 h-4" /> {PHONE}
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
              <a href="/" className="py-3 border-b border-blue-100 hover:text-orange-500">Home</a>
              <a href="/#about" className="py-3 border-b border-blue-100 hover:text-orange-500">About Us</a>
              <a href="/#services" className="py-3 border-b border-blue-100 hover:text-orange-500">Services</a>
              <a href="/remote-support" className="py-3 border-b border-blue-100 text-orange-500">Remote Support</a>
              <a href="/#reviews" className="py-3 border-b border-blue-100 hover:text-orange-500">Reviews</a>
              <a href="/#areas" className="py-3 border-b border-blue-100 hover:text-orange-500">Service Areas</a>
              <a href="/#contact" className="py-3 border-b border-blue-100 hover:text-orange-500">Contact</a>
              <a href={`tel:${PHONE}`} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO (HTML banner — patriotic, responsive) ── */}
      <section className="bg-[#002868] text-white pt-4 pb-12 md:pt-6 md:pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">

            {/* Cartoon artwork (left) */}
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src="/hero-logo.png"
                alt="On-Site Computer Service — Your Computer's Doctor"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Text block (right) */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="leading-none mb-2">
                <span className="block text-5xl md:text-6xl font-black text-orange-500 tracking-tight">On-Site</span>
                <span className="block text-3xl md:text-4xl font-extrabold text-white tracking-tight">Computer Service</span>
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-3 my-4">
                <span className="hidden md:block h-0.5 w-8 bg-orange-500"></span>
                <span className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">We Come to You!</span>
                <span className="h-0.5 flex-1 bg-orange-500"></span>
              </div>

              <a href={`tel:${PHONE}`} className="block text-4xl md:text-5xl font-black text-orange-500 hover:text-orange-400 transition-colors mb-2">
                {PHONE}
              </a>
              <p className="text-lg md:text-xl font-bold text-white tracking-wide mb-3">www.onsitecomputerservice.net</p>
              <p className="text-blue-200 text-sm md:text-base">Your Computer's Doctor &nbsp;•&nbsp; Trusted for 26 Years</p>
            </div>

          </div>

          {/* sub-line under the banner */}
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto text-center mt-10">
            Greg connects to your computer securely over the internet to diagnose and fix
            problems — no house call required. Pay first, then we get you connected.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2e5a] text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: "1. Choose & Pay", desc: "Pick the support option that fits, and pay securely online. Payment is required before service begins." },
              { icon: CalendarClock, title: "2. Get Scheduled", desc: "Regular support: pick a callback time during business hours. Emergency: Greg calls you back as soon as possible." },
              { icon: Monitor, title: "3. Get Connected", desc: `Greg sends you a link to ${REMOTE_TOOL_NAME}, connects to your computer, and gets to work fixing the problem.` },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-[#1a2e5a] flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a2e5a] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING OPTIONS ── */}
      <section className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2e5a] text-center mb-3">Choose Your Support</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">One-hour minimum per session. Additional time is billed in 30-minute increments.</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">

            {/* REGULAR */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 flex flex-col shadow-sm">
              <div className="flex items-center gap-2 text-[#1a2e5a] mb-3">
                <CalendarClock className="w-6 h-6" />
                <h3 className="text-xl font-bold">Regular Remote Support</h3>
              </div>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-[#1a2e5a]">$199</span>
                <span className="text-gray-500 text-sm"> / 1-hour minimum</span>
              </div>
              <p className="text-gray-600 text-sm mb-5 min-h-[40px]">Pay, then pick a callback time during business hours.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Pick a time that works for you</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Mon–Fri, 10:00 AM–6:00 PM EST</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> 26 years of expertise on the line</li>
              </ul>
              <a href={PAY_REGULAR} target="_blank" rel="noopener noreferrer"
                className="bg-[#1a2e5a] hover:bg-[#22386e] text-white font-bold py-3.5 rounded-xl text-center transition-all">
                Pay &amp; Schedule — $199
              </a>
              <p className="text-gray-400 text-xs mt-3 text-center min-h-[32px]">After payment, pick a callback time that works for you.</p>
            </div>

            {/* EMERGENCY */}
            <div className="bg-white rounded-2xl border-2 border-orange-400 p-8 flex flex-col shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Priority</div>
              <div className="flex items-center gap-2 text-orange-600 mb-3">
                <Zap className="w-6 h-6" />
                <h3 className="text-xl font-bold">Emergency Remote Support</h3>
              </div>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-orange-600">$299</span>
                <span className="text-gray-500 text-sm"> / 1-hour minimum</span>
              </div>
              <p className="text-gray-600 text-sm mb-5 min-h-[40px]">Pay now — Greg calls you back ASAP at the number you provide.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Jumps to the front of the line</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> No scheduling — call comes ASAP</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> For urgent, can't-wait problems</li>
              </ul>
              <a href={PAY_EMERGENCY} target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-center transition-all">
                Pay &amp; Get Priority — $299
              </a>
              <p className="text-gray-400 text-xs mt-3 text-center min-h-[32px]">After payment, your confirmation will tell you what number Greg will call from.</p>
            </div>
          </div>

          {/* trust note */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#1a2e5a]" /> Secure payment</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#1a2e5a]" /> 1-hour minimum</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#1a2e5a]" /> Questions? {PHONE}</span>
          </div>
        </div>
      </section>

      {/* ── AFTER PAYMENT INSTRUCTIONS ── */}
      <section className="py-12 bg-[#1a2e5a] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">After You Pay</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
            <div className="bg-white/5 rounded-xl p-5">
              <div className="flex items-center gap-2 font-bold mb-2"><CalendarClock className="w-5 h-5 text-orange-400" /> Regular ($199)</div>
              <p className="text-blue-100 text-sm">Schedule your callback below. Greg will call you at your chosen time and connect via {REMOTE_TOOL_NAME}.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <div className="flex items-center gap-2 font-bold mb-2"><Zap className="w-5 h-5 text-orange-400" /> Emergency ($299)</div>
              <p className="text-blue-100 text-sm">No scheduling needed. Greg will call you ASAP at the number you provided — your payment confirmation will tell you what number to expect the call from.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-xl transition-all">
              <CalendarClock className="w-5 h-5" /> Schedule Your Callback
            </a>
            <a href={REMOTE_TOOL_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1a2e5a] font-bold py-3 px-7 rounded-xl transition-all">
              <Monitor className="w-5 h-5" /> Download {REMOTE_TOOL_NAME}
            </a>
          </div>
          <p className="text-blue-300 text-xs mt-4">Please pay first. Only start {REMOTE_TOOL_NAME} once Greg is on the phone with you.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111827] text-gray-400 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <img src={ONSITE_LOGO} alt="On-Site Computer Service" className="h-24 w-auto mx-auto mb-4 opacity-90" />
          <p className="mb-1">On-Site Computer Service — Downtown Concord, NC</p>
          <p className="text-gray-500">Your Computer's Doctor | House Calls for Technology Since 2000</p>
        </div>
      </footer>
    </div>
  );
}
