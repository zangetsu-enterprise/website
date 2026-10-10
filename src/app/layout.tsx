import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zangetsu Enterprise — Building the future, one product at a time",
  description:
    "Zangetsu Enterprise is a digital holding company: AI micro-SaaS, developer tools, and digital products. Led by Carlos Reyes, Systems Engineer & AI-assisted developer.",
  keywords: [
    "Zangetsu Enterprise",
    "micro-SaaS",
    "AI development",
    "digital products",
    "software development",
  ],
  openGraph: {
    title: "Zangetsu Enterprise",
    description: "Building the future, one product at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
