import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("/Users/mjv273/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const root = path.resolve(__dirname, "..");
const fontUrl = `file://${path.join(root, "public/fonts/NHaasGroteskDSPro-55Rg.otf")}`;
const publicPdf = path.join(root, "public/resume.pdf");
const downloadsPdf = path.join(os.homedir(), "Downloads/Oche_Ogbole_Resume_Website.pdf");

const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    @font-face {
      font-family: "NHaasGroteskDSPro";
      src: url("${fontUrl}") format("opentype");
      font-weight: 400 800;
      font-style: normal;
      font-display: swap;
    }
    :root {
      --bone: #f4f1eb;
      --ink: #11110f;
      --soft: #3d3b36;
      --muted: #756f65;
      --line: #d7d0c4;
      --clay: #b95f37;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bone);
      color: var(--ink);
      font-family: "NHaasGroteskDSPro", Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 9.4px;
      line-height: 1.38;
    }
    .page {
      width: 8.5in;
      min-height: 11in;
      padding: 0.52in 0.62in;
      background: var(--bone);
    }
    header {
      display: grid;
      grid-template-columns: 1.1fr 1.4fr;
      gap: 0.3in;
      border-bottom: 1px solid var(--line);
      padding-bottom: 0.17in;
      margin-bottom: 0.16in;
    }
    h1 {
      margin: 0 0 0.06in;
      font-size: 34px;
      line-height: 0.92;
      letter-spacing: -0.04em;
      font-weight: 800;
    }
    .role {
      margin: 0;
      color: var(--soft);
      font-size: 11.5px;
      line-height: 1.25;
    }
    .contact {
      align-self: end;
      color: var(--muted);
      font-size: 8.7px;
      line-height: 1.5;
    }
    a { color: inherit; text-decoration: none; }
    h2 {
      margin: 0.15in 0 0.08in;
      padding-top: 0.03in;
      border-top: 1px solid var(--line);
      font-size: 9px;
      line-height: 1;
      letter-spacing: 0.13em;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--ink);
    }
    p { margin: 0 0 0.055in; color: var(--soft); }
    .summary {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.22in;
    }
    .job {
      display: grid;
      grid-template-columns: 1.08fr 2fr;
      gap: 0.24in;
      margin-bottom: 0.12in;
      break-inside: avoid;
    }
    .job-title {
      color: var(--ink);
      font-size: 10.4px;
      line-height: 1.15;
      font-weight: 800;
      margin-bottom: 0.04in;
    }
    .meta {
      color: var(--muted);
      font-size: 8.1px;
      line-height: 1.35;
    }
    ul {
      margin: 0;
      padding-left: 0.15in;
    }
    li {
      margin: 0 0 0.035in;
      color: var(--soft);
    }
    .skills {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.08in 0.25in;
    }
    .project {
      display: grid;
      grid-template-columns: 1.08fr 2fr;
      gap: 0.24in;
      margin-bottom: 0.08in;
      break-inside: avoid;
    }
    .label {
      color: var(--ink);
      font-weight: 800;
    }
    .pill {
      display: inline-block;
      background: var(--ink);
      color: var(--bone);
      border-radius: 0;
      padding: 3px 6px;
      margin-top: 0.07in;
      font-size: 7.5px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    footer {
      margin-top: 0.15in;
      padding-top: 0.08in;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 7.8px;
      display: flex;
      justify-content: space-between;
    }
    @page { size: Letter; margin: 0; }
  </style>
</head>
<body>
  <main class="page">
    <header>
      <div>
        <h1>Oche<br />Ogbole</h1>
        <p class="role">Senior UI Developer · Designer · React / Next.js / React Native</p>
      </div>
      <div class="contact">
        Toronto, ON · 709-697-1194 · <a href="mailto:ogboleoche75@gmail.com">ogboleoche75@gmail.com</a><br />
        <a href="https://github.com/ogboleoche75-maker">github.com/ogboleoche75-maker</a> ·
        <a href="https://www.linkedin.com/in/oche-ogbole-9933a9231/">LinkedIn</a> ·
        <a href="https://oche.design">oche.design</a>
      </div>
    </header>

    <h2>Summary</h2>
    <section class="summary">
      <p>Front-end developer with 5+ years of experience designing, developing, and deploying responsive web and mobile interfaces with React, Next.js, TypeScript, JavaScript, and React Native.</p>
      <p>Strong at translating Figma designs into maintainable component systems, integrating REST APIs, improving accessibility, and shipping production-ready experiences across desktop and mobile.</p>
    </section>

    <h2>Experience</h2>
    <section class="job">
      <div>
        <p class="job-title">Front-End Developer</p>
        <p class="meta">Wailo – Gamer's Lair<br />Calgary, AB / Remote<br />September 2023 – August 2025</p>
        <span class="pill">React Native</span>
      </div>
      <ul>
        <li>Developed scalable mobile application features in React Native for iOS and Android.</li>
        <li>Designed and implemented authentication, account management, password recovery, and deep-link navigation flows.</li>
        <li>Built reusable UI components to improve consistency, maintainability, and delivery speed.</li>
        <li>Integrated REST APIs with loading states, validation, error handling, and real-time data needs.</li>
        <li>Supported QA, debugging, peer review, release testing, and Apple App Store deployment activities.</li>
      </ul>
    </section>

    <section class="job">
      <div>
        <p class="job-title">Front-End Web Developer & Digital Marketing Intern</p>
        <p class="meta">Mode Law<br />Toronto, ON<br />May 2026 – June 2026</p>
        <span class="pill">Vercel / SEO</span>
      </div>
      <ul>
        <li>Designed and developed a responsive nine-page corporate website with semantic HTML, CSS, and JavaScript.</li>
        <li>Migrated the production website from Webflow to Vercel with DNS configuration through Hostinger and zero downtime.</li>
        <li>Improved technical SEO, metadata, content structure, performance, and cross-device accessibility.</li>
        <li>Worked directly with stakeholders to gather requirements, iterate on feedback, and deliver a production-ready site.</li>
      </ul>
    </section>

    <section class="job">
      <div>
        <p class="job-title">Front-End Web Developer</p>
        <p class="meta">CENTRA NL<br />St. John's, NL<br />March 2026 – May 2026</p>
        <span class="pill">Community Platform</span>
      </div>
      <ul>
        <li>Designed and developed a responsive organizational website supporting artists, entrepreneurs, and community initiatives.</li>
        <li>Built a searchable directory with 68+ business and artist profiles, categorization, and tagging.</li>
        <li>Improved navigation, information architecture, reusable layouts, and brand consistency across the platform.</li>
      </ul>
    </section>

    <h2>Selected Projects</h2>
    <section class="project">
      <div>
        <p class="job-title">Gameslayer Challenge App</p>
        <p class="meta">Mobile Product Design · Gaming · Figma</p>
      </div>
      <p>Designed a competitive gaming mobile concept where Xbox and PlayStation players can challenge friends, choose titles, set entry amounts, and host winner-takes-all tournaments. Comparable product space: 1v1Me-style competitive gaming challenges.</p>
    </section>
    <section class="project">
      <div>
        <p class="job-title">Canada Business Lead Generator</p>
        <p class="meta">Python · Google Maps API · Data Processing</p>
      </div>
      <p>Built a Python-based lead generation tool using Google Maps data collection, data cleaning, business classification, and dashboard-style segmentation to reduce manual prospecting time.</p>
    </section>

    <h2>Technical Skills</h2>
    <section class="skills">
      <p><span class="label">Front-End:</span> HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, React Native</p>
      <p><span class="label">UI & Design:</span> Tailwind CSS, CSS Grid, Flexbox, Figma, Adobe XD, Photoshop, Illustrator, Design Systems</p>
      <p><span class="label">Application:</span> Node.js, Express.js, REST APIs, Fetch API, Axios, JSON, React Hooks, Context API, Redux Toolkit</p>
      <p><span class="label">Quality:</span> WCAG Accessibility, SEO, Core Web Vitals, Lighthouse, Lazy Loading, Code Splitting</p>
      <p><span class="label">Delivery:</span> Git, GitHub, GitHub Actions, Vercel, Netlify, Hostinger, CI/CD, DNS Management</p>
      <p><span class="label">Process:</span> Agile, Scrum, TDD, Code Reviews, SDLC, UI/UX Best Practices</p>
    </section>

    <h2>Education & Certifications</h2>
    <p><span class="label">Memorial University of Newfoundland:</span> Bachelor of Arts, Sociology; Minor in Business Administration</p>
    <p>Foundations of Product Design — Google (Coursera), 2024 · Fundamentals of Web Development — IBM SkillsBuild, 2026 · Fundamentals of Project Management — IBM SkillsBuild, 2026</p>

    <footer>
      <span>OO.</span>
      <span>Resume matched to oche.design visual system</span>
    </footer>
  </main>
</body>
</html>`;

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.pdf({
    path: publicPdf,
    format: "Letter",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  fs.copyFileSync(publicPdf, downloadsPdf);
})();
