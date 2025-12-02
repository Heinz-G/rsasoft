// RSASoft Company Data - V3
// Two versions: "full" (mentions SYSPRO hired us, names On The Dot) and "safe" (anonymous references)
// All references updated to 2025

export type CopyVersion = "full" | "safe";

export interface Client {
  name: string;
  logo?: string;
  website?: string;
  description?: string;
  featured?: boolean;
  caseStudy?: {
    headline: string;
    headlineSafe?: string;
    stats?: string[];
  };
}

// ============================================================================
// COPY VARIANTS FOR VERSION TOGGLE
// ============================================================================

export const copyVariants = {
  full: {
    // Hero Section
    heroAward: "SYSPRO Integration Excellence Award 2025 — SYSPRO hired us directly",
    heroSubhead: "We build the automation that makes ERPs actually work. SYSPRO hired us to migrate South Africa's largest media logistics company from SAP. Seven months later: 1.4 million automated transactions per month. Zero manual data entry.",

    // Flagship Section
    flagshipLabel: "FLAGSHIP PROJECT",
    flagshipHeadline: "SYSPRO Hired Us to Rebuild South Africa's Media Supply Chain",
    flagshipStory: [
      "On The Dot distributes 95% of South Africa's magazines and 68% of newspapers to 25,000 retail stores through 15 warehouses nationwide.",
      "When they needed to migrate from SAP to SYSPRO—and automate everything—SYSPRO hired us directly.",
      "We went from kickoff in January to live in August 2025. Seven months to build a system that now processes 1.4 million automated transactions per month.",
    ],
  },
  safe: {
    // Hero Section
    heroAward: "SYSPRO Integration Excellence Award 2025",
    heroSubhead: "We build the automation that makes ERPs actually work. Our flagship project: migrating a major media distributor from SAP, then automating everything. Seven months later: 1.4 million transactions per month. Zero manual data entry.",

    // Flagship Section
    flagshipLabel: "FLAGSHIP PROJECT",
    flagshipHeadline: "We Rebuilt South Africa's Largest Media Supply Chain",
    flagshipStory: [
      "A major media distributor handles 95% of South Africa's magazines and 68% of newspapers—25,000 retail stores, 15 warehouses nationwide.",
      "They needed to migrate from SAP to SYSPRO and automate their entire operation. They chose us.",
      "Seven months from kickoff to live. The system now processes 1.4 million automated transactions per month.",
    ],
  },
};

// ============================================================================
// HERO SECTION DATA
// ============================================================================

export const heroData = {
  headline: {
    line1: "Your ERP Has The Data.",
    line2: "You Just Can't Get To It",
    line3: "Fast Enough To Matter.",
  },
  primaryCta: "Get Your Free ERP Audit",
  secondaryCta: "See What We Built",
  trustSignals: [
    "SYSPRO • Sage • SAP",
    "TransLution Partner",
    "RSI Engine (1.5M+ transactions/month)",
    "60+ Active Clients",
  ],
};

// ============================================================================
// PAIN POINTS - THE REAL COST
// ============================================================================

export const painPoints = [
  {
    title: "Someone's Typing That Into SYSPRO Right Now",
    problem: "Orders come in from retailers, emails, portals. Someone keys them into SYSPRO. Then keys the dispatch. Then keys the invoice. Every keystroke is a chance for error—and an hour you're paying for.",
    cost: "One client had staff manually processing what we now automate. Last month, our system posted 1.4 million transactions for them. How many is your team typing?",
  },
  {
    title: "2-4 Business Object Calls Just to Complete One Transaction",
    problem: "SYSPRO doesn't do things in one step. Sales order? That's SORTOI. Then SORTBO to ship. Then SORTIC to invoice. Your team navigates this maze daily—or writes brittle scripts that break.",
    cost: "Our clients make one API call. We handle the 2-4 SYSPRO calls behind the scenes. Same result, fraction of the time, zero errors.",
  },
  {
    title: "You Find Out It's Wrong After It's In SYSPRO",
    problem: "Wrong price? Invalid GLN? Discontinued GTIN? You discover these when the retailer rejects the invoice—or worse, when they deduct from your payment.",
    cost: "Our EDI system blocks bad transactions BEFORE they post. The error goes to a dashboard, not to your customer. Prevention, not cleanup.",
  },
  {
    title: "The Spreadsheet Bridge Between Systems",
    problem: "ERP here. Delivery platform there. Retailer portal somewhere else. Someone exports, reformats, uploads. Every day. Forever.",
    cost: "We built an integration that mirrors every SYSPRO document to a client's delivery platform automatically. 25,000 stores. 15 warehouses. Zero spreadsheets.",
  },
];

