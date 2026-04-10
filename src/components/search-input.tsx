"use client";

import { useState, useMemo } from "react";
import { Country } from "@/data/types";
import { CountryCard } from "./country-card";

export function SearchableCountryGrid({
  countries,
}: {
  countries: Country[];
}) {
  const [query, setQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState<string>("all");

  const regions = useMemo(() => {
    const r = new Set(countries.map((c) => c.region));
    return Array.from(r).sort();
  }, [countries]);

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      const matchesQuery =
        !query ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.region.toLowerCase().includes(query.toLowerCase());
      const matchesRegion =
        regionFilter === "all" || c.region === regionFilter;
      return matchesQuery && matchesRegion;
    });
  }, [countries, query, regionFilter]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search countries..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="px-4 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        >
          <option value="all">All Regions</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted py-12">
          No countries match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
