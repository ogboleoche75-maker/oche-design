const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ogboleoche75-maker",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oche-ogbole-9933a9231/",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/ocheogbole71",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6" style={{ background: "var(--graphite)", color: "var(--bone)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="tracking-widest uppercase mb-4"
           style={{ fontSize: "11px", color: "rgba(244,241,235,0.5)", fontWeight: 600, letterSpacing: "0.15em" }}>
          Contact
        </p>
        <div className="editorial-line mb-14" style={{ background: "rgba(255,255,255,0.15)" }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="mb-6 text-balance" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 0.98, color: "var(--bone)", letterSpacing: "-0.035em" }}>
              Let&apos;s build something precise.
            </h2>
            <p className="text-pretty" style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(244,241,235,0.68)", maxWidth: "480px" }}>
              Open to senior UI developer roles and product teams that need
              someone comfortable moving between interface design, React, and
              production delivery.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="tracking-widest uppercase mb-3"
                 style={{ fontSize: "10px", color: "rgba(244,241,235,0.5)", letterSpacing: "0.15em" }}>
                Email
              </p>
              <a
                href="mailto:ogboleoche75@gmail.com"
                className="transition-opacity hover:opacity-70"
                style={{ fontSize: "18px", fontWeight: 600, color: "var(--bone)", borderBottom: "1px solid var(--bone)" }}
              >
                ogboleoche75@gmail.com
              </a>
            </div>

            <div>
              <p className="tracking-widest uppercase mb-3"
                 style={{ fontSize: "10px", color: "rgba(244,241,235,0.5)", letterSpacing: "0.15em" }}>
                Location
              </p>
              <p style={{ fontSize: "15px", color: "var(--bone)" }}>
                Toronto, Ontario, Canada
              </p>
            </div>

            <div>
              <p className="tracking-widest uppercase mb-3"
                 style={{ fontSize: "10px", color: "rgba(244,241,235,0.5)", letterSpacing: "0.15em" }}>
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="line-button"
                    style={{ fontSize: "14px", fontWeight: 600, color: "var(--bone)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              className="footer-cta button-press mt-2 inline-flex w-fit px-6 py-3 uppercase tracking-widest border"
              style={{ fontWeight: 800, fontSize: "12px" }}
            >
              Download Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