// ============================================================================
// FLAGSHIP CASE STUDY DETAILS
// ============================================================================

export const flagshipStats = [
  { value: "1.4M", label: "Automated transactions last month" },
  { value: "25,000", label: "Retail stores receiving deliveries" },
  { value: "15", label: "Warehouses coordinated automatically" },
  { value: "200+", label: "Publications processed weekly" },
  { value: "99.9%", label: "Transaction success rate" },
  { value: "7", label: "Months from kickoff to live" },
];

export const flagshipStages = [
  {
    number: "01",
    title: "Forecasting Dashboard",
    description: "Predicts order volumes per store, per publication, per week",
  },
  {
    number: "02",
    title: "Validation Engine",
    description: "Catches pricing errors, routing issues, data problems BEFORE they become financial errors",
  },
  {
    number: "03",
    title: "Auto-Requisition Creation",
    description: "Validated forecasts automatically generate requisitions in SYSPRO",
  },
  {
    number: "04",
    title: "PO Workflow & Approval",
    description: "Rules-based routing, automatic receipting where applicable",
  },
  {
    number: "05",
    title: "SCT Generation",
    description: "Stock transfers created automatically—15 warehouses know exactly what's coming",
  },
  {
    number: "06",
    title: "International Inspection Workflow",
    description: "Publications requiring inspection trigger conditional PO/shipping only after sign-off",
  },
  {
    number: "07",
    title: "Sales Order Creation Dashboard",
    description: "200+ stock codes, selective batching, instant creation for all validated items",
  },
  {
    number: "08",
    title: "EDI Integration",
    description: "Pick n Pay, Dis-Chem orders flow automatically—validation failures flagged, not posted",
  },
  {
    number: "09",
    title: "Spooling Engine",
    description: "Dispatch notes and invoices generated based on customer billing rules (individual, consolidated, weekly, monthly)",
  },
  {
    number: "10",
    title: "Delivery Platform Sync",
    description: "Every document mirrored exactly to their in-house delivery system in real-time",
  },
  {
    number: "11",
    title: "SPAR Email Automation",
    description: "10,000+ branded PDF invoices generated and emailed monthly via SendGrid",
  },
  {
    number: "12",
    title: "Exception Dashboards",
    description: "EDI validation issues, retry queues, full visibility—problems surface, not hide",
  },
];

export const flagshipAdditionalIntegrations = [
  "4ME ecommerce integration (Excel order upload → auto SO creation)",
  "ParcelPerfect invoice imports",
  "Custom REST API wrapper (one call instead of 2-4 SYSPRO business objects)",
  "Pick n Pay EDI (58,000+ POs processed since August 2025)",
  "Dis-Chem EDI integration",
];

// ============================================================================
// PRODUCTS - RSI & RSATalk
// ============================================================================

export const products = {
  rsi: {
    name: "RSI",
    tagline: "SYSPRO Automation Engine",
    description: "Posts to SYSPRO so your team doesn't have to. Sales orders, dispatches, invoices, credit notes, inventory adjustments, requisitions, SCTs—any business object, automated.",
    howItWorks: [
      "Receives triggers from dashboards, APIs, or schedules",
      "Executes the correct sequence of SYSPRO business object calls",
      "Handles success/failure logic automatically",
      "Updates source systems with results",
      "Full audit trail of every transaction",
    ],
    proof: "1.4 million transactions posted last month for one client. 90% of our clients use RSI. Zero keystrokes, zero errors.",
    keyCapability: '"After-post" logic—RSI can do anything after a SYSPRO transaction succeeds or fails. Auto-invoice after dispatch? Trigger an API call? Update a dashboard? It\'s configurable.',
  },
  rsatalk: {
    name: "RSATalk",
    tagline: "EDI & Integration Platform",
    description: "Connects SYSPRO to retailers, couriers, APIs, and email. Fetch orders, send invoices, sync data—without building custom integrations from scratch.",
    components: [
      {
        name: "EDI Engine",
        desc: "Retailer connections (Pick n Pay, Dis-Chem, SPAR, Shoprite/Checkers, Food Lover's Market)",
      },
      {
        name: "API Automator",
        desc: "Call any REST API, including SSRS for report generation",
      },
      {
        name: "Mail Service",
        desc: "Branded emails with PDF attachments via SendGrid",
      },
      {
        name: "SFTP/File Handler",
        desc: "Scheduled file fetch/push for legacy integrations",
      },
    ],
    proof: "10,000+ SPAR invoices emailed monthly. 58,000+ Pick n Pay orders processed. Every major SA retailer connected.",
    keyCapability: "Validation-first EDI—bad orders (wrong GLN, invalid price, discontinued GTIN) are blocked and surfaced on dashboards, not posted to SYSPRO. Prevention, not cleanup.",
  },
  licensingNote: "Both products are licensed separately. Use RSI alone for SYSPRO automation. Add RSATalk for retailer and external system integrations. Most clients use both.",
};

