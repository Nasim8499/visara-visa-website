import { Reveal, Tile, Links } from "../components/ui";

export function PromoStrip() {
  return (
    <div className="bg-[#f5f5f7] px-4 py-[13px] text-center text-[14px] leading-[1.28] tracking-[-0.016em] text-[#1d1d1f]">
      Check your visa eligibility in 3 minutes — free, no account needed.{" "}
      <a href="#/#eligibility" className="text-[#06c] hover:underline">Start now ›</a>
    </div>
  );
}

/* 01 */
export function S01Hero() {
  return (
    <Tile
      hero
      className="min-h-[620px] md:h-[692px]"
      bg="#f5f5f7"
      eyebrow="Visara Global"
      title="Every border. One clear path."
      sub="Visas and immigration, made beautifully simple."
      image="/images/passport.jpg"
      imgTop="42%"
      links={[
        { label: "Check eligibility", href: "#/#eligibility", primary: true },
        { label: "Compare plans", href: "#/plans", ghost: true },
      ]}
    />
  );
}

/* 02 */
export function S02Work() {
  return (
    <Tile
      hero
      dark
      className="min-h-[620px] md:h-[692px]"
      bg="#000"
      eyebrow="Work Visa"
      title="Your career has no borders."
      sub="Skilled-worker visas approved in as little as 3 weeks."
      image="/images/work.jpg"
      imgTop="40%"
      links={[
        { label: "Learn more", href: "#/work", primary: true },
        { label: "Apply", href: "#/work", ghost: true },
      ]}
    />
  );
}

/* 03 */
export function S03StudentVisit() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Tile
        className="h-[560px] md:h-[580px]"
        bg="#fbfbfd"
        title="Student Visa"
        sub="From offer letter to first lecture."
        image="/images/student.jpg"
        imgTop="42%"
        links={[
          { label: "Learn more", href: "#/study" },
          { label: "Apply", href: "#/study" },
        ]}
      />
      <Tile
        dark
        className="h-[560px] md:h-[580px]"
        bg="#000"
        title="Visit Visa"
        sub="The trip of a lifetime, pre-approved."
        image="/images/sky.jpg"
        imgTop="42%"
        links={[
          { label: "Learn more", href: "#/visit" },
          { label: "Apply", href: "#/visit" },
        ]}
      />
    </div>
  );
}

/* 04 */
export function S04FamilyBusiness() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Tile
        className="h-[560px] md:h-[580px]"
        bg="#f5f5f7"
        title="Family Visa"
        sub="Because home is wherever your people are."
        image="/images/family.jpg"
        imgTop="42%"
        links={[
          { label: "Learn more", href: "#/family" },
          { label: "Sponsor", href: "#/family" },
        ]}
      />
      <section className="relative h-[560px] overflow-hidden bg-[#0a0a0c] text-center text-[#f5f5f7] md:h-[580px]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(80% 60% at 50% 100%, rgba(41,151,255,.35), transparent 70%), radial-gradient(60% 40% at 80% 90%, rgba(191,90,242,.3), transparent 70%)" }} />
        <Reveal className="relative z-10 mx-auto max-w-[980px] px-6 pt-12 md:pt-14">
          <h2 className="hl-md">Business & Investor</h2>
          <p className="hl-sub mt-1">Start-up. Golden. Global.</p>
          <Links dark links={[{ label: "Learn more", href: "#/business" }, { label: "Explore", href: "#/business" }]} />
        </Reveal>
        <div className="absolute inset-x-0 bottom-6 flex select-none items-end justify-center gap-4 text-[clamp(90px,14vw,170px)] font-semibold leading-none tracking-tighter md:gap-8">
          {["$", "€", "£", "¥"].map((c, i) => (
            <span key={c} className="grad-text" style={{ opacity: 0.35 + i * 0.2, transform: `translateY(${(3 - i) * 8}px)` }}>{c}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

/* 05 */
export function S05Residency() {
  return (
    <Tile
      hero
      dark
      className="min-h-[620px] md:h-[692px]"
      bg="#000"
      eyebrow="Permanent Residency"
      title="Make it permanent."
      sub="Green cards, PR and indefinite leave — planned to the day."
      image="/images/home.jpg"
      imgTop="40%"
      links={[
        { label: "Learn more", href: "#/residency", primary: true },
        { label: "Start roadmap", href: "#/residency", ghost: true },
      ]}
    />
  );
}

/* 06 */
export function S06Citizenship() {
  return (
    <Tile
      hero
      className="min-h-[620px] md:h-[692px]"
      bg="#f5f5f7"
      eyebrow="Citizenship"
      title="A new passport. A new chapter."
      sub="Naturalisation with test prep, interview coaching and ceremony booking."
      image="/images/citizen.jpg"
      imgTop="44%"
      links={[
        { label: "Learn more", href: "#/citizenship", primary: true },
        { label: "Check my route", href: "#/#eligibility", ghost: true },
      ]}
    />
  );
}
