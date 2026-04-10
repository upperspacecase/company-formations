import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Company Formations Made Simple",
  description:
    "Step-by-step guides to forming a company in any country. Official sources, real timelines, exact requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-border bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg tracking-tight">
              Company Formations Made Simple
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-muted hover:text-foreground transition-colors"
              >
                Countries
              </Link>
              <Link
                href="/compare"
                className="text-muted hover:text-foreground transition-colors"
              >
                Compare
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Get Premium
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <p>Company Formations Made Simple</p>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-foreground transition-colors">
                  Countries
                </Link>
                <Link href="/compare" className="hover:text-foreground transition-colors">
                  Compare
                </Link>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted/70">
              Information is compiled from official government sources and updated regularly.
              Always verify requirements with the relevant authorities before proceeding.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