// ============================================================================
// SOLUTIONS - FOUR WAYS TO GET YOUR TIME BACK
// ============================================================================

export const solutions = [
  {
    number: "01",
    title: "SYSTEM INTEGRATIONS",
    href: "/integrations",
    destination: "Orders flow in automatically. Invoices flow out. Your systems talk to each other without you in the middle.",
    how: "RSI + RSATalk power integrations across SYSPRO, Sage, and SAP. Retail EDI, courier connections, API integrations, file-based imports—whatever your systems need.",
    proof: "1.4 million transactions/month for one client. Every major SA retailer connected. TransLution partner for WMS.",
    cta: "See Integration Capabilities →",
  },
  {
    number: "02",
    title: "REAL-TIME DASHBOARDS",
    href: "/dashboards",
    destination: "Know exactly where your business stands at any moment—without asking anyone or running a report.",
    how: "60+ ready-to-deploy dashboards plus custom builds. Live SYSPRO data. AR aging, inventory, orders, production—whatever you need to see.",
    proof: "Clients save 15-20 hours/week on reporting. Month-end drops from days to hours.",
    cta: "See Dashboard Library →",
  },
  {
    number: "03",
    title: "WORKFLOW AUTOMATION",
    href: "/automation",
    destination: "Approvals happen without chasing. Documents generate and send themselves. Multi-step processes run unattended.",
    how: "Configurable workflows triggered by SYSPRO events, schedules, or user actions. RSI handles the execution. RSATalk handles external communication.",
    proof: "10,000+ auto-generated invoices emailed monthly. PO approval workflows. Bank reconciliation automation.",
    cta: "See Automation Options →",
  },
  {
    number: "04",
    title: "CUSTOM APPLICATIONS",
    href: "/custom",
    destination: "The exact tool your business needs—not a generic solution you have to work around.",
    how: "Ordering portals, quoting systems, field apps, document management—100+ custom applications built and deployed.",
    proof: "Forecasting dashboards, EDI validation portals, mobile ePOD apps, supplier onboarding—if you can describe it, we've probably built something like it.",
    cta: "Describe What You Need →",
  },
];

// ============================================================================
// INTEGRATION ECOSYSTEM
// ============================================================================

export const integrationEcosystem = {
  erpSystems: [
    {
      name: "SYSPRO",
      status: "Primary Partner",
      detail: "15+ years, 60+ clients, RSI engine",
    },
    {
      name: "Sage 200",
      status: "Integration",
      detail: "TransLution partnership",
    },
    {
      name: "SAP",
      status: "Migration",
      detail: "Full SAP → SYSPRO migration capability",
    },
  ],
  retailEdi: [
    {
      name: "Pick n Pay",
      status: "✓",
      detail: "58,000+ POs processed",
    },
    {
      name: "SPAR",
      status: "✓",
      detail: "10,000+ invoices/month automated",
    },
    {
      name: "Shoprite/Checkers",
      status: "✓",
      detail: "Full EDI integration",
    },
    {
      name: "Dis-Chem",
      status: "✓",
      detail: "Full EDI integration",
    },
    {
      name: "Food Lover's Market",
      status: "✓",
      detail: "Full EDI integration",
    },
    {
      name: "Woolworths",
      status: "✓",
      detail: "Full EDI integration",
    },
    {
      name: "Takealot",
      status: "✓",
      detail: "API integration",
    },
  ],
  partners: [
    {
      name: "TransLution",
      status: "Official Partner",
      detail: "WMS & production floor integration",
    },
    {
      name: "SendGrid",
      status: "Email Infrastructure",
      detail: "Transactional email at scale",
    },
    {
      name: "n8n",
      status: "Implementation",
      detail: "Visual workflow automation",
    },
  ],
};

