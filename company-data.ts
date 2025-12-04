// RSASoft Company Data - V4 Hormozi Edition
// Optimized following $100M Offers + $100M Leads principles
// Two versions: "full" (mentions SYSPRO hired us, names On The Dot) and "safe" (anonymous references)

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
    // Hero Section - Lead with OUTCOME, not problem
    heroAward: "SYSPRO hired us directly for their largest integration project",
    heroSubhead: "We'll automate your SYSPRO so your team stops typing and starts shipping. SYSPRO hired us to migrate On The Dot from SAP—now they process 1.4 million transactions monthly without touching a keyboard. Your turn.",

    // Integrations Page
    integrationsSubhead: "When SYSPRO needed to migrate South Africa's largest media logistics company from SAP—and automate everything—they hired us. Retail EDI, multi-ERP support, TransLution WMS, custom API development. We build the bridges between your systems.",
    caseStudyHeadline: "On The Dot: SAP → SYSPRO in 7 Months",

    // Flagship Section
    flagshipLabel: "CASE STUDY: 7 MONTHS FROM SAP TO FULLY AUTOMATED",
    flagshipHeadline: "SYSPRO Hired Us. Here's What We Built.",
    flagshipStory: [
      "On The Dot distributes 95% of South Africa's magazines and 68% of newspapers to 25,000 retail stores through 15 warehouses nationwide.",
      "When they needed to migrate from SAP to SYSPRO—and automate everything—SYSPRO hired us directly.",
      "We went from kickoff in January to live in August. Seven months to build a system that now processes 1.4 million automated transactions per month. Zero manual data entry.",
    ],
  },
  safe: {
    // Hero Section
    heroAward: "SYSPRO Integration Excellence Award 2025",
    heroSubhead: "We'll automate your SYSPRO so your team stops typing and starts shipping. Our flagship project processes 1.4 million transactions monthly without touching a keyboard. Your turn.",

    // Integrations Page
    integrationsSubhead: "We migrated South Africa's largest media logistics company from SAP—and automated everything. Retail EDI, multi-ERP support, TransLution WMS, custom API development. We build the bridges between your systems.",
    caseStudyHeadline: "Media Logistics Leader: SAP → SYSPRO in 7 Months",

    // Flagship Section
    flagshipLabel: "CASE STUDY: 7 MONTHS FROM SAP TO FULLY AUTOMATED",
    flagshipHeadline: "We Rebuilt South Africa's Largest Media Supply Chain",
    flagshipStory: [
      "A major media distributor handles 95% of South Africa's magazines and 68% of newspapers—25,000 retail stores, 15 warehouses nationwide.",
      "They needed to migrate from SAP to SYSPRO and automate their entire operation. They chose us.",
      "Seven months from kickoff to live. The system now processes 1.4 million automated transactions per month. Zero manual data entry.",
    ],
  },
};

// ============================================================================
// HERO SECTION DATA - Hormozi Style: Lead with DREAM OUTCOME
// ============================================================================

export const heroData = {
  headline: {
    // Hormozi: Lead with the transformation they want
    line1: "Fire Your Data Entry Team.",
    line2: "Keep Your ERP.",
    line3: "10x Your Throughput.",
  },
  primaryCta: "Get Your Free Automation Roadmap",
  secondaryCta: "See The 1.4M/Month Case Study",
  trustSignals: [
    "15+ years SYSPRO expertise",
    "60+ active clients",
    "1.5M+ transactions automated monthly",
    "SYSPRO Integration Award 2025",
  ],
};

// ============================================================================
// THE GRAND SLAM OFFER - Hormozi Core Concept
// ============================================================================

