import Link from "next/link";
import { Country } from "@/data/types";

const flagToEmoji: Record<string, string> = {
  NZ: "\u{1F1F3}\u{1F1FF}",
  SG: "\u{1F1F8}\u{1F1EC}",
  HK: "\u{1F1ED}\u{1F1F0}",
  DK: "\u{1F1E9}\u{1F1F0}",
  KR: "\u{1F1F0}\u{1F1F7}",
  US: "\u{1F1FA}\u{1F1F8}",
  GB: "\u{1F1EC}\u{1F1E7}",
  NO: "\u{1F1F3}\u{1F1F4}",
  GE: "\u{1F1EC}\u{1F1EA}",
  SE: "\u{1F1F8}\u{1F1EA}",
  LT: "\u{1F1F1}\u{1F1F9}",
  MY: "\u{1F1F2}\u{1F1FE}",
  EE: "\u{1F1EA}\u{1F1EA}",
  AU: "\u{1F1E6}\u{1F1FA}",
  CA: "\u{1F1E8}\u{1F1E6}",
  IE: "\u{1F1EE}\u{1F1EA}",
  AE: "\u{1F1E6}\u{1F1EA}",
  NL: "\u{1F1F3}\u{1F1F1}",
  FI: "\u{1F1EB}\u{1F1EE}",
  DE: "\u{1F1E9}\u{1F1EA}",
  TH: "\u{1F1F9}\u{1F1ED}",
  ID: "\u{1F1EE}\u{1F1E9}",
  VN: "\u{1F1FB}\u{1F1F3}",
  RU: "\u{1F1F7}\u{1F1FA}",
};

export function CountryCard({ country }: { country: Country }) {
  const mainEntity = country.entityTypes[0];

  return (
    <Link
      href={`/country/${country.slug}`}
      className="group block bg-card border border-border rounded-xl p-5 hover:border-accent/40 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label={country.name}>
            {flagToEmoji[country.flag] || country.flag}
          </span>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
              {country.name}
            </h3>
            <p className="text-xs text-muted">{country.region}</p>
          </div>
        </div>
        <span className="text-xs font-mono bg-background px-2 py-1 rounded text-muted">
          #{country.easeOfBusinessRank}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm mb-3">
        <div>
          <p className="text-xs text-muted">Corp. Tax</p>
          <p className="font-medium">{country.corporateTaxRate}</p>
        </div>
        <div>
          <p className="text-xs text-muted">Timeline</p>
          <p className="font-medium">{mainEntity?.totalTimeline || "Varies"}</p>
        </div>
        <div>
          <p className="text-xs text-muted">Est. Cost</p>
          <p className="font-medium">{mainEntity?.totalCost || "Varies"}</p>
        </div>
        <div>
          <p className="text-xs text-muted">Entity</p>
          <p className="font-medium truncate">{mainEntity?.name || "Various"}</p>
        </div>
      </div>
      <p className="text-xs text-muted line-clamp-2">{country.summary}</p>
    </Link>
  );
}
