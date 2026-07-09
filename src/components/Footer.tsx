export default function Footer() {
  return (
    <footer className="px-6 py-6" style={{ background: "var(--graphite)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
           style={{ fontSize: "12px", color: "rgba(244,241,235,0.55)" }}>
        <span style={{ fontWeight: 800, color: "var(--bone)" }}>OO.</span>
        <span>© {new Date().getFullYear()} Oche Ogbole. All rights reserved.</span>
        <a
          href="mailto:ogboleoche75@gmail.com"
          className="hover:opacity-70 transition-opacity"
          style={{ color: "var(--bone)" }}
        >
          ogboleoche75@gmail.com
        </a>
      </div>
    </footer>
  );
}
