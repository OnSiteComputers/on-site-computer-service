// ============================================================
// LOGO CONCEPTS — On-Site Computer Service
// 3 distinct concepts for review
// New icon: https://media.base44.com/images/public/6a1bc65b7f812ffe372bc401/a4a9b2720_LogonewNoBackgroundnobackgroundfinal3.png
// ============================================================

const ICON = "https://media.base44.com/images/public/6a1bc65b7f812ffe372bc401/a4a9b2720_LogonewNoBackgroundnobackgroundfinal3.png";

// ── CONCEPT 1: Horizontal Modern ──
function Concept1Horizontal() {
  return (
    <div className="flex items-center gap-4">
      <img src={ICON} alt="icon" className="w-24 h-24 object-contain" />
      <div className="flex flex-col">
        <span className="text-[#1a2e5a] font-extrabold text-2xl leading-tight tracking-tight" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          On-Site Computer
        </span>
        <span className="text-[#1a2e5a] font-extrabold text-2xl leading-tight tracking-tight" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          Service
        </span>
        <span className="text-orange-500 font-semibold text-sm tracking-[0.2em] uppercase mt-1" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          ⚕ Computer Doctor
        </span>
      </div>
    </div>
  );
}

function Concept1Stacked() {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <img src={ICON} alt="icon" className="w-28 h-28 object-contain" />
      <div>
        <div className="text-[#1a2e5a] font-extrabold text-xl leading-tight tracking-tight" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          On-Site Computer Service
        </div>
        <div className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mt-1">
          ⚕ Computer Doctor
        </div>
      </div>
    </div>
  );
}

function Concept1Social() {
  return (
    <div className="w-32 h-32 bg-[#1a2e5a] rounded-2xl flex flex-col items-center justify-center gap-1 p-2">
      <img src={ICON} alt="icon" className="w-16 h-16 object-contain" />
      <div className="text-white font-bold text-[8px] text-center leading-tight tracking-wide uppercase">
        On-Site Computer Service
      </div>
    </div>
  );
}

// ── CONCEPT 2: Bold Dark ──
function Concept2Horizontal() {
  return (
    <div className="flex items-center gap-5 bg-[#0f1c3a] rounded-2xl px-6 py-4">
      <div className="bg-white/10 rounded-xl p-2">
        <img src={ICON} alt="icon" className="w-20 h-20 object-contain" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-2xl leading-tight tracking-tight">On-Site</span>
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">EST. 2000</span>
        </div>
        <span className="text-white font-black text-2xl leading-tight tracking-tight">Computer Service</span>
        <div className="flex items-center gap-1 mt-1">
          <div className="w-4 h-px bg-orange-400" />
          <span className="text-orange-400 font-semibold text-xs tracking-[0.15em] uppercase">Computer Doctor</span>
          <div className="w-4 h-px bg-orange-400" />
        </div>
      </div>
    </div>
  );
}

function Concept2Stacked() {
  return (
    <div className="flex flex-col items-center gap-3 bg-[#0f1c3a] rounded-2xl px-8 py-6 text-center">
      <img src={ICON} alt="icon" className="w-32 h-32 object-contain" />
      <div className="w-full border-t border-white/10 pt-3">
        <div className="text-white font-black text-xl leading-tight">On-Site Computer Service</div>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="flex-1 h-px bg-orange-500/40" />
          <span className="text-orange-400 font-semibold text-xs tracking-[0.2em] uppercase">Computer Doctor</span>
          <div className="flex-1 h-px bg-orange-500/40" />
        </div>
      </div>
    </div>
  );
}

function Concept2Social() {
  return (
    <div className="w-32 h-32 bg-[#0f1c3a] rounded-2xl flex flex-col items-center justify-center gap-1 p-3 border-2 border-orange-500">
      <img src={ICON} alt="icon" className="w-16 h-16 object-contain" />
      <div className="text-orange-400 font-bold text-[8px] text-center leading-tight tracking-widest uppercase">
        Computer Doctor
      </div>
    </div>
  );
}

