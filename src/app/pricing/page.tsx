import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Company Formations Made Simple",
  description:
    "Free formation guides for all countries. Premium adds comparisons, vetted agents, and chat support for $100/month.",
};

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-muted max-w-lg mx-auto">
          Free guides for every country. Premium for founders who are ready to
          make a decision and move fast.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Free */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="font-semibold text-lg mb-1">Free</h2>
          <p className="text-3xl font-bold mb-1">
            $0<span className="text-sm font-normal text-muted">/month</span>
          </p>
          <p className="text-sm text-muted mb-6">For anyone exploring</p>
          <ul className="space-y-3 mb-6">
            {[
              "Full step-by-step guides for all 24 countries",
              "Official links to forms and portals",
              "Timeline and cost estimates",
              "Requirements and documents needed",
              "Source citations for every guide",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <svg
                  className="w-4 h-4 text-success shrink-0 mt-0.5"
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
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="block text-center w-full px-4 py-2.5 rounded-lg border border-border font-medium text-sm hover:bg-background transition-colors"
          >
            Browse Guides
          </Link>
        </div>

        {/* Premium */}
        <div className="bg-card border-2 border-accent rounded-xl p-6 relative">
          <div className="absolute -top-3 left-6 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
            Recommended
          </div>
          <h2 className="font-semibold text-lg mb-1">Premium</h2>
          <p className="text-3xl font-bold mb-1">
            $100<span className="text-sm font-normal text-muted">/month</span>
          </p>
          <p className="text-sm text-muted mb-6">For serious founders</p>
          <ul className="space-y-3 mb-6">
            {[
              "Everything in Free",
              "Side-by-side country comparison tool",
              "Vetted registered agent marketplace",
              "Chat — ask questions, get sourced answers",
              "Priority updates when regulations change",
              "Cancel anytime",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <svg
                  className="w-4 h-4 text-success shrink-0 mt-0.5"
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
                {item}
              </li>
            ))}
          </ul>
          <button className="block w-full px-4 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors cursor-pointer">
            Get Premium
          </button>
          <p className="text-xs text-muted text-center mt-3">
            No long-term contract. Cancel anytime.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Are the free guides really complete?",
              a: "Yes. Every country guide includes the full step-by-step process, official links, timelines, costs, and requirements. We don't hold back information to upsell you.",
            },
            {
              q: "What does the comparison tool include?",
              a: "Side-by-side comparisons of corporate tax rates, formation costs, timelines, capital requirements, and other key metrics across up to 4 countries at once.",
            },
            {
              q: "What is the registered agent marketplace?",
              a: "A curated directory of vetted formation service providers in each country. If you'd rather hire someone to handle the process, you can find and contact qualified agents directly.",
            },
            {
              q: "How does chat work?",
              a: "Ask any question about company formation and get answers with references to official sources. Whether you need clarity on a specific requirement or want advice on choosing a jurisdiction, chat has you covered.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. There's no contract or commitment. Cancel your subscription at any time and you'll retain access through the end of your billing period.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