// ============================================================================
// VALUE PROPOSITION - WHY US
// ============================================================================

export const valueProposition = [
  {
    icon: "target",
    title: "Your ERP Actually Works For You",
    description: "Systems that run themselves. Data you can trust. 1.4 million transactions without a keystroke. From forecast to delivery, automated.",
  },
  {
    icon: "shield",
    title: "Proven at Scale",
    description: "We didn't just build integrations—we rebuilt South Africa's media supply chain. SAP to SYSPRO. 7 months. 25,000 stores. If we can do that, we can handle yours.",
  },
  {
    icon: "clock",
    title: "Results in Months, Not Years",
    description: "Flagship project: January kickoff, August go-live. Most dashboard deployments: 2-4 weeks. Most integrations: 4-8 weeks. We've done this enough to move fast.",
  },
  {
    icon: "zap",
    title: "We Do The Heavy Lifting",
    description: "You provide access and answer questions. We handle analysis, design, development, testing, deployment, and support. You approve; we execute.",
  },
];

// ============================================================================
// PROCESS - HOW IT WORKS
// ============================================================================

export const process = [
  {
    number: "01",
    title: "Free Audit",
    timeframe: "30 minutes",
    description: "We analyze your current setup and identify the biggest time-wasters. You get actionable insights whether you hire us or not.",
    effort: "One video call. Zero preparation required.",
  },
  {
    number: "02",
    title: "Custom Roadmap",
    timeframe: "Within 48 hours",
    description: "A prioritized plan showing what to fix first, expected ROI, and realistic timelines. No 50-page proposal—just what matters.",
    effort: "We do the analysis. You review recommendations.",
  },
  {
    number: "03",
    title: "Rapid Deployment",
    timeframe: "2-8 weeks (typical)",
    description: "Dashboards: 2-4 weeks. Integrations: 4-8 weeks. Complex multi-stage automation: we'll scope it honestly. We've done this enough to estimate accurately.",
    effort: "We handle implementation. Your team provides access and answers questions.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    timeframe: "Continuous",
    description: "We don't disappear after go-live. Your business evolves, your systems should too. RSI and RSATalk are living products—updates, optimizations, expansions.",
    effort: "Support when you need it. Proactive recommendations. No ticket queues.",
  },
];

// ============================================================================
// GUARANTEE
// ============================================================================

export const guarantee = {
  headline: "No Improvement, No Invoice.",
  subhead: "We're confident because we've done this at scale.",
  terms: [
    "Start with a free 30-minute audit. Get actionable insights whether you hire us or not.",
    "If you engage us and don't see measurable improvement within 90 days of go-live, we keep working at no additional cost until you do.",
    "No lock-in contracts. No hidden fees. No surprises.",
  ],
  cta: "Get Your Free ERP Audit",
  scarcity: "We onboard a maximum of 5 new clients per month to ensure quality.",
};

// ============================================================================
// FEATURED CLIENTS (Updated for 2025)
// ============================================================================

