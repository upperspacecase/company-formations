"use client";

import { useState } from "react";
import Link from "next/link";
import { countries } from "@/data/countries";

const PREMIUM_LOCKED = true;

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCountry = (slug: string) => {
    setSelected((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : prev.length < 4
          ? [...prev, slug]
          : prev
    );
  };

  const selectedCountries = countries.filter((c) => selected.includes(c.slug));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Compare Countries</h1>
      <p className="text-muted mb-8">
        Select up to 4 countries to compare side-by-side.
      </p>

      {/* Country selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {countries.map((c) => (
          <button
            key={c.slug}
            onClick={() => toggleCountry(c.slug)}
            className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
              selected.includes(c.slug)
                ? "bg-accent text-white border-accent"
                : "bg-card border-border hover:border-accent/40"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {selectedCountries.length < 2 ? (
        <div className="text-center py-16 text-muted">
          <p className="text-lg mb-2">Select at least 2 countries to compare</p>
          <p className="text-sm">Click on the country names above</p>
        </div>
      ) : PREMIUM_LOCKED ? (
        <div className="relative">
          {/* Blurred preview */}
          <div className="filter blur-sm pointer-events-none select-none" aria-hidden="true">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-medium text-muted">Metric</th>
                    {selectedCountries.map((c) => (
                      <th key={c.slug} className="text-left p-3 font-semibold">
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Corporate Tax Rate", key: "corporateTaxRate" },
                    { label: "Formation Timeline", key: "timeline" },
                    { label: "Formation Cost", key: "cost" },
                    { label: "Min. Capital", key: "minCapital" },
                    { label: "Currency", key: "currency" },
                    { label: "Language", key: "language" },
                  ].map((row) => (
                    <tr key={row.key} className="border-b border-border">
                      <td className="p-3 text-muted">{row.label}</td>
                      {selectedCountries.map((c) => {
                        const entity = c.entityTypes[0];
                        let value = "";
                        switch (row.key) {
                          case "corporateTaxRate":
                            value = c.corporateTaxRate;
                            break;
                          case "timeline":
                            value = entity?.totalTimeline || "Varies";
                            break;
                          case "cost":
                            value = entity?.totalCost || "Varies";
                            break;
                          case "minCapital":
                            value = entity?.minCapital || "None";
                            break;
                          case "currency":
                            value = c.currency;
                            break;
                          case "language":
                            value = c.language;
                            break;
                        }
                        return (
                          <td key={c.slug} className="p-3">
                            {value}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Premium overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card border border-border rounded-xl p-8 text-center shadow-lg max-w-md">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Premium Feature
              </h3>
              <p className="text-sm text-muted mb-4">
                Unlock side-by-side country comparisons, access to vetted
                formation agents, and chat support.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Get Premium — $100/month
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
