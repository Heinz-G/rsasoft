// RSASoft Company Data
// Pricing is shown based on region detection

export interface Client {
  name: string;
  logo?: string;
  website?: string;
  description?: string;
  featured?: boolean;
  caseStudy?: {
    headline: string;
    stats?: string[];
  };
}

export interface Stat {
  number: string;
  label: string;
  sublabel?: string;
}

// Featured clients with case studies
export const featuredClients: Client[] = [
  {
    name: "On The Dot",
    website: "https://www.onthedot.co.za/",
    description: "South Africa's largest multichannel media logistics company, distributing 95% of magazines and 68% of newspapers nationwide.",
    featured: true,
    caseStudy: {
      headline: "SYSPRO hired RSASoft for their largest retail integration project",
      stats: [
        "58,014+ Pick n Pay POs processed since August 2025",
        "460,000+ sales orders created from forecasts",
        "Zero integration failures",
        "Automated invoicing for every PO"
      ]
    }
  },
  {
    name: "Libstar",
    website: "https://www.libstar.co.za/",
    description: "JSE-listed sustainable food company with 9,000+ products including Lancewood, Cape Herb & Spice, and Denny Mushrooms.",
    featured: true,
  },
  {
    name: "Rhodes Food Group (RFG)",
    website: "https://rfg.com/",
    description: "Internationally recognised food producer, home to Rhodes Quality, Bull Brand, Hinds, Pakco and Squish.",
    featured: true,
  },
];

