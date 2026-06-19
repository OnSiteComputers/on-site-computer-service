import React from "react";

/* ============================================================
   Legacy Landscaping, Inc. — Priority IT Support Agreement
   Route suggestion: /legacy   (matches /warren, /dowless, ...)
   ------------------------------------------------------------
   ACTION LINKS
   ============================================================ */
const PAY_PLAN_A = "https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=95cc4206-6b71-11f1-bfa3-0e5b8ebc1287"; // $349.99 / Trips Included
const PAY_PLAN_B = "https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=62c33d12-6b73-11f1-bfa3-0e5b8ebc1287"; // $299.99 / Trips Excluded
const SIGN_URL   = "https://www.jotform.com/sign/261687588084070/invite/01kvek72cy3882d08ac8a182ed";
// Upload the agreement PDF into your site's /public folder so it serves at this path.
// Or replace with any hosted URL.
const CONTRACT_PDF = "/LegacyLandscaping_IT_Agreement.pdf";

const LEGACY_LOGO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QL0RXhpZgAATU0AKgAAAAgABAE7AAIAAAAOAAABSodpAAQAAAABAAABWJydAAEAAAAcAAAC0OocAAcAAAEMAAAAPgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQWRtaW5pc3RyYXRvcgAABZADAAIAAAAUAAACppAEAAIAAAAUAAACupKRAAIAAAADNjAAAJKSAAIAAAADNjAAAOocAAcAAAEMAAABmgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAyNjowNjoxOCAxODoxODowNAAyMDI2OjA2OjE4IDE4OjE4OjA0AAAAQQBkAG0AaQBuAGkAcwB0AHIAYQB0AG8AcgAAAP/hBCBodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDI2LTA2LTE4VDE4OjE4OjA0LjYwNDwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5BZG1pbmlzdHJhdG9yPC9yZGY6bGk+PC9yZGY6U2VxPg0KCQkJPC9kYzpjcmVhdG9yPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";

const C = {
  maroon: "#5e201a", maroonDeep: "#3a120e", gold: "#b9933f", goldBright: "#d9b85e",
  ink: "#2b2522", muted: "#6f655c", cream: "#fcfaf6", line: "#e7ddcf", panel: "#ffffff",
};

const included = [
  ["Priority Response & Direct Line", "When something's down, Legacy goes to the top of the queue, ahead of standard break-fix calls. Signed clients also get Greg's personal cell number for direct access when it matters."],
  ["Secure VPN Remote Access", "Full setup of an encrypted VPN tunnel for both remote users, replacing exposed Remote Desktop — included free with your 12-month agreement. Ongoing maintenance included too."],
  ["Covered Support Hours", "Up to 2 hours of remote support each month, included at no additional charge. Your typical month fits comfortably inside this."],
  ["Remote-First Support", "With your VPN in place, most issues are diagnosed and fixed remotely — often same-day — so you're not waiting on a drive-out for routine problems."],
];

const rates = [
  ["Additional remote support — business hours (past the 2 included hours)", "$149 / hr"],
  ["On-site service — labor", "$149 / hr"],
  ["On-site trip charge — round trip to your location", "$120 (waived on Plan A)"],
  ["After-hours support — after 6:00 PM", "$299 / hr"],
  ["Saturday & weekend support", "$390 / hr"],
  ["Hardware, equipment & replacement parts", "Quoted separately"],
];

