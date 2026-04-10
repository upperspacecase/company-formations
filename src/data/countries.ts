import { Country } from "./types";

export const countries: Country[] = [
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "NZ",
    region: "Oceania",
    currency: "NZD",
    language: "English",
    easeOfBusinessRank: 1,
    corporateTaxRate: "28%",
    summary:
      "New Zealand consistently ranks as one of the easiest places in the world to start a business. Online registration takes as little as one day.",
    keyBenefits: [
      "Same-day online registration",
      "No minimum capital requirement",
      "English-speaking common law system",
      "Strong IP protection",
    ],
    entityTypes: [
      {
        name: "Limited Company (Ltd)",
        slug: "limited-company",
        description:
          "The most common business structure in New Zealand, offering limited liability protection to shareholders.",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Reserve a company name",
            description:
              "Check name availability and reserve your company name through the Companies Office.",
            timeline: "Instant",
            url: "https://companies-register.companiesoffice.govt.nz/",
            urlLabel: "Companies Register",
          },
          {
            number: 2,
            title: "Register on the Companies Register",
            description:
              "Complete the online registration form with company details, directors, shareholders, and registered office address.",
            timeline: "1 day",
            url: "https://companies-register.companiesoffice.govt.nz/",
            urlLabel: "Companies Register",
            cost: "NZD 115.02",
          },
          {
            number: 3,
            title: "Register for IRD number and GST",
            description:
              "Apply for an Inland Revenue Department (IRD) number. Register for GST if turnover exceeds NZD 60,000.",
            timeline: "1-5 days",
            url: "https://www.ird.govt.nz/",
            urlLabel: "Inland Revenue",
          },
          {
            number: 4,
            title: "Open a business bank account",
            description:
              "Open a bank account with a New Zealand bank. Most banks require in-person verification.",
            timeline: "1-5 days",
          },
        ],
        totalTimeline: "1-10 days",
        totalCost: "NZD 115-200",
        requirements: [
          "At least 1 director who is a NZ resident or lives in an enforcement country",
          "At least 1 shareholder (can be same person as director)",
          "Registered office address in New Zealand",
          "No minimum share capital",
        ],
        sources: [
          {
            label: "Companies Office New Zealand",
            url: "https://companies-register.companiesoffice.govt.nz/",
          },
          {
            label: "Inland Revenue Department",
            url: "https://www.ird.govt.nz/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Singapore",
    slug: "singapore",
    flag: "SG",
    region: "Asia",
    currency: "SGD",
    language: "English",
    easeOfBusinessRank: 2,
    corporateTaxRate: "17%",
    summary:
      "Singapore is a global business hub with a pro-business environment, low taxes, and a highly efficient registration process.",
    keyBenefits: [
      "Low corporate tax rate with exemptions for startups",
      "No capital gains tax",
      "Strong legal framework",
      "Gateway to Asian markets",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (Pte. Ltd.)",
        slug: "private-limited-company",
        description:
          "The most popular business entity in Singapore, suitable for startups and SMEs.",
        minCapital: "SGD 1",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Reserve a company name",
            description:
              "Apply for name approval through ACRA's BizFile+ portal. Names are usually approved within 1 hour.",
            timeline: "1 hour - 14 days",
            url: "https://www.bizfile.gov.sg/",
            urlLabel: "BizFile+",
            cost: "SGD 15",
          },
          {
            number: 2,
            title: "Register the company",
            description:
              "Submit incorporation application via BizFile+ with company constitution, directors, shareholders, and registered address.",
            timeline: "1-3 days",
            url: "https://www.bizfile.gov.sg/",
            urlLabel: "BizFile+",
            cost: "SGD 300",
          },
          {
            number: 3,
            title: "Appoint a company secretary",
            description:
              "You must appoint a qualified company secretary within 6 months of incorporation.",
            timeline: "Within 6 months",
          },
          {
            number: 4,
            title: "Register for GST (if applicable)",
            description:
              "Register for Goods and Services Tax if annual turnover exceeds SGD 1 million.",
            timeline: "1-3 days",
            url: "https://www.iras.gov.sg/",
            urlLabel: "IRAS",
          },
          {
            number: 5,
            title: "Open a corporate bank account",
            description:
              "Open a bank account with a Singapore bank. Most require in-person meetings for directors.",
            timeline: "1-4 weeks",
          },
        ],
        totalTimeline: "1-7 days (excl. bank account)",
        totalCost: "SGD 315+",
        requirements: [
          "At least 1 resident director (Singapore citizen, PR, or EntrePass holder)",
          "At least 1 shareholder (individual or corporate)",
          "Minimum paid-up capital of SGD 1",
          "Registered office address in Singapore",
          "Company secretary (within 6 months)",
        ],
        sources: [
          {
            label: "Accounting and Corporate Regulatory Authority (ACRA)",
            url: "https://www.acra.gov.sg/",
          },
          {
            label: "BizFile+ Portal",
            url: "https://www.bizfile.gov.sg/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Hong Kong",
    slug: "hong-kong",
    flag: "HK",
    region: "Asia",
    currency: "HKD",
    language: "English / Chinese",
    easeOfBusinessRank: 3,
    corporateTaxRate: "8.25% (first HKD 2M) / 16.5%",
    summary:
      "Hong Kong offers a simple tax system, no VAT/GST, and is a major gateway for doing business in China and Asia.",
    keyBenefits: [
      "No VAT or sales tax",
      "Territorial tax system",
      "No foreign exchange controls",
      "Fast incorporation process",
    ],
    entityTypes: [
      {
        name: "Private Company Limited by Shares",
        slug: "private-limited-company",
        description:
          "The standard business structure for most companies in Hong Kong.",
        minCapital: "HKD 1 (no minimum)",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Search and reserve company name",
            description:
              "Search the Companies Registry for name availability. Names can be in English, Chinese, or both.",
            timeline: "Instant",
            url: "https://www.cr.gov.hk/",
            urlLabel: "Companies Registry",
          },
          {
            number: 2,
            title: "Submit incorporation documents",
            description:
              "File the Incorporation Form (NNC1), Articles of Association, and Notice to Business Registration Office via e-Registry.",
            timeline: "1-4 days",
            url: "https://www.eregistry.gov.hk/",
            urlLabel: "e-Registry",
            cost: "HKD 1,720",
          },
          {
            number: 3,
            title: "Obtain Business Registration Certificate",
            description:
              "Automatically issued upon incorporation. Annual renewal required.",
            timeline: "Included with incorporation",
            cost: "HKD 2,150/year",
          },
          {
            number: 4,
            title: "Open a corporate bank account",
            description:
              "Schedule a meeting with a Hong Kong bank. Directors typically need to attend in person.",
            timeline: "2-4 weeks",
          },
        ],
        totalTimeline: "1-4 days (excl. bank account)",
        totalCost: "HKD 3,870+",
        requirements: [
          "At least 1 director (any nationality, natural person)",
          "At least 1 shareholder",
          "Company secretary resident in Hong Kong",
          "Registered office address in Hong Kong",
          "No minimum share capital",
        ],
        sources: [
          {
            label: "Hong Kong Companies Registry",
            url: "https://www.cr.gov.hk/",
          },
          {
            label: "e-Registry Portal",
            url: "https://www.eregistry.gov.hk/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Denmark",
    slug: "denmark",
    flag: "DK",
    region: "Europe",
    currency: "DKK",
    language: "Danish",
    easeOfBusinessRank: 4,
    corporateTaxRate: "22%",
    summary:
      "Denmark offers a transparent business environment with fully digital registration and strong worker protections.",
    keyBenefits: [
      "Fully digital registration process",
      "Transparent regulatory environment",
      "Access to EU single market",
      "Highly educated workforce",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (ApS)",
        slug: "aps",
        description:
          "Anpartsselskab (ApS) is the most common entity for small and medium businesses in Denmark.",
        minCapital: "DKK 40,000",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Obtain a digital signature (NemID/MitID)",
            description:
              "Foreign founders need to apply for a NemID or MitID to access Danish digital services.",
            timeline: "1-2 weeks (foreign applicants)",
          },
          {
            number: 2,
            title: "Register on Virk.dk",
            description:
              "Submit the registration application online via Virk.dk, including articles of association and capital documentation.",
            timeline: "1-3 days",
            url: "https://virk.dk/",
            urlLabel: "Virk.dk",
            cost: "DKK 670",
          },
          {
            number: 3,
            title: "Deposit share capital",
            description:
              "Deposit minimum DKK 40,000 share capital into a bank account. Obtain a bank statement as proof.",
            timeline: "1-3 days",
          },
          {
            number: 4,
            title: "Register for VAT and employer obligations",
            description:
              "Register for VAT (if applicable) and as an employer through Virk.dk.",
            timeline: "1-3 days",
            url: "https://virk.dk/",
            urlLabel: "Virk.dk",
          },
        ],
        totalTimeline: "5-14 days",
        totalCost: "DKK 40,670+ (including share capital)",
        requirements: [
          "At least 1 founder",
          "Minimum share capital of DKK 40,000",
          "At least 1 director",
          "Registered business address in Denmark",
          "Articles of association",
        ],
        sources: [
          {
            label: "Danish Business Authority (Virk)",
            url: "https://virk.dk/",
          },
          {
            label: "Danish Business Authority",
            url: "https://erhvervsstyrelsen.dk/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "South Korea",
    slug: "south-korea",
    flag: "KR",
    region: "Asia",
    currency: "KRW",
    language: "Korean",
    easeOfBusinessRank: 5,
    corporateTaxRate: "9-24% (progressive)",
    summary:
      "South Korea has streamlined business registration significantly, with strong government support for startups and innovation.",
    keyBenefits: [
      "Government startup support programs",
      "Advanced digital infrastructure",
      "Access to large domestic market",
      "Strong IP protection",
    ],
    entityTypes: [
      {
        name: "Limited Liability Company (Yuhan Hoesa)",
        slug: "llc",
        description:
          "A flexible structure popular with foreign investors and smaller businesses.",
        minCapital: "No minimum",
        liability: "Limited to capital contribution",
        steps: [
          {
            number: 1,
            title: "Verify company name",
            description:
              "Check name availability through the Supreme Court Internet Registry Office.",
            timeline: "1 day",
            url: "http://www.iros.go.kr/",
            urlLabel: "Internet Registry Office",
          },
          {
            number: 2,
            title: "Prepare articles of incorporation",
            description:
              "Draft articles of incorporation and have them notarized. Must include company purpose, name, and capital structure.",
            timeline: "1-2 days",
          },
          {
            number: 3,
            title: "Deposit capital and obtain bank certificate",
            description:
              "Deposit capital into a temporary bank account and obtain a deposit certificate.",
            timeline: "1-2 days",
          },
          {
            number: 4,
            title: "Register with the District Court",
            description:
              "File incorporation documents with the competent District Court registry office.",
            timeline: "3-5 days",
            cost: "KRW 40,000-150,000",
          },
          {
            number: 5,
            title: "Register with the tax office",
            description:
              "Register for business tax at the local National Tax Service office.",
            timeline: "1-5 days",
            url: "https://www.nts.go.kr/",
            urlLabel: "National Tax Service",
          },
        ],
        totalTimeline: "7-14 days",
        totalCost: "KRW 500,000-1,500,000",
        requirements: [
          "At least 1 member (no maximum)",
          "No minimum capital requirement",
          "Articles of incorporation (notarized)",
          "Registered address in South Korea",
        ],
        sources: [
          {
            label: "Korea Internet Registry Office",
            url: "http://www.iros.go.kr/",
          },
          {
            label: "National Tax Service",
            url: "https://www.nts.go.kr/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "United States",
    slug: "united-states",
    flag: "US",
    region: "North America",
    currency: "USD",
    language: "English",
    easeOfBusinessRank: 6,
    corporateTaxRate: "21% federal + state taxes",
    summary:
      "The US offers multiple state-level options for incorporation, with Delaware and Wyoming being the most popular for their business-friendly laws.",
    keyBenefits: [
      "World's largest economy",
      "Multiple state options with varying benefits",
      "Strong venture capital ecosystem",
      "Flexible entity structures",
    ],
    entityTypes: [
      {
        name: "Limited Liability Company (LLC)",
        slug: "llc",
        description:
          "The most popular structure for small businesses, offering flexibility in taxation and management.",
        liability: "Limited to capital contribution",
        steps: [
          {
            number: 1,
            title: "Choose a state of formation",
            description:
              "Select a state (Delaware, Wyoming, and Nevada are popular for their business-friendly laws). Check name availability.",
            timeline: "1 day",
          },
          {
            number: 2,
            title: "Appoint a registered agent",
            description:
              "Designate a registered agent with a physical address in the state of formation.",
            timeline: "1 day",
          },
          {
            number: 3,
            title: "File Articles of Organization",
            description:
              "File formation documents with the Secretary of State. Most states offer online filing.",
            timeline: "1-10 days",
            cost: "USD 50-500 (varies by state)",
          },
          {
            number: 4,
            title: "Obtain an EIN from the IRS",
            description:
              "Apply for an Employer Identification Number (EIN) from the Internal Revenue Service. Free and available online.",
            timeline: "Instant (online) or 4-5 weeks (mail)",
            url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
            urlLabel: "IRS EIN Application",
          },
          {
            number: 5,
            title: "Create an Operating Agreement",
            description:
              "Draft an operating agreement outlining ownership structure, management, and profit distribution.",
            timeline: "1-3 days",
          },
          {
            number: 6,
            title: "Open a business bank account",
            description:
              "Open a bank account in the company's name using the EIN and formation documents.",
            timeline: "1-5 days",
          },
        ],
        totalTimeline: "3-14 days",
        totalCost: "USD 50-800",
        requirements: [
          "At least 1 member (any nationality)",
          "Registered agent in state of formation",
          "No minimum capital requirement",
          "Registered address in state of formation",
        ],
        sources: [
          {
            label: "IRS - Starting a Business",
            url: "https://www.irs.gov/businesses/small-businesses-self-employed",
          },
          {
            label: "SBA - Choose a Business Structure",
            url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    flag: "GB",
    region: "Europe",
    currency: "GBP",
    language: "English",
    easeOfBusinessRank: 7,
    corporateTaxRate: "19-25%",
    summary:
      "The UK offers one of the fastest and cheapest company registration processes in the world, fully available online through Companies House.",
    keyBenefits: [
      "Online registration in 24 hours",
      "Low registration costs",
      "English common law system",
      "Access to global financial markets",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (Ltd)",
        slug: "private-limited-company",
        description:
          "The most common business structure in the UK, offering limited liability and credibility.",
        minCapital: "GBP 1 (no minimum)",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Check company name availability",
            description:
              "Search the Companies House register to ensure your desired name is available.",
            timeline: "Instant",
            url: "https://find-and-update.company-information.service.gov.uk/",
            urlLabel: "Companies House Search",
          },
          {
            number: 2,
            title: "Register with Companies House",
            description:
              "Register online with Companies House. You'll need director details, shareholder information, registered office address, and SIC codes.",
            timeline: "24 hours (online)",
            url: "https://www.gov.uk/limited-company-formation",
            urlLabel: "Register a Company",
            cost: "GBP 12 (online)",
          },
          {
            number: 3,
            title: "Register for Corporation Tax with HMRC",
            description:
              "Register with HM Revenue and Customs for Corporation Tax within 3 months of starting business.",
            timeline: "1-7 days",
            url: "https://www.gov.uk/limited-company-formation/set-up-your-company-for-corporation-tax",
            urlLabel: "HMRC Corporation Tax",
          },
          {
            number: 4,
            title: "Register for VAT (if applicable)",
            description:
              "Register for VAT if turnover exceeds GBP 90,000 or voluntarily if below threshold.",
            timeline: "1-5 days",
            url: "https://www.gov.uk/register-for-vat",
            urlLabel: "VAT Registration",
          },
          {
            number: 5,
            title: "Open a business bank account",
            description:
              "Open a business bank account. Many UK banks and fintechs offer online applications.",
            timeline: "1-7 days",
          },
        ],
        totalTimeline: "1-7 days",
        totalCost: "GBP 12-50",
        requirements: [
          "At least 1 director (any nationality, age 16+)",
          "At least 1 shareholder",
          "Registered office address in the UK",
          "No minimum share capital",
          "SIC code (Standard Industrial Classification)",
        ],
        sources: [
          {
            label: "Companies House",
            url: "https://www.gov.uk/government/organisations/companies-house",
          },
          {
            label: "HMRC",
            url: "https://www.gov.uk/government/organisations/hm-revenue-customs",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Norway",
    slug: "norway",
    flag: "NO",
    region: "Europe",
    currency: "NOK",
    language: "Norwegian",
    easeOfBusinessRank: 8,
    corporateTaxRate: "22%",
    summary:
      "Norway offers a stable, transparent business environment with digital-first government services and access to the EEA market.",
    keyBenefits: [
      "Digital registration process",
      "Stable economy and political environment",
      "Access to EEA market",
      "High trust business environment",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (AS)",
        slug: "as",
        description:
          "Aksjeselskap (AS) is the standard limited liability company in Norway.",
        minCapital: "NOK 30,000",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Register via Altinn",
            description:
              "Complete the Coordinated Register Notification form through Altinn, Norway's digital public services portal.",
            timeline: "1-3 days",
            url: "https://www.altinn.no/",
            urlLabel: "Altinn",
            cost: "NOK 5,570",
          },
          {
            number: 2,
            title: "Deposit share capital",
            description:
              "Deposit minimum NOK 30,000 in a Norwegian bank account. Obtain confirmation from the bank.",
            timeline: "1-5 days",
          },
          {
            number: 3,
            title: "Register in the Register of Business Enterprises",
            description:
              "Upon approval, the company is entered in the Bronnoysund Register Centre.",
            timeline: "1-5 days",
            url: "https://www.brreg.no/",
            urlLabel: "Bronnoysund Register Centre",
          },
          {
            number: 4,
            title: "Register for VAT",
            description:
              "Register for VAT if turnover exceeds NOK 50,000 in a 12-month period.",
            timeline: "1-3 days",
            url: "https://www.skatteetaten.no/",
            urlLabel: "Norwegian Tax Administration",
          },
        ],
        totalTimeline: "5-14 days",
        totalCost: "NOK 35,570+ (including share capital)",
        requirements: [
          "At least 1 shareholder",
          "Board of directors (at least 1 member)",
          "Minimum share capital NOK 30,000",
          "Registered address in Norway",
          "General manager if board has more than 1 member",
        ],
        sources: [
          {
            label: "Altinn - Start a Business",
            url: "https://www.altinn.no/",
          },
          {
            label: "Bronnoysund Register Centre",
            url: "https://www.brreg.no/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Georgia",
    slug: "georgia",
    flag: "GE",
    region: "Eastern Europe / Central Asia",
    currency: "GEL",
    language: "Georgian",
    easeOfBusinessRank: 9,
    corporateTaxRate: "15% (only on distributed profits)",
    summary:
      "Georgia has one of the most business-friendly environments globally, with extremely fast registration and a unique 'Estonian model' tax system where profits are only taxed when distributed.",
    keyBenefits: [
      "Tax only on distributed profits",
      "Same-day registration",
      "Very low bureaucracy",
      "Free trade agreements with EU and China",
    ],
    entityTypes: [
      {
        name: "Limited Liability Company (LLC / shps)",
        slug: "llc",
        description:
          "The most common and straightforward business entity in Georgia.",
        liability: "Limited to capital contribution",
        steps: [
          {
            number: 1,
            title: "Register at the Public Service Hall",
            description:
              "Visit any Public Service Hall or use the online portal to submit registration documents. Bring passport, articles of association, and director appointment.",
            timeline: "1 day (expedited) or 3 days (standard)",
            url: "https://psh.gov.ge/",
            urlLabel: "Public Service Hall",
            cost: "GEL 100 (standard) or GEL 200 (expedited)",
          },
          {
            number: 2,
            title: "Obtain a tax identification number",
            description:
              "Automatically issued upon registration with the National Agency of Public Registry.",
            timeline: "Included with registration",
          },
          {
            number: 3,
            title: "Register for VAT (if applicable)",
            description:
              "Register for VAT if annual turnover exceeds GEL 100,000.",
            timeline: "1 day",
            url: "https://rs.ge/",
            urlLabel: "Revenue Service",
          },
          {
            number: 4,
            title: "Open a corporate bank account",
            description:
              "Open an account at a Georgian bank. Most banks process applications within 1-3 days.",
            timeline: "1-3 days",
          },
        ],
        totalTimeline: "1-5 days",
        totalCost: "GEL 100-300",
        requirements: [
          "At least 1 founder (any nationality)",
          "No minimum capital requirement",
          "Director (can be the founder)",
          "Legal address in Georgia",
        ],
        sources: [
          {
            label: "National Agency of Public Registry",
            url: "https://napr.gov.ge/",
          },
          {
            label: "Georgia Revenue Service",
            url: "https://rs.ge/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Sweden",
    slug: "sweden",
    flag: "SE",
    region: "Europe",
    currency: "SEK",
    language: "Swedish",
    easeOfBusinessRank: 10,
    corporateTaxRate: "20.6%",
    summary:
      "Sweden combines a strong innovation ecosystem with straightforward company registration through the Swedish Companies Registration Office.",
    keyBenefits: [
      "Strong innovation and startup ecosystem",
      "Access to EU single market",
      "High quality of life attracts talent",
      "Digital-first government services",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (AB)",
        slug: "ab",
        description:
          "Aktiebolag (AB) is the standard limited company in Sweden, suitable for businesses of all sizes.",
        minCapital: "SEK 25,000",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Register with Bolagsverket",
            description:
              "Submit registration with the Swedish Companies Registration Office online or by mail.",
            timeline: "1-3 weeks",
            url: "https://bolagsverket.se/",
            urlLabel: "Bolagsverket",
            cost: "SEK 2,200",
          },
          {
            number: 2,
            title: "Deposit share capital",
            description:
              "Open a bank account and deposit the minimum SEK 25,000 share capital.",
            timeline: "1-5 days",
          },
          {
            number: 3,
            title: "Register with the Swedish Tax Agency",
            description:
              "Register for F-tax, VAT, and as an employer with Skatteverket.",
            timeline: "1-2 weeks",
            url: "https://www.skatteverket.se/",
            urlLabel: "Skatteverket",
          },
        ],
        totalTimeline: "2-5 weeks",
        totalCost: "SEK 27,200+ (including share capital)",
        requirements: [
          "At least 1 founder",
          "Board of directors (at least 1 member + 1 deputy, or 2 members)",
          "Minimum share capital SEK 25,000",
          "Managing director (for larger boards)",
          "Registered address in Sweden",
        ],
        sources: [
          {
            label: "Bolagsverket (Swedish Companies Registration Office)",
            url: "https://bolagsverket.se/",
          },
          {
            label: "Skatteverket (Swedish Tax Agency)",
            url: "https://www.skatteverket.se/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Lithuania",
    slug: "lithuania",
    flag: "LT",
    region: "Europe",
    currency: "EUR",
    language: "Lithuanian",
    easeOfBusinessRank: 11,
    corporateTaxRate: "15% (5% for small companies)",
    summary:
      "Lithuania offers a fast, affordable company formation process with EU access and competitive tax rates for small businesses.",
    keyBenefits: [
      "Low tax rate for small companies (5%)",
      "EU and Eurozone member",
      "Fintech-friendly regulation",
      "Fast online registration",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (UAB)",
        slug: "uab",
        description:
          "Uzdara Akcine Bendrove (UAB) is the most popular entity type in Lithuania.",
        minCapital: "EUR 2,500",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Reserve a company name",
            description:
              "Reserve a temporary name through the Register of Legal Entities.",
            timeline: "1 day",
            url: "https://www.registrucentras.lt/",
            urlLabel: "Register of Legal Entities",
          },
          {
            number: 2,
            title: "Open a temporary bank account and deposit capital",
            description:
              "Deposit minimum EUR 2,500 share capital into a temporary account.",
            timeline: "1-3 days",
          },
          {
            number: 3,
            title: "Notarize incorporation documents",
            description:
              "Have articles of association and founding deed notarized by a Lithuanian notary.",
            timeline: "1-2 days",
            cost: "EUR 50-150",
          },
          {
            number: 4,
            title: "Register with the Register of Legal Entities",
            description:
              "Submit all documents to the Register of Legal Entities for formal incorporation.",
            timeline: "1-3 days",
            url: "https://www.registrucentras.lt/",
            urlLabel: "Register of Legal Entities",
            cost: "EUR 53",
          },
          {
            number: 5,
            title: "Register with the State Tax Inspectorate",
            description:
              "Register for VAT and corporate tax with VMI.",
            timeline: "1-5 days",
            url: "https://www.vmi.lt/",
            urlLabel: "State Tax Inspectorate",
          },
        ],
        totalTimeline: "5-14 days",
        totalCost: "EUR 2,600-2,750",
        requirements: [
          "At least 1 shareholder (individual or legal entity)",
          "At least 1 director",
          "Minimum share capital EUR 2,500",
          "Registered address in Lithuania",
          "Notarized articles of association",
        ],
        sources: [
          {
            label: "Register of Legal Entities",
            url: "https://www.registrucentras.lt/",
          },
          {
            label: "State Tax Inspectorate (VMI)",
            url: "https://www.vmi.lt/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    flag: "MY",
    region: "Asia",
    currency: "MYR",
    language: "Malay / English",
    easeOfBusinessRank: 12,
    corporateTaxRate: "24% (17% for first MYR 600k for SMEs)",
    summary:
      "Malaysia offers a cost-effective business environment with strong infrastructure, multicultural workforce, and access to ASEAN markets.",
    keyBenefits: [
      "Low operational costs",
      "Strategic location in ASEAN",
      "Multilingual workforce",
      "Government incentives for foreign investment",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (Sdn Bhd)",
        slug: "sdn-bhd",
        description:
          "Sendirian Berhad (Sdn Bhd) is the standard private limited company, most popular for local and foreign businesses.",
        minCapital: "MYR 1 (no minimum)",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Reserve company name via MyCoID",
            description:
              "Apply for name reservation through SSM's MyCoID portal.",
            timeline: "1 day",
            url: "https://www.ssm.com.my/",
            urlLabel: "SSM (Companies Commission)",
            cost: "MYR 50",
          },
          {
            number: 2,
            title: "Submit incorporation via MyCoID 2016",
            description:
              "File incorporation application through the Super Form on MyCoID. This simultaneously registers with SSM, LHDN, SOCSO, and EPF.",
            timeline: "1-3 days",
            url: "https://www.ssm.com.my/",
            urlLabel: "SSM MyCoID",
            cost: "MYR 1,000",
          },
          {
            number: 3,
            title: "Appoint a company secretary",
            description:
              "Appoint a licensed company secretary within 30 days of incorporation.",
            timeline: "Within 30 days",
          },
          {
            number: 4,
            title: "Open a corporate bank account",
            description:
              "Open a business bank account with a Malaysian bank.",
            timeline: "1-2 weeks",
          },
        ],
        totalTimeline: "3-10 days",
        totalCost: "MYR 1,050+",
        requirements: [
          "At least 1 director (Malaysian resident)",
          "At least 1 shareholder",
          "Company secretary (licensed, within 30 days)",
          "Registered address in Malaysia",
          "No minimum paid-up capital",
        ],
        sources: [
          {
            label: "Companies Commission of Malaysia (SSM)",
            url: "https://www.ssm.com.my/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Estonia",
    slug: "estonia",
    flag: "EE",
    region: "Europe",
    currency: "EUR",
    language: "Estonian",
    easeOfBusinessRank: 13,
    corporateTaxRate: "0% (retained) / 20% (distributed)",
    summary:
      "Estonia pioneered e-Residency, allowing anyone in the world to register and manage a company fully online. Retained profits are tax-free.",
    keyBenefits: [
      "e-Residency program for remote founders",
      "0% tax on retained profits",
      "Fully digital company management",
      "EU and Eurozone access",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (OU)",
        slug: "ou",
        description:
          "Osahing (OU) is the most common entity, especially popular with e-Residents and digital entrepreneurs.",
        minCapital: "EUR 2,500 (can be deferred)",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Apply for e-Residency (if non-resident)",
            description:
              "Apply for an Estonian e-Residency digital ID card to access Estonian digital services remotely.",
            timeline: "3-6 weeks",
            url: "https://www.e-resident.gov.ee/",
            urlLabel: "e-Residency Portal",
            cost: "EUR 100-120",
          },
          {
            number: 2,
            title: "Register the company via e-Business Register",
            description:
              "Submit incorporation application through the e-Business Register portal using your e-Residency card or Estonian ID.",
            timeline: "1-3 days",
            url: "https://ariregister.rik.ee/",
            urlLabel: "e-Business Register",
            cost: "EUR 265",
          },
          {
            number: 3,
            title: "Register for VAT (if applicable)",
            description:
              "Register for VAT if annual turnover exceeds EUR 40,000 or for intra-EU trade.",
            timeline: "1-5 days",
            url: "https://www.emta.ee/",
            urlLabel: "Estonian Tax and Customs Board",
          },
          {
            number: 4,
            title: "Open a business bank account",
            description:
              "Open an account with an Estonian bank or fintech provider. Some accept remote onboarding for e-Residents.",
            timeline: "1-4 weeks",
          },
        ],
        totalTimeline: "1-3 days (with e-Residency) or 4-8 weeks (new e-Residency application)",
        totalCost: "EUR 265-385",
        requirements: [
          "At least 1 shareholder",
          "At least 1 board member",
          "Share capital EUR 2,500 (can be deferred)",
          "Estonian e-Residency or ID card for online registration",
          "Registered address in Estonia",
        ],
        sources: [
          {
            label: "Estonian e-Residency",
            url: "https://www.e-resident.gov.ee/",
          },
          {
            label: "Estonian e-Business Register",
            url: "https://ariregister.rik.ee/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "AU",
    region: "Oceania",
    currency: "AUD",
    language: "English",
    easeOfBusinessRank: 14,
    corporateTaxRate: "25% (30% for large entities)",
    summary:
      "Australia offers a straightforward online registration process through ASIC, with strong legal protections and a stable economy.",
    keyBenefits: [
      "Online registration through ASIC",
      "Strong legal and regulatory framework",
      "English-speaking common law system",
      "Large domestic market",
    ],
    entityTypes: [
      {
        name: "Proprietary Limited Company (Pty Ltd)",
        slug: "pty-ltd",
        description:
          "The most common company type in Australia, suitable for small to medium businesses.",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Check company name availability",
            description:
              "Search the ASIC register to check if your desired company name is available.",
            timeline: "Instant",
            url: "https://connectonline.asic.gov.au/",
            urlLabel: "ASIC Connect",
          },
          {
            number: 2,
            title: "Register with ASIC",
            description:
              "Register the company online through ASIC. You'll receive an ACN (Australian Company Number) upon registration.",
            timeline: "1-3 days",
            url: "https://connectonline.asic.gov.au/",
            urlLabel: "ASIC Connect",
            cost: "AUD 576",
          },
          {
            number: 3,
            title: "Apply for an ABN and register for tax",
            description:
              "Apply for an Australian Business Number (ABN) through the Australian Business Register. Register for GST if turnover exceeds AUD 75,000.",
            timeline: "1 day",
            url: "https://www.abr.gov.au/",
            urlLabel: "Australian Business Register",
          },
          {
            number: 4,
            title: "Register for PAYG and other obligations",
            description:
              "Register for Pay As You Go withholding if hiring employees.",
            timeline: "1-3 days",
            url: "https://www.ato.gov.au/",
            urlLabel: "Australian Taxation Office",
          },
          {
            number: 5,
            title: "Open a business bank account",
            description:
              "Open a bank account with an Australian bank using your ACN and ABN.",
            timeline: "1-5 days",
          },
        ],
        totalTimeline: "3-10 days",
        totalCost: "AUD 576+",
        requirements: [
          "At least 1 director (ordinarily resident in Australia)",
          "At least 1 shareholder (max 50 for Pty Ltd)",
          "No minimum share capital",
          "Registered office address in Australia",
        ],
        sources: [
          {
            label: "ASIC (Australian Securities and Investments Commission)",
            url: "https://asic.gov.au/",
          },
          {
            label: "Australian Taxation Office",
            url: "https://www.ato.gov.au/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "CA",
    region: "North America",
    currency: "CAD",
    language: "English / French",
    easeOfBusinessRank: 15,
    corporateTaxRate: "15% federal + provincial (combined 25-31%)",
    summary:
      "Canada offers federal or provincial incorporation options, with a stable economy and access to North American markets via CUSMA.",
    keyBenefits: [
      "Choice of federal or provincial incorporation",
      "Access to CUSMA/North American trade",
      "Multicultural business environment",
      "Strong banking system",
    ],
    entityTypes: [
      {
        name: "Federal Corporation",
        slug: "federal-corporation",
        description:
          "A federally incorporated corporation can operate under its name across all provinces and territories.",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Search for a corporate name (NUANS)",
            description:
              "Conduct a NUANS (Newly Upgraded Automated Name Search) to check name availability. Valid for 90 days.",
            timeline: "Instant - 1 day",
            cost: "CAD 13.80",
          },
          {
            number: 2,
            title: "File Articles of Incorporation",
            description:
              "File online through Corporations Canada using the Online Filing Centre.",
            timeline: "1-5 days",
            url: "https://ised-isde.canada.ca/cc/lgcy/fdrlCrpStp.html",
            urlLabel: "Corporations Canada",
            cost: "CAD 200 (online) or CAD 250 (mail)",
          },
          {
            number: 3,
            title: "Register extra-provincially where you do business",
            description:
              "Register in each province where you will carry on business.",
            timeline: "1-5 days per province",
            cost: "Varies by province",
          },
          {
            number: 4,
            title: "Obtain a Business Number (BN) from CRA",
            description:
              "Register for a Business Number and program accounts (GST/HST, payroll, import/export) with the Canada Revenue Agency.",
            timeline: "1-5 days",
            url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/registering-your-business/register.html",
            urlLabel: "CRA Business Registration",
          },
          {
            number: 5,
            title: "Open a business bank account",
            description:
              "Open an account with a Canadian bank using your articles of incorporation and BN.",
            timeline: "1-5 days",
          },
        ],
        totalTimeline: "5-14 days",
        totalCost: "CAD 215-500",
        requirements: [
          "At least 1 director (25% must be Canadian residents)",
          "At least 1 shareholder",
          "No minimum share capital",
          "Registered office address in Canada",
          "NUANS name search report",
        ],
        sources: [
          {
            label: "Corporations Canada",
            url: "https://ised-isde.canada.ca/cc/lgcy/fdrlCrpStp.html",
          },
          {
            label: "Canada Revenue Agency",
            url: "https://www.canada.ca/en/revenue-agency.html",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "IE",
    region: "Europe",
    currency: "EUR",
    language: "English / Irish",
    easeOfBusinessRank: 16,
    corporateTaxRate: "12.5% (trading) / 25% (non-trading)",
    summary:
      "Ireland is a major hub for international businesses due to its low corporate tax rate, EU membership, and English-speaking workforce.",
    keyBenefits: [
      "12.5% corporate tax rate on trading income",
      "EU and Eurozone member",
      "English-speaking with common law system",
      "Major tech and pharma hub",
    ],
    entityTypes: [
      {
        name: "Private Company Limited by Shares (LTD)",
        slug: "private-limited-company",
        description:
          "The standard company type in Ireland under the Companies Act 2014.",
        minCapital: "No minimum",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Check company name availability",
            description:
              "Search the CRO (Companies Registration Office) database for name availability.",
            timeline: "Instant",
            url: "https://core.cro.ie/",
            urlLabel: "CRO Search (CORE)",
          },
          {
            number: 2,
            title: "File incorporation documents with CRO",
            description:
              "Submit Form A1 (incorporation form), constitution, and consent forms via CORE online system.",
            timeline: "5-10 days",
            url: "https://core.cro.ie/",
            urlLabel: "CRO CORE System",
            cost: "EUR 50 (online)",
          },
          {
            number: 3,
            title: "Register for tax with Revenue",
            description:
              "Register for Corporation Tax, VAT, and employer PAYE using Revenue's Online Service (ROS).",
            timeline: "1-5 days",
            url: "https://www.ros.ie/",
            urlLabel: "Revenue Online Service",
          },
          {
            number: 4,
            title: "Open a business bank account",
            description:
              "Open a corporate bank account with an Irish bank.",
            timeline: "1-2 weeks",
          },
        ],
        totalTimeline: "7-20 days",
        totalCost: "EUR 50-100",
        requirements: [
          "At least 1 director (at least 1 must be EEA resident, or obtain a bond)",
          "At least 1 shareholder",
          "Company secretary (cannot be sole director)",
          "Registered office address in Ireland",
          "No minimum share capital",
        ],
        sources: [
          {
            label: "Companies Registration Office (CRO)",
            url: "https://www.cro.ie/",
          },
          {
            label: "Revenue Commissioners",
            url: "https://www.revenue.ie/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "United Arab Emirates",
    slug: "uae",
    flag: "AE",
    region: "Middle East",
    currency: "AED",
    language: "Arabic / English",
    easeOfBusinessRank: 17,
    corporateTaxRate: "9% (above AED 375,000) / 0% in free zones (qualifying)",
    summary:
      "The UAE offers tax-efficient business structures through free zones and mainland options, with 100% foreign ownership now available.",
    keyBenefits: [
      "0% personal income tax",
      "Free zone options with full foreign ownership",
      "Strategic location between East and West",
      "Modern infrastructure",
    ],
    entityTypes: [
      {
        name: "Free Zone Company (FZE/FZ-LLC)",
        slug: "free-zone-company",
        description:
          "A company established in one of the UAE's 40+ free zones, offering tax benefits and full foreign ownership.",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Choose a free zone",
            description:
              "Select the most appropriate free zone based on your business activity (e.g., DMCC for commodities, DIFC for finance, JAFZA for trade).",
            timeline: "1-3 days",
          },
          {
            number: 2,
            title: "Reserve a trade name",
            description:
              "Apply for trade name reservation with the chosen free zone authority.",
            timeline: "1-3 days",
            cost: "AED 500-2,000",
          },
          {
            number: 3,
            title: "Submit incorporation application",
            description:
              "Submit the application form, passport copies, business plan, and other required documents to the free zone authority.",
            timeline: "3-10 days",
            cost: "AED 10,000-50,000 (varies by free zone)",
          },
          {
            number: 4,
            title: "Obtain trade license",
            description:
              "Receive your trade license upon approval. This serves as your official permission to operate.",
            timeline: "1-5 days",
          },
          {
            number: 5,
            title: "Apply for visa and Emirates ID",
            description:
              "Apply for residency visa and Emirates ID if you plan to reside in the UAE.",
            timeline: "2-4 weeks",
          },
          {
            number: 6,
            title: "Open a corporate bank account",
            description:
              "Open a business bank account with a UAE bank. This can be the most time-consuming step.",
            timeline: "2-6 weeks",
          },
        ],
        totalTimeline: "2-8 weeks",
        totalCost: "AED 15,000-55,000+",
        requirements: [
          "Valid passport",
          "Business plan (for some free zones)",
          "Minimum capital varies by free zone",
          "No local partner required",
          "Physical or flexi-desk office in the free zone",
        ],
        sources: [
          {
            label: "UAE Ministry of Economy",
            url: "https://www.moec.gov.ae/",
          },
          {
            label: "DMCC Free Zone",
            url: "https://www.dmcc.ae/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    flag: "NL",
    region: "Europe",
    currency: "EUR",
    language: "Dutch",
    easeOfBusinessRank: 18,
    corporateTaxRate: "19% (first EUR 200k) / 25.8%",
    summary:
      "The Netherlands is a gateway to Europe with an extensive tax treaty network, highly skilled workforce, and a competitive corporate tax structure.",
    keyBenefits: [
      "Extensive double tax treaty network",
      "Gateway to European market",
      "Innovation box regime (9% tax on qualifying IP)",
      "Highly educated multilingual workforce",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (BV)",
        slug: "bv",
        description:
          "Besloten Vennootschap (BV) is the Dutch equivalent of a private limited company and the most common structure for businesses.",
        minCapital: "EUR 0.01",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Check company name at KVK",
            description:
              "Verify name availability through the Netherlands Chamber of Commerce (KVK) trade register.",
            timeline: "Instant",
            url: "https://www.kvk.nl/",
            urlLabel: "KVK (Chamber of Commerce)",
          },
          {
            number: 2,
            title: "Execute notarial deed of incorporation",
            description:
              "A Dutch civil-law notary must execute the deed of incorporation, including articles of association. This is mandatory.",
            timeline: "1-5 days",
            cost: "EUR 500-1,500",
          },
          {
            number: 3,
            title: "Register with KVK",
            description:
              "The notary registers the company with the Trade Register at KVK. You receive a KVK number and RSIN.",
            timeline: "1 day",
            cost: "EUR 75",
          },
          {
            number: 4,
            title: "Register with the Dutch Tax Authority",
            description:
              "Register for corporate tax, VAT, and payroll tax with the Belastingdienst.",
            timeline: "1-2 weeks",
            url: "https://www.belastingdienst.nl/",
            urlLabel: "Belastingdienst",
          },
          {
            number: 5,
            title: "Open a business bank account",
            description:
              "Open a corporate bank account with a Dutch bank.",
            timeline: "1-2 weeks",
          },
        ],
        totalTimeline: "1-4 weeks",
        totalCost: "EUR 575-1,600",
        requirements: [
          "At least 1 shareholder",
          "At least 1 director (any nationality)",
          "Minimum share capital EUR 0.01",
          "Notarial deed of incorporation (mandatory)",
          "Registered address in the Netherlands",
        ],
        sources: [
          {
            label: "KVK (Netherlands Chamber of Commerce)",
            url: "https://www.kvk.nl/",
          },
          {
            label: "Netherlands Tax Administration",
            url: "https://www.belastingdienst.nl/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Finland",
    slug: "finland",
    flag: "FI",
    region: "Europe",
    currency: "EUR",
    language: "Finnish / Swedish",
    easeOfBusinessRank: 19,
    corporateTaxRate: "20%",
    summary:
      "Finland offers a transparent, low-corruption business environment with strong digital infrastructure and EU market access.",
    keyBenefits: [
      "One of the least corrupt countries globally",
      "Strong digital infrastructure",
      "EU and Eurozone member",
      "Excellent education system and talent pool",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (Oy)",
        slug: "oy",
        description:
          "Osakeyhtio (Oy) is the standard limited liability company in Finland.",
        minCapital: "EUR 2,500",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Register online via YTJ",
            description:
              "Submit the startup notification through the Business Information System (YTJ) online service.",
            timeline: "1-5 days",
            url: "https://www.ytj.fi/",
            urlLabel: "YTJ Business Information System",
            cost: "EUR 240 (online)",
          },
          {
            number: 2,
            title: "Deposit share capital",
            description:
              "Deposit minimum EUR 2,500 share capital into the company's bank account.",
            timeline: "1-3 days",
          },
          {
            number: 3,
            title: "Register with the Trade Register",
            description:
              "Complete registration with the Finnish Patent and Registration Office (PRH).",
            timeline: "1-5 days",
            url: "https://www.prh.fi/",
            urlLabel: "PRH (Patent and Registration Office)",
          },
          {
            number: 4,
            title: "Register with the Tax Administration",
            description:
              "Register for VAT, employer register, and prepayment register with Vero.",
            timeline: "1-5 days",
            url: "https://www.vero.fi/",
            urlLabel: "Finnish Tax Administration",
          },
        ],
        totalTimeline: "5-14 days",
        totalCost: "EUR 2,740+ (including share capital)",
        requirements: [
          "At least 1 shareholder",
          "Board of directors with at least 1 member",
          "Minimum share capital EUR 2,500",
          "Registered address in Finland",
          "At least 1 board member resident in EEA",
        ],
        sources: [
          {
            label: "YTJ Business Information System",
            url: "https://www.ytj.fi/",
          },
          {
            label: "Finnish Patent and Registration Office",
            url: "https://www.prh.fi/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "DE",
    region: "Europe",
    currency: "EUR",
    language: "German",
    easeOfBusinessRank: 20,
    corporateTaxRate: "15% + 5.5% solidarity surcharge + trade tax (~30% effective)",
    summary:
      "Germany is Europe's largest economy, offering access to a massive consumer market and a highly skilled workforce, though the formation process involves more steps than some countries.",
    keyBenefits: [
      "Largest economy in Europe",
      "Highly skilled workforce",
      "Central location in EU",
      "Strong manufacturing and export infrastructure",
    ],
    entityTypes: [
      {
        name: "Limited Liability Company (GmbH)",
        slug: "gmbh",
        description:
          "Gesellschaft mit beschrankter Haftung (GmbH) is the most common business entity in Germany.",
        minCapital: "EUR 25,000 (EUR 12,500 at registration)",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Draft articles of association",
            description:
              "Prepare the articles of association (Gesellschaftsvertrag) including company name, registered office, share capital, and business purpose.",
            timeline: "1-3 days",
          },
          {
            number: 2,
            title: "Notarize the articles of association",
            description:
              "All shareholders must appear before a German notary to execute the articles of association. The notary files the registration with the commercial register.",
            timeline: "1 day",
            cost: "EUR 500-2,000",
          },
          {
            number: 3,
            title: "Deposit share capital",
            description:
              "Open a business bank account and deposit at least EUR 12,500 (half of the EUR 25,000 minimum).",
            timeline: "1-5 days",
          },
          {
            number: 4,
            title: "Register in the Commercial Register (Handelsregister)",
            description:
              "The notary submits registration to the local court (Amtsgericht). Registration is published in the Federal Gazette.",
            timeline: "2-6 weeks",
            cost: "EUR 150-300",
          },
          {
            number: 5,
            title: "Register with the Trade Office (Gewerbeamt)",
            description:
              "Register the business with the local trade office.",
            timeline: "1-3 days",
            cost: "EUR 20-60",
          },
          {
            number: 6,
            title: "Register with the Tax Office (Finanzamt)",
            description:
              "Complete the tax registration questionnaire. You'll receive a tax number and can register for VAT.",
            timeline: "2-4 weeks",
          },
        ],
        totalTimeline: "4-10 weeks",
        totalCost: "EUR 12,700-15,000+ (including minimum capital deposit)",
        requirements: [
          "At least 1 shareholder (individual or legal entity)",
          "At least 1 managing director (Geschaftsfuhrer)",
          "Minimum share capital EUR 25,000 (EUR 12,500 at registration)",
          "Notarized articles of association",
          "Registered office address in Germany",
        ],
        sources: [
          {
            label: "Federal Ministry for Economic Affairs",
            url: "https://www.bmwk.de/",
          },
          {
            label: "Handelsregister (Commercial Register)",
            url: "https://www.handelsregister.de/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-10",
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getCountriesByRegion(): Record<string, Country[]> {
  return countries.reduce(
    (acc, country) => {
      if (!acc[country.region]) acc[country.region] = [];
      acc[country.region].push(country);
      return acc;
    },
    {} as Record<string, Country[]>
  );
}
