export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 px-6 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
        <span className="font-bold text-slate-300">OO</span>
        <span>© {new Date().getFullYear()} Oche Ogbole. All rights reserved.</span>
        <a
          href="mailto:ogboleoche75@gmail.com"
          className="hover:text-slate-300 transition-colors"
        >
          ogboleoche75@gmail.com
        </a>
      </div>
    </footer>
  );
}
