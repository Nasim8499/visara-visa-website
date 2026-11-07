import { Category } from "../data";
import { Icon, Reveal, Tile } from "../components/ui";
import { S08Destinations, S10Process, S11Plans } from "../sections/Part2";
import { S19Faq, S20Help } from "../sections/Part3";

export default function CategoryPage({ c }: { c: Category }) {
  const bg = c.dark ? "#000" : "#f5f5f7";
  return (
    <main>
      {/* Local nav */}
      <div className="sticky top-11 z-[80] border-b border-black/10 bg-[#f5f5f7]/80 backdrop-blur-xl" style={{ WebkitBackdropFilter: "saturate(180%) blur(20px)" }}>
        <div className="mx-auto flex h-[52px] max-w-[1024px] items-center justify-between px-6">
          <h1 className="text-[21px] font-semibold tracking-[0.011em] text-[#1d1d1f]">{c.title}</h1>
          <div className="flex items-center gap-5 text-[12px] text-[#1d1d1f]/80">
            <a href="#/" className="hidden hover:text-[#1d1d1f] sm:inline">Home</a>
            <a href="#/plans" className="hidden hover:text-[#1d1d1f] sm:inline">Plans</a>
            <a href="#/support" className="hidden hover:text-[#1d1d1f] sm:inline">Support</a>
            <a href="#/#eligibility" className="btn btn-blue btn-xs">Apply</a>
          </div>
        </div>
      </div>

      <Tile
        hero
        dark={c.dark}
        bg={bg}
        className="min-h-[640px] md:h-[740px]"
        eyebrow={c.eyebrow}
        eyebrowColor={c.dark ? "#ff9f0a" : "#bf4800"}
        title={c.tagline}
        sub={c.desc}
        image={c.img}
        imgTop="48%"
        links={[
          { label: "Start application", href: "#/#eligibility", primary: true },
          { label: "Talk to an adviser", href: "#/support", ghost: true },
        ]}
      >
        <p className="mt-4 text-[14px] text-[#86868b]">From <span className="font-semibold">{c.from}</span> · Fixed fee · Money-back guarantee‡</p>
      </Tile>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1080px] px-6">
          <Reveal>
            <h2 className="hl-section max-w-[760px]">Get to know {c.title.toLowerCase()}. <span className="text-[#6e6e73]">Here's what's included.</span></h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {c.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full min-h-[280px] rounded-[28px] bg-[#f5f5f7] p-8">
                  <Icon name={f.icon} size={40} stroke={1.3} className="text-[#0071e3]" />
                  <h3 className="mt-10 text-[24px] font-semibold leading-[1.16]">{f.title}</h3>
                  <p className="mt-2 text-[17px] leading-[1.4] text-[#6e6e73]">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-20 md:py-28">
        <div className="mx-auto max-w-[980px] px-6">
          <Reveal>
            <h2 className="hl-section">Which one is right for you?</h2>
          </Reveal>
          <Reveal className="mt-10 overflow-hidden rounded-[28px] bg-white">
            {c.items.map((i, idx) => (
              <div key={i.name} className={`grid items-center gap-3 p-6 md:grid-cols-[1.5fr_1fr_auto_auto] md:gap-6 md:px-8 ${idx ? "border-t border-[#d2d2d7]/70" : ""}`}>
                <div>
                  <h3 className="text-[21px] font-semibold leading-[1.19]">{i.name}</h3>
                  <p className="text-[15px] text-[#6e6e73]">{i.desc}</p>
                </div>
                <p className="text-[14px] text-[#6e6e73]"><Icon name="clock" size={14} className="mr-1.5 inline -translate-y-px" />{i.time}</p>
                <p className="text-[17px] font-semibold md:text-right">{i.fee}</p>
                <a href="#/#eligibility" className="btn btn-ghost btn-sm justify-self-start md:justify-self-end">Check fit</a>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {c.slug === "destinations" && <S08Destinations />}
      {c.slug === "plans" ? <S11Plans /> : <S10Process />}
      <S19Faq />
      <S20Help />
    </main>
  );
}
