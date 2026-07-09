import Image from "next/image";

type Project = {
  id: number;
  number: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  href: string;
  year: string;
  status: string;
  proof: string;
  tone: string;
  image?: {
    src: string;
    alt: string;
    kind: "desktop" | "mobile";
  };
  screenshots?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    number: "001",
    title: "Mode Law",
    category: "Corporate Website",
    tags: ["HTML5", "CSS3", "TypeScript", "Vercel", "SEO"],
    description:
      "Designed and developed a fully responsive 9-page corporate website. Migrated from Webflow to Vercel with zero downtime. Improved SEO rankings and Core Web Vitals.",
    problem: "The firm's Webflow site felt outdated on mobile, loaded slowly, and didn't reflect the professionalism clients expect from a law practice.",
    approach: "Restructured the information architecture across 9 pages with a mobile-first layout. Migrated hosting to Vercel for faster load times and better reliability.",
    outcome: "Improved Core Web Vitals scores, stronger SEO rankings, and zero-downtime migration with no disruption to the firm's online presence.",
    href: "https://modelaw.ca",
    year: "2026",
    status: "Live",
    proof: "Live production site",
    tone: "var(--clay)",
    image: {
      src: "/work/modelaw/mode-law-hero-web.jpg",
      alt: "Mode Law website homepage screenshot",
      kind: "desktop",
    },
  },
  {
    id: 2,
    number: "002",
    title: "CENTRA NL",
    category: "Community Platform",
    tags: ["Web Design", "Branding", "UX"],
    description:
      "Designed and built a multi-page organizational website supporting artists, entrepreneurs, and community initiatives. Built a searchable directory of 68+ profiles.",
    problem: "The organization had no central online presence. Members, artists, and entrepreneurs across Newfoundland and Labrador had no way to find or connect with each other.",
    approach: "Built a searchable directory of 68+ profiles so visitors can discover people by skill, location, or interest. Designed clear pathways for different audiences: members, donors, and community partners.",
    outcome: "A live platform that serves as the cultural home for Black entrepreneurs, artists, and creatives across Newfoundland and Labrador.",
    href: "https://www.centraculturalcollectiveinc.com",
    year: "2026",
    status: "Live",
    proof: "Live community platform",
    tone: "var(--blueprint)",
    image: {
      src: "/work/centra-nl/hero-web.jpg",
      alt: "CENTRA NL Cultural Collective homepage screenshot",
      kind: "desktop",
    },
  },
  {
    id: 6,
    number: "003",
    title: "Smart Africa Network",
    category: "Professional Platform",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "Professional membership platform connecting medical imaging professionals, researchers, educators, students, and institutions advancing MRI access, training, and collaboration across Africa and beyond.",
    problem: "The existing Wix site had a generic template feel that undercut the credibility funders and academic partners expect. No clear primary action, cluttered gallery with 24+ thumbnails, weak typography, and vague CTAs like 'Unlock more!' that eroded trust.",
    approach: "Audited 3 critical, 4 major, and 3 minor UX issues. Proposed a single clear hero with one primary action, an impact bar with real numbers, curated gallery, audience-specific pathways for funders, practitioners, and press, and mobile-first design for users on slower African networks.",
    outcome: "Redesign in progress. The new site will look as credible as the science behind it, with clear calls-to-action, optimized performance, and proof of impact above the fold.",
    href: "#",
    year: "2026",
    status: "In Progress",
    proof: "In-progress redesign",
    tone: "#e9edf4",
    image: {
      src: "/work/smart-africa/hero-web.jpg",
      alt: "Smart Africa Network homepage hero screenshot",
      kind: "desktop",
    },
  },
  {
    id: 4,
    number: "004",
    title: "DeFi On-Ramp Platform",
    category: "Web3 / Product Design",
    tags: ["Figma", "UI/UX", "Crypto"],
    description:
      "Simplified crypto on-boarding UI for fiat-to-crypto flows, wallet connection, and transaction history. Designed for clarity in a complex space.",
    problem: "Crypto on-ramp flows are notoriously confusing for first-time users. Too many steps, unfamiliar terminology, and unclear pricing make people abandon the process.",
    approach: "Designed a step-by-step purchase flow with a clear progress indicator, local currency pricing (NGN to BTC), transparent fee breakdown, and familiar payment methods like Visa and wallet options.",
    outcome: "A clean, trust-building interface that guides users from price check to payment in three clear screens, reducing cognitive load at every step.",
    href: "https://www.behance.net/gallery/148355033/DeFi-On-ramp-platform",
    year: "2024",
    status: "Case Study",
    proof: "Behance case study",
    tone: "#c8c3d4",
    image: {
      src: "/work/defi/screens-web.jpg",
      alt: "DeFi On-Ramp Platform app screens showing crypto purchase and payment flows",
      kind: "desktop",
    },
  },
  {
    id: 5,
    number: "005",
    title: "Gameslayer Challenge App",
    category: "Gaming · Mobile Product",
    tags: ["Figma", "Mobile UX", "Gaming", "Tournament Flows"],
    description:
      "Designed a competitive gaming app where console players could challenge friends, choose Xbox and PlayStation titles, set a cash-entry amount, and host winner-takes-all tournaments.",
    problem: "Console gamers who want to play for real stakes have no clean, trustworthy mobile app to challenge friends directly. Existing platforms feel cluttered and intimidating to casual competitors.",
    approach: "Designed around the social loop: find friends, pick a game, set the stakes. Kept the challenge flow to three taps. Used familiar gaming visual language while keeping the money side transparent and clear.",
    outcome: "A concept product in the same space as 1v1Me, with complete flows for friend discovery, game selection, and cash-entry challenges ready for development.",
    href: "https://www.behance.net/ocheogbole71",
    year: "2024",
    status: "Concept",
    proof: "3 app screens",
    tone: "#d8aa00",
    screenshots: [
      "/work/gameslayer/friends.png",
      "/work/gameslayer/challenge-friends.png",
      "/work/gameslayer/challenge-selected-game.png",
    ],
  },
  {
    id: 3,
    number: "006",
    title: "FireFix Bank",
    category: "Fintech · Mobile Product",
    tags: ["Figma", "Mobile UX", "Fintech", "UI Design"],
    description:
      "Designed a clean, intuitive digital banking concept focused on simplicity and trust. Covers core flows including account overview, transfers, and transaction history.",
    problem: "Many banking apps overwhelm users with features on the home screen. New users struggle to find basic actions like checking their balance or sending money.",
    approach: "Prioritized the three things users do most: check balance, send money, and view recent transactions. Stripped away visual clutter and used clear hierarchy to guide each action.",
    outcome: "A focused banking concept that puts everyday tasks front and center, reducing the steps needed for the most common flows.",
    href: "https://www.behance.net/gallery/148354447/Money-Mobile-banking-application",
    year: "2024",
    status: "Concept",
    proof: "Behance case study",
    tone: "#f3d8fd",
    image: {
      src: "/work/firefix-bank/hero.jpg",
      alt: "FireFix Bank mobile banking app display image",
      kind: "desktop",
    },
  },
];