export const featuredClients: Client[] = [
  {
    name: "On The Dot",
    website: "https://www.onthedot.co.za/",
    description: "South Africa's largest media logistics company, distributing 95% of magazines and 68% of newspapers to 25,000 retail stores through 15 warehouses nationwide.",
    featured: true,
    caseStudy: {
      headline: "SYSPRO hired RSASoft to migrate and automate South Africa's largest media supply chain",
      headlineSafe: "South Africa's most complex media supply chain migration and automation project",
      stats: [
        "1.4 million automated transactions per month",
        "SAP to SYSPRO migration completed in 7 months (Jan - Aug 2025)",
        "25,000 retail stores, 15 warehouses coordinated automatically",
        "58,000+ Pick n Pay POs processed since August 2025",
        "10,000+ SPAR invoices emailed monthly",
        "12-stage automated pipeline from forecast to delivery",
        "99.9% transaction success rate",
      ],
    },
  },
  {
    name: "Rhodes Food Group (RFG)",
    website: "https://rfg.com/",
    description: "JSE-listed food producer (Rhodes Quality, Bull Brand, Hinds, Pakco, Squish)",
    featured: true,
    caseStudy: {
      headline: "100+ integrations, 20+ dashboards, 7+ custom applications, 10 retailers with auto SSRS emails",
      stats: [
        "100+ integrations deployed",
        "20+ custom SYSPRO dashboards",
        "7+ custom applications built",
        "10 retailers with automated SSRS email systems",
        "Supplier onboarding portal",
      ],
    },
  },
  {
    name: "Libstar",
    website: "https://www.libstar.co.za/",
    description: "JSE-listed food company (Lancewood, Denny Mushrooms, Cape Herb & Spice)",
    featured: true,
    caseStudy: {
      headline: "Multi-system integration and dashboard deployment",
      stats: [
        "20+ SYSPRO dashboards deployed",
        "Multiple TransLution implementations",
        "EDI integrations with major retailers",
      ],
    },
  },
  {
    name: "IB McIntyre (IBM)",
    description: "Leading electrical accessories distributor",
    featured: true,
    caseStudy: {
      headline: "Comprehensive integration and automation platform",
      stats: [
        "50+ integrations",
        "20+ SYSPRO dashboards",
        "Long-term RSI deployment",
      ],
    },
  },
];

// ============================================================================
// FULL CLIENT LIST
// ============================================================================

export const allClients: Client[] = [
  ...featuredClients,
  { name: "ACTOM" },
  { name: "ACDC" },
  { name: "Afrisoft" },
  { name: "ALC" },
  { name: "Amaro" },
  { name: "APL" },
  { name: "Asco" },
  { name: "BBI" },
  { name: "Beekman" },
  { name: "Cape Herbs" },
  { name: "ChillBev" },
  { name: "CISCO" },
  { name: "Coricraft" },
  { name: "Deli-Spices" },
  { name: "Eagle Roof Tiles" },
  { name: "Edgeware" },
  { name: "EII" },
  { name: "Finlar Foods" },
  { name: "Gascon" },
  { name: "Go2 Pharma" },
  { name: "Guala Closures" },
  { name: "Halewood" },
  { name: "Herbal-Homeopatic" },
  { name: "Hurters Honey" },
  { name: "Lancewood" },
  { name: "Lasec" },
  { name: "Lasher" },
  { name: "Link" },
  { name: "Lithotech" },
  { name: "MacAdams" },
  { name: "Matus" },
  { name: "Megaroller" },
  { name: "Meshco" },
  { name: "Minor Rubber" },
  { name: "Montagu Foods" },
  { name: "MultiFix" },
  { name: "NGF" },
  { name: "NuWater" },
  { name: "Omnico" },
  { name: "P. Serassis" },
  { name: "Prestige Cosmetics" },
  { name: "Prima" },
  { name: "RBM" },
  { name: "Rhomberg" },
  { name: "Rialto" },
  { name: "Robertson & Caine" },
  { name: "ROF" },
  { name: "Rovic Leers" },
  { name: "Safilo" },
  { name: "Servelec" },
  { name: "Showerline" },
  { name: "SOILL" },
  { name: "Southern Ropes" },
  { name: "Spec Pumps" },
  { name: "Stripform" },
  { name: "SwartLand" },
  { name: "SYSPRO Smart Payments" },
  { name: "Technical Systems" },
  { name: "Tower" },
  { name: "Translution" },
  { name: "TruCape" },
  { name: "Weylandts" },
  { name: "Zuva - Airlink" },
];

// ============================================================================
// RETAILER INTEGRATIONS
// ============================================================================

export const retailerIntegrations = [
  { name: "Pick n Pay", stat: "58,000+ POs processed since Aug 2025", live: true },
  { name: "SPAR", stat: "10,000+ invoices/month automated", live: true },
  { name: "Shoprite / Checkers", stat: "Full EDI integration", live: true },
  { name: "Woolworths", stat: "Full EDI integration", live: true },
  { name: "Dis-Chem", stat: "Full EDI integration", live: true },
  { name: "Food Lover's Market", stat: "Full EDI integration", live: true },
  { name: "Takealot", stat: "API integration", live: true },
];

// ============================================================================
// ERP SYSTEMS
// ============================================================================

export const erpSystems = [
  { name: "SYSPRO", status: "Primary Partner", description: "15+ years deep expertise. 60+ clients. RSI engine." },
  { name: "Sage 200", status: "Integration Partner", description: "TransLution partnership and custom integrations." },
  { name: "SAP", status: "Migration Partner", description: "Full SAP → SYSPRO migration capability." },
];