// ── CONCEPT 3: Clean Professional ──
function Concept3Horizontal() {
  return (
    <div className="flex items-center gap-5 border-2 border-[#1a2e5a] rounded-2xl px-6 py-4 bg-white">
      <img src={ICON} alt="icon" className="w-20 h-20 object-contain" />
      <div className="border-l-2 border-[#1a2e5a] pl-5 flex flex-col">
        <span className="text-[#1a2e5a] font-black text-xl leading-tight" style={{ letterSpacing: '-0.01em' }}>
          On-Site Computer Service
        </span>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
          <span className="text-gray-500 font-medium text-xs tracking-[0.18em] uppercase">Computer Doctor</span>
          <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
        </div>
        <span className="text-[#2563eb] text-xs font-medium mt-1 tracking-wide">Concord, NC · Since 2000</span>
      </div>
    </div>
  );
}

function Concept3Stacked() {
  return (
    <div className="flex flex-col items-center text-center border-2 border-[#1a2e5a] rounded-2xl px-8 py-6 bg-white">
      <img src={ICON} alt="icon" className="w-28 h-28 object-contain mb-2" />
      <div className="w-16 h-0.5 bg-orange-500 mb-3" />
      <div className="text-[#1a2e5a] font-black text-xl leading-tight">
        On-Site Computer Service
      </div>
      <div className="text-gray-400 font-medium text-xs tracking-[0.22em] uppercase mt-1.5">
        Computer Doctor
      </div>
      <div className="text-[#2563eb] text-xs font-medium mt-2 tracking-wide">Concord, NC · Since 2000</div>
    </div>
  );
}

function Concept3Social() {
  return (
    <div className="w-32 h-32 bg-white rounded-2xl border-2 border-[#1a2e5a] flex flex-col items-center justify-center gap-1 p-2">
      <img src={ICON} alt="icon" className="w-16 h-16 object-contain" />
      <div className="w-10 h-0.5 bg-orange-500" />
      <div className="text-[#1a2e5a] font-black text-[7px] text-center leading-tight uppercase tracking-wide">
        On-Site<br />Computer<br />Service
      </div>
    </div>
  );
}

// ── CONCEPT CARD ──
function ConceptCard({ number, name, description, horizontal, stacked, social, bg }) {
  return (
    <div className={`rounded-3xl p-8 ${bg}`}>
      <div className="mb-6">
        <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
          Concept {number}
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900">{name}</h2>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Horizontal */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Horizontal</p>
          <div className="bg-gray-50 rounded-2xl p-5 flex items-center justify-center border border-gray-100">
            {horizontal}
          </div>
        </div>

        {/* Stacked */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Stacked</p>
          <div className="bg-gray-50 rounded-2xl p-5 flex items-center justify-center border border-gray-100">
            {stacked}
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Social / Icon</p>
          <div className="bg-gray-100 rounded-2xl p-5 flex items-center justify-center border border-gray-100">
            {social}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LogoConcepts() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-4 text-center">
        <p className="text-orange-500 uppercase tracking-widest text-xs font-bold mb-2">Brand Identity Review</p>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Logo Concepts</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          3 distinct directions for <strong>On-Site Computer Service</strong> — each shown in horizontal, stacked, and social formats.
        </p>
      </div>

      {/* Concepts */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-10">

        <ConceptCard
          number="1"
          name="Modern & Warm"
          description="Clean typography on white. Friendly but professional. The orange accent keeps the trusted, approachable feel."
          horizontal={<Concept1Horizontal />}
          stacked={<Concept1Stacked />}
          social={<Concept1Social />}
          bg="bg-white border border-gray-100 shadow-sm"
        />

        <ConceptCard
          number="2"
          name="Bold & Authoritative"
          description="Deep navy background with white and orange. Commands attention and projects expertise. Great for dark website headers."
          horizontal={<Concept2Horizontal />}
          stacked={<Concept2Stacked />}
          social={<Concept2Social />}
          bg="bg-white border border-gray-100 shadow-sm"
        />

        <ConceptCard
          number="3"
          name="Clean & Structured"
          description="Bordered, structured layout. Feels official and polished — like a business card. Includes location/year for trust."
          horizontal={<Concept3Horizontal />}
          stacked={<Concept3Stacked />}
          social={<Concept3Social />}
          bg="bg-white border border-gray-100 shadow-sm"
        />

      </div>

      {/* Footer note */}
      <div className="text-center py-8 text-gray-400 text-sm">
        <a href="/" className="text-orange-500 hover:underline font-semibold">← Back to Website</a>
        <p className="mt-2">Tell me which concept you prefer and I'll apply it to the full site.</p>
      </div>
    </div>
  );
}