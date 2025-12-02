// RSASoft Company Data
// Two versions: "full" (mentions SYSPRO hired us) and "safe" (anonymous client references)

export type CopyVersion = "full" | "safe";

export interface Client {
  name: string;
  logo?: string;
  website?: string;
  description?: string;
  featured?: boolean;
  caseStudy?: {
    headline: string;
    headlineSafe?: string; // Anonymous version
    stats?: string[];
  };
}

// Copy variants for legal safety
export const copyVariants = {
  full: {
    heroAward: "SYSPRO Integration Excellence Award 2024 — SYSPRO hired us directly",
    heroSubhead: `We build custom dashboards, EDI integrations, and workflow automation that eliminate manual work. 
      SYSPRO hired us directly for their largest retail integration—connecting On The Dot to Pick n Pay. 
      58,000+ POs processed. 460,000+ sales orders created. Zero failures.`,
    otdHeadline: "SYSPRO Hired Us for Their Largest Retail Integration",
    otdSubhead: `When SYSPRO needed to integrate South Africa's largest media logistics company with 
      Pick n Pay's EDI system, they didn't do it themselves—they called RSASoft.`,
    otdClient: "On The Dot",
    otdDescription: "distributes 95% of South Africa's magazines and 68% of newspapers to 22,000 retail outlets",
    sparContext: "For On The Dot's SPAR integration",
  },
  safe: {
    heroAward: "SYSPRO Integration Excellence Award 2024",
    heroSubhead: `We build custom dashboards, EDI integrations, and workflow automation that eliminate manual work. 
      Our flagship integration for a major media distributor processes 58,000+ retail POs and 
      460,000+ sales orders—with zero failures.`,
    otdHeadline: "South Africa's Largest Media Logistics Integration",
    otdSubhead: `When a major media distributor needed bulletproof EDI integration with 
      Pick n Pay, they chose RSASoft. The stakes were high—95% of SA's magazines and 68% of newspapers flow through their network.`,
    otdClient: "Major Media Distributor",
    otdDescription: "distributes 95% of South Africa's magazines and 68% of newspapers to 22,000 retail outlets",
    sparContext: "For the same client's SPAR integration",
  },
};

// Featured clients with case studies
export const featuredClients: Client[] = [
  {
    name: "On The Dot",
    website: "https://www.onthedot.co.za/",
    description: "South Africa's largest multichannel media logistics company, distributing 95% of magazines and 68% of newspapers nationwide to 22,000 outlets.",
    featured: true,
    caseStudy: {
      headline: "SYSPRO hired RSASoft for their largest retail integration project",
      headlineSafe: "South Africa's most complex retail integration project",
      stats: [
        "58,014+ Pick n Pay purchase orders processed since August 2024",
        "460,000+ sales orders created automatically from forecasts",
        "10,000+ SPAR invoices emailed monthly via custom automation",
        "Zero integration failures—100% uptime"
      ]
    }
  },
  {
    name: "Libstar",
    website: "https://www.libstar.co.za/",
    description: "JSE-listed sustainable food company with 9,000+ products including Lancewood, Cape Herb & Spice, Denny Mushrooms, and Ambassador Foods.",
    featured: true,
  },
  {
    name: "Rhodes Food Group (RFG)",
    website: "https://rfg.com/",
    description: "Internationally recognised food producer. Home to Rhodes Quality, Bull Brand, Hinds, Pakco, and Squish. Supplier onboarding portal, Triplo integration, and ordering platforms.",
    featured: true,
  },
];

// Full client list - from your actual client list
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
  { name: "IB McIntyre" },
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

// Retailer integrations we've built
export const retailerIntegrations = [
  { name: "Pick n Pay", stat: "58,014+ POs processed", live: true },
  { name: "SPAR", stat: "10,000+ invoices/month automated", live: true },
  { name: "Shoprite / Checkers", stat: "Full EDI integration", live: true },
  { name: "Woolworths", stat: "Full EDI integration", live: true },
  { name: "Dis-Chem", stat: "Full EDI integration", live: true },
  { name: "Takealot", stat: "API integration", live: true },
  { name: "Amazon.co.za", stat: "Marketplace integration", live: true },
  { name: "TFG (Foschini Group)", stat: "Full EDI integration", live: true },
];

