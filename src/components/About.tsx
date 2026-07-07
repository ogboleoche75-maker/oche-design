const skills = [
  "React.js", "Next.js", "TypeScript", "React Native",
  "Tailwind CSS", "Figma", "JavaScript (ES6+)", "Node.js",
  "REST APIs", "Redux Toolkit", "CSS Grid / Flexbox", "Design Systems",
  "WCAG Accessibility", "Git / GitHub", "Vercel", "CI/CD",
  "Jest", "Storybook", "Adobe XD", "Performance Optimization",
];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Live production apps" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              I&apos;m a developer who thinks like a designer.
            </h2>

            <div className="space-y-4 text-slate-500 leading-relaxed text-base">
              <p>
                I&apos;ve spent the last 5+ years at the intersection of design and
                engineering — building production mobile apps, corporate websites,
                and product interfaces that users actually enjoy using.
              </p>
              <p>
                My background spans React Native mobile development, Next.js web
                apps, and end-to-end product design in Figma. I bring designs to
                life with clean, maintainable code and an eye for the details that
                make products feel polished.
              </p>
              <p>
                Currently based in Toronto, open to senior UI roles at companies
                building products at scale.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-10 border-t border-slate-100">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skills */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-5">
              Technologies & Tools
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-sm text-slate-600 font-medium hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-10 pt-8 border-t border-slate-100 space-y-3">
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
                Certifications
              </p>
              {[
                "Foundations of Product Design — Google (Coursera)",
                "Fundamentals of Web Development — IBM SkillsBuild",
                "Fundamentals of Project Management — IBM SkillsBuild",
              ].map((cert) => (
                <div key={cert} className="flex items-start gap-2 text-sm text-slate-500">
                  <span className="text-blue-500 mt-0.5">✓</span>
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