// Full client list
export const allClients: Client[] = [
  // Featured
  ...featuredClients,
  // A-Z
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

// Retailer integrations
export const retailerIntegrations = [
  { name: "Pick n Pay", ordersProcessed: "58,014+" },
  { name: "SPAR", feature: "Automated PDF invoice generation & email" },
  { name: "Shoprite" },
  { name: "Checkers" },
  { name: "Dis-Chem" },
  { name: "Takealot" },
  { name: "Amazon.co.za" },
  { name: "Woolworths" },
];

// Stats - dynamically updated
export const stats: Stat[] = [
  { number: "460K+", label: "Sales Orders Created", sublabel: "For On The Dot alone since Aug 2025" },
  { number: "58K+", label: "Pick n Pay POs Processed", sublabel: "With automated invoicing" },
  { number: "10K+", label: "Invoices/Month", sublabel: "Auto-generated PDFs via SSRS" },
  { number: "60+", label: "Ready Dashboards", sublabel: "Deploy in weeks, not months" },
];

// Pricing tiers (shown based on region)
export const pricing = {
  ZAR: {
    currency: "R",
    dashboardRange: "15,000 - 75,000",
    integrationRange: "50,000 - 250,000",
    automationRange: "25,000 - 150,000",
  },
  USD: {
    currency: "$",
    dashboardRange: "2,500 - 12,500",
    integrationRange: "8,000 - 40,000",
    automationRange: "4,000 - 25,000",
  },
};

// Awards and recognition
export const awards = [
  {
    title: "SYSPRO Integration Excellence Award",
    year: "2025",
    description: "Awarded by SYSPRO for the On The Dot project - the largest retail integration deployment in SYSPRO history",
    highlight: "SYSPRO hired RSASoft directly for this project"
  }
];

// Solutions
export const solutions = [
  {
    num: "01",
    title: "REAL-TIME DASHBOARDS",
    slug: "dashboards",
    shortDesc: "60+ ready-to-deploy solutions that replace your Excel nightmare with live visibility.",
    fullDesc: "Stop digging through SYSPRO for basic information. Our 60+ ready-to-deploy dashboards give you live visibility into open orders, overdue invoices, production status, and inventory levels—updated every minute, not every month.",
    benefit: "Our clients typically save 15-20 hours per week on reporting alone.",
    cta: "Explore Dashboards",
  },
  {
    num: "02",
    title: "RETAIL & EDI INTEGRATIONS",
    slug: "integrations",
    shortDesc: "Connect SYSPRO directly to major retailers. Orders flow in automatically.",
    fullDesc: "Connect SYSPRO directly to Pick n Pay, Checkers, Shoprite, SPAR, Takealot, and Amazon. Orders flow in automatically. Invoices flow out. No more manual data entry between systems.",
    benefit: "We've processed 58,000+ POs for Pick n Pay via On The Dot with zero failures since August 2025.",
    cta: "See Integrations",
  },
  {
    num: "03",
    title: "WORKFLOW AUTOMATION",
    slug: "automation",
    shortDesc: "Approval workflows, AR/AP automation, and scheduled processes that run without you.",
    fullDesc: "Approval workflows, AR/AP automation, automated PDF generation, and scheduled email processes that run whether you're watching or not. Stop being the bottleneck in your own business.",
    benefit: "We send 10,000+ auto-generated invoice PDFs monthly for SPAR alone.",
    cta: "Discover Automation",
  },
];

// Pain points for the problem section
export const painPoints = [
  {
    title: "4+ Hours Daily",
    desc: "Your finance team manually compiles reports that should take minutes. Month-end closes drag on for days.",
  },
  {
    title: "Spreadsheet Chaos",
    desc: "Critical data lives in 47 different Excel files across 12 people's desktops. Nobody has the full picture.",
  },
  {
    title: "Orders Slipping Through",
    desc: "Late deliveries, missed credit holds, forgotten follow-ups. You only find out when customers complain.",
  },
  {
    title: "Flying Blind",
    desc: "By the time you get accurate numbers, the moment to act has passed. You're always reacting, never anticipating.",
  },
];

// Process steps
export const processSteps = [
  {
    num: "01",
    title: "Free Audit",
    desc: "We analyse your current SYSPRO setup and identify the 3-5 processes where you're losing the most time. Takes 30 minutes. Zero obligation.",
  },
  {
    num: "02",
    title: "Custom Roadmap",
    desc: "You get a prioritised plan showing exactly which dashboards and automations will give you the biggest ROI—and how quickly we can deploy them.",
  },
  {
    num: "03",
    title: "Rapid Deployment",
    desc: 'Most dashboards go live within 2-4 weeks. Integrations take 4-8 weeks. You see results fast, not in "Phase 3 of a 2-year project."',
  },
  {
    num: "04",
    title: "Ongoing Optimisation",
    desc: "We don't disappear after go-live. Your business changes, your dashboards should too. We provide ongoing support and enhancements.",
  },
];

// Company info
export const companyInfo = {
  name: "RSA Enterprise Software Solutions",
  shortName: "RSASoft",
  tagline: "SYSPRO Integration Excellence",
  email: "info@rsasoft.co.za",
  founded: 2009,
  yearsExperience: 15,
  
  // Value propositions
  guarantee: {
    headline: "No Improvement, No Invoice.",
    description: "If you don't see measurable improvement within 90 days of go-live, we keep working at no additional cost until you do.",
  },
  
  // About
  about: {
    headline: "We've Been Fixing SYSPRO Problems Since 2009.",
    story: "RSASoft started after spending years watching businesses struggle with the gap between what SYSPRO CAN do and what it ACTUALLY does for them out of the box. The software is powerful. But without customisation, it's like buying a race car and driving it in first gear. We bridge that gap.",
    differentiator: "We're not generalists trying to do everything. We do one thing extremely well: make SYSPRO work the way it should for manufacturers and distributors.",
  },
};

// Services categories for the full services list
export const serviceCategories = {
  integrations: {
    title: "Integration Platform",
    services: [
      "EDI and systems integrations",
      "Courier Integrations",
      "3PL Integrations",
      "CRM and ordering platform integrations",
      "API Solutions (webhooks)",
      "Cloud-hosted SFTP & API for EDI",
      "Automated file imports (remittance, claims)",
    ],
  },
  portals: {
    title: "B2B and B2C Portals",
    services: [
      "Order portals",
      "Quote portals with workflow approvals",
      "Reporting portals",
      "Requisition approval systems",
      "Employee claims portals",
      "Claims and upliftment portals (logistics)",
      "Picking and POD portals",
      "Supplier onboarding portals",
      "Customer self-service portals",
    ],
  },
  automation: {
    title: "Workflow Automation",
    services: [
      "Bank reconciliation automation",
      "Automated transaction processing",
      "Document management systems",
      "Intercompany integration",
      "Approval workflows (bank details, stock codes, customers, suppliers)",
      "Automated email systems (statements, invoices)",
      "PDF generation via SSRS",
    ],
  },
  customisation: {
    title: "SYSPRO Customisation",
    services: [
      "Custom scripting",
      "Custom screens (100+ built)",
      "Management dashboards",
      "Replenishment/inventory planning dashboards",
      "Production and delivery planning dashboards",
      "Bulk imports and transactional screens",
      "Logistical cost management",
      "Food industry inspection solutions",
    ],
  },
  reporting: {
    title: "Reporting & BI",
    services: [
      "Automated management accounts",
      "Complex reporting solutions",
      "SSRS report development",
      "Automated email distribution",
    ],
  },
  specialised: {
    title: "Specialised Solutions",
    services: [
      "Quoting systems with calc engines",
      "Transformer test bay solutions",
      "Ticketing systems (cloud-based)",
      "CRM solutions",
      "Debtors management",
      "Field services and ePOD (offline capable)",
      "Barcode scanning solutions",
      "Label printing software",
    ],
  },
};
