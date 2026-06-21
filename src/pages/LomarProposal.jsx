import React from "react";

/* ============================================================
   PER-CLIENT CONSTANTS — edit these, nothing else
   ============================================================ */
const CLIENT_NAME = "Lomar Specialty Advertising";

// Jotform: review + e-sign the Priority IT Support Agreement
const SIGN_URL = "https://www.jotform.com/sign/261710912105042/invite/01kvm6wzyn70f0443d5ad399c2";

// Valor PayTech — FIRST-MONTH pay links (one-time). Recurring is set up
// after signing, anchored to the day the first payment is made.
const PLANS = [
  {
    key: "essential",
    plan: "Essential",
    hours: "Up to 8 hours / month",
    term: "12-Month Term",
    monthly: "$1,200",
    firstMonth: "$1,200",
    payUrl:
      "https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=bc785746-6d19-11f1-8d9b-128462456e49",
  },
  {
    key: "priority",
    plan: "Priority Plus",
    hours: "Up to 13 hours / month",
    term: "12-Month Term",
    monthly: "$2,000",
    firstMonth: "$2,000",
    payUrl:
      "https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=daec13fd-6d19-11f1-8d9b-128462456e49",
    featured: true,
  },
];

const INCLUDED = [
  ["Priority response", "Front-of-the-line support during business hours, ahead of standard on-demand work."],
  ["Regular rate on emergencies", "Emergency work billed at $199/hr, not the $299/hr non-contract emergency rate."],
  ["No trip charges", "The $120 on-site trip charge is waived on every visit — non-contract clients pay it every time."],
  ["Direct RDP remote access", "Faster fixes through secure RDP-over-VPN instead of slower web-based remote sessions."],
];

const NAVY = "#1a2e5a";
const ORANGE = "#f97316";

