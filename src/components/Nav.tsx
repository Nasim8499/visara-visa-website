import { useEffect, useState } from "react";
import { categories, quickLinks } from "../data";
import { Icon, Logo } from "./ui";

export default function Nav({ current }: { current: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const [search, setSearch] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    setOpen(null);
    setMobile(false);
    setSearch(false);
  }, [current]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearch(false);
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile || search ? "hidden" : "";
  }, [mobile, search]);

  const active = categories.find((c) => c.slug === open);
  const results = q.trim()
    ? categories.flatMap((c) => c.items.filter((i) => (i.name + c.title).toLowerCase().includes(q.toLowerCase())).map((i) => ({ ...i, slug: c.slug })))
    : [];

  return (
    <>
      <header
        className="sticky top-0 z-[100] w-full"
        onMouseLeave={() => setOpen(null)}
      >
        <div
          className="relative z-20 h-11 w-full"
          style={{
            background: open || mobile || search ? "#fff" : "rgba(255,255,255,0.8)",
            backdropFilter: "saturate(180%) blur(20px)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            transition: "background .3s",
          }}
        >
          <nav className="mx-auto flex h-11 max-w-[1024px] items-center justify-between px-4 text-[12px] leading-none text-[#1d1d1f]">
            <a href="#/" aria-label="Visara home" className="flex h-11 items-center px-2 opacity-90 hover:opacity-100" onMouseEnter={() => setOpen(null)}>
              <Logo size={18} />
            </a>
            <ul className="hidden flex-1 items-center justify-between px-3 lg:flex">
              {categories.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`#/${c.slug}`}
                    onMouseEnter={() => setOpen(c.slug)}
                    className={`flex h-11 items-center px-[7px] tracking-[-0.01em] transition-opacity ${current === c.slug ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                  >
                    {c.nav}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center" onMouseEnter={() => setOpen(null)}>
              <button aria-label="Search" onClick={() => setSearch(true)} className="flex h-11 w-9 items-center justify-center opacity-80 hover:opacity-100">
                <Icon name="search" size={16} stroke={2} />
              </button>
              <a href="#/support" aria-label="My applications" className="flex h-11 w-9 items-center justify-center opacity-80 hover:opacity-100">
                <Icon name="bag" size={16} stroke={2} />
              </a>
              <button aria-label="Menu" onClick={() => setMobile((m) => !m)} className="flex h-11 w-9 items-center justify-center opacity-80 hover:opacity-100 lg:hidden">
                <Icon name={mobile ? "close" : "menu"} size={17} stroke={2} />
              </button>
            </div>
          </nav>
        </div>

        {/* Flyout */}
        {active && (
          <div className="absolute left-0 right-0 top-0 z-10 hidden bg-white pt-11 shadow-[0_20px_30px_-20px_rgba(0,0,0,.12)] anim-fade lg:block">
            <div className="mx-auto grid max-w-[1024px] grid-cols-[1.4fr_1fr] gap-10 px-4 pb-12 pt-8" key={active.slug}>
              <div className="anim-slide">
                <p className="mb-3 text-[12px] text-[#6e6e73]">Explore {active.title}</p>
                <ul className="space-y-2.5">
                  {active.items.map((i) => (
                    <li key={i.name}>
                      <a href={`#/${active.slug}`} className="text-[24px] font-semibold leading-[1.16] tracking-[0.004em] text-[#1d1d1f] hover:text-[#0066cc]">
                        {i.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="anim-slide" style={{ animationDelay: "40ms" }}>
                <p className="mb-3 text-[12px] text-[#6e6e73]">Quick Links</p>
                <ul className="space-y-2">
                  {quickLinks.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[14px] font-semibold leading-[1.28] text-[#1d1d1f] hover:text-[#0066cc]">{l.label}</a>
                    </li>
                  ))}
                  <li>
                    <a href={`#/${active.slug}`} className="text-[14px] font-semibold leading-[1.28] text-[#1d1d1f] hover:text-[#0066cc]">All {active.nav} →</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* page dim */}
      {(open || search) && (
        <div
          className="fixed inset-0 z-[90] bg-black/30 anim-fade"
          style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
          onClick={() => { setOpen(null); setSearch(false); }}
          onMouseEnter={() => setOpen(null)}
        />
      )}

      {/* Mobile menu */}
      {mobile && (
        <div className="fixed inset-0 z-[95] overflow-y-auto bg-white px-8 pb-16 pt-[68px] anim-fade lg:hidden">
          <ul>
            {categories.map((c, i) => (
              <li key={c.slug} className="anim-slide" style={{ animationDelay: `${i * 25}ms` }}>
                <a href={`#/${c.slug}`} className="block border-b border-[#d2d2d7]/60 py-[10px] text-[24px] font-semibold leading-[1.2] text-[#1d1d1f]">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search */}
      {search && (
        <div className="fixed inset-x-0 top-0 z-[110] max-h-screen overflow-y-auto bg-white pb-12 anim-fade">
          <div className="mx-auto max-w-[692px] px-6 pt-[10px]">
            <div className="flex h-11 items-center gap-3">
              <Icon name="search" size={20} stroke={2} className="text-[#6e6e73]" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search visas, countries, services"
                className="h-full flex-1 bg-transparent text-[21px] tracking-[0.011em] text-[#1d1d1f] outline-none placeholder:text-[#86868b]"
              />
              <button aria-label="Close search" onClick={() => setSearch(false)} className="text-[#6e6e73] hover:text-[#1d1d1f]">
                <Icon name="close" size={20} stroke={2} />
              </button>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-[12px] text-[#86868b]">{q ? "Results" : "Quick Links"}</p>
              <ul className="space-y-3">
                {q && results.length === 0 && <li className="text-[17px] text-[#6e6e73]">No results for “{q}”.</li>}
                {(q ? results.map((r) => ({ label: r.name, href: `#/${r.slug}` })) : quickLinks).map((l) => (
                  <li key={l.label + l.href}>
                    <a href={l.href} onClick={() => setSearch(false)} className="flex items-center gap-3 text-[14px] font-semibold text-[#1d1d1f] hover:text-[#0066cc]">
                      <span className="text-[#86868b]">→</span> {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
