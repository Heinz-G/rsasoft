import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSASoft - SYSPRO Integration Excellence | Dashboards, EDI & Automation",
  description: "Award-winning SYSPRO implementation partner. 60+ ready dashboards, retail EDI integrations (Pick n Pay, SPAR, Shoprite), and workflow automation. SYSPRO hired us for their largest integration project.",
  keywords: "SYSPRO, ERP, dashboards, EDI, Pick n Pay integration, SPAR integration, South Africa, manufacturing, distribution",
  openGraph: {
    title: "RSASoft - SYSPRO Integration Excellence",
    description: "Award-winning SYSPRO implementation partner. We processed 58,000+ POs for Pick n Pay. SYSPRO hired us directly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased min-h-screen bg-[#0a0f14]">
        {children}
      </body>
    </html>
  );
}