export const grandSlamOffer = {
  headline: "The SYSPRO Automation Guarantee",
  subhead: "We'll Find R500K+ in Annual Savings or You Pay Nothing",
  components: [
    {
      name: "Free Automation Audit",
      value: "R25,000",
      description: "We analyze your SYSPRO, find the time-wasters, and map exactly what to automate first. Yours free—whether you hire us or not.",
    },
    {
      name: "Custom Automation Roadmap",
      value: "R15,000", 
      description: "A prioritized plan showing ROI per automation, realistic timelines, and the exact sequence to implement.",
    },
    {
      name: "90-Day Results Guarantee",
      value: "Priceless",
      description: "If you don't see measurable improvement within 90 days of go-live, we keep working at no additional cost until you do.",
    },
    {
      name: "Priority Implementation",
      value: "R10,000",
      description: "Skip the queue. We only take 5 new clients per month—book now and lock in your start date.",
    },
  ],
  totalValue: "R50,000+",
  yourInvestment: "R0 to start",
  bonuses: [
    {
      name: "EDI Readiness Assessment",
      description: "See exactly which retailers you can automate and what's blocking you",
      condition: "Book this week",
    },
    {
      name: "Dashboard Quick-Win",
      description: "We'll build one live dashboard during the audit—keep it whether you proceed or not",
      condition: "First 3 clients this month",
    },
  ],
};

// ============================================================================
// PAIN POINTS - Hormozi Style: Agitate, Then Promise Relief
// ============================================================================

export const painPoints = [
  {
    title: "Your Team Typed 10,000 Transactions Last Month",
    problem: "Orders come in from retailers, emails, portals. Someone keys them into SYSPRO. Then keys the dispatch. Then keys the invoice. Every keystroke is a chance for error—and an hour you're paying for.",
    cost: "At R150/hour, that's R750,000/year in labor for work a machine should do.",
    solution: "One client eliminated all manual entry. We posted 1.4 million transactions for them last month. Their team now focuses on exceptions, not data entry.",
  },
  {
    title: "SYSPRO Makes Simple Things Hard",
    problem: "One transaction = 2-4 business object calls. Sales order? That's SORTOI. Then SORTBO to ship. Then SORTIC to invoice. Your team navigates this maze daily—or writes brittle scripts that break.",
    cost: "Developer time: R1,500/hour. Fixing broken scripts: priceless frustration.",
    solution: "Our RSI engine handles the complexity. Your systems make one API call. We execute the 2-4 SYSPRO calls perfectly, every time.",
  },
  {
    title: "You Discover Errors AFTER They Hit SYSPRO",
    problem: "Wrong price? Invalid GLN? Discontinued GTIN? You find out when the retailer rejects the invoice—or worse, when they deduct from your payment.",
    cost: "Deductions, chargebacks, and the staff hours spent on claims disputes.",
    solution: "Our EDI validates BEFORE posting. Bad transactions go to a dashboard, not your customer. Prevention, not cleanup.",
  },
  {
    title: "Your 'Integration' Is a Person With Excel",
    problem: "ERP here. Delivery platform there. Retailer portal somewhere else. Someone exports, reformats, uploads. Every day. Forever.",
    cost: "One full-time employee doing work that should take zero people.",
    solution: "We built an integration that mirrors every SYSPRO document to a client's delivery platform automatically. 25,000 stores. 15 warehouses. Zero spreadsheets. Zero people.",
  },
];

// ============================================================================
// FLAGSHIP CASE STUDY DETAILS - Specific Proof
// ============================================================================