// ERP Systems we integrate with
export const erpSystems = [
  { name: "SYSPRO", status: "Primary Partner", description: "15+ years deep expertise. 60+ clients." },
  { name: "Sage 200", status: "Integration Partner", description: "TransLution and custom integrations." },
  { name: "SAP", status: "Integration Partner", description: "EDI and data exchange integrations." },
];

// Technology partnerships
export const partnerships = [
  { name: "TransLution", type: "Official Partner", description: "WMS & production floor data capture integrated with SYSPRO, Sage, and more." },
  { name: "n8n", type: "Implementation Partner", description: "Visual workflow automation for complex multi-system integrations." },
  { name: "ABSA", type: "Integration Partner", description: "Smart Payments, bank reconciliation, and payment processing." },
];

// Stats - real numbers
export const stats = [
  { number: "460K+", label: "Sales Orders Created", sublabel: "For one client alone since Aug 2024" },
  { number: "58K+", label: "Retail POs Processed", sublabel: "Pick n Pay EDI integration" },
  { number: "10K+", label: "Invoices/Month", sublabel: "Automated PDF generation & email" },
  { number: "100+", label: "Custom Applications", sublabel: "Built and deployed" },
];

// Pain points - Hormozi style: articulate the pain accurately
export const painPoints = [
  {
    title: "4+ Hours Daily on Reports",
    problem: "Your finance team manually compiles the same reports every day. Month-end takes a week because everyone's waiting on numbers that should be instant.",
    cost: "At R500/hour loaded cost, that's R10,000/week—R520,000/year—on work that should take zero time.",
  },
  {
    title: "Orders Lost Between Systems",
    problem: "Retail orders come in via EDI, email, portal. Someone has to manually key them into SYSPRO. Orders get missed. Invoices go out wrong. Customers complain.",
    cost: "Every wrong invoice costs you time, credibility, and often a deduction you can't dispute.",
  },
  {
    title: "Approvals Bottleneck Everything",
    problem: "POs wait in someone's inbox. Credit increases sit for days. Bank detail changes get lost. Meanwhile, operations stop.",
    cost: "Slow approvals = slow cash. Every day a quote sits unapproved is a day your competitor can steal it.",
  },
  {
    title: "No Visibility Until It's Too Late",
    problem: "You find out about stock-outs when sales complains. You discover cash flow problems at month-end. You're always reacting, never anticipating.",
    cost: "The cost of being surprised is always higher than the cost of knowing.",
  },
];

// Solutions - Hormozi: sell the destination, not the plane ticket
export const solutions = [
  {
    num: "01",
    title: "REAL-TIME DASHBOARDS",
    slug: "dashboards",
    destination: "Know exactly where your business stands at any moment—without asking anyone or running a report.",
    how: "60+ ready-to-deploy dashboards that connect directly to your ERP. Live data. No Excel. No waiting.",
    proof: "Clients typically save 15-20 hours per week on reporting. Month-end drops from 5 days to 6 hours.",
    cta: "See Dashboard Library",
  },
  {
    num: "02",
    title: "SYSTEM INTEGRATIONS",
    slug: "integrations",
    destination: "Orders flow in automatically. Invoices flow out. Your systems talk to each other without you in the middle.",
    how: "EDI connections to every major SA retailer. API integrations. File-based imports. Multi-ERP support via TransLution, n8n, and custom development.",
    proof: "58,000+ Pick n Pay POs processed. 460,000+ sales orders created. Zero manual intervention.",
    cta: "Explore Integrations",
  },
  {
    num: "03",
    title: "WORKFLOW AUTOMATION",
    slug: "automation",
    destination: "Approvals happen without chasing. Documents generate and send themselves. Reconciliations run overnight.",
    how: "Custom approval workflows, automated PDF generation via SSRS, scheduled processes, bank reconciliation, and n8n visual automation.",
    proof: "10,000+ invoices emailed monthly for one client. Approval times cut by 70%.",
    cta: "See Automation Options",
  },
  {
    num: "04",
    title: "CUSTOM APPLICATIONS",
    slug: "custom",
    destination: "The exact tool your business needs—not a generic solution you have to work around.",
    how: "Ordering portals, quoting systems, field service apps, document management, ticketing systems, mobile apps. 100+ custom applications built.",
    proof: "From transformer test bay systems to yacht ordering portals—if you can describe it, we can build it.",
    cta: "Discuss Your Needs",
  },
];

