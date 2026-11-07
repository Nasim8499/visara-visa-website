export const BRAND = "Visara";

export type Item = { name: string; desc: string; time: string; fee: string };
export type Feature = { title: string; desc: string; icon: string };
export type Category = {
  slug: string;
  nav: string;
  title: string;
  eyebrow: string;
  tagline: string;
  desc: string;
  img: string;
  dark: boolean;
  from: string;
  features: Feature[];
  items: Item[];
};

export const categories: Category[] = [
  {
    slug: "work",
    nav: "Work",
    title: "Work Visas",
    eyebrow: "Skilled. Sponsored. Settled.",
    tagline: "Land the job. We'll land the visa.",
    desc: "From skilled-worker permits to intra-company transfers, our case teams map your career to the fastest lawful route.",
    img: "/images/work.jpg",
    dark: true,
    from: "$399",
    features: [
      { title: "Employer-ready packets", desc: "Sponsor letters, labour-market tests and contracts prepared in one shared workspace.", icon: "briefcase" },
      { title: "Points, calculated", desc: "Live scoring for Express Entry, Skilled Independent, Blue Card and more.", icon: "chart" },
      { title: "Dependants included", desc: "Add a partner and children to the same case with no duplicate paperwork.", icon: "users" },
    ],
    items: [
      { name: "Skilled Worker Visa", desc: "Points-based route for in-demand professions.", time: "3–8 weeks", fee: "from $399" },
      { name: "Intra-Company Transfer", desc: "Move within your multinational employer.", time: "2–6 weeks", fee: "from $499" },
      { name: "EU Blue Card", desc: "High-skilled employment across the EU.", time: "4–10 weeks", fee: "from $449" },
      { name: "Seasonal & Temporary Work", desc: "Short-term permits with clear end dates.", time: "2–4 weeks", fee: "from $249" },
    ],
  },
  {
    slug: "study",
    nav: "Study",
    title: "Student Visas",
    eyebrow: "Learn anywhere.",
    tagline: "Your acceptance letter deserves a visa to match.",
    desc: "University, college or language school — we handle funds proof, CAS letters and interview prep end-to-end.",
    img: "/images/student.jpg",
    dark: false,
    from: "$249",
    features: [
      { title: "Admission-to-arrival", desc: "A single timeline from offer letter to airport pickup.", icon: "cap" },
      { title: "Proof of funds, solved", desc: "Bank statement review and sponsor letters validated before you file.", icon: "doc" },
      { title: "Work while you study", desc: "Understand hour limits and post-study work routes up front.", icon: "clock" },
    ],
    items: [
      { name: "F-1 / Study Permit / Tier 4", desc: "Full-time degree programmes abroad.", time: "2–8 weeks", fee: "from $249" },
      { name: "Language Course Visa", desc: "Short intensive programmes up to 11 months.", time: "1–3 weeks", fee: "from $199" },
      { name: "Post-Study Work Permit", desc: "Stay and work after graduation.", time: "3–10 weeks", fee: "from $349" },
      { name: "Exchange & Research", desc: "Visiting scholars and exchange students.", time: "2–6 weeks", fee: "from $299" },
    ],
  },
  {
    slug: "visit",
    nav: "Visit",
    title: "Visit Visas",
    eyebrow: "Tourist. Transit. Treasured.",
    tagline: "Say yes to the trip. We'll handle the forms.",
    desc: "Tourist, business visitor and family-visit visas with itinerary builders and consulate-ready cover letters.",
    img: "/images/sky.jpg",
    dark: true,
    from: "$99",
    features: [
      { title: "Itinerary builder", desc: "Generate a consulate-friendly travel plan in minutes.", icon: "plane" },
      { title: "Appointment finder", desc: "We watch for earliest biometric and interview slots for you.", icon: "calendar" },
      { title: "Multi-entry options", desc: "Compare 6-month, 2-year and 10-year validity.", icon: "globe" },
    ],
    items: [
      { name: "Tourist Visa", desc: "Leisure travel up to 6 months.", time: "3–15 days", fee: "from $99" },
      { name: "Business Visitor", desc: "Meetings, conferences and site visits.", time: "3–15 days", fee: "from $149" },
      { name: "Transit Visa", desc: "Airside and landside transit.", time: "1–5 days", fee: "from $79" },
      { name: "Super Visa (Parents)", desc: "Extended visits for parents and grandparents.", time: "2–6 weeks", fee: "from $299" },
    ],
  },
  {
    slug: "family",
    nav: "Family",
    title: "Family Visas",
    eyebrow: "Together, sooner.",
    tagline: "Because home is wherever your people are.",
    desc: "Spouse, partner, children and parent sponsorship — with the most human case teams in immigration.",
    img: "/images/family.jpg",
    dark: false,
    from: "$599",
    features: [
      { title: "Relationship evidence", desc: "Guided timeline of photos, messages and records that officers want to see.", icon: "heart" },
      { title: "Sponsor assessment", desc: "Income and housing requirements checked before filing.", icon: "scale" },
      { title: "Case-team continuity", desc: "One dedicated caseworker from start to approval.", icon: "users" },
    ],
    items: [
      { name: "Spouse & Partner Visa", desc: "Join your husband, wife or partner.", time: "4–12 months", fee: "from $599" },
      { name: "Child & Dependant Visa", desc: "Bring children under 21.", time: "3–9 months", fee: "from $449" },
      { name: "Parent & Grandparent", desc: "Sponsor your parents for long-term residence.", time: "6–24 months", fee: "from $749" },
      { name: "Fiancé(e) Visa", desc: "Enter to marry, then adjust status.", time: "5–10 months", fee: "from $649" },
    ],
  },
  {
    slug: "business",
    nav: "Business",
    title: "Business & Investor",
    eyebrow: "Build borders-free.",
    tagline: "Start-ups, investors and founders — welcome.",
    desc: "Start-up visas, golden visas and entrepreneur programmes, with legal, tax and banking partners on call.",
    img: "/images/work.jpg",
    dark: true,
    from: "$1,499",
    features: [
      { title: "Business-plan review", desc: "Plans stress-tested against programme scoring criteria.", icon: "chart" },
      { title: "Investor due-diligence", desc: "Source-of-funds checks run by compliance specialists.", icon: "shield" },
      { title: "Company set-up", desc: "Incorporation, banking and registered address, arranged.", icon: "briefcase" },
    ],
    items: [
      { name: "Start-up Visa", desc: "For founders backed by designated organisations.", time: "6–14 months", fee: "from $1,499" },
      { name: "Golden Visa", desc: "Residence through qualifying investment.", time: "3–9 months", fee: "from $2,999" },
      { name: "Entrepreneur Visa", desc: "Self-funded business owners.", time: "3–8 months", fee: "from $1,299" },
      { name: "Digital Nomad Visa", desc: "Remote workers with foreign income.", time: "2–6 weeks", fee: "from $349" },
    ],
  },
  {
    slug: "residency",
    nav: "Residency",
    title: "Permanent Residency",
    eyebrow: "Roots, officially.",
    tagline: "Make it permanent.",
    desc: "Green cards, PR cards and indefinite leave — the long game, played with precision.",
    img: "/images/home.jpg",
    dark: true,
    from: "$899",
    features: [
      { title: "Lifetime planning", desc: "Residency roadmaps that account for every year of presence and absence.", icon: "calendar" },
      { title: "Biometrics, booked", desc: "Appointments secured and reminders sent automatically.", icon: "bell" },
      { title: "Renewals handled", desc: "We alert you 180 days before any PR card expires.", icon: "clock" },
    ],
    items: [
      { name: "Express Entry / Points PR", desc: "Skills-based permanent residence.", time: "6–8 months", fee: "from $899" },
      { name: "Employment-based Green Card", desc: "EB-1 to EB-3 petitions.", time: "8–36 months", fee: "from $1,899" },
      { name: "Indefinite Leave to Remain", desc: "After 5 years of qualifying residence.", time: "3–6 months", fee: "from $749" },
      { name: "PR Card Renewal", desc: "Renew before it lapses.", time: "2–4 months", fee: "from $349" },
    ],
  },
  {
    slug: "citizenship",
    nav: "Citizenship",
    title: "Citizenship",
    eyebrow: "The final stamp.",
    tagline: "A new passport. A new chapter.",
    desc: "Naturalisation, descent and marriage routes with test prep, interview coaching and ceremony booking.",
    img: "/images/citizen.jpg",
    dark: false,
    from: "$599",
    features: [
      { title: "Test practice", desc: "Adaptive practice for civic and language exams.", icon: "cap" },
      { title: "Residency audit", desc: "Every day of presence verified before you apply.", icon: "doc" },
      { title: "Passport support", desc: "From oath ceremony to your first passport.", icon: "passport" },
    ],
    items: [
      { name: "Naturalisation", desc: "Citizenship after qualifying residence.", time: "8–18 months", fee: "from $599" },
      { name: "Citizenship by Descent", desc: "Through parents or grandparents.", time: "6–24 months", fee: "from $799" },
      { name: "Citizenship by Marriage", desc: "Through a citizen spouse.", time: "6–14 months", fee: "from $699" },
      { name: "Dual Citizenship Advice", desc: "Rules that apply to you.", time: "1 session", fee: "from $149" },
    ],
  },
  {
    slug: "destinations",
    nav: "Destinations",
    title: "Destinations",
    eyebrow: "Where next?",
    tagline: "Eight countries. One trusted partner.",
    desc: "Country guides, live policy updates and local legal partners across the world's top immigration destinations.",
    img: "/images/passport.jpg",
    dark: false,
    from: "Free",
    features: [
      { title: "Live policy tracker", desc: "Rule changes explained in plain language, the day they happen.", icon: "bell" },
      { title: "Local partners", desc: "Licensed attorneys and consultants in every country we serve.", icon: "scale" },
      { title: "Cost of living", desc: "Know the numbers before you move.", icon: "chart" },
    ],
    items: [
      { name: "United States", desc: "H-1B, O-1, L-1, EB Green Cards, F-1.", time: "Varies", fee: "—" },
      { name: "Canada", desc: "Express Entry, PNP, Study Permits.", time: "Varies", fee: "—" },
      { name: "United Kingdom", desc: "Skilled Worker, Global Talent, ILR.", time: "Varies", fee: "—" },
      { name: "Australia", desc: "Skilled Independent, Employer Sponsored.", time: "Varies", fee: "—" },
    ],
  },
  {
    slug: "plans",
    nav: "Plans",
    title: "Visara Plans",
    eyebrow: "Pick your pace.",
    tagline: "Support for every kind of journey.",
    desc: "Transparent, fixed-fee packages. No hourly billing, no surprise invoices, no small print.",
    img: "/images/passport.jpg",
    dark: false,
    from: "$149",
    features: [
      { title: "Fixed fees", desc: "Know the full price before you start.", icon: "tag" },
      { title: "Money-back guarantee", desc: "If we can't file, you get a full refund.", icon: "shield" },
      { title: "Upgrade anytime", desc: "Move between plans and pay only the difference.", icon: "bolt" },
    ],
    items: [
      { name: "Essential", desc: "Guided self-filing with document review.", time: "—", fee: "$149" },
      { name: "Plus", desc: "Case manager, filing and 2 expert calls.", time: "—", fee: "$399" },
      { name: "Premier", desc: "Dedicated attorney and priority processing.", time: "—", fee: "$899" },
      { name: "Enterprise", desc: "Teams and relocation programmes.", time: "—", fee: "Custom" },
    ],
  },
  {
    slug: "support",
    nav: "Support",
    title: "Visara Support",
    eyebrow: "We're here.",
    tagline: "Real people. Real answers.",
    desc: "Chat, call or meet a case specialist. Median response time: 4 minutes.",
    img: "/images/expert.jpg",
    dark: false,
    from: "Free",
    features: [
      { title: "24/7 live chat", desc: "Talk to a case specialist any hour, any time zone.", icon: "chat" },
      { title: "Phone consultations", desc: "Book a 30-minute call with a regulated adviser.", icon: "phone" },
      { title: "In-person offices", desc: "Visit one of 38 Visara offices worldwide.", icon: "pin" },
    ],
    items: [
      { name: "Track my application", desc: "Live status with every milestone.", time: "—", fee: "Free" },
      { name: "Update my documents", desc: "Replace or add files to an open case.", time: "—", fee: "Free" },
      { name: "Refunds & billing", desc: "Invoices, receipts and refund requests.", time: "—", fee: "Free" },
      { name: "Report a problem", desc: "Escalate to a senior case lead.", time: "—", fee: "Free" },
    ],
  },
];

