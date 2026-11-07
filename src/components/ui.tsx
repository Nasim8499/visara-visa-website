import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import {
  Briefcase, BarChart3, Users, GraduationCap, FileText, Clock, Plane, Calendar, Globe, Heart,
  Scale, ShieldCheck, Bell, Stamp, Tag, Zap, MessageCircle, Phone, MapPin, Check, Lock, Search,
  Luggage, Languages, Camera, Star, ChevronRight, ChevronLeft, ChevronDown, Plus, Minus, X, Menu,
  FileCheck2, Fingerprint, EyeOff, KeyRound, Landmark, Home as HomeIcon, Flag,
} from "lucide-react";

const map: Record<string, any> = {
  briefcase: Briefcase, chart: BarChart3, users: Users, cap: GraduationCap, doc: FileText, clock: Clock,
  plane: Plane, calendar: Calendar, globe: Globe, heart: Heart, scale: Scale, shield: ShieldCheck,
  bell: Bell, passport: Stamp, tag: Tag, bolt: Zap, chat: MessageCircle, phone: Phone, pin: MapPin,
  check: Check, lock: Lock, search: Search, bag: Luggage, translate: Languages, camera: Camera,
  star: Star, right: ChevronRight, left: ChevronLeft, down: ChevronDown, plus: Plus, minus: Minus,
  close: X, menu: Menu, filecheck: FileCheck2, finger: Fingerprint, eyeoff: EyeOff, key: KeyRound,
  bank: Landmark, home: HomeIcon, flag: Flag,
};

export function Icon({ name, size = 24, stroke = 1.6, className, style }: { name: string; size?: number; stroke?: number; className?: string; style?: CSSProperties }) {
  const C = map[name] || Globe;
  return <C size={size} strokeWidth={stroke} className={className} style={style} />;
}

export function Logo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M1.5 12h21M12 1.5c3.2 3 4.7 6.6 4.7 10.5S15.200 19 12 22.500M12 1.500C8.800 4.500 7.300 8.100 7.300 12S8.800 19 12 22.500" stroke="#fff" strokeWidth="1.3" fill="none" />
    </svg>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${on ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export type TLink = { label: string; href: string; primary?: boolean; ghost?: boolean };

export function Links({ links, dark, size }: { links?: TLink[]; dark?: boolean; size?: "sm" }) {
  if (!links?.length) return null;
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {links.map((l, i) =>
        l.ghost ? (
          <a key={i} href={l.href} className={`btn ${dark ? "btn-ghost-dark" : "btn-ghost"}`}>{l.label}</a>
        ) : l.primary ? (
          <a key={i} href={l.href} className={`btn btn-blue`}>{l.label}</a>
        ) : (
          <a key={i} href={l.href} className={`link ${dark ? "link-dark" : ""} ${size === "sm" ? "link-sm" : ""}`}>{l.label}</a>
        )
      )}
    </div>
  );
}

type TileProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  dark?: boolean;
  bg: string;
  image?: string;
  imgTop?: string;
  imgPos?: string;
  links?: TLink[];
  className?: string;
  hero?: boolean;
  children?: ReactNode;
  id?: string;
  eyebrowColor?: string;
};

/** Apple-style product tile: text on top, imagery fades up from the bottom. */
export function Tile({ eyebrow, title, sub, dark, bg, image, imgTop = "46%", imgPos = "center", links, className = "", hero, children, id, eyebrowColor }: TileProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden text-center ${className}`}
      style={{ background: bg, color: dark ? "#f5f5f7" : "#1d1d1f" }}
    >
      <Reveal className="relative z-10 mx-auto max-w-[980px] px-6 pt-12 md:pt-14">
        {eyebrow && <p className="eyebrow mb-1" style={{ color: eyebrowColor }}>{eyebrow}</p>}
        <h2 className={hero ? "hl-hero" : "hl-md"}>{title}</h2>
        {sub && <p className={`hl-sub mt-1 ${dark ? "text-[#f5f5f7]" : "text-[#1d1d1f]"}`}>{sub}</p>}
        <Links links={links} dark={dark} />
        {children}
      </Reveal>
      {image && (
        <div className="absolute inset-x-0 bottom-0" style={{ top: imgTop }}>
          <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: imgPos }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${bg} 0%, ${bg}00 38%)` }} />
        </div>
      )}
    </section>
  );
}

export function useRoute() {
  const parse = () => {
    const h = window.location.hash.replace(/^#\/?/, "");
    const [path, anchor] = h.split("#");
    return { path: path || "", anchor: anchor || "" };
  };
  const [r, setR] = useState(parse);
  useEffect(() => {
    const on = () => setR(parse());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return r;
}