// ============================================================================
// TECHNOLOGY PARTNERSHIPS
// ============================================================================

export const partnerships = [
  { name: "TransLution", type: "Official Partner", description: "WMS & production floor integration for SYSPRO, Sage, and more." },
  { name: "SendGrid", type: "Email Infrastructure", description: "Transactional email at scale for automated document delivery." },
  { name: "n8n", type: "Implementation Partner", description: "Visual workflow automation for complex multi-system integrations." },
];

// ============================================================================
// STATS - REAL NUMBERS (2025)
// ============================================================================

export const stats = [
  { number: "1.4M+", label: "Transactions Monthly", sublabel: "For one client alone" },
  { number: "1.5M+", label: "RSI Transactions", sublabel: "Across all clients monthly" },
  { number: "58K+", label: "Retail POs Processed", sublabel: "Pick n Pay EDI since Aug 2025" },
  { number: "10K+", label: "Invoices/Month", sublabel: "Automated SPAR emails" },
  { number: "100+", label: "Custom Applications", sublabel: "Built and deployed" },
  { number: "60+", label: "Active Clients", sublabel: "15+ years in business" },
];

// ============================================================================
// AWARDS AND RECOGNITION
// ============================================================================

export const awards = [
  {
    title: "SYSPRO Integration Excellence Award",
    year: "2025",
    description: "Recognized for the largest and most complex retail integration in SYSPRO's partner ecosystem.",
  },
];

// ============================================================================
// COMPANY INFO
// ============================================================================

export const companyInfo = {
  name: "RSA Enterprise Software Solutions",
  shortName: "RSASoft",
  tagline: "ERP Integration Excellence",
  email: "info@rsasoft.co.za",
  founded: 2009,
  yearsExperience: 16, // Updated for 2025
};

// ============================================================================
// SERVICE CATEGORIES (For other pages)
// ============================================================================

export const serviceCategories = {
  integrations: {
    title: "Integration Platform",
    icon: "plug",
    services: [
      "EDI integrations (all major SA retailers)",
      "Multi-ERP support (SYSPRO, Sage, SAP)",
      "TransLution WMS & production integration",
      "n8n visual workflow automation",
      "API development & webhooks",
      "3PL & courier integrations",
      "Cloud-hosted SFTP & API for EDI",
      "File-based imports (remittance, claims, forecasts)",
    ],
  },
  portals: {
    title: "Business Portals",
    icon: "layout",
    services: [
      "B2B ordering portals",
      "Supplier onboarding portals",
      "Customer self-service portals",
      "Requisition & approval portals",
      "Claims & upliftment portals",
      "Agent & sales rep portals",
      "Picking & POD portals",
      "Document management portals",
    ],
  },
  automation: {
    title: "Workflow Automation",
    icon: "zap",
    services: [
      "Approval workflows (PO, credit, bank details)",
      "Automated email systems (statements, invoices)",
      "PDF generation via SSRS",
      "Bank reconciliation automation",
      "Scheduled job processing",
      "n8n workflow automation",
      "Intercompany transactions",
      "Document routing & management",
    ],
  },
  dashboards: {
    title: "Dashboards & Reporting",
    icon: "bar-chart",
    services: [
      "Real-time management dashboards",
      "AR/AP aging & cash flow",
      "Production & inventory dashboards",
      "Sales & order tracking",
      "EDI monitoring dashboards",
      "KPI scorecards",
      "Custom SSRS reports",
      "Automated report distribution",
    ],
  },
  custom: {
    title: "Custom Applications",
    icon: "code",
    services: [
      "Quoting & estimation systems",
      "Field service & ePOD apps",
      "Ticketing & CRM systems",
      "Mobile apps (scanning, capture)",
      "Test bay & QC systems",
      "Time & attendance tracking",
      "Barcode & label printing",
      "Custom SYSPRO screens",
    ],
  },
  warehouse: {
    title: "Warehouse & Production",
    icon: "package",
    services: [
      "TransLution WMS implementation",
      "Stock control systems",
      "Picking & packing solutions",
      "Receiving & put-away",
      "Production floor data capture",
      "Lot & serial tracking",
      "Cycle counting",
      "Shipping & dispatch",
    ],
  },
};
