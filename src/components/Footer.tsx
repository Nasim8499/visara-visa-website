import { categories } from "../data";

const cols: { title: string; links: [string, string][] }[] = [
  {
    title: "Explore Visas",
    links: categories.slice(0, 7).map((c) => [c.title, `#/${c.slug}`] as [string, string]),
  },
  {
    title: "Destinations",
    links: [["United States", "#/destinations"], ["Canada", "#/destinations"], ["United Kingdom", "#/destinations"], ["Australia", "#/destinations"], ["Germany", "#/destinations"], ["United Arab Emirates", "#/destinations"]],
  },
  {
    title: "Services",
    links: [["Eligibility Check", "#/#eligibility"], ["Document Review", "#/#documents"], ["Express Processing", "#/#express"], ["Refusal Rescue", "#/#appeals"], ["Plans & Pricing", "#/plans"], ["Application Tracker", "#/#tracker"]],
  },
  {
    title: "Account",
    links: [["Manage Your Visara ID", "#/support"], ["Sign In", "#/support"], ["My Applications", "#/support"], ["Billing & Invoices", "#/support"]],
  },
  {
    title: "Visara Company",
    links: [["About Visara", "#/"], ["Newsroom", "#/"], ["Careers", "#/"], ["Our Offices", "#/support"], ["Partner Programme", "#/"], ["Contact Us", "#/support"]],
  },
  {
    title: "Trust & Legal",
    links: [["Regulatory Information", "#/"], ["Complaints Procedure", "#/"], ["Data Protection", "#/"], ["Accessibility", "#/"], ["Modern Slavery Statement", "#/"]],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[12px] leading-[1.33337] tracking-[-0.01em] text-[#6e6e73]">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="flex items-center gap-2 border-b border-[#d2d2d7] py-3.5 text-[#1d1d1f]">
          <a href="#/" className="opacity-80 hover:opacity-100">
            <svg width="13" height="13" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="currentColor" /><path d="M1.5 12h21M12 1.5c3.2 3 4.7 6.6 4.7 10.5S15.2 19 12 22.5M12 1.5C8.8 4.5 7.3 8.1 7.3 12S8.8 19 12 22.5" stroke="#f5f5f7" strokeWidth="1.5" fill="none" /></svg>
          </a>
          <span className="text-[#86868b]">›</span>
          <span>Visa & Immigration</span>
        </div>

        <div className="space-y-3 border-b border-[#d2d2d7] py-5">
          <p>* Visara provides immigration information and case-preparation services. We are not a government agency and do not guarantee visa approval. Decisions are made solely by the relevant immigration authority.</p>
          <p>† Processing times are estimates based on recent decisions and vary by country, season, and individual circumstances. Fees shown exclude government charges, biometrics and translation costs unless noted.</p>
          <p>‡ Money-back guarantee applies if Visara is unable to submit your application due to a Visara error or ineligibility identified after payment. See Plans terms for details.</p>
          <p>Visara is a fictional brand created for demonstration. Nothing on this page constitutes legal advice.</p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-3 lg:grid-cols-6">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="mb-2.5 text-[12px] font-semibold text-[#1d1d1f]">{c.title}</h3>
              <ul className="space-y-2">
                {c.links.map(([l, h]) => (
                  <li key={l}>
                    <a href={h} className="hover:text-[#1d1d1f] hover:underline">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#d2d2d7] py-4">
          <p>
            More ways to get help: <a href="#/support" className="text-[#06c] hover:underline">chat with a specialist</a>, call 1-800-VISARA-1, or <a href="#/support" className="text-[#06c] hover:underline">find an office</a>.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#d2d2d7] py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            <p>Copyright © 2026 Visara Global Ltd. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-y-1 divide-x divide-[#d2d2d7]">
              {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((l) => (
                <li key={l} className="px-3 first:pl-0 last:pr-0">
                  <a href="#/" className="hover:underline">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#/destinations" className="hover:underline">United States</a>
        </div>
      </div>
    </footer>
  );
}