// Process steps - Hormozi: reduce perceived time delay and effort
export const processSteps = [
  {
    num: "01",
    title: "Free Audit",
    timeframe: "30 minutes",
    description: "We analyze your current setup and identify the 3-5 biggest time-wasters. You get actionable insights whether you hire us or not.",
    effort: "One video call. Zero preparation required.",
  },
  {
    num: "02",
    title: "Custom Roadmap",
    timeframe: "Within 48 hours",
    description: "A prioritized plan showing exactly what to fix first, expected ROI, and realistic timelines. No 50-page proposal—just what matters.",
    effort: "We do the analysis. You review the recommendations.",
  },
  {
    num: "03",
    title: "Rapid Deployment",
    timeframe: "2-8 weeks",
    description: "Dashboards: 2-4 weeks. Integrations: 4-8 weeks. We move fast because we've done this hundreds of times.",
    effort: "We handle implementation. Your team provides access and answers questions.",
  },
  {
    num: "04",
    title: "Ongoing Support",
    timeframe: "Continuous",
    description: "We don't disappear after go-live. Your business evolves, your systems should too. We're here for the long haul.",
    effort: "Support when you need it. Proactive optimization. No ticket queues.",
  },
];

// Guarantee - Hormozi: risk reversal
export const guarantee = {
  headline: "No Improvement, No Invoice.",
  subhead: "We're confident because we've done this hundreds of times.",
  terms: [
    "Start with a free 30-minute audit. Get actionable insights whether you hire us or not.",
    "If you engage us and don't see measurable improvement within 90 days of go-live, we keep working at no additional cost until you do.",
    "No lock-in contracts. No hidden fees. No surprises.",
  ],
  scarcity: "We onboard a maximum of 5 new clients per month to ensure quality.",
};

// Company info
export const companyInfo = {
  name: "RSA Enterprise Software Solutions",
  shortName: "RSASoft",
  tagline: "ERP Integration Excellence",
  email: "info@rsasoft.co.za",
  founded: 2009,
  yearsExperience: 15,
};

// Services categories - from your actual repos
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

// Value equation components (Hormozi framework)
export const valueEquation = {
  dreamOutcome: {
    headline: "Your ERP Actually Works For You",
    description: "Systems that run themselves. Data you can trust. Decisions made with confidence. No more firefighting.",
  },
  likelihood: {
    headline: "Proven Results, Not Promises",
    description: "100+ custom applications built. 58,000+ retail orders processed. 15 years of SYSPRO expertise. SYSPRO Integration Excellence Award.",
  },
  timeDelay: {
    headline: "Results in Weeks, Not Months",
    description: "Dashboards: 2-4 weeks. Integrations: 4-8 weeks. We've done this so many times we move fast without cutting corners.",
  },
  effort: {
    headline: "We Do The Heavy Lifting",
    description: "You provide access and answer questions. We handle analysis, design, development, testing, deployment, and support.",
  },
};

// Awards and recognition
export const awards = [
  {
    title: "SYSPRO Integration Excellence Award",
    year: "2024",
    description: "Recognized for the largest and most complex retail EDI integration in SYSPRO's partner ecosystem.",
  },
];
