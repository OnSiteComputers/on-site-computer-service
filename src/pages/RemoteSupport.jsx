import { useEffect } from "react";
import { Phone, Monitor, Clock, ShieldCheck, CreditCard, CalendarClock, Zap, CheckCircle, ArrowLeft } from "lucide-react";

// ── LOGO ──
const ONSITE_LOGO = "/logo.png";

// ── CONTACT INFO ──
const PHONE = "980-236-0810";

// ── PAYMENT LINKS ── TODO: replace with your real PayRoc payment links
const PAY_REGULAR = "#";   // $179 regular remote support
const PAY_EMERGENCY = "#"; // $299 emergency remote support

// ── REMOTE TOOL ── TODO: replace with your remote tool download link + name
const REMOTE_TOOL_NAME = "our remote support tool";
const REMOTE_TOOL_LINK = "#";

export default function RemoteSupport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* ── NAV ── */}
      <nav className="bg-blue-50 border-b border-blue-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={ONSITE_LOGO} alt="On-Site Computer Service" className="h-12" />
          </a>
          <a href="/" className="text-[#1a2e5a] hover:text-blue-700 font-semibold flex items-center gap-1 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#1a2e5a] to-[#2563eb] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-5 text-blue-100 text-sm font-semibold">
            <Monitor className="w-4 h-4" /> Remote Support
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Get Help Without <span className="text-orange-400">Leaving Home.</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
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
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">Each session covers up to one hour. Additional time is billed separately.</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* REGULAR */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 flex flex-col shadow-sm">
              <div className="flex items-center gap-2 text-[#1a2e5a] mb-3">
                <CalendarClock className="w-6 h-6" />
                <h3 className="text-xl font-bold">Regular Remote Support</h3>
              </div>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-[#1a2e5a]">$179</span>
                <span className="text-gray-500 text-sm"> / up to 1 hour</span>
              </div>
              <p className="text-gray-600 text-sm mb-5">Scheduled callback during business hours.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Pick a time that works for you</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Mon–Fri, 10:00 AM–6:00 PM EST</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> 26 years of expertise on the line</li>
              </ul>
              <a href={PAY_REGULAR} target="_blank" rel="noopener noreferrer"
                className="bg-[#1a2e5a] hover:bg-[#22386e] text-white font-bold py-3.5 rounded-xl text-center transition-all">
                Pay &amp; Schedule — $179
              </a>
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
                <span className="text-gray-500 text-sm"> / up to 1 hour</span>
              </div>
              <p className="text-gray-600 text-sm mb-5">Drop-everything priority — Greg calls you back ASAP.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Jumps to the front of the line</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Fastest possible callback</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> For urgent, can't-wait problems</li>
              </ul>
              <a href={PAY_EMERGENCY} target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-center transition-all">
                Pay &amp; Get Priority — $299
              </a>
            </div>
          </div>

          {/* trust note */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#1a2e5a]" /> Secure payment</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#1a2e5a]" /> Up to 1 hour per session</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#1a2e5a]" /> Questions? {PHONE}</span>
          </div>
        </div>
      </section>

      {/* ── AFTER PAYMENT INSTRUCTIONS ── */}
      <section className="py-12 bg-[#1a2e5a] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">After You Pay</h2>
          <p className="text-blue-100 mb-6">
            Once your payment goes through, Greg will reach out to schedule (or call you right back for
            emergencies). When it's time, you'll get a link to {REMOTE_TOOL_NAME} to start the session.
          </p>
          <a href={REMOTE_TOOL_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1a2e5a] font-bold py-3 px-7 rounded-xl transition-all">
            <Monitor className="w-5 h-5" /> Download {REMOTE_TOOL_NAME}
          </a>
          <p className="text-blue-300 text-xs mt-4">Only start the remote tool after you've paid and Greg has confirmed.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111827] text-gray-400 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <img src={ONSITE_LOGO} alt="On-Site Computer Service" className="h-10 mx-auto mb-4 opacity-80" />
          <p className="mb-1">On-Site Computer Service — Downtown Concord, NC</p>
          <p className="text-gray-500">Your Computer's Doctor | House Calls for Technology Since 2000</p>
        </div>
      </footer>
    </div>
  );
}