export default function LomarProposal() {
  return (
    <div style={{ background: "#f7f8fa", minHeight: "100vh", color: NAVY }}>
      <style>{`
        .lomar-wrap { font-family: 'Inter', system-ui, -apple-system, sans-serif; max-width: 1080px; margin: 0 auto; padding: 0 20px 80px; }
        .lomar-hero { padding: 72px 0 40px; border-bottom: 3px solid ${ORANGE}; }
        .lomar-eyebrow { font-size: 13px; letter-spacing: .18em; text-transform: uppercase; color: ${ORANGE}; font-weight: 700; margin: 0 0 14px; }
        .lomar-h1 { font-size: clamp(30px, 5vw, 46px); line-height: 1.08; font-weight: 800; margin: 0 0 18px; color: ${NAVY}; }
        .lomar-h1 em { font-style: italic; color: ${ORANGE}; }
        .lomar-sub { font-size: 18px; line-height: 1.55; max-width: 620px; color: #44506a; margin: 0; }
        .lomar-section-label { font-size: 13px; letter-spacing: .16em; text-transform: uppercase; color: ${ORANGE}; font-weight: 700; margin: 56px 0 20px; }
        .lomar-incl { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .lomar-incl-card { background: #fff; border: 1px solid #e4e8ef; border-radius: 14px; padding: 22px 24px; box-shadow: 0 1px 3px rgba(26,46,90,.05); }
        .lomar-incl-card h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: ${NAVY}; display: flex; align-items: center; gap: 9px; }
        .lomar-incl-card h3::before { content: ""; width: 9px; height: 9px; border-radius: 50%; background: ${ORANGE}; flex: none; }
        .lomar-incl-card p { margin: 0; font-size: 14.5px; line-height: 1.5; color: #55617a; }
        .lomar-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .lomar-card { position: relative; background: #fff; border: 1px solid #e0e5ee; border-radius: 18px; padding: 28px 26px 26px; display: flex; flex-direction: column; transition: transform .15s ease, box-shadow .15s ease; }
        .lomar-card:hover { transform: translateY(-3px); box-shadow: 0 14px 34px rgba(26,46,90,.12); }
        .lomar-card.featured { border: 2px solid ${ORANGE}; box-shadow: 0 10px 30px rgba(249,115,22,.13); }
        .lomar-flag { position: absolute; top: -12px; left: 26px; background: ${ORANGE}; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: 5px 12px; border-radius: 20px; }
        .lomar-plan { font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: ${ORANGE}; margin: 0 0 4px; }
        .lomar-term { font-size: 22px; font-weight: 800; color: ${NAVY}; margin: 0 0 2px; }
        .lomar-hours { font-size: 14px; color: #6b7488; margin: 0 0 18px; }
        .lomar-total { font-size: 38px; font-weight: 800; color: ${NAVY}; line-height: 1; margin: 0 0 4px; }
        .lomar-total span { font-size: 18px; font-weight: 700; color: #6b7488; }
        .lomar-total-label { font-size: 13.5px; color: #6b7488; margin: 0 0 22px; }
        .lomar-total-label b { color: ${NAVY}; font-weight: 700; }
        .lomar-pay { margin-top: auto; display: block; text-align: center; background: ${NAVY}; color: #fff; text-decoration: none; font-weight: 700; font-size: 16px; padding: 14px 20px; border-radius: 11px; transition: background .15s ease; }
        .lomar-pay:hover { background: #14233f; }
        .lomar-card.featured .lomar-pay { background: ${ORANGE}; }
        .lomar-card.featured .lomar-pay:hover { background: #e0640f; }
        .lomar-sign-band { margin-top: 40px; background: ${NAVY}; border-radius: 18px; padding: 34px 36px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .lomar-sign-band h2 { color: #fff; font-size: 22px; font-weight: 800; margin: 0 0 6px; }
        .lomar-sign-band p { color: #c3cce0; font-size: 15px; margin: 0; max-width: 460px; line-height: 1.5; }
        .lomar-sign-btn { background: ${ORANGE}; color: #fff; text-decoration: none; font-weight: 700; font-size: 16px; padding: 15px 30px; border-radius: 11px; white-space: nowrap; transition: background .15s ease; }
        .lomar-sign-btn:hover { background: #e0640f; }
        .lomar-note { font-size: 13.5px; color: #6b7488; line-height: 1.55; margin: 26px 0 0; padding: 16px 18px; background: #fff; border: 1px solid #e4e8ef; border-left: 3px solid ${ORANGE}; border-radius: 8px; }
        .lomar-foot { margin-top: 52px; padding-top: 26px; border-top: 1px solid #e0e5ee; font-size: 14px; color: #6b7488; text-align: center; line-height: 1.7; }
        .lomar-foot b { color: ${NAVY}; }
        @media (max-width: 720px) {
          .lomar-incl, .lomar-cards { grid-template-columns: 1fr; }
          .lomar-sign-band { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="lomar-wrap">
        <header className="lomar-hero">
          <p className="lomar-eyebrow">On-Site Computer Service · Prepared for {CLIENT_NAME}</p>
          <h1 className="lomar-h1">
            Priority IT Support, <em>on your terms.</em>
          </h1>
          <p className="lomar-sub">
            Pick the plan that fits, sign the agreement, and start with your first month.
            Each plan locks in faster response, lower emergency rates, and no trip charges for the full term.
          </p>
        </header>

        <p className="lomar-section-label">What every plan includes</p>
        <div className="lomar-incl">
          {INCLUDED.map(([title, body]) => (
            <div className="lomar-incl-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <p className="lomar-section-label">Choose your plan</p>
        <div className="lomar-cards">
          {PLANS.map((p) => (
            <div className={`lomar-card${p.featured ? " featured" : ""}`} key={p.key}>
              {p.featured && <span className="lomar-flag">Most popular</span>}
              <p className="lomar-plan">{p.plan}</p>
              <p className="lomar-term">{p.term}</p>
              <p className="lomar-hours">{p.hours}</p>
              <p className="lomar-total">{p.monthly}<span> / month</span></p>
              <p className="lomar-total-label">billed monthly · <b>{p.term.toLowerCase()}</b></p>
              <a className="lomar-pay" href={p.payUrl} target="_blank" rel="noopener noreferrer">
                Pay First Month — {p.firstMonth}
              </a>
            </div>
          ))}
        </div>

        <p className="lomar-note">
          <b>Starting on Essential?</b> You can move up to Priority Plus anytime as Lomar grows —
          just say the word and we'll switch you over from your next monthly billing date. Your term
          runs to the same end date either way.
        </p>

        <p className="lomar-note">
          Your monthly hours cover <b>all support — on-site, remote, and phone</b> — billed against the
          same monthly allowance no matter how the work is delivered. Your first month is paid through the
          button above. After that, monthly billing runs automatically on the same date each month for the
          term. Prices include applicable NC sales tax.
        </p>

        <p className="lomar-note">
          <b>Card surcharge:</b> a processing surcharge applies <b>only to credit-card payments</b> and is
          shown at checkout before you confirm. <b>Debit-card payments have no surcharge.</b>
        </p>

        <div className="lomar-sign-band">
          <div>
            <h2>Review &amp; sign the agreement</h2>
            <p>
              Read the full Priority IT Support Agreement and add your signature. Sign first, then pay
              your first month above.
            </p>
          </div>
          <a className="lomar-sign-btn" href={SIGN_URL} target="_blank" rel="noopener noreferrer">
            Review &amp; Sign
          </a>
        </div>

        <footer className="lomar-foot">
          Questions? Call <b>On-Site Computer Service</b> at <b>980-236-0810</b><br />
          53 Cabarrus Ave. West, Concord, NC 28025 · onsitecomputerservice.net
        </footer>
      </div>
    </div>
  );
}