export const catBySlug = (s: string) => categories.find((c) => c.slug === s);

export const destinations = [
  { name: "United States", tag: "H-1B · O-1 · Green Card", img: "https://images.pexels.com/photos/28279109/pexels-photo-28279109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  { name: "Canada", tag: "Express Entry · PNP", img: "https://images.pexels.com/photos/19878015/pexels-photo-19878015.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  { name: "United Kingdom", tag: "Skilled Worker · Global Talent", img: "https://images.pexels.com/photos/14434677/pexels-photo-14434677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  { name: "Australia", tag: "Skilled Independent · 482", img: "https://images.pexels.com/photos/5899529/pexels-photo-5899529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  { name: "Germany", tag: "EU Blue Card · Opportunity Card", img: "https://images.pexels.com/photos/9195887/pexels-photo-9195887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  { name: "United Arab Emirates", tag: "Golden Visa · Freelance", img: "https://images.pexels.com/photos/34025535/pexels-photo-34025535.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
];

export const quickLinks = [
  { label: "Check my eligibility", href: "#/#eligibility" },
  { label: "Book a consultation", href: "#/support" },
  { label: "Track my application", href: "#/support" },
  { label: "Compare plans", href: "#/plans" },
];

export const faqs = [
  { q: "How long does a typical visa application take?", a: "It depends on the visa and country. Visit visas can be approved in days, work visas in 3–8 weeks, and permanent residency in 6–24 months. Every Visara case page shows live processing times based on thousands of recent decisions." },
  { q: "Do you guarantee visa approval?", a: "No ethical provider can. What we guarantee is a complete, accurate and consulate-ready application — and a full refund of our fee if we are unable to file your case." },
  { q: "Are Visara advisers licensed?", a: "Yes. Every adviser is a regulated immigration attorney or consultant (RCIC, OISC, MARA, or bar-licensed) in the jurisdiction they advise on." },
  { q: "What documents will I need?", a: "Typically a valid passport, photographs, proof of funds, employment or admission letters, and police certificates. Your personalised checklist is generated after a 3-minute eligibility check." },
  { q: "Can I include my family on the same application?", a: "Most routes allow partners and dependent children. We add them to the same case workspace so documents are only uploaded once." },
  { q: "What happens if my visa is refused?", a: "Our Refusal Rescue team reviews the decision letter within 24 hours, advises on appeals, judicial review or re-application, and files for you at a reduced fee." },
];
