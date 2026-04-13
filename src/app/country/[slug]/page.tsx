import { notFound } from "next/navigation";
import Link from "next/link";
import { countries, getCountryBySlug } from "@/data/countries";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  return {
    title: `How to Start a Company in ${country.name} — Company Formations Made Simple`,
    description: country.summary,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Countries
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{country.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          How to Start a Company in {country.name}
        </h1>
        <p className="text-lg text-muted">{country.summary}</p>
      </div>

      {/* Quick facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs text-muted mb-1">Corporate Tax</p>
          <p className="font-semibold text-sm">{country.corporateTaxRate}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs text-muted mb-1">Currency</p>
          <p className="font-semibold text-sm">{country.currency}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs text-muted mb-1">Language</p>
          <p className="font-semibold text-sm">{country.language}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs text-muted mb-1">Ease of Business</p>
          <p className="font-semibold text-sm">
            #{country.easeOfBusinessRank} of 190
          </p>
        </div>
      </div>

      {/* Setup & Eligibility */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Setup &amp; Eligibility</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-xs text-muted mb-1">Setup Cost (USD)</p>
            <p className="font-semibold text-sm">{country.setupCostUSD}</p>
            <p className="text-xs text-muted mt-2">
              Converted from local currency at approximate fixed rates. See
              entity sections below for native-currency figures.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-xs text-muted mb-1">Minimum Age</p>
            <p className="font-semibold text-sm">{country.minimumAge}</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs text-muted mb-1">Residency Requirement</p>
          <p className="text-sm">{country.residencyRequirement}</p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Key Benefits</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {country.keyBenefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
            >
              <svg
                className="w-5 h-5 text-success shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Entity Types */}
      {country.entityTypes.map((entity) => (
        <div key={entity.slug} className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{entity.name}</h2>
            <p className="text-muted">{entity.description}</p>
          </div>

          {/* Entity quick facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="bg-accent-light/50 rounded-lg p-3">
              <p className="text-xs text-muted mb-1">Timeline</p>
              <p className="font-semibold text-sm">{entity.totalTimeline}</p>
            </div>
            <div className="bg-accent-light/50 rounded-lg p-3">
              <p className="text-xs text-muted mb-1">Total Cost</p>
              <p className="font-semibold text-sm">{entity.totalCost}</p>
            </div>
            <div className="bg-accent-light/50 rounded-lg p-3">
              <p className="text-xs text-muted mb-1">Liability</p>
              <p className="font-semibold text-sm">{entity.liability}</p>
            </div>
            <div className="bg-accent-light/50 rounded-lg p-3">
              <p className="text-xs text-muted mb-1">Min. Capital</p>
              <p className="font-semibold text-sm">
                {entity.minCapital || "None"}
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Requirements</h3>
            <ul className="space-y-2">
              {entity.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-muted mt-1 shrink-0">--</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">
              Step-by-Step Process
            </h3>
            <div className="space-y-4">
              {entity.steps.map((step) => (
                <div
                  key={step.number}
                  className="relative bg-card border border-border rounded-xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="font-semibold">{step.title}</h4>
                        <span className="shrink-0 text-xs font-mono bg-background px-2 py-1 rounded text-muted">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-sm text-muted mb-3">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        {step.url && (
                          <a
                            href={step.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            {step.urlLabel || "Official Link"}
                          </a>
                        )}
                        {step.cost && (
                          <span className="text-sm text-muted">
                            Cost: {step.cost}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold mb-3">Official Sources</h3>
            <div className="space-y-2">
              {entity.sources.map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {source.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">
              Last updated: {country.lastUpdated}. Always verify current
              requirements with official sources.
            </p>
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="bg-card border border-accent/20 rounded-xl p-6 text-center">
        <h3 className="font-semibold mb-2">
          Need help with {country.name} formation?
        </h3>
        <p className="text-sm text-muted mb-4">
          Compare {country.name} with other countries, access vetted formation
          agents, and ask questions with Premium.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          Get Premium — $100/month
        </Link>
      </div>
    </div>
  );
}
