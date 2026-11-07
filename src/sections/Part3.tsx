import { useEffect, useRef, useState } from "react";
import { faqs } from "../data";
import { Icon, Reveal, Links } from "../components/ui";

const Wrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1080px] px-6 ${className}`}>{children}</div>
);

/* 14 — Experts */
export function S14Experts() {
  return (
    <section id="experts" className="bg-[#f5f5f7] py-20 md:py-28">
      <Wrap className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e8e8ed]">
            <img src="/images/expert.jpg" alt="Visara immigration adviser" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-[18px] bg-white/80 p-4 backdrop-blur-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#30d158] text-white"><Icon name="chat" size={20} /></span>
              <div className="leading-[1.25]">
                <p className="text-[14px] font-semibold">Adviser online now</p>
                <p className="text-[12px] text-[#6e6e73]">Average reply in 4 minutes</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow text-[#bf4800]">Meet the experts</p>
          <h2 className="hl-section mt-1">Real advisers. Really on your side.</h2>
          <p className="hl-sub mt-4 text-[#6e6e73]">Every Visara case is led by a licensed immigration professional — never a call-centre script.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[["420+", "Licensed advisers"], ["32", "Languages spoken"], ["RCIC · OISC · MARA", "Regulated bodies"], ["1:1", "Dedicated caseworker"]].map(([a, b]) => (
              <div key={b} className="rounded-[18px] bg-white p-5">
                <p className="text-[22px] font-semibold leading-[1.1]">{a}</p>
                <p className="mt-1 text-[14px] text-[#6e6e73]">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#/support" className="btn btn-blue">Book a free call</a>
            <a href="#/support" className="link">Meet the team</a>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}

/* 15 — Success stories */
const stories = [
  { q: "Approved in 19 days. I was expecting months.", n: "Priya S.", v: "Skilled Worker · UK", g: "linear-gradient(160deg,#0a84ff,#5e5ce6)" },
  { q: "They found the one document my last agent missed.", n: "Marcus O.", v: "Spouse Visa · Canada", g: "linear-gradient(160deg,#ff375f,#ff9f0a)" },
  { q: "From refusal to approval within six weeks.", n: "Elena V.", v: "Student Visa · Australia", g: "linear-gradient(160deg,#30d158,#0a84ff)" },
  { q: "Our entire engineering team relocated in one quarter.", n: "Hiro T.", v: "Intra-Company · Germany", g: "linear-gradient(160deg,#bf5af2,#ff375f)" },
  { q: "The tracker alone was worth it. No more refreshing portals.", n: "Amara N.", v: "Green Card · USA", g: "linear-gradient(160deg,#1d1d1f,#48484a)" },
];
export function S15Stories() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section id="stories" className="overflow-hidden bg-white py-20 md:py-28">
      <Wrap>
        <Reveal>
          <h2 className="hl-section">Get the highlights. <span className="text-[#6e6e73]">Real journeys, real arrivals.</span></h2>
        </Reveal>
      </Wrap>
      <Reveal className="mt-10">
        <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[max(24px,calc((100vw-1080px)/2+24px))] pb-2">
          {stories.map((s) => (
            <figure key={s.n} className="relative flex h-[440px] w-[300px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[28px] p-8 text-white md:h-[480px] md:w-[380px]" style={{ background: s.g }}>
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={18} className="fill-white" stroke={0} />)}</div>
              <blockquote className="text-[28px] font-semibold leading-[1.14] tracking-[0.007em]">“{s.q}”</blockquote>
              <figcaption className="leading-[1.3]">
                <p className="text-[17px] font-semibold">{s.n}</p>
                <p className="text-[14px] text-white/75">{s.v}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
      <Wrap className="mt-6 flex justify-end gap-3">
        {[-1, 1].map((d) => (
          <button key={d} aria-label={d < 0 ? "Previous" : "Next"} onClick={() => ref.current?.scrollBy({ left: d * 400, behavior: "smooth" })} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] transition hover:bg-[#d2d2d7]">
            <Icon name={d < 0 ? "left" : "right"} size={20} stroke={2} />
          </button>
        ))}
      </Wrap>
    </section>
  );
}

/* 16 — Privacy */
export function S16Privacy() {
  const items = [
    { i: "lock", t: "End-to-end encryption", d: "Files are encrypted in transit and at rest with AES-256." },
    { i: "eyeoff", t: "Never sold. Never shared.", d: "Your data is used only to process your case." },
    { i: "finger", t: "Passwordless sign-in", d: "Passkeys and biometrics protect every account." },
    { i: "key", t: "You hold the keys", d: "Delete your data and documents anytime, instantly." },
  ];
  return (
    <section id="privacy" className="bg-[#f5f5f7] py-20 md:py-28">
      <Wrap>
        <Reveal className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[22px] bg-gradient-to-b from-[#2997ff] to-[#0071e3] text-white shadow-lg shadow-[#0071e3]/30">
            <Icon name="shield" size={44} stroke={1.5} />
          </div>
          <h2 className="hl-section">Privacy. That's Visara.</h2>
          <p className="hl-sub mx-auto mt-3 max-w-[680px] text-[#6e6e73]">Your passport, finances and family history are the most personal data you own. We treat them that way.</p>
          <div className="mt-5 flex justify-center"><a href="#/" className="link">Learn more about privacy</a></div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="h-full rounded-[28px] bg-white p-7">
                <Icon name={c.i} size={32} stroke={1.4} className="text-[#0071e3]" />
                <h3 className="mt-6 text-[21px] font-semibold leading-[1.19]">{c.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.4] text-[#6e6e73]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* 17 — Refusal rescue + Appeals */
export function S17Appeals() {
  return (
    <div id="appeals" className="grid gap-3 md:grid-cols-2">
      <section className="relative h-[560px] overflow-hidden bg-black text-center text-[#f5f5f7] md:h-[580px]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(70% 50% at 50% 100%, rgba(255,55,95,.45), transparent 70%)" }} />
        <Reveal className="relative z-10 mx-auto max-w-[980px] px-6 pt-12 md:pt-14">
          <p className="eyebrow text-[#ff6482]">Refusal Rescue</p>
          <h2 className="hl-md">Refused? Not finished.</h2>
          <p className="hl-sub mt-1">We review your decision letter in 24 hours.</p>
          <Links dark links={[{ label: "Learn more", href: "#/support" }, { label: "Start review", href: "#/support" }]} />
        </Reveal>
        <div className="absolute inset-x-0 bottom-12 mx-auto flex w-[min(78%,360px)] -rotate-3 flex-col gap-3">
          <div className="rounded-[18px] bg-white/10 p-4 text-left backdrop-blur-xl">
            <p className="text-[12px] text-white/60">Decision letter</p>
            <p className="text-[15px] font-semibold text-[#ff6482]">Refused — insufficient evidence of funds</p>
          </div>
          <div className="translate-x-6 rounded-[18px] bg-white p-4 text-left text-[#1d1d1f] shadow-2xl">
            <p className="text-[12px] text-[#6e6e73]">Visara plan</p>
            <p className="flex items-center gap-2 text-[15px] font-semibold"><Icon name="check" size={16} stroke={3} className="text-[#30d158]" /> Re-file with 6-month statements</p>
          </div>
        </div>
      </section>
      <section className="relative h-[560px] overflow-hidden bg-[#fbfbfd] text-center md:h-[580px]">
        <Reveal className="relative z-10 mx-auto max-w-[980px] px-6 pt-12 md:pt-14">
          <p className="eyebrow text-[#bf4800]">Appeals & Reviews</p>
          <h2 className="hl-md">Every right, exercised.</h2>
          <p className="hl-sub mt-1 text-[#1d1d1f]">Tribunal appeals and administrative reviews, filed on time.</p>
          <Links links={[{ label: "Learn more", href: "#/support" }, { label: "Talk to an attorney", href: "#/support" }]} />
        </Reveal>
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div className="grid w-[min(86%,420px)] grid-cols-3 gap-3 rounded-t-[28px] bg-[#f5f5f7] p-5 pb-12">
            {[["scale", "Tribunal"], ["doc", "Review"], ["clock", "28-day deadline"]].map(([i, t]) => (
              <div key={t} className="flex flex-col items-center gap-2 rounded-[18px] bg-white p-4 text-[12px] font-semibold">
                <Icon name={i} size={28} stroke={1.4} className="text-[#0071e3]" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* 18 — Express */
function Bar({ label, w, color, value }: { label: string; w: number; color: string; value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex justify-between text-[14px]"><span className="text-white/70">{label}</span><span className="font-semibold">{value}</span></div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full transition-[width] duration-[1400ms] ease-out" style={{ width: on ? `${w}%` : "0%", background: color }} />
      </div>
    </div>
  );
}
export function S18Express() {
  return (
    <section id="express" className="relative overflow-hidden bg-black py-20 text-[#f5f5f7] md:py-28">
      <div className="absolute inset-0" style={{ background: "radial-gradient(60% 70% at 85% 20%, rgba(255,159,10,.3), transparent 70%), radial-gradient(50% 60% at 10% 90%, rgba(255,55,95,.25), transparent 70%)" }} />
      <Wrap className="relative grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-[#ff9f0a]">Express Processing</p>
          <h2 className="hl-section mt-1"><span className="grad-text-warm">3× faster.</span> Same rigour.</h2>
          <p className="hl-sub mt-4 text-[#a1a1a6]">Priority submission, premium government channels and a case lead working your file the same day.</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#/plans" className="btn btn-blue">Go express</a>
            <a href="#/plans" className="link link-dark">See eligible visas</a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-8 rounded-[28px] bg-white/[0.07] p-8 backdrop-blur-xl md:p-10">
            <div className="space-y-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/60">Visit visa</p>
              <Bar label="Standard" w={100} color="#6e6e73" value="15 days" />
              <Bar label="Express" w={20} color="linear-gradient(90deg,#ff9f0a,#ff375f)" value="3 days" />
            </div>
            <div className="space-y-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/60">Skilled worker visa</p>
              <Bar label="Standard" w={100} color="#6e6e73" value="8 weeks" />
              <Bar label="Express" w={38} color="linear-gradient(90deg,#ff9f0a,#ff375f)" value="3 weeks" />
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}

/* 19 — FAQ */
export function S19Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <Wrap className="max-w-[860px]">
        <Reveal>
          <h2 className="hl-section text-center">Questions? Answers.</h2>
        </Reveal>
        <Reveal className="mt-12 border-t border-[#d2d2d7]">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-[#d2d2d7]">
              <button
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-[21px] font-semibold leading-[1.19] tracking-[0.011em] text-[#1d1d1f] hover:text-[#0066cc]"
              >
                {f.q}
                <Icon name="plus" size={22} stroke={1.8} className={`shrink-0 text-[#6e6e73] transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div className="grid transition-all duration-500 ease-out" style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <p className="pb-6 pr-10 text-[17px] leading-[1.47] text-[#6e6e73]">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </Wrap>
    </section>
  );
}

