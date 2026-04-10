import { countries } from "@/data/countries";
import { SearchableCountryGrid } from "@/components/search-input";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl">
            Start your company anywhere in the world
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl">
            Step-by-step formation guides for 20 countries. Official sources,
            real timelines, exact requirements and costs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#countries"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Browse Countries
            </a>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-background transition-colors"
            >
              Compare Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold">20</p>
              <p className="text-sm text-muted">Countries Covered</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-muted">Formation Steps Mapped</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Official</p>
              <p className="text-sm text-muted">Government Sources</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Free</p>
              <p className="text-sm text-muted">All Guides Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Country Grid */}
      <section id="countries" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-2">
            Top 20 Countries by Ease of Doing Business
          </h2>
          <p className="text-muted mb-8">
            Select a country to see the full step-by-step formation process.
          </p>
          <SearchableCountryGrid countries={countries} />
        </div>
      </section>

      {/* Premium CTA */}
      <section className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Need help deciding where to incorporate?
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-6">
            Compare countries side-by-side, access vetted formation agents, and
            get your questions answered with Premium.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
          >
            View Pricing — $100/month
          </Link>
        </div>
      </section>
    </div>
  );
}
