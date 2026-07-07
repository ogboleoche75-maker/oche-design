const projects = [
  {
    id: 1,
    title: "Money Banking App",
    tags: ["Fintech", "Mobile UI", "React Native", "Figma"],
    description:
      "A full-featured mobile banking experience — transfers, spending insights, card management. Designed end-to-end in Figma and built with React Native.",
    color: "from-blue-50 to-indigo-50",
    accent: "text-blue-600",
    href: "https://www.behance.net/ocheogbole71",
    emoji: "💳",
  },
  {
    id: 2,
    title: "Smart Africa Network",
    tags: ["Web Redesign", "Next.js", "Tailwind CSS"],
    description:
      "A platform redesign connecting African entrepreneurs, innovators, and community builders — improved navigation, modern UI, and scalable component system.",
    color: "from-orange-50 to-amber-50",
    accent: "text-orange-600",
    href: "#",
    emoji: "🌍",
    badge: "In Progress",
  },
  {
    id: 3,
    title: "DeFi On-Ramp Platform",
    tags: ["Web3", "Product Design", "Figma"],
    description:
      "Simplified crypto on-boarding UI — fiat-to-crypto flows, wallet connection, and transaction history. Designed for clarity in a complex space.",
    color: "from-violet-50 to-purple-50",
    accent: "text-violet-600",
    href: "https://www.behance.net/ocheogbole71",
    emoji: "⛓️",
  },
  {
    id: 4,
    title: "Wailo / Gameslayer App",
    tags: ["Gaming", "React Native", "TypeScript", "iOS & Android"],
    description:
      "Production mobile gaming platform — authentication, profiles, real-time data, and a landing page. Shipped to the Apple App Store.",
    color: "from-green-50 to-emerald-50",
    accent: "text-green-600",
    href: "#",
    emoji: "🎮",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-14">
          Things I've built
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group relative rounded-2xl bg-gradient-to-br ${p.color} border border-white p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
            >
              {/* Badge */}
              {p.badge && (
                <span className="absolute top-6 right-6 text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-600 border border-orange-200">
                  {p.badge}
                </span>
              )}

              {/* Emoji icon */}
              <span className="text-4xl">{p.emoji}</span>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/80 text-slate-600 border border-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className={`text-sm font-medium ${p.accent} group-hover:translate-x-1 transition-transform inline-block`}>
                View Project →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