export const flagshipStats = [
  { value: "1.4M", label: "Transactions automated monthly" },
  { value: "25,000", label: "Retail stores coordinated" },
  { value: "15", label: "Warehouses synced in real-time" },
  { value: "7", label: "Months from kickoff to live" },
  { value: "99.9%", label: "Transaction success rate" },
  { value: "R0", label: "Manual data entry cost" },
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
// PRODUCTS - RSI & RSATalk (Benefits-focused, Hormozi style)
// ============================================================================

export const products = {
  rsi: {
    name: "RSI",
    tagline: "Your SYSPRO Runs Itself",
    description: "RSI posts to SYSPRO so your team doesn't have to. Sales orders, dispatches, invoices, credit notes, inventory adjustments—any transaction, automated. Your people focus on exceptions. RSI handles the volume.",
    dreamOutcome: "Imagine checking your dashboard Monday morning and seeing 50,000 transactions processed over the weekend. No overtime. No errors. No one touched a keyboard.",
    howItWorks: [
      "Receives triggers from dashboards, APIs, or schedules",
      "Executes the correct sequence of SYSPRO business object calls",
      "Handles success/failure logic automatically",
      "Updates source systems with results",
      "Full audit trail of every transaction",
    ],
    proof: "1.4 million transactions posted last month for one client. 90% of our clients run RSI. Zero keystrokes, zero errors.",
    keyCapability: '"After-post" logic—RSI can do anything after a SYSPRO transaction succeeds or fails. Auto-invoice after dispatch? Trigger an API call? Update a dashboard? Configurable.',
  },
  rsatalk: {
    name: "RSATalk",
    tagline: "Every System Talks to Every Other System",
    description: "RSATalk connects SYSPRO to retailers, couriers, APIs, and email. Fetch orders, send invoices, sync data—without building custom integrations from scratch. One platform, unlimited connections.",
    dreamOutcome: "Pick n Pay sends an order at 2am. By 2:01am, it's validated, posted to SYSPRO, and queued for picking. By 6am, it's dispatched and the ASN is sent. No human involved.",
    components: [
      {
        name: "EDI Engine",
        desc: "Pick n Pay, Dis-Chem, SPAR, Shoprite/Checkers, Food Lover's Market—all connected",
      },
      {
        name: "API Automator",
        desc: "Call any REST API, including SSRS for report generation",
      },
      {
        name: "Mail Service",
        desc: "Branded emails with PDF attachments via SendGrid—10,000+/month for one client",
      },
      {
        name: "SFTP/File Handler",
        desc: "Scheduled file fetch/push for legacy integrations",
      },
    ],
    proof: "10,000+ SPAR invoices emailed monthly. 58,000+ Pick n Pay orders processed. Every major SA retailer connected.",
    keyCapability: "Validation-first EDI—bad orders are blocked and surfaced on dashboards, not posted to SYSPRO. You fix problems before they become chargebacks.",
  },
  licensingNote: "Both products licensed separately. RSI for SYSPRO automation. RSATalk for external integrations. Most clients use both—that's where the magic happens.",
};

// ============================================================================
// SOLUTIONS - Hormozi Style: Dream Outcome → Specific Path
// ============================================================================

export const solutions = [
  {
    number: "01",
    title: "SYSTEM INTEGRATIONS",
    href: "/integrations",
    dreamOutcome: "Orders flow in automatically. Invoices flow out. Your systems talk to each other without you in the middle.",
    how: "RSI + RSATalk power integrations across SYSPRO, Sage, and SAP. Retail EDI, courier connections, API integrations, file-based imports—whatever your systems need.",
    proof: "1.4 million transactions/month for one client. Every major SA retailer connected. TransLution partner for WMS.",
    timeToValue: "4-8 weeks to first integration live",
    cta: "See Integration Capabilities →",
  },
  {
    number: "02",
    title: "REAL-TIME DASHBOARDS",
    href: "/dashboards",
    dreamOutcome: "Know exactly where your business stands at any moment—without asking anyone or running a report.",
    how: "60+ ready-to-deploy dashboards plus custom builds. Live SYSPRO data. AR aging, inventory, orders, production—whatever you need to see.",
    proof: "Clients save 15-20 hours/week on reporting. Month-end drops from 5 days to 6 hours.",
    timeToValue: "2-4 weeks to first dashboard live",
    cta: "See Dashboard Library →",
  },
  {
    number: "03",
    title: "WORKFLOW AUTOMATION",
    href: "/automation",
    dreamOutcome: "Approvals happen without chasing. Documents generate and send themselves. Multi-step processes run unattended.",
    how: "Configurable workflows triggered by SYSPRO events, schedules, or user actions. RSI handles the execution. RSATalk handles external communication.",
    proof: "10,000+ auto-generated invoices emailed monthly. PO approval workflows. Bank reconciliation automation.",
    timeToValue: "2-6 weeks depending on complexity",
    cta: "See Automation Options →",
  },
  {
    number: "04",
    title: "CUSTOM APPLICATIONS",
    href: "/custom",
    dreamOutcome: "The exact tool your business needs—not a generic solution you have to work around.",
    how: "Ordering portals, quoting systems, field apps, document management—100+ custom applications built and deployed.",
    proof: "Forecasting dashboards, EDI validation portals, mobile ePOD apps, supplier onboarding—if you can describe it, we've probably built something like it.",
    timeToValue: "4-12 weeks depending on scope",
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
// VALUE PROPOSITION - Hormozi Style: Reduce Risk, Increase Certainty
// ============================================================================

export const valueProposition = [
  {
    icon: "target",
    title: "Guaranteed Results or We Keep Working",
    description: "If you don't see measurable improvement within 90 days of go-live, we keep working at no additional cost until you do. We've never had to invoke this—but it's there.",
  },
  {
    icon: "shield",
    title: "Battle-Tested at Scale",
    description: "We didn't just build integrations—we rebuilt South Africa's media supply chain. SAP to SYSPRO. 7 months. 25,000 stores. 1.4M transactions/month. If we can do that, we can handle yours.",
  },
  {
    icon: "clock",
    title: "Fast Time-to-Value",
    description: "Dashboards: 2-4 weeks. Integrations: 4-8 weeks. We've done this enough to move fast and estimate accurately. No multi-year implementations that never deliver.",
  },
  {
    icon: "zap",
    title: "We Do The Work, You See The Results",
    description: "You provide access and answer questions. We handle analysis, design, development, testing, deployment, and support. You approve; we execute.",
  },
];

// ============================================================================
// PROCESS - Hormozi Style: Make It Easy (Reduce Effort)
// ============================================================================

export const process = [
  {
    number: "01",
    title: "Free Automation Roadmap",
    timeframe: "30 minutes",
    description: "We analyze your current setup and identify where you're bleeding time. You get a prioritized list of automations with expected ROI—whether you hire us or not.",
    effort: "One video call. We ask questions. You talk about your frustrations.",
    deliverable: "Written roadmap with 3-5 quick wins and estimated savings",
  },
  {
    number: "02",
    title: "Scope & Start",
    timeframe: "Within 1 week",
    description: "We turn the roadmap into a project plan. Clear scope, fixed price, guaranteed timeline. No scope creep. No surprise invoices.",
    effort: "Review our proposal. Ask questions. Say go.",
    deliverable: "Fixed-price proposal with guaranteed delivery date",
  },
  {
    number: "03",
    title: "Rapid Build",
    timeframe: "2-8 weeks",
    description: "Dashboards: 2-4 weeks. Integrations: 4-8 weeks. Complex automation: we'll scope it honestly. Weekly updates so you always know where we are.",
    effort: "Provide access. Answer questions. Review progress weekly.",
    deliverable: "Working system in your environment",
  },
  {
    number: "04",
    title: "Go-Live & Beyond",
    timeframe: "Ongoing",
    description: "We don't disappear after go-live. Your business evolves, your systems should too. Proactive support. Continuous optimization.",
    effort: "Use your new system. Tell us what's next.",
    deliverable: "Measurable improvement within 90 days—guaranteed",
  },
];

// ============================================================================
// GUARANTEE - Hormozi Core: Remove All Risk
// ============================================================================

export const guarantee = {
  headline: "The No-Risk Guarantee",
  subhead: "We're confident because we've done this 60+ times. Here's how we back it up:",
  terms: [
    "Free 30-minute automation audit. Get a written roadmap with 3-5 quick wins—whether you hire us or not.",
    "Fixed-price projects. The number we quote is the number you pay. No 'change orders.' No surprise invoices.",
    "90-day results guarantee. If you don't see measurable improvement within 90 days of go-live, we keep working at no additional cost until you do.",
    "No lock-in contracts. Stay because we deliver, not because you're trapped.",
  ],
  cta: "Get Your Free Automation Roadmap",
  scarcity: "We onboard a maximum of 5 new clients per month to ensure quality. Currently have spots for this month.",
};

// ============================================================================
// URGENCY & SCARCITY - Hormozi: Create Ethical Urgency
// ============================================================================

export const urgencyScarcity = {
  clientLimit: "5 new clients per month",
  reason: "We refuse to sacrifice quality for volume. Every implementation gets senior attention.",
  currentAvailability: "2 spots remaining for January",
  bonusDeadline: "Book your free audit by Friday to include a complimentary EDI readiness assessment (R15,000 value)",
};

// ============================================================================
// SOCIAL PROOF - Specific Results, Not Generic Testimonials
// ============================================================================

export const socialProof = [
  {
    company: "On The Dot",
    result: "1.4 million transactions/month automated",
    context: "SAP to SYSPRO migration in 7 months",
    specifics: "25,000 retail stores, 15 warehouses, zero manual data entry",
  },
  {
    company: "RFG (Rhodes Food Group)",
    result: "100+ integrations, 20+ dashboards deployed",
    context: "JSE-listed food producer",
    specifics: "10 retailers with automated SSRS email systems",
  },
  {
    company: "Libstar",
    result: "Multi-company EDI and dashboard rollout",
    context: "JSE-listed food company",
    specifics: "20+ SYSPRO dashboards, multiple TransLution implementations",
  },
];

// ============================================================================
// FEATURED CLIENTS
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
  yearsExperience: 16,
};

// ============================================================================
// SERVICE CATEGORIES
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

// ============================================================================
// INTEGRATION CAPABILITIES
// ============================================================================

export const integrationCapabilities = [
  {
    title: "Retail EDI",
    description: "Direct connections to every major SA retailer. Orders in, invoices out, validation in between.",
    features: [
      "Purchase order import",
      "Invoice/credit note export",
      "ASN generation",
      "Inventory reporting",
      "Claims processing",
    ],
  },
  {
    title: "Multi-ERP Support",
    description: "Not just SYSPRO. TransLution partnership extends to Sage and SAP.",
    features: [
      "SYSPRO (primary—15+ years)",
      "Sage 200 (via TransLution)",
      "SAP (migration + integration)",
    ],
  },
  {
    title: "Warehouse & Production",
    description: "TransLution official partner. Shop floor to ERP, real-time.",
    features: [
      "WMS integration",
      "Barcode scanning",
      "Production tracking",
      "Lot/serial control",
    ],
  },
  {
    title: "API Development",
    description: "Custom APIs that simplify SYSPRO complexity.",
    features: [
      "REST wrappers over SYSPRO e.Net",
      "Single-call transactions (vs 2-4 BO calls)",
      "Webhook triggers",
      "Third-party API integration",
    ],
  },
  {
    title: "File-Based Integration",
    description: "Legacy systems, scheduled imports, batch processing.",
    features: [
      "SFTP/FTP automation",
      "Excel/CSV imports",
      "XML transformation",
      "Scheduled polling",
    ],
  },
  {
    title: "Email Automation",
    description: "Transactional email at scale.",
    features: [
      "SSRS report triggering",
      "PDF generation",
      "Branded templates",
      "SendGrid infrastructure",
    ],
  },
];

// ============================================================================
// EDI FLOW
// ============================================================================

export const ediFlow = {
  inbound: [
    "RSATalk fetches POs from retailer APIs/SFTP",
    "Validation engine checks GLN, pricing, GTINs against your SYSPRO data",
    "Valid orders → RSI creates Sales Orders automatically",
    "Invalid orders → Dashboard for review and correction",
  ],
  outbound: [
    "RSI posts dispatch/invoice to SYSPRO",
    "RSATalk generates EDI document (ASN, invoice)",
    "RSATalk sends to retailer via API/SFTP",
    "Confirmation logged, dashboard updated",
  ],
  dashboardFeatures: [
    "Validation failures surfaced immediately",
    "Retry queue for corrected orders",
    "Full visibility into what's pending, posted, or failed",
    "Rules-based blocking (configurable per client)",
  ],
};

// ============================================================================
// INTEGRATION TIMELINE
// ============================================================================

export const integrationTimeline = [
  { phase: "Discovery & Mapping", duration: "1-2 weeks" },
  { phase: "Development", duration: "2-4 weeks" },
  { phase: "Testing with Trading Partners", duration: "1-2 weeks" },
  { phase: "Go-Live & Stabilization", duration: "1 week" },
  { phase: "Ongoing Support", duration: "Continuous" },
];
