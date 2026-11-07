import { useEffect, useRef, useState } from "react";
import { destinations } from "../data";
import { Icon, Reveal } from "../components/ui";

const Wrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1080px] px-6 ${className}`}>{children}</div>
);

/* 07 — Eligibility checker */
const purposes = ["Work", "Study", "Visit", "Family", "Invest", "Settle"] as const;
const dests = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "United Arab Emirates"] as const;
const visaMap: Record<string, Record<string, string>> = {
  "United States": { Work: "H-1B Specialty Occupation", Study: "F-1 Student Visa", Visit: "B-2 Visitor Visa", Family: "IR-1 / CR-1 Spouse Visa", Invest: "EB-5 Investor Visa", Settle: "EB-2 / EB-3 Green Card" },
  Canada: { Work: "LMIA-based Work Permit", Study: "Study Permit (SDS)", Visit: "Temporary Resident Visa", Family: "Spousal Sponsorship", Invest: "Start-up Visa Programme", Settle: "Express Entry (CRS)" },
  "United Kingdom": { Work: "Skilled Worker Visa", Study: "Student Visa", Visit: "Standard Visitor Visa", Family: "Family Partner Visa", Invest: "Innovator Founder Visa", Settle: "Indefinite Leave to Remain" },
  Australia: { Work: "Skills in Demand (482)", Study: "Student Visa (500)", Visit: "Visitor Visa (600)", Family: "Partner Visa (820/801)", Invest: "Business Innovation (188)", Settle: "Skilled Independent (189)" },
  Germany: { Work: "EU Blue Card", Study: "National Student Visa", Visit: "Schengen Visa (C)", Family: "Family Reunion Visa", Invest: "Self-employment Permit", Settle: "Settlement Permit" },
  "United Arab Emirates": { Work: "Employment Residence Visa", Study: "Student Residence Visa", Visit: "Tourist Visa", Family: "Family Residence Visa", Invest: "Golden Visa (10-year)", Settle: "Long-term Golden Residency" },
};
const timeMap: Record<string, [string, number]> = {
  Work: ["3–8 weeks", 72], Study: ["2–8 weeks", 85], Visit: ["3–15 days", 92], Family: ["4–12 months", 64], Invest: ["3–9 months", 58], Settle: ["6–12 months", 68],
};

function Select({ label, value, options, onChange }: { label: string; value: string; options: readonly string[]; onChange: (v: string) => void }) {
  return (
    <label className="block text-left">
      <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[52px] w-full cursor-pointer appearance-none rounded-[12px] border border-[#d2d2d7] bg-white px-4 pr-10 text-[17px] text-[#1d1d1f] outline-none transition focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/20"
        >
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <Icon name="down" size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6e6e73]" />
      </div>
    </label>
  );
}

export function S07Eligibility() {
  const [p, setP] = useState<string>("Work");
  const [d, setD] = useState<string>("Canada");
  const [exp, setExp] = useState("3–5 years");
  const [t, odds] = timeMap[p];
  const bonus = exp === "10+ years" ? 8 : exp === "6–10 years" ? 5 : exp === "3–5 years" ? 2 : exp === "Under 1 year" ? -6 : 0;
  const score = Math.min(97, odds + bonus);
  return (
    <section id="eligibility" className="bg-white py-20 md:py-28">
      <Wrap>
        <Reveal className="text-center">
          <p className="eyebrow text-[#bf4800]">Eligibility</p>
          <h2 className="hl-section">Find your visa.</h2>
          <p className="hl-sub mx-auto mt-3 max-w-[640px] text-[#6e6e73]">Three questions. One honest answer — in seconds.</p>
        </Reveal>
        <Reveal className="mx-auto mt-12 grid max-w-[980px] overflow-hidden rounded-[28px] bg-[#f5f5f7] md:grid-cols-2">
          <div className="space-y-5 p-8 md:p-12">
            <Select label="I want to" value={p} options={purposes} onChange={setP} />
            <Select label="Destination" value={d} options={dests} onChange={setD} />
            <Select label="Work or study experience" value={exp} options={["Under 1 year", "1–2 years", "3–5 years", "6–10 years", "10+ years"]} onChange={setExp} />
          </div>
          <div className="flex flex-col justify-between bg-[#1d1d1f] p-8 text-[#f5f5f7] md:p-12">
            <div key={p + d} className="anim-fade">
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b]">Best-fit route</p>
              <h3 className="mt-2 text-[32px] font-semibold leading-[1.1] tracking-[-0.003em]">{visaMap[d][p]}</h3>
              <p className="mt-2 text-[17px] text-[#a1a1a6]">{d} · typical processing {t}</p>
              <div className="mt-8">
                <div className="mb-2 flex items-baseline justify-between text-[14px]">
                  <span className="text-[#a1a1a6]">Estimated eligibility strength</span>
                  <span className="text-[28px] font-semibold text-white">{score}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#2997ff] to-[#30d158] transition-all duration-700" style={{ width: `${score}%` }} />
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="#/support" className="btn btn-blue">Get my full report</a>
              <a href="#/work" className="link link-dark link-sm">See requirements</a>
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}

/* 08 — Destinations carousel */
export function S08Destinations() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  return (
    <section id="destinations" className="overflow-hidden bg-[#f5f5f7] py-20 md:py-28">
      <Wrap>
        <Reveal>
          <h2 className="hl-section">Take a closer look. <span className="text-[#6e6e73]">At where you're going.</span></h2>
        </Reveal>
      </Wrap>
      <Reveal className="mt-10">
        <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[max(24px,calc((100vw-1080px)/2+24px))] pb-2">
          {destinations.map((d) => (
            <a key={d.name} href="#/destinations" className="group relative h-[480px] w-[300px] shrink-0 snap-start overflow-hidden rounded-[28px] bg-black md:h-[560px] md:w-[400px]">
              <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-black/10" />
              <div className="relative p-8 text-white">
                <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/80">{d.tag}</p>
                <h3 className="mt-2 text-[28px] font-semibold leading-[1.14] tracking-[0.007em]">{d.name}</h3>
              </div>
              <span className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition group-hover:bg-black/80">
                <Icon name="plus" size={16} stroke={2.2} />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
      <Wrap className="mt-6 flex justify-end gap-3">
        {[-1, 1].map((d) => (
          <button key={d} aria-label={d < 0 ? "Previous" : "Next"} onClick={() => scroll(d)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] transition hover:bg-[#d2d2d7]">
            <Icon name={d < 0 ? "left" : "right"} size={20} stroke={2} />
          </button>
        ))}
      </Wrap>
    </section>
  );
}

/* 09 — Stats */
function Count({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (n: number) => {
        const k = Math.min(1, (n - start) / 1600);
        setV(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

export function S09Stats() {
  const stats = [
    { n: 98.4, s: "%", d: 1, t: "Approval rate on filed applications" },
    { n: 240, s: "K+", d: 0, t: "Families and professionals relocated" },
    { n: 38, s: "", d: 0, t: "Offices across 24 countries" },
    { n: 4.9, s: "/5", d: 1, t: "Average client rating from 61,000 reviews" },
  ];
  return (
    <section className="bg-black py-20 text-[#f5f5f7] md:py-28">
      <Wrap>
        <Reveal>
          <h2 className="hl-section max-w-[760px]">Built on results. <span className="text-[#86868b]">Proven by people.</span></h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="grad-text text-[clamp(56px,7vw,80px)] font-semibold leading-none tracking-[-0.03em]"><Count to={s.n} suffix={s.s} decimals={s.d} /></div>
              <p className="mt-3 max-w-[220px] text-[17px] leading-[1.35] text-[#a1a1a6]">{s.t}</p>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* 10 — Process */
export function S10Process() {
  const steps = [
    { i: "search", t: "Assess", d: "A 3-minute check matches you to every route you qualify for, ranked by speed and strength." },
    { i: "filecheck", t: "Prepare", d: "Upload once. We review, translate and format every document against official rules." },
    { i: "bolt", t: "File", d: "Your case manager submits, books biometrics and responds to any request from the authority." },
    { i: "flag", t: "Arrive", d: "Visa approved. Get arrival guides, housing partners and a local contact on day one." },
  ];
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <Wrap>
        <Reveal className="text-center">
          <h2 className="hl-section">Four steps. Zero guesswork.</h2>
          <p className="hl-sub mx-auto mt-3 max-w-[620px] text-[#6e6e73]">From first question to first morning in your new country.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="flex h-full min-h-[340px] flex-col rounded-[28px] bg-[#f5f5f7] p-8 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-[14px] font-semibold text-[#6e6e73]">Step {i + 1}</span>
                <Icon name={s.i} size={44} stroke={1.3} className="mt-6 text-[#0071e3]" />
                <h3 className="mt-auto text-[28px] font-semibold leading-[1.14]">{s.t}</h3>
                <p className="mt-2 text-[17px] leading-[1.4] text-[#6e6e73]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* 11 — Plans */
export function S11Plans() {
  const plans = [
    { n: "Essential", p: "$149", d: "Guided self-filing", f: ["Eligibility report", "Smart document checklist", "Form auto-fill", "Email support"], hl: false },
    { n: "Plus", p: "$399", d: "Most popular", f: ["Everything in Essential", "Dedicated case manager", "Full filing on your behalf", "2 adviser video calls", "Application tracker"], hl: true },
    { n: "Premier", p: "$899", d: "White-glove service", f: ["Everything in Plus", "Senior immigration attorney", "Priority express processing", "Unlimited adviser calls", "Refusal Rescue included"], hl: false },
  ];
  return (
    <section id="plans" className="bg-[#f5f5f7] py-20 md:py-28">
      <Wrap>
        <Reveal className="text-center">
          <h2 className="hl-section">Choose your plan.</h2>
          <p className="hl-sub mx-auto mt-3 max-w-[620px] text-[#6e6e73]">Fixed fees. No hourly billing. Government charges extra.*</p>
        </Reveal>
        <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.n} delay={i * 90} className="h-full">
              <div className={`relative flex h-full flex-col rounded-[28px] bg-white p-8 ${p.hl ? "ring-2 ring-[#0071e3]" : ""}`}>
                {p.hl && <span className="absolute right-6 top-6 rounded-full bg-[#0071e3] px-3 py-1 text-[12px] font-semibold text-white">Popular</span>}
                <h3 className="text-[28px] font-semibold leading-[1.14]">{p.n}</h3>
                <p className="text-[17px] text-[#6e6e73]">{p.d}</p>
                <p className="mt-6 text-[48px] font-semibold leading-none tracking-[-0.02em]">{p.p}</p>
                <p className="mt-1 text-[14px] text-[#6e6e73]">one-time fee per application</p>
                <ul className="mt-8 flex-1 space-y-3 border-t border-[#d2d2d7] pt-6">
                  {p.f.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] leading-[1.35]"><Icon name="check" size={18} stroke={2.4} className="mt-0.5 shrink-0 text-[#0071e3]" />{f}</li>
                  ))}
                </ul>
                <a href="#/plans" className={`btn mt-8 ${p.hl ? "btn-blue" : "btn-ghost"}`}>Get started</a>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* 12 — Documents bento */
export function S12Documents() {
  const docs = ["Passport (valid 6+ months)", "Proof of funds", "Employment letter", "Police clearance", "Passport photos"];
  return (
    <section id="documents" className="bg-white py-20 md:py-28">
      <Wrap>
        <Reveal>
          <h2 className="hl-section max-w-[800px]">Every document. <span className="text-[#6e6e73]">In its place.</span></h2>
        </Reveal>
        <div className="mt-12 grid auto-rows-[minmax(240px,auto)] gap-5 md:grid-cols-4">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="flex h-full flex-col rounded-[28px] bg-[#f5f5f7] p-8 md:p-10">
              <Icon name="filecheck" size={36} stroke={1.4} className="text-[#0071e3]" />
              <h3 className="mt-5 text-[28px] font-semibold leading-[1.14]">Smart checklist</h3>
              <p className="mt-2 max-w-[420px] text-[17px] text-[#6e6e73]">A personalised list built from your exact visa, nationality and profile — updated when rules change.</p>
              <ul className="mt-8 space-y-3">
                {docs.map((d, i) => (
                  <li key={d} className="flex items-center gap-3 rounded-[14px] bg-white px-4 py-3.5 text-[15px] shadow-[0_1px_0_rgba(0,0,0,.04)]">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full ${i < 3 ? "bg-[#30d158] text-white" : "bg-[#e8e8ed] text-[#86868b]"}`}>
                      <Icon name="check" size={14} stroke={3} />
                    </span>
                    {d}
                    <span className="ml-auto text-[12px] text-[#86868b]">{i < 3 ? "Verified" : "Pending"}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {[
            { i: "translate", t: "Certified translation", d: "Accepted by 190+ authorities. 24-hour turnaround.", bg: "#f5f5f7" },
            { i: "stamp", t: "Apostille & notary", d: "Legalise documents without leaving home.", bg: "#f5f5f7" },
            { i: "camera", t: "Photo checker", d: "AI validates size, background and expression to each country's spec.", bg: "#f5f5f7" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="flex h-full flex-col rounded-[28px] p-8" style={{ background: c.bg }}>
                <Icon name={c.i} size={32} stroke={1.4} className="text-[#0071e3]" />
                <h3 className="mt-auto pt-8 text-[24px] font-semibold leading-[1.16]">{c.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.4] text-[#6e6e73]">{c.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="md:col-span-2">
            <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-[28px] bg-black p-8 text-white">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#2997ff]/40 blur-3xl" />
              <Icon name="bell" size={32} stroke={1.4} className="relative text-[#2997ff]" />
              <h3 className="relative mt-6 text-[24px] font-semibold leading-[1.16]">Expiry reminders</h3>
              <p className="relative mt-2 max-w-[460px] text-[15px] leading-[1.4] text-[#a1a1a6]">Passports, police certificates and medicals expire. We alert you 180, 90 and 30 days ahead so nothing derails your case.</p>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}

/* 13 — Tracker */
export function S13Tracker() {
  const steps = [
    { t: "Application submitted", s: "Mar 3", done: true },
    { t: "Biometrics completed", s: "Mar 11", done: true },
    { t: "Background checks", s: "In progress", done: false, cur: true },
    { t: "Decision", s: "Est. Apr 2", done: false },
  ];
  return (
    <section id="tracker" className="overflow-hidden bg-black py-20 text-[#f5f5f7] md:py-28">
      <Wrap className="grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-[#ff9f0a]">Visara Tracker</p>
          <h2 className="hl-section mt-1">Know where you stand. Always.</h2>
          <p className="hl-sub mt-4 text-[#a1a1a6]">Live status from the immigration authority, in your pocket. Push alerts for every milestone and request.</p>
          <ul className="mt-8 space-y-4 text-[17px]">
            {["Real-time status sync with 24 immigration systems", "Instant alerts for biometric and interview slots", "Secure chat with your case manager"].map((t) => (
              <li key={t} className="flex gap-3"><Icon name="check" size={22} stroke={2.4} className="shrink-0 text-[#30d158]" />{t}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#/support" className="btn btn-blue">Track my case</a>
            <a href="#/support" className="link link-dark">Get the app</a>
          </div>
        </Reveal>
        <Reveal delay={120} className="flex justify-center">
          <div className="relative w-[300px] rounded-[48px] border-[10px] border-[#2a2a2c] bg-[#f5f5f7] p-5 pb-8 text-[#1d1d1f] shadow-[0_0_0_2px_#48484a,0_40px_80px_-20px_rgba(41,151,255,.35)]">
            <div className="mx-auto mb-5 h-[22px] w-24 rounded-full bg-black" />
            <p className="text-[12px] text-[#6e6e73]">Application VS-20481</p>
            <h3 className="text-[22px] font-semibold leading-[1.15]">Skilled Worker · Canada</h3>
            <div className="mt-4 rounded-[18px] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between text-[12px] text-[#6e6e73]"><span>Progress</span><span className="font-semibold text-[#1d1d1f]">62%</span></div>
              <div className="mt-2 h-1.5 rounded-full bg-[#e8e8ed]"><div className="h-full w-[62%] rounded-full bg-[#0071e3]" /></div>
            </div>
            <ol className="mt-4 space-y-3">
              {steps.map((s) => (
                <li key={s.t} className="flex items-center gap-3 rounded-[16px] bg-white p-3.5 shadow-sm">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white ${s.done ? "bg-[#30d158]" : s.cur ? "bg-[#0071e3]" : "bg-[#d2d2d7]"}`}>
                    {s.done ? <Icon name="check" size={14} stroke={3} /> : s.cur ? <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> : null}
                  </span>
                  <div className="leading-[1.2]">
                    <p className="text-[14px] font-semibold">{s.t}</p>
                    <p className="text-[12px] text-[#6e6e73]">{s.s}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