export default function LegacyProposal() {
  return (
    <div style={{ background: C.cream, color: C.ink, fontFamily: "Inter, system-ui, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .lp-serif { font-family: 'Playfair Display', Georgia, serif; }
        .lp-ey { font-family: 'Cinzel', Georgia, serif; letter-spacing: 2px; }
        .lp-btn { display:inline-flex; align-items:center; justify-content:center; gap:9px; font-weight:700;
          border-radius:8px; text-decoration:none; cursor:pointer; transition:all .15s ease; line-height:1.1; }
        .lp-pay { background:${C.gold}; color:#241004; padding:15px 22px; font-size:16px; box-shadow:0 2px 10px rgba(94,32,26,.12); }
        .lp-pay:hover { background:${C.goldBright}; transform:translateY(-1px); }
        .lp-sign { background:${C.maroon}; color:#f5ecdb; padding:17px 30px; font-size:17px; border:1.5px solid ${C.gold}; }
        .lp-sign:hover { background:${C.maroonDeep}; transform:translateY(-1px); }
        .lp-dl { background:#fff; color:${C.maroon}; padding:13px 22px; font-size:15px; border:1.5px solid #d3c19a; }
        .lp-dl:hover { background:#f6f1e8; }
        .lp-top { background:${C.gold}; color:#241004; padding:9px 18px; font-size:14px; border-radius:7px; font-weight:700; text-decoration:none; }
        .lp-top:hover { background:${C.goldBright}; }
        .lp-card { background:#fff; border:1px solid ${C.line}; border-left:3px solid ${C.gold}; border-radius:8px; padding:18px 20px; }
        .lp-feats { list-style:none; padding:0; }
        .lp-feats li { position:relative; padding-left:16px; margin-bottom:7px; }
        .lp-feats li::before { content:'—'; color:${C.gold}; position:absolute; left:0; font-weight:700; }
        .lp-wrap { max-width: 980px; margin:0 auto; padding:0 22px; }
        @media (max-width:760px){ .lp-stack { flex-direction:column !important; } .lp-hidem { display:none !important; } }
      `}</style>

      {/* ===== TOP BAR ===== */}
      <div style={{ background: `linear-gradient(120deg, ${C.maroonDeep}, ${C.maroon})`, borderBottom: `2px solid ${C.gold}` }}>
        <div className="lp-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ background: "rgba(0,0,0,.25)", padding: 5, borderRadius: 4 }}>
              <img src={LEGACY_LOGO} alt="Legacy Landscaping, Inc." style={{ height: 42, display: "block" }} />
            </div>
            <span className="lp-hidem" style={{ color: "#e6d4b6", fontSize: 12, letterSpacing: ".5px" }}>
              Serviced by On-Site Computer Service · since 2011
            </span>
          </div>
          <a href="#get-started" className="lp-top">Sign &amp; Get Started ↓</a>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <div style={{ background: `linear-gradient(120deg, ${C.maroonDeep} 0%, ${C.maroon} 60%, #471610 100%)`, padding: "44px 0 50px", textAlign: "center" }}>
        <div className="lp-wrap">
          <div className="lp-ey" style={{ color: C.goldBright, fontSize: 12 }}>MANAGED IT&nbsp;&nbsp;·&nbsp;&nbsp;SECURE REMOTE ACCESS</div>
          <h1 className="lp-serif" style={{ color: "#fff", fontSize: 40, fontWeight: 700, margin: "12px 0 6px", lineHeight: 1.08 }}>Priority IT Support Agreement</h1>
          <div style={{ color: "#e6d4b6", fontSize: 15, marginBottom: 18 }}>Prepared for <b style={{ color: "#fff" }}>Kelly Sherin</b> · Legacy Landscaping, Inc.</div>
          <div style={{ width: 60, height: 2, background: C.gold, margin: "0 auto 18px" }} />
          <p style={{ color: "#efe3d0", fontSize: 16, maxWidth: 620, margin: "0 auto", lineHeight: 1.5 }}>
            Predictable, front-of-line support and a hardened remote-access setup for your work-from-home team.
          </p>
        </div>
      </div>

      {/* ===== URGENCY BANNER ===== */}
      <div style={{ background: C.maroon, borderBottom: `3px solid ${C.gold}` }}>
        <div className="lp-wrap lp-stack" style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 22px" }}>
          <span className="lp-ey" style={{ background: C.goldBright, color: "#2a1207", padding: "7px 12px", borderRadius: 4, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>SIGN BY FRIDAY</span>
          <span style={{ color: "#f3ece0", fontSize: 15.5, lineHeight: 1.4 }}>
            Sign before <b style={{ color: "#fff" }}>midnight Friday, June 19</b> and your secure VPN will be <b style={{ color: "#fff" }}>set up and running by end of day Monday, June 22.</b>
          </span>
        </div>
      </div>

      {/* ===== INTRO + INCLUDED ===== */}
      <div className="lp-wrap" style={{ padding: "34px 22px 8px" }}>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3c352f", marginBottom: 14 }}>
          Kelly, On-Site Computer Service has handled Legacy Landscaping's technology since <b style={{ color: C.maroon }}>December 2011</b> — fourteen years of keeping your office running and stepping in fast whenever something breaks. This agreement formalizes that relationship and adds two things you've asked about: a <b style={{ color: C.maroon }}>more secure way to work from home</b>, and a <b style={{ color: C.maroon }}>predictable cost</b> for the support you already rely on.
        </p>

        <h2 className="lp-serif" style={{ fontSize: 24, color: C.ink, margin: "22px 0 14px", borderBottom: `1px solid ${C.line}`, paddingBottom: 8 }}>
          <span style={{ color: C.gold, fontSize: 15 }}>01&nbsp;&nbsp;</span>What's included every month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {included.map(([t, b]) => (
            <div className="lp-card" key={t}>
              <div style={{ fontWeight: 700, color: C.maroon, fontSize: 16, marginBottom: 4 }}>{t}</div>
              <div style={{ color: C.muted, fontSize: 14, lineHeight: 1.5 }}>{b}</div>
            </div>
          ))}
        </div>

        {/* VPN explainer */}
        <h2 className="lp-serif" style={{ fontSize: 24, color: C.ink, margin: "26px 0 14px", borderBottom: `1px solid ${C.line}`, paddingBottom: 8 }}>
          <span style={{ color: C.gold, fontSize: 15 }}>02&nbsp;&nbsp;</span>The secure remote-access upgrade
        </h2>
        <div style={{ background: "#fbf4e9", border: "1px solid #ecdcc0", borderRadius: 8, padding: "18px 22px" }}>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: "#43352a", marginBottom: 10 }}>
            Right now, Remote Desktop is reachable from the open internet and guarded by Duo. Duo is a good lock — but the <b style={{ color: C.maroon }}>door is still visible to the entire internet</b>, and exposed Remote Desktop is the single most common way small businesses get broken into.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: "#43352a", margin: 0 }}>
            A VPN closes that door completely. You and your secretary connect through a <b style={{ color: C.maroon }}>private, encrypted tunnel first</b>, and only then reach your desktops — exactly as if you were sitting in the office. <b style={{ color: C.maroon }}>Nothing about your day-to-day changes;</b> what changes is that your computers are no longer sitting out in the open where anyone can find them.
          </p>
        </div>
      </div>

      {/* ===== PLANS ===== */}
      <div className="lp-wrap" style={{ padding: "26px 22px 8px" }}>
        <h2 className="lp-serif" style={{ fontSize: 24, color: C.ink, margin: "6px 0 6px", borderBottom: `1px solid ${C.line}`, paddingBottom: 8 }}>
          <span style={{ color: C.gold, fontSize: 15 }}>03&nbsp;&nbsp;</span>Choose your plan
        </h2>
        <p style={{ fontSize: 15, color: "#3c352f", lineHeight: 1.55, margin: "10px 0 18px" }}>
          Both are <b>12-month agreements</b> and include everything above — priority response, full VPN setup &amp; maintenance, 2 hours of remote support each month, and discounted rates on additional work. <b style={{ color: C.maroon }}>The only difference is how on-site trip charges are handled.</b>
        </p>

        <div className="flex lp-stack" style={{ gap: 18 }}>
          {/* Plan A */}
          <div style={{ flex: 1, background: "#fff", border: `1.5px solid ${C.line}`, borderRadius: 10, padding: 22, display: "flex", flexDirection: "column" }}>
            <div className="lp-ey" style={{ color: C.gold, fontSize: 11 }}>PLAN A</div>
            <div className="lp-serif" style={{ fontSize: 21, color: C.maroon, fontWeight: 700, margin: "3px 0 8px" }}>Trip Charges Included</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span className="lp-serif" style={{ fontSize: 38, fontWeight: 700, color: C.ink }}>$349.99</span>
              <span style={{ color: C.muted, fontSize: 15 }}>/ month</span>
            </div>
            <div className="lp-ey" style={{ color: C.gold, fontSize: 11, margin: "5px 0 14px" }}>$4,199.88 PER YEAR</div>
            <ul className="lp-feats" style={{ margin: "0 0 18px", color: "#43352a", fontSize: 14, lineHeight: 1.45, flex: 1 }}>
              <li>On-site visits carry <b>no trip charge</b> — ever.</li>
              <li>Best if you expect <b>several on-site visits</b> a year.</li>
              <li>Fully predictable — one number, nothing added for travel.</li>
            </ul>
            <a href={PAY_PLAN_A} target="_blank" rel="noopener noreferrer" className="lp-btn lp-pay">Start Plan A — Pay $349.99/mo →</a>
          </div>

          {/* Plan B */}
          <div style={{ flex: 1, background: "#fff", border: `1.5px solid ${C.line}`, borderRadius: 10, padding: 22, display: "flex", flexDirection: "column" }}>
            <div className="lp-ey" style={{ color: C.gold, fontSize: 11 }}>PLAN B</div>
            <div className="lp-serif" style={{ fontSize: 21, color: C.maroon, fontWeight: 700, margin: "3px 0 8px" }}>Trip Charges Excluded</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span className="lp-serif" style={{ fontSize: 38, fontWeight: 700, color: C.ink }}>$299.99</span>
              <span style={{ color: C.muted, fontSize: 15 }}>/ month</span>
            </div>
            <div className="lp-ey" style={{ color: C.gold, fontSize: 11, margin: "5px 0 14px" }}>$3,599.88 PER YEAR</div>
            <ul className="lp-feats" style={{ margin: "0 0 18px", color: "#43352a", fontSize: 14, lineHeight: 1.45, flex: 1 }}>
              <li>On-site visits add a <b>$120 trip charge</b> per visit.</li>
              <li>Best if <b>most support stays remote</b> — which, with your VPN, it will.</li>
              <li>Lower monthly; you only pay for travel when we drive out.</li>
            </ul>
            <a href={PAY_PLAN_B} target="_blank" rel="noopener noreferrer" className="lp-btn lp-pay">Start Plan B — Pay $299.99/mo →</a>
          </div>
        </div>

        <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.45, marginTop: 12 }}>
          The two plans break even at about <b style={{ color: C.maroon }}>five on-site visits a year</b>. VPN setup is included at no charge with the 12-month term — a one-time service that's otherwise billed at our hourly rate. New computers, equipment &amp; parts are quoted separately and are not part of either plan.
        </p>
      </div>

      {/* ===== GET STARTED: DOWNLOAD + SIGN ===== */}
      <div id="get-started" style={{ background: `linear-gradient(120deg, ${C.maroonDeep}, ${C.maroon})`, margin: "26px 0 0", padding: "36px 0 40px", borderTop: `3px solid ${C.gold}` }}>
        <div className="lp-wrap" style={{ textAlign: "center" }}>
          <div className="lp-ey" style={{ color: C.goldBright, fontSize: 12 }}>READY WHEN YOU ARE</div>
          <h2 className="lp-serif" style={{ color: "#fff", fontSize: 28, margin: "8px 0 6px" }}>Read it, sign it, you're set</h2>
          <p style={{ color: "#e6d4b6", fontSize: 15, maxWidth: 560, margin: "0 auto 24px", lineHeight: 1.5 }}>
            Download the full agreement to review, sign it online, then start your chosen plan above. Sign by midnight Friday and your VPN is running by end of day Monday.
          </p>
          <div className="flex lp-stack" style={{ gap: 14, justifyContent: "center", alignItems: "center" }}>
            <a href={CONTRACT_PDF} download className="lp-btn lp-dl">⬇ Download the Agreement (PDF)</a>
            <a href={SIGN_URL} target="_blank" rel="noopener noreferrer" className="lp-btn lp-sign">✍ Review &amp; Sign the Agreement</a>
          </div>
        </div>
      </div>

      {/* ===== RATES ===== */}
      <div className="lp-wrap" style={{ padding: "30px 22px 6px" }}>
        <h2 className="lp-serif" style={{ fontSize: 22, color: C.ink, margin: "0 0 8px", borderBottom: `1px solid ${C.line}`, paddingBottom: 8 }}>
          <span style={{ color: C.gold, fontSize: 14 }}>04&nbsp;&nbsp;</span>Rates beyond your included hours
        </h2>
        <div>
          {rates.map(([l, r], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "9px 2px", borderBottom: i < rates.length - 1 ? `1px solid #ece3d5` : "none", fontSize: 14.5 }}>
              <span style={{ color: "#3c352f" }}>{l}</span>
              <span style={{ color: C.maroon, fontWeight: 700, whiteSpace: "nowrap" }}>{r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div style={{ background: C.maroonDeep, marginTop: 30, padding: "22px 0", borderTop: `2px solid ${C.gold}` }}>
        <div className="lp-wrap lp-stack" style={{ display: "flex", justifyContent: "space-between", gap: 10, color: "#d8c6ad", flexWrap: "wrap" }}>
          <span style={{ color: "#d8c6ad", fontSize: 13 }}>On-Site Computer Service · 53 Cabarrus Ave W, Concord, NC 28025</span>
          <span style={{ color: "#d8c6ad", fontSize: 13 }}>onsitecomputerservice.net · 980-236-0810</span>
        </div>
      </div>
    </div>
  );
}
