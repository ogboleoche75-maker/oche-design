import Image from "next/image";

const skills = [
  "React.js", "Next.js", "TypeScript", "React Native",
  "Tailwind CSS", "Figma", "JavaScript (ES6+)", "Node.js",
  "REST APIs", "Redux Toolkit", "CSS Grid / Flexbox", "Design Systems",
  "WCAG Accessibility", "Git / GitHub", "Vercel", "CI/CD",
  "Jest", "Storybook", "Adobe XD", "Performance Optimization",
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6" style={{ background: "var(--bone)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-16 mb-14">
          <p className="tracking-widest uppercase"
             style={{ fontSize: "11px", color: "var(--graphite-muted)", fontWeight: 600, letterSpacing: "0.15em" }}>
            About
          </p>
          <h2 className="text-balance" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 800, color: "var(--graphite)", lineHeight: 1.05, letterSpacing: "-0.035em" }}>
            Designer instincts, developer execution.
          </h2>
        </div>
        <div className="editorial-line mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div
              className="mb-10 overflow-hidden border"
              style={{
                marginInline: "auto",
                width: "302.75px",
                maxWidth: "100%",
                height: "371.555px",
                borderColor: "var(--line)",
                background: "var(--graphite)",
              }}
            >
              <Image
                src="/about/oche-ogbole-web.jpg"
                alt="Oche Ogbole in Toronto"
                width={700}
                height={1244}
                className="w-full object-cover"
                style={{ height: "371.555px", objectPosition: "center 35%" }}
              />
            </div>

            <div className="space-y-5" style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--graphite-soft)" }}>
              <p>
                I&apos;ve spent the last 5+ years at the intersection of design and
                engineering, building production mobile apps, corporate websites,
                and product interfaces that feel clear, fast, and polished.
              </p>
              <p>
                My background spans React Native mobile development, Next.js web
                apps, and end-to-end product design in Figma. I bring designs to
                life with maintainable code, accessibility awareness, and an eye
                for the tiny interaction details that make software feel senior.
              </p>
              <p>
                Currently based in Toronto, open to senior UI roles at companies
                building products at scale, especially teams that care about both
                interface craft and production quality.
              </p>
            </div>
          </div>

          <div>
            <p className="tracking-widest uppercase mb-6"
               style={{ fontSize: "11px", color: "var(--graphite-muted)", fontWeight: 600, letterSpacing: "0.15em" }}>
              Technologies & Tools
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border text-sm"
                  style={{
                    borderColor: "var(--line)",
                    color: "var(--graphite-soft)",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t space-y-3" style={{ borderColor: "var(--line)" }}>
              <p className="tracking-widest uppercase mb-5"
                 style={{ fontSize: "11px", color: "var(--graphite-muted)", fontWeight: 600, letterSpacing: "0.15em" }}>
                Certifications
              </p>
              {[
                "Product Design - Google (Coursera)",
                "Web Development - IBM SkillsBuild",
                "Project Management - IBM SkillsBuild",
              ].map((cert) => (
                <div key={cert} className="flex items-start gap-3" style={{ fontSize: "13px", color: "var(--graphite-soft)" }}>
                  <span style={{ color: "var(--graphite)" }}>✓</span>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
