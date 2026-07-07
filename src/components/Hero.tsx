export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full">
        {/* Available badge */}
        <div className="fade-up delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-medium mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="fade-up delay-2 text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 leading-none mb-4">
          Oche Ogbole
        </h1>

        {/* Tagline */}
        <p className="fade-up delay-3 text-lg sm:text-xl font-medium text-blue-600 mb-6 tracking-wide">
          Senior UI Developer · Designer · Builder
        </p>

        {/* Descriptor */}
        <p className="fade-up delay-4 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed mb-10">
          I build interfaces that feel effortless — from concept in Figma to
          production in React and Next.js. Based in Toronto.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-5 flex flex-wrap gap-4">
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-300">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="text-lg">↓</span>
        </div>
      </div>
    </section>
  );
}
