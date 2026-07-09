import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oche Ogbole - Senior UI Developer & Designer",
  description:
    "Portfolio of Oche Ogbole - Senior UI Developer, Designer, and Builder. Specializing in React, Next.js, TypeScript, and product design.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
