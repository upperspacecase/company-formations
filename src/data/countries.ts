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
    setupCostUSD: "~$90-150",
    residencyRequirement:
      "At least one director must ordinarily reside in New Zealand (or Australia if also a director of an Australian-registered company).",
    minimumAge: "18",
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
              "Complete the online registration form with company details, directors, shareholders, and registered office address. You will need a RealMe login.",
            timeline: "1 day",
            url: "https://companies-register.companiesoffice.govt.nz/",
            urlLabel: "Companies Register",
            cost: "NZD 148.05 incl GST (name reservation NZD 11.50 + incorporation NZD 136.55)",
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
        totalCost: "NZD 148-250",
        requirements: [
          "At least 1 director who lives in New Zealand (or Australia if also a director of an Australian company)",
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
    setupCostUSD: "~$235+",
    residencyRequirement:
      "At least one director must be ordinarily resident in Singapore (Citizen, PR, or EntrePass holder).",
    minimumAge: "18",
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
    setupCostUSD: "~$480+",
    residencyRequirement:
      "No residency requirement for directors — 100% foreign ownership allowed. If the company secretary is a natural person, they must reside in Hong Kong.",
    minimumAge: "18",
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
              "File the Incorporation Form (NNC1), Articles of Association, and Notice to Business Registration Office via e-Services Portal. Electronic certificates are normally issued within 1 hour.",
            timeline: "Within 1 hour (electronic) or 4 working days (hard copy)",
            url: "https://www.e-services.cr.gov.hk/",
            urlLabel: "CR e-Services Portal",
            cost: "HKD 1,545 (e-filing) or HKD 1,720 (hard copy)",
          },
          {
            number: 3,
            title: "Obtain Business Registration Certificate",
            description:
              "Automatically issued upon incorporation. Annual renewal required.",
            timeline: "Included with incorporation",
            cost: "HKD 2,200/year (rising to HKD 2,350/year from April 2026)",
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
        totalCost: "HKD 3,745+ (e-filing)",
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
    setupCostUSD: "~$3,000+ (including share capital)",
    residencyRequirement:
      "No residency requirement — directors and owners do not need to be Danish or EU residents (non-EU/EEA individuals running day-to-day management must have the legal right to work in the EU/EEA).",
    minimumAge: "18",
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
        minCapital: "DKK 20,000",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Obtain a digital signature (MitID)",
            description:
              "Foreign founders need to apply for MitID to access Danish digital services. NemID has been fully replaced by MitID.",
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
              "Deposit minimum DKK 20,000 share capital into a bank account. Obtain a bank statement as proof.",
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
        totalCost: "DKK 20,670+ (including share capital)",
        requirements: [
          "At least 1 founder",
          "Minimum share capital of DKK 20,000",
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
    setupCostUSD: "~$380-1,140",
    residencyRequirement:
      "No residency requirement — a foreigner may serve as representative director without residing in Korea.",
    minimumAge: "19",
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
    setupCostUSD: "$50-800",
    residencyRequirement:
      "No residency requirement — 100% foreign ownership of a Delaware LLC is permitted (a Delaware registered agent is required).",
    minimumAge: "No statutory minimum (Delaware LLC)",
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
              "Apply for an Employer Identification Number (EIN) from the Internal Revenue Service. Free and instant online if you have a US address. Foreign applicants without a US address must apply by phone, fax, or mail.",
            timeline: "Instant (online) or 4-5 weeks (mail/fax)",
            url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
            urlLabel: "IRS EIN Application",
          },
          {
            number: 5,
            title: "File Beneficial Ownership Information (BOI) with FinCEN",
            description:
              "Report beneficial ownership information to the Financial Crimes Enforcement Network. Required for most LLCs.",
            timeline: "1 day",
            url: "https://www.fincen.gov/boi",
            urlLabel: "FinCEN BOI Filing",
          },
          {
            number: 6,
            title: "Create an Operating Agreement",
            description:
              "Draft an operating agreement outlining ownership structure, management, and profit distribution.",
            timeline: "1-3 days",
          },
          {
            number: 7,
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
    setupCostUSD: "~$125-160",
    residencyRequirement:
      "No residency requirement — non-UK residents can be sole director and shareholder (UK registered office required).",
    minimumAge: "16",
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
            title: "Verify identity via GOV.UK One Login",
            description:
              "Directors must verify their identity through GOV.UK One Login and obtain a Companies House personal code before registering. Each director needs their own code.",
            timeline: "1-3 days",
            url: "https://www.gov.uk/limited-company-formation",
            urlLabel: "GOV.UK One Login",
          },
          {
            number: 3,
            title: "Register with Companies House",
            description:
              "Register online with Companies House. You'll need director details, shareholder information, registered office address, and SIC codes.",
            timeline: "Usually within 24 hours (online)",
            url: "https://www.gov.uk/limited-company-formation",
            urlLabel: "Register a Company",
            cost: "GBP 100 (online) or GBP 124 (postal)",
          },
          {
            number: 4,
            title: "Register for Corporation Tax with HMRC",
            description:
              "When registering online, Corporation Tax is usually set up automatically. Otherwise, register with HMRC within 3 months of starting business.",
            timeline: "Automatic (online) or 1-7 days",
            url: "https://www.gov.uk/limited-company-formation/set-up-your-company-for-corporation-tax",
            urlLabel: "HMRC Corporation Tax",
          },
          {
            number: 5,
            title: "Register for VAT (if applicable)",
            description:
              "Register for VAT if turnover exceeds GBP 90,000 or voluntarily if below threshold.",
            timeline: "1-5 days",
            url: "https://www.gov.uk/register-for-vat",
            urlLabel: "VAT Registration",
          },
          {
            number: 6,
            title: "Open a business bank account",
            description:
              "Open a business bank account. Many UK banks and fintechs offer online applications.",
            timeline: "1-7 days",
          },
        ],
        totalTimeline: "1-7 days",
        totalCost: "GBP 100-124",
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
    setupCostUSD: "~$3,460+ (including share capital)",
    residencyRequirement:
      "At least half of board members (and the managing director) must reside in Norway or another EEA country; exemption available from Brønnøysund.",
    minimumAge: "18",
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
            cost: "NOK 6,825 (digital) or NOK 7,912 (postal)",
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
        totalCost: "NOK 36,825+ (including share capital)",
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
    setupCostUSD: "~$35-110",
    residencyRequirement:
      "No residency requirement — 100% foreign ownership allowed with no mandatory local director or shareholder.",
    minimumAge: "18 (Georgian civil-code age of majority; not explicitly stated on the Public Registry)",
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
    setupCostUSD: "~$2,580+ (including share capital)",
    residencyRequirement:
      "At least half of board members, half of deputies, and the managing director must reside within the EEA; exemption available from Bolagsverket.",
    minimumAge: "18",
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
    corporateTaxRate: "17% (7% for small companies; 0% for first 2 tax years for qualifying new companies)",
    setupCostUSD: "~$1,150-1,300",
    residencyRequirement:
      "No residency requirement — foreign nationals may be sole director and shareholder.",
    minimumAge: "18 (Lithuanian civil-code age of majority; not explicitly stated on Registrų centras)",
    summary:
      "Lithuania offers a fast, affordable company formation process with EU access and competitive tax rates for small businesses.",
    keyBenefits: [
      "Low tax rate for small companies (7%; 0% for first 2 years)",
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
        minCapital: "EUR 1,000",
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
              "Deposit minimum EUR 1,000 share capital into a temporary account.",
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
            cost: "EUR 14 (electronic) or EUR 31 (paper)",
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
        totalCost: "EUR 1,065-1,200",
        requirements: [
          "At least 1 shareholder (individual or legal entity)",
          "At least 1 director",
          "Minimum share capital EUR 1,000",
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
    setupCostUSD: "~$220+",
    residencyRequirement:
      "At least one director must ordinarily reside in Malaysia (principal place of residence in Malaysia).",
    minimumAge: "18",
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
    setupCostUSD: "~$285-450",
    residencyRequirement:
      "No residency requirement — board members need not reside in Estonia; foreigners may form and own 100% via e-Residency.",
    minimumAge: "18",
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
            timeline: "3-8 weeks (1-4 weeks review + 2-5 weeks delivery)",
            url: "https://www.e-resident.gov.ee/",
            urlLabel: "e-Residency Portal",
            cost: "EUR 150 (state fee, effective January 2025)",
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
        totalTimeline: "1-3 days (with e-Residency) or 4-11 weeks (new e-Residency application)",
        totalCost: "EUR 265 (existing e-Resident) or EUR 415 (new e-Residency application)",
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
    setupCostUSD: "~$400+",
    residencyRequirement:
      "At least one director must ordinarily reside in Australia (Corporations Act 2001, s.201A).",
    minimumAge: "18",
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
            cost: "AUD 611",
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
        totalCost: "AUD 611+",
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
    setupCostUSD: "~$160-260",
    residencyRequirement:
      "Federal (CBCA): at least 25% of directors must be resident Canadians (if fewer than 4 directors, at least one must be resident Canadian). Several provinces (e.g. BC, Ontario, Alberta) have removed residency requirements.",
    minimumAge: "18",
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
              "File online through Corporations Canada. NUANS search is now integrated into the online process.",
            timeline: "1 business day (online) or 10 business days (mail)",
            url: "https://ised-isde.canada.ca/site/corporations-canada/en",
            urlLabel: "Corporations Canada",
            cost: "CAD 200 (online) or CAD 250 (mail); express service +CAD 100",
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
        totalTimeline: "2-14 days",
        totalCost: "CAD 214-350",
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
            url: "https://ised-isde.canada.ca/site/corporations-canada/en",
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
    setupCostUSD: "~$55-70",
    residencyRequirement:
      "At least one director must reside in an EEA member state; exemption possible via a €25,000 bond or Revenue-certified economic link with the State.",
    minimumAge: "18",
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
              "Submit Form A1 (incorporation form), constitution, and consent forms via CORE online system. Processing times vary; CRO publishes daily updates.",
            timeline: "15-30 days (processing backlogs vary)",
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
        totalTimeline: "15-35 days",
        totalCost: "EUR 50-65",
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
    corporateTaxRate: "0% up to AED 375,000 / 9% above / 0% on qualifying free zone income",
    setupCostUSD: "~$9,500-13,600+ (varies by free zone)",
    residencyRequirement:
      "Generally no residency requirement in free zones — 100% foreign ownership permitted. Some free zones (e.g. JAFZA) require the manager to hold a UAE residence visa.",
    minimumAge: "18",
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
            cost: "AED 15,000-50,000 (varies by free zone; DMCC all-inclusive starts at AED 35,484)",
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
        totalCost: "AED 35,000-50,000+ (varies by free zone)",
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
    lastUpdated: "2026-04-12",
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
    setupCostUSD: "~$630-1,170",
    residencyRequirement:
      "No residency requirement — non-resident individuals and foreign entities may serve as directors.",
    minimumAge: "18",
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
            cost: "EUR 500-1,000",
          },
          {
            number: 3,
            title: "Register with KVK",
            description:
              "The notary registers the company with the Trade Register at KVK. You receive a KVK number and RSIN. Digital formation via audio-video with notary is now available.",
            timeline: "1 day",
            cost: "EUR 85.15 (as of January 2026, adjusted annually)",
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
        totalCost: "EUR 585-1,085",
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
    setupCostUSD: "~$325-430+",
    residencyRequirement:
      "At least one board member (and deputy, if any) and the managing director must reside in the EEA; PRH may grant an exemption to non-EEA residents.",
    minimumAge: "18",
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
        minCapital: "EUR 0 (share capital is now optional)",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Register online via YTJ",
            description:
              "Submit the startup notification through the Business Information System (YTJ) online service. As of January 2026, all notifications must be filed online (paper forms no longer accepted). YTJ is available in Finnish and Swedish only.",
            timeline: "1-5 days",
            url: "https://www.ytj.fi/",
            urlLabel: "YTJ Business Information System",
            cost: "EUR 300 (guided package, 0 share capital) or EUR 400 (start-up notification, with share capital or foreign directors)",
          },
          {
            number: 2,
            title: "Deposit share capital (if applicable)",
            description:
              "If the company has share capital, deposit it into the company's bank account. Share capital is now optional -- companies can register with EUR 0.",
            timeline: "1-3 days",
          },
          {
            number: 3,
            title: "Register with the Trade Register",
            description:
              "PRH processes the Trade Register part of your YTJ notification. Beneficial owner details must be filed simultaneously.",
            timeline: "1-5 days",
            url: "https://www.prh.fi/",
            urlLabel: "PRH (Patent and Registration Office)",
          },
          {
            number: 4,
            title: "Register with the Tax Administration",
            description:
              "Register for VAT (rate is 25.5% since September 2024), employer register, and prepayment register with Vero. VAT registration takes approximately 3 weeks.",
            timeline: "~3 weeks",
            url: "https://www.vero.fi/",
            urlLabel: "Finnish Tax Administration",
          },
        ],
        totalTimeline: "5-30 days",
        totalCost: "EUR 300-400+",
        requirements: [
          "At least 1 shareholder",
          "Board of directors with at least 1 member",
          "Share capital is optional (EUR 0 minimum)",
          "Registered address in Finland",
          "At least 1 board member resident in EEA (permit needed otherwise)",
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
    setupCostUSD: "~$13,700-16,200+ (including minimum share capital deposit)",
    residencyRequirement:
      "No residency requirement — managing directors (Geschäftsführer) can be of any nationality or country of residence (§ 6 GmbHG).",
    minimumAge: "18",
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
  {
    name: "Thailand",
    slug: "thailand",
    flag: "TH",
    region: "Southeast Asia",
    currency: "THB",
    language: "Thai",
    easeOfBusinessRank: 21,
    corporateTaxRate: "20%",
    setupCostUSD: "~$440+ (Thai-majority) or ~$980-14,000+ (foreign-majority with FBL)",
    residencyRequirement:
      "No residency requirement for directors. A foreign director physically working in Thailand requires a work permit.",
    minimumAge: "20 (directors); no statutory minimum for shareholders",
    summary:
      "Thailand is a top digital nomad destination with a growing startup ecosystem. Foreign business ownership requires navigating specific rules around the Foreign Business Act.",
    keyBenefits: [
      "Low cost of living and operations",
      "BOI incentives for promoted businesses",
      "Growing digital economy",
      "Strategic ASEAN hub",
    ],
    entityTypes: [
      {
        name: "Thai Limited Company",
        slug: "thai-limited-company",
        description:
          "The standard structure for doing business in Thailand. Requires at least 3 shareholders. Foreign majority ownership requires a Foreign Business License or BOI promotion.",
        minCapital: "THB 2,000,000 (for Foreign Business License)",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Reserve a company name",
            description:
              "Reserve a company name through the Department of Business Development (DBD) online system.",
            timeline: "1-2 days",
            url: "https://www.dbd.go.th/",
            urlLabel: "Department of Business Development",
          },
          {
            number: 2,
            title: "Hold a statutory meeting",
            description:
              "Convene a statutory meeting of all shareholders to approve the company's articles of association, appoint directors, and approve the auditor.",
            timeline: "1 day",
          },
          {
            number: 3,
            title: "Register the company with DBD",
            description:
              "File the registration application through the DBD Biz Regist digital platform (mandatory since July 2025), including memorandum of association, minutes of statutory meeting, and list of shareholders.",
            timeline: "1-3 days",
            url: "https://www.dbd.go.th/",
            urlLabel: "DBD Registration",
            cost: "~THB 15,700 total (incorporation fee THB 5,500+ plus MOA registration fee based on capital)",
          },
          {
            number: 4,
            title: "Register for tax with the Revenue Department",
            description:
              "Register for corporate income tax and VAT (if turnover exceeds THB 1.8 million) with the Revenue Department.",
            timeline: "1-5 days",
            url: "https://www.rd.go.th/",
            urlLabel: "Revenue Department",
          },
          {
            number: 5,
            title: "Apply for Foreign Business License (if foreign-owned)",
            description:
              "If foreign shareholders hold more than 49%, apply for a Foreign Business License from the Department of Business Development, or seek BOI promotion.",
            timeline: "3-6 months",
            url: "https://www.dbd.go.th/",
            urlLabel: "Foreign Business License",
            cost: "THB 20,000-500,000",
          },
          {
            number: 6,
            title: "Open a corporate bank account",
            description:
              "Open a business bank account at a Thai bank. Directors typically need to visit the branch in person.",
            timeline: "1-2 weeks",
          },
        ],
        totalTimeline: "1-2 weeks (Thai-majority) or 3-7 months (foreign-majority)",
        totalCost: "THB 15,700+ (Thai-majority) or THB 35,000-500,000+ (foreign-majority with FBL)",
        requirements: [
          "At least 3 shareholders",
          "At least 1 director",
          "Minimum registered capital THB 2M for Foreign Business License",
          "Registered address in Thailand",
          "Foreign Business License or BOI promotion if >49% foreign-owned",
        ],
        sources: [
          {
            label: "Department of Business Development (DBD)",
            url: "https://www.dbd.go.th/",
          },
          {
            label: "Board of Investment (BOI)",
            url: "https://www.boi.go.th/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-12",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    flag: "ID",
    region: "Southeast Asia",
    currency: "IDR",
    language: "Indonesian",
    easeOfBusinessRank: 22,
    corporateTaxRate: "22%",
    setupCostUSD: "~$630-1,575 (excluding capital)",
    residencyRequirement:
      "The director must be domiciled in Indonesia (foreign directors need a KITAS/work permit). Shareholders may be 100% foreign.",
    minimumAge: "18 (Indonesian civil-code age of majority; not explicitly stated on BKPM/OSS)",
    summary:
      "Indonesia is Southeast Asia's largest economy with a massive domestic market. The OSS (Online Single Submission) system has simplified business licensing significantly.",
    keyBenefits: [
      "Largest economy in Southeast Asia",
      "270+ million consumer market",
      "Simplified OSS licensing system",
      "Growing digital economy",
    ],
    entityTypes: [
      {
        name: "Foreign-Owned Limited Liability Company (PT PMA)",
        slug: "pt-pma",
        description:
          "Perseroan Terbatas Penanaman Modal Asing (PT PMA) is the standard entity for foreign investors. Allows up to 100% foreign ownership in most sectors.",
        minCapital: "IDR 2.5B paid-up / IDR 10B total investment plan per KBLI/location",
        liability: "Limited to share capital",
        steps: [
          {
            number: 1,
            title: "Reserve a company name via AHU Online",
            description:
              "Reserve the company name through the Ministry of Law and Human Rights' AHU Online system.",
            timeline: "1-2 days",
            url: "https://ahu.go.id/",
            urlLabel: "AHU Online",
          },
          {
            number: 2,
            title: "Prepare and notarize the deed of establishment",
            description:
              "Draft the articles of association and have them notarized by an Indonesian notary. The notary submits the deed to the Ministry.",
            timeline: "3-7 days",
            cost: "IDR 5,000,000-15,000,000",
          },
          {
            number: 3,
            title: "Obtain approval from Ministry of Law and Human Rights",
            description:
              "The notary applies for legal entity approval. Upon approval, the company receives its SK (approval letter) and is officially incorporated.",
            timeline: "1-7 days",
            url: "https://ahu.go.id/",
            urlLabel: "AHU Online",
            cost: "IDR 1,000,000",
          },
          {
            number: 4,
            title: "Register on OSS for business licenses",
            description:
              "Register on the Online Single Submission (OSS) system to obtain your Business Identification Number (NIB) and required business licenses.",
            timeline: "1-3 days",
            url: "https://oss.go.id/",
            urlLabel: "OSS Portal",
          },
          {
            number: 5,
            title: "Register for tax (NPWP)",
            description:
              "Obtain a tax identification number (NPWP) and register for VAT with the Directorate General of Taxes.",
            timeline: "1-5 days",
            url: "https://www.pajak.go.id/",
            urlLabel: "Directorate General of Taxes",
          },
          {
            number: 6,
            title: "Open a corporate bank account",
            description:
              "Open a company bank account at an Indonesian bank. Directors must visit in person.",
            timeline: "1-2 weeks",
          },
        ],
        totalTimeline: "2-6 weeks",
        totalCost: "IDR 10,000,000-25,000,000 (excl. capital)",
        requirements: [
          "At least 2 shareholders (individual or corporate)",
          "At least 1 director and 1 commissioner",
          "Minimum total investment plan IDR 10 billion per KBLI code/location (excl. land/buildings)",
          "Minimum paid-up capital IDR 2.5 billion (Ministerial Regulation No. 5/2025)",
          "Domicile letter / registered address in Indonesia",
          "Check Positive Investment List for sector restrictions",
        ],
        sources: [
          {
            label: "BKPM (Investment Coordinating Board)",
            url: "https://www.bkpm.go.id/",
          },
          {
            label: "OSS (Online Single Submission)",
            url: "https://oss.go.id/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-12",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    flag: "VN",
    region: "Southeast Asia",
    currency: "VND",
    language: "Vietnamese",
    easeOfBusinessRank: 23,
    corporateTaxRate: "20%",
    setupCostUSD: "~$195-780+",
    residencyRequirement:
      "At least one legal representative must reside in Vietnam (maintain a Vietnamese residential address). 100% foreign ownership is generally permitted in most sectors.",
    minimumAge: "18",
    summary:
      "Vietnam is one of the fastest-growing economies in Asia with a young workforce and increasing foreign investment. The government has been actively simplifying business registration.",
    keyBenefits: [
      "Fast-growing economy",
      "Young, skilled workforce",
      "Competitive labor costs",
      "Active free trade agreements (CPTPP, EVFTA)",
    ],
    entityTypes: [
      {
        name: "Limited Liability Company (LLC)",
        slug: "llc",
        description:
          "The most common structure for foreign-invested enterprises in Vietnam. Can have 1 or 2+ members.",
        minCapital: "No general minimum (sector-specific requirements may apply)",
        liability: "Limited to charter capital contribution",
        steps: [
          {
            number: 1,
            title: "Obtain an Investment Registration Certificate (IRC)",
            description:
              "Foreign investors must first obtain an IRC from the Department of Planning and Investment (DPI) in the province where the company will be located.",
            timeline: "15 days (by law)",
            url: "https://dautunuocngoai.gov.vn/",
            urlLabel: "Foreign Investment Agency",
          },
          {
            number: 2,
            title: "Obtain an Enterprise Registration Certificate (ERC)",
            description:
              "Apply for the ERC through the National Business Registration Portal. This is your official company registration. As of 2026, the IRC/ERC sequence is flexible -- investors can obtain ERC first, then IRC.",
            timeline: "3-5 days",
            url: "https://dangkykinhdoanh.gov.vn/",
            urlLabel: "National Business Registration Portal",
            cost: "VND 100,000-150,000 (registration + portal announcement fee)",
          },
          {
            number: 3,
            title: "Carve a company seal",
            description:
              "Have the official company seal made and register the seal sample with the business registration office.",
            timeline: "1-2 days",
            cost: "VND 200,000-500,000",
          },
          {
            number: 4,
            title: "Register for tax",
            description:
              "Register for tax with the local tax office. Obtain a tax code (usually same as enterprise code).",
            timeline: "1-5 days",
            url: "https://www.gdt.gov.vn/",
            urlLabel: "General Department of Taxation",
          },
          {
            number: 5,
            title: "Open a corporate bank account and contribute capital",
            description:
              "Open a bank account and contribute charter capital within 90 days of receiving the ERC.",
            timeline: "1-2 weeks",
          },
          {
            number: 6,
            title: "Obtain sub-licenses (if applicable)",
            description:
              "Depending on the business line, additional licenses may be required (e.g., trading license, conditional business license).",
            timeline: "Varies",
          },
        ],
        totalTimeline: "3-6 weeks",
        totalCost: "VND 5,000,000-20,000,000+",
        requirements: [
          "At least 1 member (for single-member LLC) or 2+ members",
          "Legal representative residing in Vietnam",
          "Charter capital (must contribute within 90 days)",
          "Registered office address in Vietnam",
          "Investment Registration Certificate (for foreign investors)",
        ],
        sources: [
          {
            label: "Foreign Investment Agency (FIA)",
            url: "https://dautunuocngoai.gov.vn/",
          },
          {
            label: "National Business Registration Portal",
            url: "https://dangkykinhdoanh.gov.vn/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-12",
  },
  {
    name: "Russia",
    slug: "russia",
    flag: "RU",
    region: "Eastern Europe / Central Asia",
    currency: "RUB",
    language: "Russian",
    easeOfBusinessRank: 24,
    corporateTaxRate: "20%",
    setupCostUSD: "~$45-165",
    residencyRequirement:
      "No residency requirement for founders/shareholders (100% foreign ownership allowed). A foreign general director typically needs a Russian work or residence permit unless covered by EAEU treaty (Belarus, Kazakhstan, Kyrgyzstan, Armenia).",
    minimumAge: "18",
    summary:
      "Russia has a large domestic market and simplified registration through the Federal Tax Service. However, international sanctions and geopolitical considerations may significantly affect foreign business operations.",
    keyBenefits: [
      "Large domestic market (145+ million people)",
      "Simplified online registration process",
      "No minimum capital for LLC (symbolic 10,000 RUB)",
      "SEZ and technology park incentives",
    ],
    entityTypes: [
      {
        name: "Limited Liability Company (OOO)",
        slug: "ooo",
        description:
          "Obshchestvo s Ogranichennoy Otvetstvennostyu (OOO) is the most common business entity for small and medium enterprises in Russia.",
        minCapital: "RUB 10,000",
        liability: "Limited to charter capital contribution",
        steps: [
          {
            number: 1,
            title: "Prepare founding documents",
            description:
              "Draft the charter (articles of association) and the founding decision (for single founder) or founding agreement (for multiple founders).",
            timeline: "1-3 days",
          },
          {
            number: 2,
            title: "Register with the Federal Tax Service (FNS)",
            description:
              "Submit registration documents to the local Federal Tax Service office or through the online portal. Includes form P11001, charter, founding decision, and proof of legal address.",
            timeline: "3 business days",
            url: "https://www.nalog.gov.ru/",
            urlLabel: "Federal Tax Service",
            cost: "RUB 4,000 (state duty, free if filed electronically)",
          },
          {
            number: 3,
            title: "Obtain OGRN and tax registration",
            description:
              "Upon successful registration, receive the OGRN (primary state registration number) and tax identification number. The company is automatically registered with the Pension Fund and Social Insurance Fund.",
            timeline: "Included with registration",
          },
          {
            number: 4,
            title: "Deposit charter capital",
            description:
              "Deposit the minimum RUB 10,000 charter capital within 4 months of registration.",
            timeline: "Within 4 months",
          },
          {
            number: 5,
            title: "Open a corporate bank account",
            description:
              "Open a settlement account (raschyotny schyot) at a Russian bank. The bank notifies the tax authority automatically.",
            timeline: "1-3 days",
          },
          {
            number: 6,
            title: "Obtain necessary licenses and permits",
            description:
              "Depending on business activity, obtain required licenses from the relevant regulatory authorities.",
            timeline: "Varies",
          },
        ],
        totalTimeline: "5-10 days",
        totalCost: "RUB 4,000-15,000",
        requirements: [
          "1-50 founders (individuals or legal entities)",
          "At least 1 general director",
          "Minimum charter capital RUB 10,000",
          "Legal address in Russia",
          "Foreign founders need notarized and apostilled passport translations",
        ],
        sources: [
          {
            label: "Federal Tax Service (FNS)",
            url: "https://www.nalog.gov.ru/",
          },
          {
            label: "Russian Government Services Portal",
            url: "https://www.gosuslugi.ru/",
          },
        ],
      },
    ],
    lastUpdated: "2026-04-12",
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