const uxSteps = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "outcome", label: "Outcome" },
] as const;

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 px-6" style={{ background: "var(--graphite)", color: "var(--bone)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-16 mb-16 items-end">
          <p className="tracking-widest uppercase"
             style={{ fontSize: "11px", color: "rgba(244,241,235,0.58)", fontWeight: 600, letterSpacing: "0.15em" }}>
            Selected Work · {projects.length} projects
          </p>
          <h2 className="text-balance" style={{ fontSize: "clamp(2rem, 6vw, 4.8rem)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.035em" }}>
            Real builds, product concepts, and shipped interface work.
          </h2>
        </div>

        <div className="grid gap-8">
        {projects.map((p, index) => (
          <a
            key={p.id}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="project-card group grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-0 border"
            style={{ borderColor: "rgba(244,241,235,0.16)", background: "rgba(244,241,235,0.035)" }}
          >
            {/* Image panel */}
            <div className={`${index % 2 === 1 ? "lg:order-2" : ""} min-h-[280px] overflow-hidden flex items-center justify-center`}
                 style={{ background: p.tone }}>
              {p.screenshots ? (
                <div className="project-media w-full min-h-[340px] sm:min-h-[430px] flex items-end justify-center gap-3 sm:gap-5 overflow-hidden p-5 sm:p-8"
                     style={{ color: "white" }}>
                  {p.screenshots.map((src, screenIndex) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`${p.title} screen ${screenIndex + 1}`}
                      width={393}
                      height={852}
                      className={`w-[31%] max-w-[158px] rounded-[18px] shadow-2xl ${screenIndex === 1 ? "mb-10" : ""}`}
                      style={{
                        transform: screenIndex === 0 ? "rotate(-3deg)" : screenIndex === 2 ? "rotate(3deg)" : undefined,
                        border: "1px solid rgba(255,255,255,0.35)",
                      }}
                    />
                  ))}
                </div>
              ) : p.image ? (
                <div className="project-media w-full h-full flex items-center justify-center p-6 sm:p-10"
                     style={{ background: p.title === "Smart Africa Network" ? "#f4f7fb" : undefined }}>
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={p.image.kind === "desktop" ? 1920 : 900}
                    height={p.image.kind === "desktop" ? 1200 : 1400}
                    className="max-h-[380px] w-auto object-contain"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              ) : (
                <div className="project-media w-full aspect-[4/3] border flex flex-col justify-between p-5 m-5 sm:m-8"
                     style={{ borderColor: "rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.08)" }}>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.68)" }}>
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <div>
                    <div className="h-2 w-24 mb-4" style={{ background: "rgba(255,255,255,0.35)" }} />
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      <span className="h-16" style={{ background: "rgba(255,255,255,0.16)" }} />
                      <span className="h-16" style={{ background: "rgba(255,255,255,0.24)" }} />
                      <span className="h-16" style={{ background: "rgba(255,255,255,0.12)" }} />
                    </div>
                    <p style={{ fontSize: "clamp(1.6rem, 4vw, 3.3rem)", lineHeight: 0.95, fontWeight: 800, color: "white", letterSpacing: "-0.035em" }}>
                      {p.title}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Content panel */}
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="flex items-start justify-between gap-5 mb-6">
                  <div>
                    <p className="mb-3" style={{ color: "rgba(244,241,235,0.48)", fontSize: "12px" }}>
                      {p.number} / {p.proof}
                    </p>
                    <h3 className="text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 3.3rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.032em", color: "var(--bone)" }}>
                      {p.title}
                    </h3>
                  </div>
                  <span className="project-arrow text-2xl" aria-hidden="true">↗</span>
                </div>
                <p className="max-w-xl text-pretty mb-8" style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(244,241,235,0.72)" }}>
                  {p.description}
                </p>

                {/* UX accordion */}
                {p.problem && (
                  <div className="ux-accordion max-w-xl" style={{ borderTop: "1px solid rgba(244,241,235,0.12)" }}>
                    {uxSteps.map((step) => (
                      <div
                        key={step.key}
                        className="ux-accordion-item"
                        style={{ borderBottom: "1px solid rgba(244,241,235,0.12)" }}
                      >
                        <div className="ux-accordion-header">
                          <span className="ux-accordion-label">{step.label}</span>
                          <span className="ux-accordion-icon" aria-hidden="true">+</span>
                        </div>
                        <div className="ux-accordion-body">
                          <p style={{ fontSize: "13px", lineHeight: 1.65, color: "rgba(244,241,235,0.62)", paddingBottom: "16px" }}>
                            {p[step.key]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8">
                <span className="px-2.5 py-1 text-xs border uppercase"
                      style={{
                        borderColor: p.status === "Live" ? "var(--signal)" : "rgba(244,241,235,0.16)",
                        color: p.status === "Live" ? "var(--signal)" : "rgba(244,241,235,0.62)",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                      }}>
                  {p.status}
                </span>
              </div>
            </div>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
}
