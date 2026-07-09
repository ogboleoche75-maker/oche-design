export default function Hero() {
  return (
    <section className="min-h-screen px-6 pt-28 pb-16 flex items-end" style={{ background: "var(--bone)" }}>
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="fade-up delay-2 leading-none mb-8 text-balance"
            style={{ fontSize: "clamp(4rem, 12vw, 9.5rem)", fontWeight: 800, color: "var(--graphite)", letterSpacing: "-0.035em" }}>
          Oche<br />Ogbole
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
          <div>
            <p className="fade-up delay-3 mb-6 tracking-widest uppercase"
               style={{ fontSize: "13px", color: "var(--graphite-muted)", fontWeight: 600, letterSpacing: "0.12em" }}>
              Senior UI Developer · Product Designer · React / Next.js
            </p>
            <div className="fade-up delay-3 editorial-line mb-7" style={{ maxWidth: "180px" }} />
            <p className="fade-up delay-4 max-w-2xl text-pretty"
               style={{ fontSize: "clamp(1.1rem, 2.3vw, 1.65rem)", lineHeight: 1.45, color: "var(--graphite-soft)", fontWeight: 500 }}>
              I turn product ideas into polished interfaces, from Figma systems to
              production React, Next.js, and React Native experiences.
            </p>
          </div>

          <div className="fade-up delay-5 border-t pt-8 lg:border-t-0 lg:border-l lg:pl-10"
               style={{ borderColor: "var(--line)" }}>
            <div className="flex flex-wrap gap-5">
              <a
                href="#work"
                className="hero-primary-button button-press px-7 py-3 text-sm tracking-widest uppercase border"
                style={{ fontWeight: 700, letterSpacing: "0.1em", fontSize: "12px" }}
              >
                View Work
              </a>
              <a
                href="#contact"
                className="hero-arrow-button uppercase tracking-widest"
                style={{ color: "var(--graphite)", fontWeight: 700, fontSize: "12px" }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="fade-up delay-6 mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t pt-5"
             style={{ borderColor: "var(--line)", color: "var(--graphite-muted)", fontSize: "12px" }}>
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>React Native</span>
          <span>Figma</span>
          <span>Accessibility</span>
        </div>
      </div>
    </section>
  );
}