/* 20 — Help + alerts */
export function S20Help() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section id="help" className="bg-[#f5f5f7] py-20 md:py-28">
      <Wrap>
        <Reveal className="text-center">
          <h2 className="hl-section">Help is here.</h2>
          <p className="hl-sub mx-auto mt-3 max-w-[620px] text-[#6e6e73]">Start your journey with a specialist — whenever suits you.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { i: "chat", t: "Chat online", d: "Talk to a case specialist in minutes, 24/7.", l: "Start chat" },
            { i: "phone", t: "Call 1-800-VISARA-1", d: "Free 30-minute consultation with an adviser.", l: "Book a call" },
            { i: "pin", t: "Visit an office", d: "38 offices across 24 countries. Walk-ins welcome.", l: "Find an office" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <a href="#/support" className="group flex h-full flex-col items-center rounded-[28px] bg-white p-8 text-center transition-transform duration-500 hover:-translate-y-1">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f5f7] text-[#0071e3]"><Icon name={c.i} size={30} stroke={1.4} /></span>
                <h3 className="mt-5 text-[24px] font-semibold leading-[1.16]">{c.t}</h3>
                <p className="mt-2 text-[17px] leading-[1.4] text-[#6e6e73]">{c.d}</p>
                <span className="link mt-5 !text-[17px]">{c.l}</span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[28px] bg-white p-8 md:flex-row md:p-12">
            <div className="max-w-[460px] text-center md:text-left">
              <div className="flex items-center justify-center gap-2 text-[#0071e3] md:justify-start"><Icon name="bell" size={20} /><span className="eyebrow !text-[17px]">Visa alerts</span></div>
              <h3 className="mt-2 text-[28px] font-semibold leading-[1.14]">Policy changes, in plain English.</h3>
              <p className="mt-2 text-[17px] text-[#6e6e73]">One short email when rules change in your destination. Unsubscribe anytime.</p>
            </div>
            {done ? (
              <p className="flex items-center gap-2 text-[17px] font-semibold text-[#1d1d1f]"><Icon name="check" size={22} stroke={3} className="text-[#30d158]" /> You're on the list. Check your inbox.</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }} className="flex w-full max-w-[460px] flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="h-[44px] flex-1 rounded-full border border-[#d2d2d7] bg-white px-5 text-[17px] outline-none transition focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/20"
                />
                <button className="btn btn-blue h-[44px]">Subscribe</button>
              </form>
            )}
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
